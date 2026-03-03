import React from "react";
import { TimelineEntry } from '@components/ui/timeline/TimeLineEntry';

interface YearProps {
    onEntryEnter: (index: number) => void;
    onEntryLeave: () => void;
}

export const Year2026 = ({ onEntryEnter, onEntryLeave }: YearProps) => {

    // Array of entries
    const entries = [
        {
            pretitle: "Learning",
            title: "School",
            commentTitle: "Title",
            comment: [
                "Grinding project after project. Trying to become as good as I can be.",
                "Didn't know about AI till I started here. I don't like it. I think it limits our mind and creativity..."
            ]
        },
        {
            pretitle: "Learning",
            title: "Java",
            commentTitle: "Title",
            comment: [
                "Once again learning Java. This time I get it and love it.",
                "Deep learning & personal learning in my spare time."
            ]
        },
        {
            pretitle: "Learning",
            title: "API",
            commentTitle: "Title",
            comment: [
                "Endpoints? Amazing. I love it. Some could be better documented, but it's okay."
            ]
        },
        {
            pretitle: "Learning",
            title: "SSH",
            commentTitle: "Title",
            comment: [
                "Learned how to use SSH instead of FileZilla. Amazing."
            ]
        },
        {
            pretitle: "Learning",
            title: "Droplet & Containers",
            commentTitle: "Title",
            comment: [
                "School tought us how to work with containers such as Docker and using a droplet for deployment instead of one.com for example."
            ]
        }
    ];

    // Visual render
    return (
    <>
        {entries.map((entry, index) => (
        <TimelineEntry
            key={index}
            entryIndex={index}          
            pretitle={entry.pretitle}
            title={entry.title}
            commentTitle={entry.commentTitle}
            comment={entry.comment}
            onEntryEnter={onEntryEnter}
            onEntryLeave={onEntryLeave}
        />
        ))}
    </>
    );

};