import { useState } from "react";
import { YearPortfolio } from "components/ui/timeline/resume";
import { TimeLineHover } from '@hooks/timeline/TimeLineHover'

export default function ResumeSection() {
  
    const { 
        timelineProps, 
        trackContainerRef,
        handleEntryEnter, 
        handleEntryLeave,
        locked
    } = TimeLineHover();
  
    return (
    <section id="content-resume" className="content-section-resume">

        {/* Intro meta */}
        <div className="resume-component-meta">
            <p className="resume-component-pre-title">My Journey</p>
            <h2 className="resume-component-title">Becoming Guacamoleboy</h2>
            <p className="resume-component-post-title">From my first breath - to being on your screen</p>
        </div>

        {/* Timeline */}
        <div className="resume-component-timeline"
            {...timelineProps}
            onDoubleClick={(e) => {
                timelineProps.onDoubleClick?.(e);
            }}
            >

            {/* Line */}
            <div className="timeline-line"></div>

            {/* Timeline entries */}
            <div className="resume-component-timeline-content"ref={trackContainerRef}>
                
                {/* First */}
                <div className="timeline-track">
                    <YearPortfolio 
                        onEntryEnter={handleEntryEnter} 
                        onEntryLeave={handleEntryLeave} 
                        isLocked={locked}
                    />
                </div>

                {/* 50% start for smooth animation */}
                <div className="timeline-track">
                    <YearPortfolio 
                        onEntryEnter={handleEntryEnter} 
                        onEntryLeave={handleEntryLeave} 
                        isLocked={locked}
                    />
                </div>

            </div>
        </div>
    
    </section>
  );
  
}