"use client";

import Link from 'next/link';
import Logo from '@components/animations/LogoAnimation'

export default function SidePanel() {
    
    // Anchor Scroll to id="something"
    const scrollToId = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({});
        }
    };

    // ________________________________________________

    return (
    <>
        <aside className="side-panel">
            
            {/* Intro Meta */}
            <div className="side-panel-meta">
                <Logo />
                <span>Jonas Meinert Larsen</span>
                <span>Hillerød, Denmark</span>
            </div>

            {/* Divider */}
            <hr className="meta-divider"/>

            {/* Intro Buttons */}
            <div className="side-panel-button-group">
                <button onClick={() => scrollToId("content-home")} className="active">
                    <i className="fa fa-home"></i> Home
                </button>
                <button onClick={() => scrollToId("content-about")}>
                    <i className="fa fa-user"></i> About
                </button>
                <button onClick={() => scrollToId("content-resume")}>
                    <i className="fa fa-file-text"></i> Resume
                </button>
                <button onClick={() => scrollToId("content-portfolio")}>
                    <i className="fa fa-briefcase"></i> Portfolio
                </button>
                <button onClick={() => scrollToId("content-skills")}>
                    <i className="fa fa-code"></i> Skills
                </button>
                <button onClick={() => scrollToId("content-contact")}>
                 <i className="fa fa-envelope"></i> Get in Touch
                </button>
            </div>

            {/* Divider */}
            <hr className="meta-divider"/>

            {/* Intro Links */}
            <div className="side-panel-links">
                <Link href="https://www.github.com/guacamoleboy" target="_blank">
                    <div className="side-panel-link">
                        <img src="/images/portfolio/sidepanel/github.png"></img>
                    </div>
                </Link>
                <Link href="https://www.discord.com" target="_blank">
                    <div className="side-panel-link">
                        <img src="/images/portfolio/sidepanel/discord.png"></img>
                    </div>
                </Link>
            </div>
        </aside>
    </>
  );
}