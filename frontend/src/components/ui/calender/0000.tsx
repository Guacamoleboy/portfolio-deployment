import React from "react";
import { cellHelper } from "@/components/ui/CalenderComponent";

const photoshopCalComponent = () => (
  <div className="cell-button-back cell-component non-button" style={cellHelper([1,2,3,4], [1,2])}>
    <img src="/images/portfolio/contentpage/resume/0000/photoshop.png" className="cell-image"/>
  </div>
);

const minecraftCalComponent = () => (
  <div className="cell-button-back cell-component non-button" style={cellHelper([1,2,3,4], [3,4])}>
    <img src="/images/portfolio/contentpage/resume/0000/minecraft.png" className="cell-image"/>
  </div>
);

const omdelerCalComponent = () => (
  <div className="cell-button-back cell-component non-button" style={cellHelper([5,6,7,8], [1,2])}>
    <img src="/images/portfolio/contentpage/resume/0000/omdeler.png" className="cell-image"/>
  </div>
);

const jailbreakCalComponent = () => (
  <div className="cell-button-back cell-component non-button" style={cellHelper([5,6,7,8], [3,4])}>
    <img src="/images/portfolio/contentpage/resume/0000/jailbreak.png" className="cell-image"/>
  </div>
);

export const Year0000 = () => {
  return (
    <>
    {photoshopCalComponent()}
    {minecraftCalComponent()}
    {omdelerCalComponent()}
    {jailbreakCalComponent()}
    </>
  );
};