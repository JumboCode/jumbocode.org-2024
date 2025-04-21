/*  eboard.tsx
*
*   This file creates the alumni component of the website. Using rows of the 
*   pciture frame component, it displays all the teams and their members.
* 
*   Created by Holden Kittelberger on 3/29/2025
*
*/

import PictureFrame from "./PictureFrame";

/* Interface for a TeamMember Type */
/* Description it title like PM, TL, Dev, etc */
/* src is optional to prevent typing errors */
interface TeamMember {
    name: string;
    description: string;
    src?: string;
}

/* 2024-2025 JumboCode Teams */
/* p.s. sorry for all the hard code, maybe one day we can make a
   spreadsheet parser to automate this or use a database */

const a2empowerment: TeamMember[] = [
    { name: "Fahdili Mboya", description: "Developer" },
    { name: "Gabriel Klaris", description: "Developer" },
    { name: "Helena Fume", description: "Developer" },
    { name: "Jasmine Schaber", description: "Developer" },
    { name: "Jessie Huang", description: "Designer" },
    { name: "Jessie Katz", description: "Developer" },
    { name: "Madison Johnson", description: "Developer" },
    { name: "Oluwaponmile Fafowora", description: "Developer" },
    { name: "Owen Thomas", description: "Developer" },
    { name: "Rofeeah Ayeni", description: "Project Manager" },
    { name: "Sara AbuHamra", description: "Developer" },
    { name: "Wendan Jiang", description: "Developer" },
    { name: "Will Soylemez", description: "Technical Lead" },
    { name: "Yodahie Ermias", description: "Developer" },
]

const breadAndRoses: TeamMember[] = [
    { name: "Amelia Bermack", description: "Developer" },
    { name: "An Tran", description: "Designer" },
    { name: "Conrad Hsu", description: "Developer" },
    { name: "Hanah Kim", description: "Developer" },
    { name: "Jason Miller", description: "Developer" },
    { name: "Johnny Tan", description: "Project Manager" },
    { name: "Jonah Pflaster", description: "Developer" },
    { name: "Justin Paik", description: "Developer" },
    { name: "Manuel Pena", description: "Developer" },
    { name: "Tammi Tran", description: "Developer" },
    { name: "Tomas Maranga", description: "Developer" },
    { name: "Vina Le", description: "Developer" },
    { name: "Won Kim", description: "Technical Lead" },
]

const dillarAcademy: TeamMember[] = [
    { name: "Aryaa Modi", description: "Developer" },
    { name: "Claire Lee", description: "Developer" },
    { name: "Donatello Sassaroli", description: "Developer" },
    { name: "Fahim Rashid", description: "Developer" },
    { name: "John Puka", description: "Developer" },
    { name: "Lillian Tran", description: "Project Manager" },
    { name: "Madeline Lei", description: "Developer" },
    { name: "Megan Yi", description: "Technical Lead" },
    { name: "Spencer Anderson", description: "Developer" },
    { name: "Sydnie Chen", description: "Designer" },
    { name: "Togzhan Zhumadil", description: "Developer" },
    { name: "Tony Nguyen", description: "Developer" },
    { name: "Yi Gu", description: "Developer" }
]

const englishAtLarge: TeamMember[] = [
    { name: "Ava Sim", description: "Developer" },
    { name: "Clarence Yeh", description: "Technical Lead" },
    { name: "Fa Taepaisitphongse", description: "Designer" },
    { name: "Gaby Dozortsev", description: "Developer" },
    { name: "Hannah Wang", description: "Developer" },
    { name: "Javier Laveaga", description: "Developer" },
    { name: "Jennifer Luo", description: "Project Manager" },
    { name: "Jet Yotsuuye", description: "Developer" },
    { name: "Kabir Goklani", description: "Developer" },
    { name: "Keiji Numata", description: "Developer" },
    { name: "Natalie Phua", description: "Developer" },
    { name: "Owen Prendergast", description: "Developer" },
    { name: "Rakshi Rangaprasad", description: "Developer" },
    { name: "Sela Alonso", description: "Developer" },
]

