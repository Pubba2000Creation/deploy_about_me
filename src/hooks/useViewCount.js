import { useState, useEffect, useRef } from 'react';
import { supabase } from '../lib/supabaseClient';

/**
 * useViewCount Hook
 * @param {string} projectId - Unique ID for the project/research item
 * @param {boolean} shouldIncrement - If true, will attempt to count a new view for this session
 */
const useViewCount = (projectId, shouldIncrement = false) => {
    const [views, setViews] = useState(0);
    const lastProcessedId = useRef(null);

    useEffect(() => {
        if (!projectId) return;

        let isSubscribed = true;
        // Reset state instantly when switching project pages
        setViews(0);

        const runViewLogic = async () => {
            try {
                // 1. Fetch current count from Supabase
                const { data, error } = await supabase
                    .from('views')
                    .select('count')
                    .eq('id', projectId)
                    .single();

                if (!isSubscribed) return;

                if (error) {
                    if (error.code === 'PGRST116') {
                        // Record not found in DB yet
                        console.log(`[ViewCount] 🆕 New record detected for: ${projectId}`);
                    } else {
                        console.error(`[ViewCount] ❌ Database error:`, error.message);
                    }
                } else if (data) {
                    setViews(data.count);
                }

                // 2. Increment logic (only if requested and not already done this session window)
                if (shouldIncrement && lastProcessedId.current !== projectId) {
                    const sessionKey = `visited_${projectId}`;
                    const alreadyVisited = sessionStorage.getItem(sessionKey);

                    if (!alreadyVisited) {
                        console.info(`[ViewCount] 🚀 Attempting to count view for: ${projectId}`);
                        lastProcessedId.current = projectId;

                        // Try atomic increment first (RPC)
                        const { data: newCount, error: rpcError } = await supabase.rpc('increment_view_count', {
                            target_id: projectId
                        });

                        if (!rpcError) {
                            if (isSubscribed) setViews(newCount);
                            sessionStorage.setItem(sessionKey, 'true');
                            console.info(`[ViewCount] ✅ Count matched globally: ${newCount}`);
                        } else {
                            console.warn(`[ViewCount] ⚠️ RPC unavailable, using fallback for ${projectId}`);

                            // Manual Upsert Fallback
                            const { data: currentData } = await supabase
                                .from('views')
                                .select('count')
                                .eq('id', projectId)
                                .single();

                            const nextVal = (currentData?.count || 0) + 1;

                            const { error: upsertError } = await supabase
                                .from('views')
                                .upsert({ id: projectId, count: nextVal });

                            if (!upsertError && isSubscribed) {
                                setViews(nextVal);
                                sessionStorage.setItem(sessionKey, 'true');
                                console.info(`[ViewCount] ✅ Fallback update success: ${nextVal}`);
                            } else if (upsertError) {
                                console.error(`[ViewCount] ❌ Both RPC and Fallback failed:`, upsertError.message);
                            }
                        }
                    } else {
                        console.log(`[ViewCount] ℹ️ Session visit already recorded for ${projectId}. Skipping increment.`);
                    }
                }
            } catch (err) {
                console.error(`[ViewCount] 💥 Unexpected error:`, err);
            }
        };

        runViewLogic();

        return () => {
            isSubscribed = false;
        };
    }, [projectId, shouldIncrement]);

    const formatViews = (count) => {
        return new Intl.NumberFormat('en-US', {
            notation: "compact",
            compactDisplay: "short"
        }).format(count || 0);
    };

    return { views, formatViews };
};

export default useViewCount;
