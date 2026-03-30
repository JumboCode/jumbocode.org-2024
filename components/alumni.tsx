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
                <div key={index} className="flex flex-col gap-4 mb-8">
                    <div className="flex flex-col md:mb-4 lg:mb-6">
                        <h3 className="text-lg md:text-xl lg:text-2xl text-white font-bold">{team.name}</h3>
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
