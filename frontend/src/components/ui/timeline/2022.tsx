import React from "react";
import { TimelineEntry } from '@components/ui/timeline/TimeLineEntry';

export const Year2022 = () => {
  return (
    <>

        {/* Entry */}
        <TimelineEntry 
            pretitle="University" 
            title="Finansøkonom" 
            comment={[
                "Always wanted to be a Real Estate Agent. Started Finansøkonom for that reason."
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="Coding" 
            title="Break" 
            comment={[
                "Took a little break from coding as I for some reason thought my path in life was selling houses. Crazy."
            ]}
        />

        {/* Entry */}
        <TimelineEntry 
            pretitle="Job" 
            title="Rib House" 
            comment={[
                "Kept my job at Rib House for quite some time."
            ]}
        />
      
    </>
  );
};