import { useState, useEffect } from 'react';

const useViewCount = (projectId) => {
    const [views, setViews] = useState(0);

    // Generate a consistent semi-random starting number based on project ID string
    const getBaseCount = (id) => {
        let hash = 0;
        for (let i = 0; i < id.length; i++) {
            hash = id.charCodeAt(i) + ((hash << 5) - hash);
        }
        // Map hash to a range like 500 - 3000
        const normalized = Math.abs(hash) % 2500;
        return 500 + normalized;
    };

    useEffect(() => {
        const storedViews = localStorage.getItem(`views_${projectId}`);

        if (storedViews) {
            setViews(parseInt(storedViews, 10));
        } else {
            // Initialize with "fake" historical data if new
            const base = getBaseCount(projectId);
            setViews(base);
            localStorage.setItem(`views_${projectId}`, base.toString());
        }
    }, [projectId]);

    const increment = () => {
        const current = parseInt(localStorage.getItem(`views_${projectId}`) || '0', 10);
        const newValue = current + 1;
        setViews(newValue);
        localStorage.setItem(`views_${projectId}`, newValue.toString());
    };

    const formatViews = (count) => {
        return new Intl.NumberFormat('en-US', {
            notation: "compact",
            compactDisplay: "short"
        }).format(count);
    };

    return { views, increment, formatViews };
};

export default useViewCount;
