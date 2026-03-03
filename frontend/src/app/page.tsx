"use client";

import { useState, useEffect } from 'react';
import SidePanel from "@components/layout/SidePanel";
import SidePanelToggle from "@components/layout/SidePanelToggle";
import ContentPage from "@components/layout/ContentPage";

export default function HomePage() {

    // Setup
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    // Scroll block under development
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="page-wrapper">

            <SidePanel isOpen={isOpen} toggleMenu={toggleMenu} />
            
            <div 
                className={`content-overlay ${isOpen ? 'active' : ''}`} 
                onClick={toggleMenu} 
            />

            <ContentPage />
            <SidePanelToggle isOpen={isOpen} toggleMenu={toggleMenu} />

            {/*}
            <div className="dev-overlay">
                <span>Under Development</span>
                <span>Come back later...</span>
            </div>
            {*/}

        </div>
    );
}