import React from "react";
import { TimelineEntry } from '@components/ui/timeline/TimeLineEntry';

export const Year2024 = () => {
  return (
    <>

        {/* Entry */}
        <TimelineEntry
            pretitle="Development"
            title="Counter Strike"
            comment={[
                "Started creating maps, assets, textures and things for Valve Software.",
                "CS:S, CS:GO, TF2 & Later CS2."
            ]}
        />

        {/* Entry */}
        <TimelineEntry
            pretitle="Development" 
            title="Assets"
            comment={[
                "Custom Assets, release, texture, UV Mapping, Vertices etc.",
            ]}
        />

        {/* Entry */}
        <TimelineEntry
            pretitle="Development" 
            title="Blender" 
            comment={[
                "Learnt Blender, UV Mapping, Modelling & Texturing.",
            ]}
        />

        {/* Entry */}
        <TimelineEntry
            pretitle="Development" 
            title="Compiling" 
            comment={[
                "Started creating maps, assets, textures and things for Valve Software.",
                "CS:S, CS:GO, TF2 & Later CS2."
            ]}
        />

        {/* Entry */}
        <TimelineEntry
            pretitle="Development" 
            title="QA Testing" 
            comment={[
                "Started creating maps, assets, textures and things for Valve Software.",
                "CS:S, CS:GO, TF2 & Later CS2."
            ]}
        />

        {/* Entry */}
        <TimelineEntry
            pretitle="Development" 
            title="Deployment" 
            comment={[
                "Releasing & Deployment of maps. Local & public.",
                "Played by millions of people all over the world."
            ]}
        />

        {/* Entry */}
        <TimelineEntry
            pretitle="Deployment" 
            title="Version control" 
            comment={[
                "Once a map has been released thousands of servers will add the map.",
                "If a bug or massive issue was found it had to be re-deployed across all these servers."
            ]}
        />
      
    </>
  );
};