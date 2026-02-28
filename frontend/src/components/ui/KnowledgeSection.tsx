"use client"

import React, { useState } from 'react';

// Each Card
const KnowledgeCard = ({ icon }: { icon: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  const basePath = "/images/portfolio/contentpage/knowledge/";
  const imgSrc = isHovered ? `${basePath}${icon}-c.png` : `${basePath}${icon}-b.png`;

  return (
    <div className="content-row-knowledge-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
      <img src={imgSrc} alt={`${icon} icon`} />
    </div>
  );
};

// Section
export default function KnowledgeSection () {
  const row1 = ['github', 'blender', 'source', 'windows', 'adobe'];
  const row2 = ['figma', 'docker', 'vsc', 'npm', 'postgre'];

  return (
    <section id="content-knowledge" className="content-section-knowledge">
      
      {/* Row 1 */}
      <div className="content-row-knowledge">
        {row1.map((name) => (
          <KnowledgeCard key={name} icon={name} />
        ))}
      </div>

      {/* Row 2 */}
      <div className="content-row-knowledge">
        {row2.map((name) => (
          <KnowledgeCard key={name} icon={name} />
        ))}
      </div>

    </section>
  );

};