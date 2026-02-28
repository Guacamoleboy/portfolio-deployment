import { useState, useEffect } from 'react';
import { formatDanishTime } from '@/libs/utils/date-formatter'; 

export function useCurrentTime() {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const tick = () => setTime(formatDanishTime(new Date()));
        tick();
        const timer = setInterval(tick, 60000);
        return () => clearInterval(timer);
    }, []);

    return time;
}