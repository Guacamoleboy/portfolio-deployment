"use client";

import DynamicText from '@libs/ui/DynamicText'

export default function ContentPage() {
  return (
    <div className="content-page">
      
      {/* Home Section */}
      <section id="content-home" className="content-section-home">
        <div className="content-section-home-left">
          {/*
          <h2>
            <DynamicText words={["Unique", "Autistic", "Creative", "Passionate", "Perfectionist"]} />Developer
          </h2>
          <h2>
             & <span className="highlight">Huge Nerd</span>.
          </h2>
          */}
          <h2>Under Development</h2>
          <p>Come back later...</p>
          {/*
          <p>
            Crafting meaningful digital experiences through thoughtful design and innovative solutions. 
          </p>
          <button className="portfolio-button">Get in Touch</button>
          */}
        </div>
        <div className="content-section-home-right">
          {/*
          <img src="/images/portfolio/contentpage/home-illustration2-resize.png" className="home-illustration"></img>
          */}
          </div>
      </section>

      {/* About Section 
      <section id="content-about" className="content-section">
        <h2>About</h2>
        <p>Hej, lidt info om mig...</p>
      </section>
      */}

      {/* Resume Section
      <section id="content-resume" className="content-section">
        <h2>Resume</h2>
        <p>Hej, her er mit CV...</p>
      </section>
      */}

      {/* Portfolio Section
      <section id="content-portfolio" className="content-section">
        <h2>Portfolio</h2>
        <p>Hej, se nogle projekter her...</p>
      </section>
      */}

      {/* Skills Section
      <section id="content-skills" className="content-section">
        <h2>Skills</h2>
        <p>Hej, mine skills...</p>
      </section>
      */}

      {/* Contact Section
      <section id="content-contact" className="content-section">
        <h2>Get in Touch</h2>
        <p>Hej, kontakt mig her...</p>
      </section>
      */}

    </div>
  );

}