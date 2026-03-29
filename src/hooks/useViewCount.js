import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { getVisitorGeoInfo } from '../lib/analytics';

const useViewCount = (projectId, shouldIncrement = false) => {
    const [views, setViews] = useState(0);

    useEffect(() => {
        if (!projectId) return;

        let isSubscribed = true;

        const syncViews = async () => {
            try {
                // 1. Fetch current count
                console.log(`[ViewCount] 🔍 Fetching count for: ${projectId}`);
                const { data: initialData, error: fetchError } = await supabase
                    .from('views')
                    .select('count')
                    .eq('id', projectId)
                    .single();

                if (!isSubscribed) return;

                if (fetchError) {
                    if (fetchError.code === 'PGRST116') {
                        console.log(`[ViewCount] 🆕 No record found for ${projectId}. Starting at 0.`);
                        setViews(0);
                    } else {
                        console.error(`[ViewCount] ❌ Fetch Error:`, fetchError.message);
                    }
                } else if (initialData) {
                    console.log(`[ViewCount] 📊 Current count in DB: ${initialData.count}`);
                    setViews(initialData.count);
                }

                // 2. Increment logic
                if (shouldIncrement) {
                    console.log(`[ViewCount] 🚀 Attempting to INCREMENT for: ${projectId}`);

                    // 🛠️ AUDIT: Log visitor details (IP/Location)
                    // Note: Tracking full IPs requires sensitivity to privacy regulations (GDPR/CCPA).
                    try {
                        const geo = await getVisitorGeoInfo();
                        await supabase.from('view_logs').insert([{
                            project_id: projectId,
                            ip_address: geo.ip,
                            city: geo.city,
                            region: geo.region,
                            country: geo.country,
                            user_agent: geo.ua
                        }]);
                        console.log(`[Audit] 📝 Visit logged from: ${geo.city}, ${geo.country}`);
                    } catch (auditError) {
                        console.warn(`[Audit] ⚠️ Failed to log visitor details:`, auditError.message);
                    }

                    // Try Atomic RPC first
                    const { data: rpcCount, error: rpcError } = await supabase.rpc('increment_view_count', {
                        target_id: projectId
                    });

                    if (!rpcError && rpcCount !== undefined) {
                        console.log(`[ViewCount] ✅ RPC SUCCESS! New Count: ${rpcCount}`);
                        if (isSubscribed) setViews(rpcCount);
                    } else {
                        console.warn(`[ViewCount] ⚠️ RPC failed (${rpcError?.message}), falling back to direct update.`);

                        // Direct Update Fallback (Manual Upsert)
                        const current = initialData ? Number(initialData.count) : 0;
                        const next = current + 1;

                        const { data: updatedData, error: updateError } = await supabase
                            .from('views')
                            .upsert({ id: projectId, count: next })
                            .select()
                            .single();

                        if (!updateError && updatedData) {
                            console.log(`[ViewCount] ✅ Direct Update SUCCESS! New Count: ${updatedData.count}`);
                            if (isSubscribed) setViews(updatedData.count);
                        } else {
                            console.error(`[ViewCount] ❌ ALL METHODS FAILED:`, updateError?.message);
                        }
                    }
                }
            } catch (err) {
                console.error(`[ViewCount] 💥 Unexpected system error:`, err);
            }
        };

        syncViews();

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
