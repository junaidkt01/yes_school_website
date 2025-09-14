'use client'

import React, { useEffect, useRef, useState } from "react";

interface StatCardProps {
    icon: React.ReactNode;
    count: number;
    label: string;
    duration?: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon, count, label, duration = 2000 }) => {
    const [displayedCount, setDisplayedCount] = useState(0);
    const ref = useRef<HTMLDivElement | null>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && !hasAnimated) {
                    animateCount();
                    setHasAnimated(true);
                    observer.unobserve(element); // run once
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [hasAnimated]);

    const animateCount = () => {
        let start = 0;
        const increment = count / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= count) {
                setDisplayedCount(count);
                clearInterval(timer);
            } else {
                setDisplayedCount(Math.ceil(start));
            }
        }, 16);
    };

    return (
        <div ref={ref} className="flex items-center gap-3 my-4">
            <div className="text-yellow-700 text-4xl">{icon}</div>
            <div>
                <h3 className="text-[32px] font-bold">{displayedCount}+</h3>
                <p className="text-gray-600 text-[18px]">{label}</p>
            </div>
        </div>
    );
};

export default StatCard;
