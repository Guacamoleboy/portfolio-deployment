"use client"

import React from "react";
import HomeLottie from '@components/animations/SectionHome';

export default function HomeSection() {
  return (
    <section id="content-home" className="content-section-home">
      
      <div className="content-section-home-left">
        <h2 className="underline-left">
          Molding Ripe Ideas with Smooth Execution
        </h2>

        <p className="home-intro-catch-phrase">
          {`git commit -m "Holy Guacamole, it works!"`}
        </p>

        <p className="home-intro-short-description">
          <span className="intro-line">
            I treat every project like a premium avocado:
          </span>

          <span className="intro-list-item">
            • Polished skin
            {/*<span className="intro-list-item-highlight">
              Frontend
            </span>*/}
          </span>

          <span className="intro-list-item">
            • Smooth middle
            {/*<span className="intro-list-item-highlight">
              Backend
            </span>*/}
          </span>

          <span className="intro-list-item">
            • Solid core
            {/*<span className="intro-list-item-highlight">
              Architecture
            </span>*/}
          </span>

          <span className="intro-footer">
            <span className="footer-outro">
              Just don’t ask me about my brown spots – we all have some
            </span>
            <span className="dot-step-1">.</span>
            <span className="dot-step-2">.</span>
            <span className="dot-step-3">.</span>
          </span>
        </p>

        <button className="portfolio-button">
          Get in Touch
        </button>
      </div>

      <div className="content-section-home-right">
        <HomeLottie />
      </div>

    </section>
  );
  
}