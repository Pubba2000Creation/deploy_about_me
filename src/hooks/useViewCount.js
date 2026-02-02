import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabaseClient';

const useViewCount = (projectId) => {
    const [views, setViews] = useState(0);

    const fetchViews = useCallback(async () => {
        if (!projectId) return;
        try {
            const { data, error } = await supabase
                .from('views')
                .select('count')
                .eq('id', projectId)
                .single();

            if (error) {
                if (error.code === 'PGRST116') { // Record not found
                    const { data: newData, error: insertError } = await supabase
                        .from('views')
                        .insert([{ id: projectId, count: 0 }])
                        .select()
                        .single();

                    if (!insertError && newData) {
                        setViews(newData.count);
                    }
                }
            } else if (data) {
                setViews(data.count);
            }
        } catch (err) {
            console.error('Error in fetchViews:', err);
        }
    }, [projectId]);

    const increment = useCallback(async () => {
        if (!projectId) return;

        // Check session storage before incrementing to prevent multiple counts per session
        const alreadyVisited = sessionStorage.getItem(`visited_${projectId}`);
        if (alreadyVisited) return;

        try {
            // Use Supabase RPC for atomic increment
            const { data, error } = await supabase.rpc('increment_view_count', {
                target_id: projectId
            });

            if (!error) {
                setViews(data);
                sessionStorage.setItem(`visited_${projectId}`, 'true');
            } else {
                console.warn('RPC failed, falling back to manual increment:', error.message);

                // Fallback manual increment
                const { data: currentData } = await supabase
                    .from('views')
                    .select('count')
                    .eq('id', projectId)
                    .single();

                const currentCount = currentData ? currentData.count : 0;

                const { data: updateData } = await supabase
                    .from('views')
                    .update({ count: currentCount + 1 })
                    .eq('id', projectId)
                    .select()
                    .single();

                if (updateData) {
                    setViews(updateData.count);
                    sessionStorage.setItem(`visited_${projectId}`, 'true');
                }
            }
        } catch (err) {
            console.error('Error in increment:', err);
        }
    }, [projectId]);

    useEffect(() => {
        if (!projectId) return;
        fetchViews();
    }, [projectId, fetchViews]);

    const formatViews = (count) => {
        return new Intl.NumberFormat('en-US', {
            notation: "compact",
            compactDisplay: "short"
        }).format(count);
    };

    return { views, increment, formatViews };
};

export default useViewCount;
