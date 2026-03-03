import React from "react";
import { TimelineEntry } from '@components/ui/timeline/TimeLineEntry';

export const Year2015 = () => {
  return (
    <>

        {/* Entry */}
        <TimelineEntry 
            pretitle="School"
            title="PHP"
            comment={[
                "Learned to code in HTML, CSS & how PHP can be implemented in these.",
                "Not a fan of PHP, but it's okay."
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="School"
            title="MySQL"
            comment={[
                "First time messing with databases. MySQL specific due to PHP. Pretty fun.",
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="School"
            title="Java"
            comment={[
                "Had to learn Java which I found extremely difficult at the given time. Now it's my prefeerd language.",
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="Job" 
            title="7-Eleven" 
            comment={[
                "Ran multiple 7-Eleven Gas Stations at once in Hillerød.",
                "Food, beverages, tobacco, post, lotto etc."
            ]}
        />
      
    </>
  );
};