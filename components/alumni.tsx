/*  eboard.tsx
*
*   This file creates the eboard component of the website. Using rows of the 
*   pciture frame component, it displays all the eboard members.
* 
*   Created by Holden Kittelberger on 2/5/2025
*
*/

import PictureFrame from "./PictureFrame";


const a2empowerment = [
    {src: "/alumni/Fahdili Mboya.png", name: "Fahdili Mboya", description: "Developer"},
    {src: "/alumni/Gabriel Klaris.png", name: "Gabriel Klaris", description: "Developer"},
    {src: "/alumni/Helena Fume.png", name: "Helena Fume", description: "Developer"},
    {src: "/alumni/Jasmine Schaber.png", name: "Jasmine Schaber", description: "Developer"},
    {src: "/alumni/Jessie Huang.png", name: "Jessie Huang", description: "Designer"},
    {src: "/alumni/Jessie Katz.png", name: "Jessie Katz", description: "Developer"},
    {src: "/alumni/Madison Johnson.png", name: "Madison Johnson", description: "Developer"},
    {src: "/alumni/Oluwaponmile Fafowora.png", name: "Oluwaponmile Fafowora", description: "Developer"},
    {src: "/alumni/Owen Thomas.png", name: "Owen Thomas", description: "Developer"},
    {src: "/alumni/Rofeeah Ayeni.png", name: "Rofeeah Ayeni", description: "Project Manager"},
    {src: "/alumni/Sara AbuHamra.png", name: "Sara AbuHamra", description: "Developer"},
    {src: "/alumni/Wendan Jiang.png", name: "Wendan Jiang", description: "Developer"},
    {src: "/alumni/Will Soylemez.png", name: "Will Soylemez", description: "Technical Lead"},
    {src: "/alumni/Yodahie Ermias.png", name: "Yodahie Ermias", description: "Developer"},
]

const breadAndRoses = [
    {src: "/alumni/Amelia Bermack.png", name: "Amelia Bermack", description: "Developer"},
    {src: "/alumni/An Tran.png", name: "An Tran", description: "Designer"},
    {src: "/alumni/Conrad Hsu.png", name: "Conrad Hsu", description: "Developer"},
    {src: "/alumni/Hanah Kim.png", name: "Hanah Kim", description: "Developer"},
    {src: "/alumni/Jason Miller.png", name: "Jason Miller", description: "Developer"},
    {src: "/alumni/Johnny Tan.png", name: "Johnny Tan", description: "Project Manager"},
    {src: "/alumni/Jonah Pflaster.png", name: "Jonah Pflaster", description: "Developer"},
    {src: "/alumni/Justin Paik.png", name: "Justin Paik", description: "Developer"},
    {src: "/alumni/Manuel Pena.png", name: "Manuel Pena", description: "Developer"},
    {src: "/alumni/Tammi Tran.png", name: "Tammi Tran", description: "Developer"},
    {src: "/alumni/Tomas Maranga.png", name: "Tomas Maranga", description: "Developer"},
    {src: "/alumni/Vina Le.png", name: "Vina Le", description: "Developer"},
    {src: "/alumni/Won Kim.png", name: "Won Kim", description: "Technical Lead"},
]


const teams = [
    { name: "A2 Empowerment", members: a2empowerment },
    { name: "Bread and Roses", members: breadAndRoses },
    { name: "Dillar Academy", members: [] },
    { name: "English at Large", members: [] },
    { name: "LCS Tutoring", members: [] },
    { name: "LGBTQ Senior Housing", members: [] },
    { name: "New England Innocence Project", members: [] },
    { name: "Somerville Museum", members: [] },
    { name: "The Wily Network", members: [] },
    { name: "Tufts University Counsel", members: [] },
    { name: "Village Food Hub", members: [] },
    { name: "West Medford Community Center", members: [] },
];

const alumni: React.FC = () => {
    return (
        <div>
            <div>
                <h2 className="text-2xl md:text-3xl lg:text-5xl text-white font-bold">Alumni 2024-2025</h2>
            </div>
            {teams.map((team, index) => (
                <div key={index} className="flex flex-col gap-4 mb-8">
                    <div className="flex flex-col md:mb-4 lg:mb-8">
                        <h5 className="text-lg md:text-xl lg:text-2xl text-white">{team.name}</h5>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-8">
                        {team.members
                            .slice()
                            .sort((a, b) => {
                                const roleOrder: Record<string, number> = {
                                    "Project Manager": 1,
                                    "Technical Lead": 2,
                                    "Designer": 3,
                                    "Developer": 4,
                                };

                                const orderA = roleOrder[a.description] || 5;
                                const orderB = roleOrder[b.description] || 5;

                                if (orderA !== orderB) {
                                    return orderA - orderB;
                                }

                                // For Developers, sort alphabetically by last name.
                                if (a.description === "Developer" && b.description === "Developer") {
                                    const getLastName = (name: string) => {
                                        const parts = name.trim().split(/\s+/);
                                        return parts[parts.length - 1];
                                    };
                                    return getLastName(a.name).localeCompare(getLastName(b.name));
                                }

                                return a.name.localeCompare(b.name);
                            })
                            .map((member, index) => (
                                <PictureFrame key={index} src={member.src} name={member.name} description={member.description} />
                            ))
                        }
                    </div>
                </div>
            ))}
        </div>
    );
}

export default alumni;