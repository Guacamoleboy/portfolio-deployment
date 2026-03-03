import React from "react";
import { TimelineEntry } from '@components/ui/timeline/TimeLineEntry';

export const Year2017 = () => {
  return (
    <>

        {/* Entry */}
        <TimelineEntry 
            pretitle="Coding" 
            title="Website" 
            comment={[
                "Sold more websites to companies, made logos etc.",
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="Designing" 
            title="Logo Packs" 
            comment={[
                "Started creating packs for people to download Free of Charge. Logo packs specific for IPhone.",
                "Sorted by colors & sizes."
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="Fulltime Coding" 
            title="Freelance" 
            comment={[
                "Started fulltime as freelance designer & webdeveloper.",
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="Leading" 
            title="Kept leading" 
            comment={[
                "Kept my position as leader in multiple games.",
                "Keeping track of players, schedules & had Slack meetings.",
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="Improving" 
            title="Misc" 
            comment={[
                "Kept learning & trying to better myself and my coding abilities.",
            ]}
        />

    </>
  );
};