import React from "react";
import { TimelineEntry } from '@components/ui/timeline/TimeLineEntry';

export const Year2014 = () => {
  return (
    <>

        {/* Entry */}
        <TimelineEntry 
            pretitle="Leadership" 
            title="Clash of Clans" 
            comment={[
                "Kept track of one of the largest Danish Clans in Clash of Clans. Avg age 40.",
                "Meanwhile me telling an older guy what to do over Slack. I've always been old by heart."
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="Leadership" 
            title="Danish Kings" 
            comment={[
                "Kept track of 50 professional Call of Duty players where I was one of them.",
                "Schedule, matches, communication and overview of tasks."
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="First website sold" 
            title="Website" 
            comment={[
                "Sold my first website to a company. Felt proud.",
                "That's where it all started."
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="College" 
            title="HTX - Mat/Fys" 
            comment={[
                "Started college on the hardest line you can take. Max A-fag in the hardest subjects.",
            ]}
        />

        {/* Entry */}
        <TimelineEntry
            pretitle="Software hacking" 
            title="Movies & Music" 
            comment={[
                "Started cracking movies for fun - music too. For some reason I've always been interested in bypassing security systems."
            ]}
        />
      
    </>
  );
};