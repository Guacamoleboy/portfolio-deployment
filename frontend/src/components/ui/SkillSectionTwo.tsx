import SkillBar from '@components/util/SkillBar';
import type { Skill } from 'types/skill';

export default function SkillSectionTwo() {
  const deploymentSkills: Skill[] = [
    { name: "CI / CD", value: 8.2 },
    { name: "Docker & Containers", value: 6.6 },
    { name: "Server management", value: 8.8 },
    { name: "Logging", value: 5.1 },
    { name: "Monitoring Systems", value: 7.6 },
    { name: "Backup & Recovery", value: 9.1 },
  ];

  const teamworkSkills: Skill[] = [
    { name: "Pair Programming", value: 8.7 },
    { name: "Code Reviews", value: 9.4 },
    { name: "Agility", value: 8.7 },
    { name: "Collaboration", value: 5.6 },
    { name: "Mentoring", value: 8.7 },
    { name: "Project Planning", value: 9.2 },
  ];

  return (
    <section id="content-skills" className="content-section-skills">

      {/* Backend */}
      <div className="content-section-skills-left">
        <div className="skill-section-frame-wrapper">
            <div className="skills-meta">
            <p className="guac-glass-pill">Cloud, server and logging</p>
            <h2>Deployment</h2>
            <p>Ensuring systems run reliably at scale</p>
            </div>

            <div className="skills-showcase">
            {deploymentSkills.map((s, i) => (
                <SkillBar key={i} skill={s} />
            ))}
            </div>
        </div>
      </div>

      {/* Frontend */}
      <div className="content-section-skills-right">
        <div className="skill-section-frame-wrapper">
            <div className="skills-meta">
            <p className="guac-glass-pill">Team dynamics and productivity</p>
            <h2>Teamwork</h2>
            <p>My personal impact on a team</p>
            </div>

            <div className="skills-showcase">
            {teamworkSkills.map((s, i) => (
                <SkillBar key={i} skill={s} />
            ))}
            </div>
        </div>
      </div>

    </section>
  );
}