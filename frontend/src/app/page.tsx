"use client";

import { useState } from 'react';
import SidePanel from "@components/layout/SidePanel";
import SidePanelToggle from "@components/layout/SidePanelToggle";
import ContentPage from "@components/layout/ContentPage";

export default function HomePage() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="page-wrapper">
            <SidePanel isOpen={isOpen} toggleMenu={toggleMenu} />
            
            <div 
                className={`content-overlay ${isOpen ? 'active' : ''}`} 
                onClick={toggleMenu} 
            />

            <ContentPage />
            <SidePanelToggle isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
    );
}