import type { Skill } from 'types/skill';
import { useEffect, useRef } from 'react';

export default function SkillBar({ skill }: { skill: Skill }) {
    const fillRef = useRef<HTMLSpanElement>(null);
    const percent = (skill.value / 10) * 100;

    const getSkillColor = (value: number) => {
        if (value <= 5) {
            const ratio = value / 5;
            const r = Math.round(255 * (1 - ratio) + 255 * ratio); 
            const g = Math.round(0 * (1 - ratio) + 165 * ratio);   
            const b = 0;
            return `rgb(${r},${g},${b})`;
        } else {
            const ratio = (value - 5) / 5;
            const r = Math.round(255 * (1 - ratio) + 76 * ratio);  
            const g = Math.round(165 * (1 - ratio) + 175 * ratio); 
            const b = Math.round(0 * (1 - ratio) + 80 * ratio);    
            return `rgb(${r},${g},${b})`;
        }
    };

    const fillColor = getSkillColor(skill.value);

    useEffect(() => {
    if (!fillRef.current) return;
        requestAnimationFrame(() => {
            if (fillRef.current) {
            fillRef.current.style.width = `${percent}%`;
            fillRef.current.style.backgroundColor = fillColor;
            }
        });
    }, [percent, fillColor]);

    return (
    <div className="skills-showcase-entry">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-bar-background">
        <span ref={fillRef} className="skill-bar-fill" style={{ width: 0 }} />
        </span>
    </div>
    );

}