const lcsTutoring: TeamMember[] = [
    { name: "Anne Wu", description: "Developer" },
    { name: "Aray Arigngazina", description: "Developer" },
    { name: "Brandon Dionisio", description: "Technical Lead" },
    { name: "Caitlyn Wei", description: "Developer" },
    { name: "Charlie Fitzpatrick", description: "Developer" },
    { name: "Dilanur Bayraktar", description: "Project Manager" },
    { name: "Hunter Niimi", description: "Developer" },
    { name: "Moya Techakalayatum", description: "Designer" },
    { name: "Rachel Snyder", description: "Developer" },
    { name: "Rainier Hardjanto", description: "Developer" },
    { name: "Seth Morton", description: "Developer" },
    { name: "Sheza Chaudhry", description: "Developer" },
    { name: "Valentina Henao", description: "Developer" },
]

const lgbtqSeniorHousing: TeamMember[] = [
    { name: "Andrea Cabochan", description: "Developer" },
    { name: "Andrés Ruvalcaba", description: "Developer" },
    { name: "Ash Sze", description: "Developer" },
    { name: "Benson Jiang", description: "Developer" },
    { name: "Charles Mitchell", description: "Project Manager" },
    { name: "Cliodhna Reidy", description: "Developer" },
    { name: "Dylan Perkins", description: "Developer" },
    { name: "Haijun Si", description: "Technical Lead" },
    { name: "Hailey Baughman", description: "Developer" },
    { name: "Harrison Chang", description: "Developer" },
    { name: "Maggie Yan", description: "Developer" },
    { name: "Phuong Nguyen", description: "Designer" }
]

const newEnglandIProject: TeamMember[] = [
    { name: "Brandon Huang", description: "Developer" },
    { name: "Dhruvii Mehta", description: "Developer" },
    { name: "Henri Comer", description: "Developer" },
    { name: "Kevin Aka", description: "Developer" },
    { name: "Lizzie Pimental", description: "Designer" },
    { name: "Mallory Ewing", description: "Developer" },
    { name: "Märten Tropp", description: "Developer" },
    { name: "Sarah Svahn", description: "Project Manager" },
    { name: "Siara Small", description: "Technical Lead" }
]

const somervilleMuseum: TeamMember[] = [
    { name: "Angie Zhang", description: "Developer" },
    { name: "Arietta M. Goshtasby", description: "Developer" },
    { name: "Daniel Glorioso", description: "Developer" },
    { name: "Elias Schwartz", description: "Developer" },
    { name: "Elisa Yu", description: "Developer" },
    { name: "Hannah Jiang", description: "Designer" },
    { name: "Holden Kittelberger", description: "Project Manager" },
    { name: "Martyna Romanowski", description: "Developer" },
    { name: "Massimo Bottari", description: "Developer" },
    { name: "Peter Morganelli", description: "Developer" },
    { name: "Shayne Sidman", description: "Developer" },
    { name: "William Goldman", description: "Developer" },
    { name: "Zack White", description: "Technical Lead" }
]

const theWilyNetwork: TeamMember[] = [
    { name: "Alana Sendlakowski", description: "Technical Lead" },
    { name: "Alekha Rao", description: "Developer" },
    { name: "Allison Zhang", description: "Developer" },
    { name: "Avery Hanna", description: "Project Manager" },
    { name: "Chiara Martello", description: "Developer" },
    { name: "Jonathan Chung", description: "Developer" },
    { name: "Kenny Zheng", description: "Developer" },
    { name: "Kerem Ozturk", description: "Developer" },
    { name: "Khrystyna Blyshchak", description: "Developer" },
    { name: "Lawer Nyako", description: "Developer" },
    { name: "Logan Payan", description: "Developer" },
    { name: "Oliver Bello", description: "Developer" },
    { name: "Shannon Chen", description: "Designer" }
]

