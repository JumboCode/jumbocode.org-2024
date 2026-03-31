import Link from "next/link";
import PictureFrame from "./PictureFrame";
import type { Team } from "@/data/rosters";

interface AlumniProps {
    teams: Team[];
    year: string;
}

const roleOrder: Record<string, number> = {
    "Project Manager": 1,
    "Technical Lead": 2,
    "Designer": 3,
    "Developer": 4,
};

function getLastName(name: string) {
    const parts = name.trim().split(/\s+/);
    return parts[parts.length - 1];
}

const Alumni: React.FC<AlumniProps> = ({ teams, year }) => {
    return (
        <div>
            <div className="mb-8">
                <h2 className="text-2xl md:text-3xl lg:text-5xl text-white font-bold">Members {year}</h2>
            </div>
            {teams.map((team, index) => (
                <div key={index} className="flex flex-col gap-4 mt-12 first:mt-0">
                    <div className="flex flex-col mb-2">
                        {team.link ? (
                            <Link href={team.link} className="group flex items-center gap-2 w-fit">
                                <h3 className="text-lg md:text-xl lg:text-2xl text-white font-bold group-hover:text-brand transition-colors">{team.name}</h3>
                                <svg className="w-4 h-4 text-white/50 group-hover:text-brand transition-colors shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </Link>
                        ) : (
                            <h3 className="text-lg md:text-xl lg:text-2xl text-white font-bold">{team.name}</h3>
                        )}
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-8">
                        {team.members
                            .slice()
                            .sort((a, b) => {
                                const orderA = roleOrder[a.description] ?? 5;
                                const orderB = roleOrder[b.description] ?? 5;
                                if (orderA !== orderB) return orderA - orderB;
                                if (a.description === "Developer" && b.description === "Developer") {
                                    return getLastName(a.name).localeCompare(getLastName(b.name));
                                }
                                return a.name.localeCompare(b.name);
                            })
                            .map((member, index) => (
                                <PictureFrame key={index} src={member.src!} name={member.name} description={member.description} />
                            ))
                        }
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Alumni;
