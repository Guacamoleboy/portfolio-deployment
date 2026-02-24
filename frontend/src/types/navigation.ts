// Currently being used on:
// - SidePanel.tsx
// - SidePanelToggle.tsx (button)

export interface NavigationInterface {
    isOpen: boolean;
    toggleMenu: () => void;
}