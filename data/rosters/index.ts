export interface EboardMember {
    src: string;
    name: string;
    description: string;
}

export interface TeamMember {
    name: string;
    description: string;
    src?: string;
}

export interface Team {
    name: string;
    members: TeamMember[];
}

export interface Roster {
    eboard: EboardMember[];
    teams: Team[];
}

import * as y2024_2025 from "./2024-2025";

export const ROSTERS: Record<string, Roster> = {
    "2024-2025": y2024_2025,
};

// Sorted newest first
export const YEARS = Object.keys(ROSTERS).sort().reverse();
