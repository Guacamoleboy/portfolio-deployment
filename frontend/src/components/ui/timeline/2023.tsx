import React from "react";
import { TimelineEntry } from '@components/ui/timeline/TimeLineEntry';

export const Year2023 = () => {
  return (
    <>

        {/* Entry */}
        <TimelineEntry 
            pretitle="School" 
            title="Dropped out" 
            comment={[
                "Stopped studying Finansøkonomi at CphBusiness as interests shifted.",
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="Mental Health" 
            title="Me" 
            comment={[
                "Started focusing on me. Who am I? Who do I want to be?",
                "You ever think.. Who am I when I'm all alone? That's the real you. Had to find myself."
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="Coding" 
            title="Me" 
            comment={[
                "Kept coding but at a smaller rate than previously",
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="Learning" 
            title="Decompiling" 
            comment={[
                "Learned how to decompile and reverse engineer programs to find source code and issues.",
            ]}
        />

        {/* Entry */}
        <TimelineEntry
            pretitle="Coding"
            title="CodeCademy"
            comment={[
                "Grinded Codecademy for some reason.",
                "First discovered AI in the late 2025s so I've always been programming by brainpower."
            ]}
        />
      
    </>
  );
};