/*  MembersYearSelector.tsx
*
*   This file creates a year selector component for the members page. It allows
* users to select a year and displays the corresponding eboard and alumni.
*
*   Created by Dan Glorioso on 3/30/2026
*
*/

"use client";

import { ROSTERS, YEARS } from "@/data/rosters";
import { useRouter, useSearchParams } from "next/navigation";
import Alumni from "./alumni";
import Eboard from "./eboard";

export default function MembersYearSelector() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const yearParam = searchParams.get("year");
    const selectedYear = YEARS.includes(yearParam ?? "") ? yearParam! : YEARS[0];
    const roster = ROSTERS[selectedYear];

    function setYear(year: string) {
        const params = new URLSearchParams(searchParams.toString());
        params.set("year", year);
        router.replace(`?${params.toString()}`, { scroll: false });
    }

    return (
        <div>
            <div className="flex items-center gap-4 mb-12">
                <div className="relative">
                    <select
                        id="year-select"
                        value={selectedYear}
                        onChange={(e) => setYear(e.target.value)}
                        className="appearance-none bg-transparent border border-off_white/40 hover:border-off_white text-white rounded-lg pl-4 pr-12 py-2.5 text-base font-medium cursor-pointer focus:outline-none focus:border-brand transition-colors"
                    >
                        {YEARS.map((year) => (
                            <option key={year} value={year} className="text-white">
                                {year}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                        <svg className="w-4 h-4 text-off_white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>

            <Eboard members={roster.eboard} year={selectedYear} />
            <Alumni teams={roster.teams} year={selectedYear} />
        </div>
    );
}
