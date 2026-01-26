import { useState, useEffect, useCallback } from 'react';

const useViewCount = (projectId) => {
    const [views, setViews] = useState(0);

    useEffect(() => {
        const storedViews = localStorage.getItem(`real_views_${projectId}`);

        if (storedViews) {
            setViews(parseInt(storedViews, 10));
        } else {
            // Initialize with 0 for real tracking
            setViews(0);
            localStorage.setItem(`real_views_${projectId}`, '0');
        }
    }, [projectId]);

    const increment = useCallback(() => {
        const current = parseInt(localStorage.getItem(`real_views_${projectId}`) || '0', 10);
        const newValue = current + 1;
        setViews(newValue);
        localStorage.setItem(`real_views_${projectId}`, newValue.toString());
    }, [projectId]);

    const formatViews = (count) => {
        return new Intl.NumberFormat('en-US', {
            notation: "compact",
            compactDisplay: "short"
        }).format(count);
    };

    return { views, increment, formatViews };
};

export default useViewCount;