const tuftsUniversityCounsel: TeamMember[] = [
    { name: "Jordan Pittignano", description: "Developer" },
    { name: "Josh Lamothe", description: "Developer" },
    { name: "Keegan Carnell", description: "Developer" },
    { name: "Liam Smith", description: "Developer" },
    { name: "Lindsay Ulrey", description: "Developer" },
    { name: "Livia Bednarz", description: "Designer" },
    { name: "Rebecca Dinsmore", description: "Project Manager" },
    { name: "Sachin Zachariah", description: "Technical Lead" },
    { name: "Sandra Alnamous", description: "Developer" },
    { name: "Zach Klein", description: "Developer" }
]

const villageFoodHub: TeamMember[] = [
    { name: "Alex Violet", description: "Developer" },
    { name: "Amanda Wu", description: "Developer" },
    { name: "Arcadia Ohnemus", description: "Designer" },
    { name: "Charlie Koenig", description: "Developer" },
    { name: "Daniel Jakab", description: "Developer" },
    { name: "Ella Hou", description: "Developer" },
    { name: "Emily Yuan", description: "Developer" },
    { name: "Idil Kolabas", description: "Project Manager" },
    { name: "Jiyoon Choi", description: "Technical Lead" },
    { name: "Sofia Alvazzi", description: "Developer" },
    { name: "Tanisha Laud", description: "Developer" },
    { name: "Vanessa Rose", description: "Developer" },
    { name: "Zoya Amrit", description: "Developer" }
]

const wmcc: TeamMember[] = [
    { name: "Agatha Yang", description: "Developer" },
    { name: "Ali Macun", description: "Developer" },
    { name: "Allen Wang", description: "Developer" },
    { name: "Alyssa Williams", description: "Technical Lead" },
    { name: "Andy Xu", description: "Designer" },
    { name: "Ashley Huang", description: "Developer" },
    { name: "Daniel Graham", description: "Project Manager" },
    { name: "Johann Zhang", description: "Developer" },
    { name: "Kalyan Patel", description: "Developer" },
    { name: "Katherine Deane", description: "Developer" },
    { name: "Lisa Dang", description: "Developer" },
    { name: "Neya Krishnan", description: "Project Manager" },
    { name: "Sophie Zhou", description: "Developer" },
    { name: "Tika Capon", description: "Developer" },
    { name: "Winston Hsiao", description: "Technical Lead" }
]

const teams = [
    { name: "A2 Empowerment", members: a2empowerment },
    { name: "Bread & Roses", members: breadAndRoses },
    { name: "Dillar Academy", members: dillarAcademy },
    { name: "English at Large", members: englishAtLarge },
    { name: "LCS Tutoring", members: lcsTutoring },
    { name: "LGBTQ Senior Housing", members: lgbtqSeniorHousing },
    { name: "New England Innocence Project", members: newEnglandIProject },
    { name: "Somerville Museum", members: somervilleMuseum },
    { name: "The Wily Network", members: theWilyNetwork },
    { name: "Tufts University Counsel", members: tuftsUniversityCounsel },
    { name: "Village Food Hub", members: villageFoodHub },
    { name: "West Medford Community Center", members: wmcc }
];

/* Using member names and team name create the path for the images, updates
   the src to every team member */
teams.forEach(team => {
    team.members = team.members.map(member => ({
        ...member,
        src: `/alumni/${team.name}/${member.name}.png`
    } as { name: string; description: string; src: string }));
});

/* component that maps all the teams, and then maps all its members in a
   card format */
/* Autosorts so roles go PM, TL, Designer, and then devs by alpha last name */
const alumni: React.FC = () => {
    return (
        <div>
            <div className="mb-8">
                <h2 className="text-2xl md:text-3xl lg:text-5xl text-white font-bold">Alumni 2024-2025</h2>
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
                                <PictureFrame key={index} src={member.src!} name={member.name} description={member.description} />
                            ))
                        }
                    </div>
                </div>
            ))}
        </div>
    );
}

export default alumni;