"use client";

import { useEffect, useState, useRef } from "react";
import { getCommitColor } from "@/libs/github/GithubColors";
import type { Week, GithubGraphInput, WeeksSetter, LoadingSetter } from "@/types/github";

// _________________________________________________________________________________________

// Setup
const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dayLabels = ["Mon", "Wed", "Fri"];

// _________________________________________________________________________________________

function Tooltip({ x, y, text }: { x: number; y: number; text: string }) {
  return (
    <div className="github-global-tooltip" style={{ left: x, top: y }}>
      {text}
    </div>
  );
}

// _________________________________________________________________________________________

async function fetchData(username: string,setWeeks: WeeksSetter,setLoading: LoadingSetter) {
    try {
        // Setup
        const searchParams = new URLSearchParams(window.location.search);
        const customApiKey = searchParams.get("api_key");
        
        // Url Pre Custom API Entry
        let url = `/api/github?username=${username}`;

        // if API_KEY -> present.. add to url.
        if (customApiKey) {
            url += `&api_key=${customApiKey}`;
        }
        
        // Fetch
        const result = await fetch(url);

        // If API fails (not HTTP 200)
        if (!result.ok) {
            console.log("Failed to fetch GitHub Contributions from GraphQL");
            setWeeks([]);
            return;
        }

        // Parse JSON response; could contain Week objects or nulls
        const weeksData: (Week | null)[] = await result.json();

        // Remove null values and update state
        setWeeks(weeksData.filter((week) => week != null));
    } catch (e) {
        // Debug + set weeks to empty array
        console.log("Error in GithubGraph.tsx: " + e)
        setWeeks([]);
    } 

    // Done loading.. Set to false.
    setLoading(false);
}

// _________________________________________________________________________________________

export default function GithubGraph({ username }: GithubGraphInput) {

    // useState<Week[]>([])
    //      - state -> keep track of data between renders. Without it would start at [] (empty array) each time.
    //      - <Week[]> an array of Week objects
    //      - [] startvalue of our Array
    const [weeks, setWeeks] = useState<Week[]>([]);

    // useState(true)
    //      - Iniital value is loading (true)
    //      - Uses setLoading to change it from true -> false.
    const [loading, setLoading] = useState(true);

    // Tooltip state
    const [tooltip, setTooltip] = useState<{
        x: number;
        y: number;
        text: string;
    } | null>(null);

    // Grid / Scroll bar fix on scrollbar active
    const gridContainer = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const grid = gridContainer.current;
        if (!grid) return;
        const updatePadding = () => {
            if (grid.scrollWidth > grid.clientWidth) {
                grid.style.paddingBottom = "10px";
            } else {
                grid.style.paddingBottom = "0";
            }
        };
        updatePadding();
        window.addEventListener("resize", updatePadding);
        return () => window.removeEventListener("resize", updatePadding);
    }, [weeks]);

    // Fetch data. Re-render if data changed for username.
    useEffect(() => {
        fetchData(username, setWeeks, setLoading);
    }, [username]);

    const handleMouseEnter = (e: React.MouseEvent, count: number) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltip({
            x: rect.left + rect.width / 2,
            y: rect.top,
            text: `${count} contributions`
        });
    };

    const handleMouseLeave = () => {
        setTooltip(null);
    };

    // Loading visuals
    if (loading) {
        return <p>Loading...</p>;
    }
    // No Contributions found
    if (!weeks.length) {
        return <p>No contributions found</p>;
    }

    // Graph Component
    return (
    <div className="github-graph">
        <div className="github-graph-grid" ref={gridContainer}>
            {/* For each Week */}
            {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="github-graph-week">
                    {/* For each day */}
                    {week.contributionDays?.map((day, dayIndex) => (
                        <div 
                        key={dayIndex} 
                        className="github-graph-day"
                        style={{ backgroundColor: getCommitColor(day.contributionCount) }}
                        onMouseEnter={(e) => handleMouseEnter(e, day.contributionCount)}
                        onMouseLeave={handleMouseLeave}
                        />
                    ))}
                </div>
            ))}
        </div>

        {/* Tooltip */}
        {tooltip && <Tooltip x={tooltip.x} y={tooltip.y} text={tooltip.text} />}

    </div>
  );
}