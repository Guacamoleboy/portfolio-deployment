// Pathing
// _____________
// components/ui/ResumeSection.tsx

import React, { useState } from "react";

import { Year0000 } from "components/ui/calender/0000";
import { Year2014 } from "components/ui/calender/2014";
import { Year2017 } from "components/ui/calender/2017";
import { Year2020 } from "components/ui/calender/2020";
import { Year2022 } from "components/ui/calender/2022";
import { Year2023 } from "components/ui/calender/2023";
import { Year2025 } from "components/ui/calender/2025";
import { Year2026 } from "components/ui/calender/2026";

type YearPage = {
  id: string;            
  title: string;         
  component: React.FC;   
};

// ___________________________________________________________________
// Pagination

const yearPages: YearPage[] = [
  { id: "0000", title: "Pre 2014", component: Year0000 },
  { id: "2014", title: "2014", component: Year2014 },
  { id: "2017", title: "2017", component: Year2017 },
  { id: "2020", title: "2020", component: Year2020 },
  { id: "2022", title: "2022", component: Year2022 },
  { id: "2023", title: "2023", component: Year2023 },
  { id: "2025", title: "2025", component: Year2025 },
  { id: "2026", title: "2026", component: Year2026 },
];

// ___________________________________________________________________
// Header visuals

const renderHeaderVisual = () => {
  const days = [];
  for (let i = 0; i < 6; i++) {
    days.push(
      <div key={i} className="section-resume-calender-header-day">
        <div className="section-resume-calender-header-dot" />
        <div className="section-resume-calender-header-line" />
      </div>
    );
  }
  return <div className="section-resume-calender-header">{days}</div>;
};

const renderDayTitles = () => {
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const titles = [];
  for (let i = 0; i < dayNames.length; i++) {
    titles.push(
      <span key={i}>{dayNames[i]}</span>
    );
  }
  return <div className="section-resume-calender-day-title">{titles}</div>;
};

// ___________________________________________________________________
// 70 cell helper

export const cellHelper = (rows: number[], cols: number[]): React.CSSProperties => {
  if (rows.length === 0 || cols.length === 0) return {};
  const rowStart = Math.min(...rows);
  const colStart = Math.min(...cols);
  const rowSpan = Math.max(...rows) - rowStart + 1;
  const colSpan = Math.max(...cols) - colStart + 1;
  return {
    gridRow: `${rowStart} / span ${rowSpan}`,
    gridColumn: `${colStart} / span ${colSpan}`,
  };
};

// ___________________________________________________________________
// Grid visuals
// 112, 126, 140, 154, 168, 182

const cellVisuals = (totalCells = 154) => {
  return Array.from({ length: totalCells }).map((_, idx) => (
    <div key={idx} className="calender-cell">
    </div>
  ));
};

// ___________________________________________________________________
// Grid components

const BackButton = ({ onClick }: { onClick: () => void }) => (
  <div 
    className="cell-button-back cell-component" 
    style={cellHelper([11], [1, 2])}
    onClick={onClick} 
    role="button"
  >
    <i className="fa fa-chevron-left"/>
  </div>
);

const ForwardButton = ({ onClick }: { onClick: () => void }) => (
  <div 
    className="cell-button-forward cell-component" 
    style={cellHelper([11], [13, 14])}
    onClick={onClick} 
    role="button"
  >
    <i className="fa fa-chevron-right"/>
  </div>
);

// ___________________________________________________________________

export default function ResumeSection() {

  // State initial (0000)
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeYear = yearPages[currentIndex];
  
  const ActiveComponent = activeYear.component;

  // Pagination
  const goForward = () => {
    if (currentIndex < yearPages.length - 1) setCurrentIndex(prev => prev + 1);
  };
  const goBack = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };


  return (
    <section id="content-resume" className="content-section-resume">

      {/* Header Visual */}
      <div className="calender-header-wrapper">
        {/* Calender Visual Dots & Lines */}
        <div className="calender-pos-1">
          {renderHeaderVisual()}
        </div>
        

        {/* Title Year */}
        <div className="calender-pos-2">
          {/* Year skal loade efter hvilken der er aktiv */}
          <h2>{activeYear.title}</h2>
        </div>

        {/* Day Titles */}
        <div className="calender-pos-3">
          {renderDayTitles()}
        </div>
      </div>

      {/* Grid Content */}
      <div className="calender-pos-4">
        {cellVisuals()}
        <ActiveComponent />
        {currentIndex > 0 && (
          <BackButton onClick={goBack} />
        )}
        {currentIndex < yearPages.length - 1 && (
          <ForwardButton onClick={goForward} />
        )}
      </div>

    </section>
  );

}