/*  eboard.tsx
*
*   This file creates the eboard component of the website. Using rows of the 
*   pciture frame component, it displays all the eboard members.
* 
*   Created by Holden Kittelberger on 2/5/2025
*
*/

import PictureFrame from "./PictureFrame";

const daBoard = [
    {src: "/eboard/ben_borgers.png", name: "Ben Borgers", description: "President"},
    {src: "/eboard/gabe_sessions.png", name: "Gabriel Sessions", description: "Head of Engineering"},
    {src: "/eboard/sristi_panchu.png", name: "Sristi Panchu", description: "Co-Head of PM"},
    {src: "/eboard/rebecca_dinsmore.png", name: "Rebecca Dinsmore", description: "Co-Head of PM"},
    {src: "/eboard/wilson_skinner.png", name: "Wilson Skinner", description: "Head of Design"},
    {src: "/eboard/ella_lesperance.png", name: "Ella Lesperance", description: "Head of Operations"},
    {src: "/eboard/lillian_tran.png", name: "Lillian Tran", description: "Head of Communications"},
    {src: "/eboard/megan_yi.png", name: "Megan Yi", description: "Social Chair"},
    {src: "/eboard/stephanie_kim.png", name: "Stephanie Kim", description: "Co-Head of Client Management"},
    {src: "/eboard/anika_kapoor.png", name: "Anika Kapoor", description: "Co-Head of Client Management"},
    {src: "/eboard/holden_kittelberger.png", name: "Holden Kittelberger", description: "JumboHack Liaison"},
]

const eboard: React.FC = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col md:mb-4 lg:mb-8">
                <h2 className="text-2xl md:text-3xl lg:text-5xl text-white font-bold">Executive Board 2024-2025</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-8">
                {daBoard.map((member, index) => (
                    <PictureFrame key={index} src={member.src} name={member.name} description={member.description} />
                ))}
            </div>
        </div>
    );
}

export default eboard;