import SkillBar from '@components/util/SkillBar';
import type { Skill } from 'types/skill';

export default function SkillSectionTwo() {

  const deploymentSkills: Skill[] = [
    { name: "CI / CD", value: 8.2, icon: "fa-refresh" },
    { name: "Docker & Containers", value: 6.6, icon: "fa-cube" },
    { name: "Server management", value: 8.8, icon: "fa-server" },
    { name: "Logging", value: 5.1, icon: "fa-file-text-o" },
    { name: "Monitoring Systems", value: 7.6, icon: "fa-line-chart" },
    { name: "Backup & Recovery", value: 9.1, icon: "fa-history" },
  ];

  const teamworkSkills: Skill[] = [
    { name: "Pair Programming", value: 8.7, icon: "fa-exchange" },
    { name: "Code Reviews", value: 9.4, icon: "fa-code-fork" },
    { name: "Agility", value: 8.7, icon: "fa-bolt" },
    { name: "Collaboration", value: 5.6, icon: "fa-handshake-o" },
    { name: "Mentoring", value: 8.7, icon: "fa-graduation-cap" },
    { name: "Project Planning", value: 9.2, icon: "fa-tasks" },
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