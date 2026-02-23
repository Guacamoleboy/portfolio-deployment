"use client";

import SidePanel from "@components/layout/SidePanel";
import ContentPage from "@components/layout/ContentPage";

export default function HomePage() {
    return (
        <div className="page-wrapper">
            <SidePanel />
            <ContentPage />
        </div>
    );
}