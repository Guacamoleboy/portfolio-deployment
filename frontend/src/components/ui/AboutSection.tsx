"use client";

import { useState } from "react";
import AboutLottie from '@components/animations/SectionAbout';

const AboutMe = () => (
  <div className="about-me-button-on">
    <h2 className="underline-left">I'm Jonas!</h2>
    <p>Unique (Slightly autistic) developer located in Denmark.</p>
    <p>Started programming at a very early age. Went to College where I transformed my knowledge into real use. Made simple Java Applications & PHP / MySQL sites. Moved on to making Web Solutions for real Businesses.</p>
    <p>Took a break from "coding" to study Real Estate in Denmark. Left as my path in life is destined to be Coding related.</p>
    <p>Well known Counter Strike mapper featured on Live Streams, ESL & played by millions of players all over the world.</p>
    <p>Made maps with REZ & roamed with major esport orgs such as: NIP, FaZe Clan, Team Liquid, Vitality etc.</p>
    <p>For privacy reasons my Counter Strike name will be [REDACTED].</p>
    <p>Currently trying my best to become an efficient & skilled Full Stack Developer with focus on UX & Generic Backend solutions.</p>
    <p><br/>Stay tuned...</p>
  </div>
);

const Discover = () => (
  <div>
    <h2 className="underline-left">What makes me... me?</h2>
    <p>Strange.. deep.. focus. When I'm locked in I can't be stopped.</p>
    <p>I prefer</p>
    <ul>
      <li>Being in charge & being the one making the first & final decisions.</li>
      <li>Focusing on architecture rather than just writing code</li>
      <li>Logical & calculated solutions</li>
      <li>Learning by doing</li>
      <li>Creative problem solving instead of repetitive work</li>
      <li>Sharing knowledge instead of hoarding it</li>
      <li>Sterile yet spontanious perfection</li>
    </ul>
    <p>I'm the reason you need server sided rendering.</p>
    <p>If it can be decompiled, traced, collected etc. I'm there. For some reason I bring joy in trying to break systems.</p>
    <p>  
      
    </p>
  </div>
);

const BrownSpots = () => (
  <div>
    <h2 className="underline-left">Don't we all have some?.. Here are mine.</h2>
    <p>Brown spot - catch phrase or quote explaining it like a dictionary</p>
    <ul>
      <li>In case we share a table.. It'll shaking. Be warned.</li>
      <li>I tend to start a lot of projects and finish 5% of them. Maybe less.</li>
      <li>A bit too sensitive to sounds & smells.</li>
      <li>I don't have or use Social Media.</li>
      <li>My phone is on do not disturb at all times.</li>
      <li>Not good at giving second chances.</li>
      <li>I remember everything you've ever said and done. Everything.</li>
    </ul>
    <p>Anyways..</p>
  </div>
);

const Personal = () => (
  <div className="about-section-personal">
    <div className="about-section-personal-meta">
      <h2 className="underline-left">How to make the perfect Guacamole</h2>
    </div>

    <h3>Main Ingredients</h3>
    <ul className="personal-list">
      <li>3 x Ripe Avocados</li>
      <li>200g Sour Cream</li>
      <li>1 clove of Garlic (2 if you live alone)</li>
      <li>1 tsp of Lime / Lemon</li>
      <li>Salt to taste</li>
    </ul>

    <h3>Optional</h3>
    <ul className="personal-list">
      <li>1 x Chopped Onion</li>
      <li>Fresh Cilantro</li>
    </ul>

    <h3>How to eat</h3>
    <ul className="personal-list">
      <li>1 x Spoon</li>
    </ul>
  </div>
);

export default function AboutSection() {

  const [activeTab, setActiveTab] = useState<"about" | "discover" | "brownspots" | "personal">("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <AboutMe />;
      case "discover":
        return <Discover />;
      case "brownspots":
        return <BrownSpots />;
      case "personal":
        return <Personal />;
      default:
        return null;
    }
  };

  return (
    <section id="content-about" className="content-section-about">
      
      {/* Left */}
      <div className="about-section-left">
        <div className="about-section-left-visuals">
            <AboutLottie />
        </div>
      </div>

      {/* Right */}
      <div className="about-section-right">

        {/* Buttons */}
        <div className="about-buttons">
          <button className={activeTab === "about" ? "active" : ""}
            onClick={() => setActiveTab("about")}>
            About Me
          </button>

          <button className={activeTab === "discover" ? "active" : ""}
            onClick={() => setActiveTab("discover")}>
            Discover Me
          </button>

          <button className={activeTab === "brownspots" ? "active" : ""}
            onClick={() => setActiveTab("brownspots")}>
            Brown Spots
          </button>

          <button className={activeTab === "personal" ? "active" : ""}
            onClick={() => setActiveTab("personal")}>
            Serious Business
          </button>

        </div>


        <div className="about-content">
          {renderContent()}
        </div>

      </div>
    
    </section>
  );
  
}