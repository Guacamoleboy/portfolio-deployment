"use client";

import { useEffect, useState } from "react";

interface DynamicTextInterface {
    words: string[];
    typingSpeed?: number;  
    pauseDuration?: number; 
}

export default function DynamicText({
    words,
    typingSpeed = 150,
    pauseDuration = 1500
}: DynamicTextInterface) {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];

        const handleTyping = () => {
            if (!isDeleting) {
                if (charIndex < currentWord.length) {
                    setText(currentWord.substring(0, charIndex + 1));
                    setCharIndex((prev) => prev + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), pauseDuration);
                }
            } else {
                if (charIndex > 0) {
                    setText(currentWord.substring(0, charIndex - 1));
                    setCharIndex((prev) => prev - 1);
                } else {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        };

        const speed = isDeleting ? typingSpeed / 2 : typingSpeed;
        const timeout = setTimeout(handleTyping, speed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, wordIndex, words, typingSpeed, pauseDuration]);

    // Visual injection
    return <span className="typing-text">{text}<span className="typing-text-cursor">|</span></span>;

}