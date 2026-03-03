import { useCallback, useRef } from 'react';

export const TimeLineHover = () => {

    // Setup
    const burstTimeoutRef = useRef<number | null>(null);
    const trackContainerRef = useRef<HTMLDivElement>(null);
    const lockedRef = useRef(false);
    const isHoveringRef = useRef(false);
    const isEntryHoveringRef = useRef(false);

    // Set Speed
    const setSpeed = useCallback((speed: number) => {
        if (!trackContainerRef.current) return;

        const animations = trackContainerRef.current.getAnimations();
        
        if (animations.length > 0) {
            animations.forEach(anim => {
                anim.updatePlaybackRate(speed);
            });
        } else {
            if (speed === 0) {
                trackContainerRef.current!.style.animationPlayState = 'paused';
            } else {
                trackContainerRef.current!.style.animationPlayState = 'running';
            }
        }
    }, []);

    // Double click coil handler
    const handleDoubleClick = useCallback((e: React.MouseEvent) => {
        if (!trackContainerRef.current) return;

        const width = window.innerWidth;
        const x = e.clientX;

        const animations = trackContainerRef.current.getAnimations();
        if (!animations.length) return;

        const direction = x < width / 3 ? -1 : x > width * 2 / 3 ? 1 : 0;
        if (direction === 0) return;

        animations.forEach(anim => {

            if (burstTimeoutRef.current) {
                clearTimeout(burstTimeoutRef.current);
            }

            lockedRef.current = true;

            anim.updatePlaybackRate(direction * 3);

            burstTimeoutRef.current = window.setTimeout(() => {
                lockedRef.current = false;
                if (isEntryHoveringRef.current) {
                    setSpeed(0);
                } else if (isHoveringRef.current) {
                    setSpeed(0.5);
                } else {
                    setSpeed(1);
                }
            }, 1000);
        });

    }, []);

    // Carousel enter
    const handleWrapperEnter = () => {
        isHoveringRef.current = true;
        if (lockedRef.current) return;
        setSpeed(0.5);
    };

    // Carousel exit
    const handleWrapperLeave = () => {
        isHoveringRef.current = false;
        if (lockedRef.current) return;
        setSpeed(1);
    };

    // Entry enter
    const handleEntryEnter = (index?: number) => {
        isEntryHoveringRef.current = true;
        if (lockedRef.current) return;
        setSpeed(0);
    };

    // Entry exit
    const handleEntryLeave = () => {
        isEntryHoveringRef.current = false;
        if (lockedRef.current) return;
        setSpeed(isHoveringRef.current ? 0.5 : 1);
    };

    const timelineProps = {
        onMouseEnter: handleWrapperEnter,
        onMouseLeave: handleWrapperLeave,
        onDoubleClick: handleDoubleClick
    };

    return {
        timelineProps,
        trackContainerRef,
        handleEntryEnter,
        handleEntryLeave,
        locked: lockedRef.current
    };
    
};
