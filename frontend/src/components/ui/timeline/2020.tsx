import React from "react";
import { TimelineEntry } from '@components/ui/timeline/TimeLineEntry';

export const Year2020 = () => {
  return (
    <>

        {/* Entry */}
        <TimelineEntry 
            pretitle="New Job" 
            title="Rib House" 
            comment={[
                "Bartender & Service at Rib House Hillerød.",
                "Handle food, events, service, food complaints, planning, brunch and much more."
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="New Position" 
            title="Rib House" 
            comment={[
                "Moved up the ladder to Overtjener. More responsibility and more focus on tasks & staff.",
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="Design & logos" 
            title="Photoshop & Illustrator" 
            comment={[
                "Kept making logos and digital solutions for companies. Including Rib House.",
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="Coding" 
            title="FileZilla" 
            comment={[
                "Started learning deployment. Had a little when I had the Minecraft server.",
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="Learning" 
            title="Github" 
            comment={[
                "First time hearing about Github. Didn't understand it at all at the given time.",
                "Now I can't stop using it!"
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="Coding" 
            title="Development" 
            comment={[
                "Kept making online solutions and websites.",
                "This time for much larger companies."
            ]}
        />
      
    </>
  );
};