import PictureFrame from "./PictureFrame";
import type { EboardMember } from "@/data/rosters";

interface EboardProps {
    members: EboardMember[];
    year: string;
}

const Eboard: React.FC<EboardProps> = ({ members, year }) => {
    return (
        <div className="flex flex-col gap-4 mb-12 md:mb-40">
            <div className="flex flex-col md:mb-4 lg:mb-8">
                <h2 className="text-2xl md:text-3xl lg:text-5xl text-white font-bold">Executive Board {year}</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-8">
                {members.map((member, index) => (
                    <PictureFrame key={index} src={member.src} name={member.name} description={member.description} />
                ))}
            </div>
        </div>
    );
}

export default Eboard;
