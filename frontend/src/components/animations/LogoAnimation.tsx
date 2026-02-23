"use client";

import { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";

export default function Logo() {

    // Setup
    const containerRef = useRef<HTMLDivElement>(null);
    const animRef = useRef<AnimationItem | null>(null);

    // Lottie Setup & Display
    useEffect(() => {
        if (!containerRef.current) return;

        animRef.current = lottie.loadAnimation({
            container: containerRef.current,
            renderer: "svg",
            loop: false,
            autoplay: false,
            path: "/images/logo/guac-hover.json",
        });

        return () => {
            animRef.current?.destroy();
            animRef.current = null;
        };

    }, []);

    // Handle Mouse Enter
    const handleMouseEnter = () => {
    if (animRef.current) {
        if (animRef.current.isPaused) {
            animRef.current.goToAndPlay(0, true);
        }
    }
};

    // Visual Render + Styling
    return (
        <div 
            ref={containerRef} 
            className="side-panel-meta-header"
            onMouseEnter={handleMouseEnter}
        />
    );

}