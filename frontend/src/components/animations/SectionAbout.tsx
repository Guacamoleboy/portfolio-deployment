"use client";

import { useEffect, useRef } from 'react';
import { LottiePlayer } from '@/libs/lottie/LottiePlayer';

export default function AboutLottie() {
    const containerRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<LottiePlayer | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        playerRef.current = new LottiePlayer({
            container: containerRef.current,
            path: '/images/portfolio/contentpage/about/about-lottie.json',
            duration: 4, 
            loop: true,
            autoplay: true
        });

        playerRef.current.init();

        return () => {
            playerRef.current?.destroy();
        };
    }, []);

    return (
        <div ref={containerRef} className="about-lottie-container"/>
    );
}