import React from "react";
import { TimelineEntry } from '@components/ui/timeline/TimeLineEntry';

interface YearProps {
    onEntryEnter: (index: number) => void;
    onEntryLeave: () => void;
    isLocked: boolean;
}

export const YearPortfolio = ({ onEntryEnter, onEntryLeave, isLocked}: YearProps) => {

    // Array of entries
    const entries = [
        {
            pretitle: "Born",
            title: "First breath",
            commentTitle: "Where it all began..",
            comment: [
                "Took my first breath. Amazing. Wow! Such a feeling. Once in a lifetime experience.",
            ]
        },
        {
            pretitle: "Pre-teens",
            title: "First commit",
            commentTitle: "First time touching software",
            comment: [
                "Started discovering Video Games and how to work with them.",
                "Over time I started creating random useless things for personal interest."
            ]
        },
        {
            pretitle: "Job",
            title: "Bliv omdeler",
            commentTitle: "My first job. Ever.",
            comment: [
                "Delivering newspapers to people who hate getting them.",
                "Wow. What a time to be alive."
            ]
        },
        {
            pretitle: "Job",
            title: "Opvasker & Misc",
            commentTitle: "Skævinge Kro",
            comment: [
                "Helped in the kitchen doing all sorts of stuff. Cleaning, events, handling food etc."
            ]
        },
        {
            pretitle: "Teens",
            title: "Developing",
            commentTitle: "Wrote my first line of code",
            comment: [
                "LUA in Minecraft.",
                "HTML/CSS for Web Development & Photoshop for visuals"
            ]
        },
        {
            pretitle: "Job",
            title: "Minecraft",
            commentTitle: "Ran a rather large Minecraft server",
            comment: [
                "Spread across multiple mods. Ran a large Minecraft server with 3 other people at an early age.",
                "Back when I wrote 'pleas' instead of 'please'. Got corrected by a much older dude. Stuck with me forever."
            ]
        },
        {
            pretitle: "Mid teens",
            title: "Cracking Software",
            commentTitle: "Yea. You read that correct.",
            comment: [
                "For some reason I've already been interested in bypassing security features.. Not sure why.",
                "Started cracking IPhones installing Jailbreak on them. Moved on to cracking [REDACTED] & [REDACTED]."
            ]
        },
        {
            pretitle: "Education",
            title: "HTX Hillerød",
            commentTitle: "Mat A, Kem A, Fys A",
            comment: [
                "I regret taking the hardest line every single day.",
                "It was probably one of the most difficult times in my life. Had max A-Fag."
            ]
        },
        {
            pretitle: "School",
            title: "Learning to Code",
            commentTitle: "PHP, MySQL, Java, HTML & CSS",
            comment: [
                "Had programming as an additional subject in School. Learned to code in PHP.",
                "Created misc programs, websites & features. Loved it."
            ]
        },
        {
            pretitle: "Job",
            title: "7-Eleven",
            commentTitle: "Ran 3 different gas stations",
            comment: [
                "Pretty odd now that I think about it. Ran 3 different gas stations at once - in Hillerød.",
                "Taught me some important life lessons."
            ]
        },
        {
            pretitle: "Late teens",
            title: "First customer",
            commentTitle: "Sold my first website! Let's go.",
            comment: [
                "First paying customer for 1 x Guacamoleboy website. Amazing feeling."
            ]
        },
        {
            pretitle: "Education",
            title: "Finished School",
            commentTitle: "Yay! (How do I do this adult thing..)",
            comment: [
                "Completed HTX with max A-Fag. Didn't choose the black hat as I thought I looked like a nerd with it.",
            ]
        },
        {
            pretitle: "Job",
            title: "Freelance",
            commentTitle: "Creating assets, websites & logos",
            comment: [
                "After school was done I had a sabbatår where I worked as a freelancer.",
                "Sold some websites, features, solutions and designs."
            ]
        },
        {
            pretitle: "Education",
            title: "Finansøkonom",
            commentTitle: "Become the new Jan Fog",
            comment: [
                "Studying Real Estate in Copenhagen at CphBusiness"
            ]
        },
        {
            pretitle: "Education",
            title: "Dropped out",
            commentTitle: "No more Jan Fog for me",
            comment: [
                "Always thought I had a passion for selling houses untill I started this study."
            ]
        },
        {
            pretitle: "Job",
            title: "Freelance (again)",
            commentTitle: "Back to creating websites again",
            comment: [
                "After dropping out I started creating websites & assets again."
            ]
        },
        {
            pretitle: "Job",
            title: "Rib House",
            commentTitle: "Bartender, serving, staff, teaching etc.",
            comment: [
                "Started at Rib House where I worked my way up to being overtjener in the end.",
                "Responsible for staff, teaching new staff members and events such as brunch, konfirmation and much more."
            ]
        },
        {
            pretitle: "Part 1",
            title: "Counter Strike",
            commentTitle: "Wait what? Country strike & Job? Yup.",
            comment: [
                "Professional Source & Source 2 mapper with maps played by millions. Yes. Millions.",
                "Featured on ESL, Twitch, YouTube & thousands of servers."
            ]
        },
        {
            pretitle: "Part 2",
            title: "Counter Strike",
            commentTitle: "The continuation of Part 1",
            comment: [
                "Made custom assets in Blender, sold some assets. Started UV Mapping & working with Vertices.",
                "Compiling, decompiling & modifying assets using code, proxies & other advanced technologies."
            ]
        },
        {
            pretitle: "Part 3",
            title: "Counter Strike",
            commentTitle: "How are there 3 parts?",
            comment: [
                "Participated in a Professional Mapping Tournament & had active sponsors.",
                "QA Testing maps. Working with other developers & teaching people how to map."
            ]
        },
        {
            pretitle: "Part 4",
            title: "Counter Strike",
            commentTitle: "Last part.. I promise.",
            comment: [
                "Made a few maps with REZ. Professional Esport Player. Roamed with FaZe Clan, Team Liquid, ropz and other major brands.",
                "Ended it all as I lost interest and wanted something more steady in life. Such as a Computer Science degree."
            ]
        },
        {
            pretitle: "Education",
            title: "Datamatiker",
            commentTitle: "Learning to code. Entreprise level.",
            comment: [
                "Learned & still learning how to code at entreprise level. Striving for perfection and to better myself in each project."
            ]
        },
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
            isLocked={isLocked}
        />
        ))}
    </>
    );

};