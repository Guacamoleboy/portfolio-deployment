"use client";

import { useEffect, useRef } from 'react';
import { LottiePlayer } from '@/libs/lottie/LottiePlayer';

export default function HomeLottie() {
    const containerRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<LottiePlayer | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        playerRef.current = new LottiePlayer({
            container: containerRef.current,
            path: '/images/portfolio/contentpage/section-home2.json',
            duration: 6, 
            loop: true,
            autoplay: true
        });

        playerRef.current.init();

        return () => {
            playerRef.current?.destroy();
        };
    }, []);

    return (
        <div ref={containerRef} className="home-lottie-container"/>
    );
}