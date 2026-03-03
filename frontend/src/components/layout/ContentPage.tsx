"use client";

import ConnectionDots from '../ui/ConnectionDots';
import ConnectionDotsTwo from '../ui/ConnectionDotsTwo';
import KnowledgeSection from '../ui/KnowledgeSection';
import HomeSection from '../ui/HomeSection';
import AboutSection from '../ui/AboutSection';
import SkillSection from '../ui/SkillSection';
import SkillSectionTwo from '../ui/SkillSectionTwo';
import GithubSection from '../ui/GithubSection';
import ResumeSection from '../ui/ResumeSection';
import PortfolioSection from '../ui/PortfolioSection';

export default function ContentPage() {
  return (
    <div className="content-page">
      
      <HomeSection />

      <ConnectionDots />

      <KnowledgeSection />

      <ConnectionDots />

      <GithubSection />

      <ConnectionDots />

      <AboutSection />

      <ConnectionDotsTwo />

      <SkillSection />

      <ConnectionDotsTwo />

      <ResumeSection />

      <ConnectionDotsTwo />

      <SkillSectionTwo />

      <ConnectionDotsTwo />

      <PortfolioSection />

      {/* 
      <ConnectionDots />
      */}

      {/* 
      <ContactSection />
      */}

    </div>
  );

}