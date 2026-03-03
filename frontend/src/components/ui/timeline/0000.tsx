import React from "react";
import { TimelineEntry } from '@components/ui/timeline/TimeLineEntry';

export const Year0000 = () => {
  return (
    <>

        {/* Entry */}
        <TimelineEntry 
            pretitle="Design & logos" 
            title="Photoshop" 
            comment={[
                "Started messing with PC software such as Photoshop, Gimp & other tools.",
                "Created backgrounds for people and made logos for clans."
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="Schedule & Leading" 
            title="Minecraft" 
            comment={[
                "Leading a rather large Minecraft server along with 3 other people at an early age."
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="First line" 
            title="Minecraft" 
            comment={[
                "Minecraft allows users to code in LUA. First time writing code."
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="First Job" 
            title="Omdeler" 
            comment={[
                "Got my first real job at Bliv Omdeler delivering newspapers."
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="New Job" 
            title="Opvasker" 
            comment={[
                "Got a job cleaning and helping in the kitchen at Skævinge Kro.",
                "Events, dishes, trash, misc tasks."
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="Coding" 
            title="Website" 
            comment={[
                "Made my first website. Simple but fun! (before ChatGPT)"
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="Software hacking" 
            title="Jailbreak" 
            comment={[
                "First time messing with Software.",
                "Cracking & installing modified software to Apple IPhones."
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="Software hacking" 
            title="Cracking Software" 
            comment={[
                "Started cracking software for fun.",
                "Cracked [REDACTED] for multiple people at the given time."
            ]}
        />
      
    </>
  );
};