import React from "react";
import { TimelineEntry } from '@components/ui/timeline/TimeLineEntry';

export const Year2025 = () => {
  return (
    <>

        {/* Entry */}
        <TimelineEntry 
            pretitle="Development" 
            title="Counter Strike" 
            comment={[
                "Kept going. Kept grinding. Released and released. Made 15 maps total pretty sure. Across multiple games."
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="Development" 
            title="Porting" 
            comment={[
                "Porting maps, textures & assets across multiple engines.",
                "This is where I learned why it's important to work in systems and with generic methods."
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="Development"
            title="Mapping"
            comment={[
                "Participated in Mapping Tournaments & made maps with Professional Esport players such as:",
                "FaZe Clan, REZ, ropz, Team Liquid etc."
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="Featured"
            title="ESL & Twitch"
            comment={[
                "Featured on multiple platforms including ESL.",
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="School"
            title="Github"
            comment={[
                "Deep learning on how to use Github across teams, platforms, computers & how Git Bash works."
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="Development"
            title="Coding"
            comment={[
                "Kept coding of course. Still at a lower rate than usual as Mapping for Counter Strike was my main focus at the time.",
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="University"
            title="Computer Science"
            comment={[
                "Started school again as I wanted more structure in my daily life and a better future.",
                "Started at CphBusiness (EK København now) studying Computer Science and probably Software Development after."
            ]}
        />
      
    </>
  );
};