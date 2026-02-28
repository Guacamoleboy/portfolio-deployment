import SkillBar from '@components/util/SkillBar';
import type { Skill } from 'types/skill';

export default function SkillSection() {
  const backendSkills: Skill[] = [
    { name: "SSH / Terminal", value: 9.0 },
    { name: "Architecture", value: 9.7 },
    { name: "Databases", value: 9.5 },
    { name: "APIs & Endpoints", value: 9.1 },
    { name: "Cyber Security", value: 9 },
    { name: "Debugging", value: 7.2 },
  ];

  const frontendSkills: Skill[] = [
    { name: "UI", value: 9.7 },
    { name: "Figma", value: 7.0 },
    { name: "UX", value: 9.5 },
    { name: "Animations", value: 5.5 },
    { name: "Custom Assets", value: 8.1 },
    { name: "Creativity", value: 9.2 },
  ];

  return (
    <section id="content-skills" className="content-section-skills">

      {/* Backend */}
      <div className="content-section-skills-left">
        <div className="skill-section-frame-wrapper">
          <div className="skills-meta">
            <p className="guac-glass-pill">Logic, data and system architecture</p>
            <h2>Backend</h2>
            <p>Arguing &quot;politely&quot; with databases</p>
          </div>

          <div className="skills-showcase">
            {backendSkills.map((s, i) => (
              <SkillBar key={i} skill={s} />
            ))}
          </div>
        </div>
      </div>

      {/* Frontend */}
      <div className="content-section-skills-right">
        <div className="skill-section-frame-wrapper">
          <div className="skills-meta">
            <p className="guac-glass-pill">Layout, motion and user experience</p>
            <h2>Frontend</h2>
            <p>Making interactions feel slightly magical</p>
          </div>

          <div className="skills-showcase">
            {frontendSkills.map((s, i) => (
              <SkillBar key={i} skill={s} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}