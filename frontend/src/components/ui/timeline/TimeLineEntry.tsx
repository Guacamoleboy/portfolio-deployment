import { useState } from 'react';

interface TimelineEntryProps {
    title: string;
    comment: string | string[];
    pretitle: string;
    commentTitle: string;
    entryIndex: number;
    onEntryEnter: (index: number) => void;
    onEntryLeave: () => void;
    isLocked: boolean;
}

export const TimelineEntry = ({
    title, comment, pretitle, commentTitle, entryIndex,
    onEntryEnter, onEntryLeave, isLocked
}: TimelineEntryProps) => {

    const paragraphs = Array.isArray(comment) ? comment : [comment];

    return (
        <div className="timeline-item">

            {/* Connection Line */}
            <div 
                className="timeline-title-comment-line"
            />
            
            {/* Title */}
            <div
                className="timeline-title"
                onMouseEnter={() => { if (!isLocked) onEntryEnter(entryIndex); }}
                onMouseLeave={() => { if (!isLocked) onEntryLeave(); }}
            >
                <div className="timeline-title-pin">
                    <span className="timeline-title-pin-stav"/>
                    <span className="timeline-title-pin-stav-hole"/>
                    <span className="timeline-title-pin-dot-v2"/>
                </div>
                <span className="timeline-date">{pretitle}</span>
                <h4>{title}</h4>
            </div>

            {/* Dot */}
            <div className="timeline-dot"></div>

            {/* Comment */}
            <div
                className="timeline-comment"
                onMouseEnter={() => { if (!isLocked) onEntryEnter(entryIndex); }}
                onMouseLeave={() => { if (!isLocked) onEntryLeave(); }}
            >
                <span className="comment-number">{entryIndex + 1}</span>
                <div className="timeline-comment-content">
                    <p className="timeline-comment-title">{commentTitle}</p>
                    <div className="timeline-content-divider"/>
                    {paragraphs.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                </div>
            </div>

        </div>
    );
};