"use client"

import { NavigationInterface } from '@/types/navigation';

export default function SidePanelToggle({ isOpen, toggleMenu }: NavigationInterface) {
    return (
        <div className="toggle-sidepanel">
            <button 
                className={`burger-menu ${isOpen ? 'open' : ''}`}
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    );
}