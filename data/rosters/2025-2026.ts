import type { EboardMember, Team } from "./index";

export const eboard: EboardMember[] = [
    { src: "/eboard/holden_kittelberger.png", name: "Holden Kittelberger", description: "Co-President" },
    { src: "/eboard/lillian_tran.png", name: "Lillian Tran", description: "Co-President" },
    { src: "/eboard/will_soylemez.png", name: "Will Soylemez", description: "Head of Engineering" },
    { src: "/eboard/dilanur_bayraktar.png", name: "Dilanur Bayraktar", description: "Head of Project Management" },
    { src: "/eboard/jennifer_luo.png", name: "Jennifer Luo", description: "Head of Project Management" },
    { src: "/eboard/hannah_jiang.png", name: "Hannah Jiang", description: "Head of Design" },
    { src: "/eboard/aryaa_modi.png", name: "Aryaa Modi", description: "Head of Operations" },
    { src: "/eboard/claire_lee.png", name: "Claire Lee", description: "Head of Communications" },
    { src: "/eboard/daniel_graham.png", name: "Daniel Graham", description: "Head of Client Management" },
    { src: "/eboard/elisa_yu.png", name: "Elisa Yu", description: "Head of Client Management" },
    { src: "/eboard/dan_glorioso.png", name: "Dan Glorioso", description: "JumboHack Liaison" },
];

const rawTeams: Team[] = [
    {
        name: "Artists for Humanity",
        members: [
            { name: "John Puka", description: "Developer" },
            { name: "Subhanga Upadhyay", description: "Developer" },
            { name: "Shannon Chen", description: "Developer" },
            { name: "Charles Rowe", description: "Developer" },
            { name: "Cheng Xi Tsou", description: "Developer" },
            { name: "Ysabella Vargas", description: "Developer" },
            { name: "Kayleen Tang", description: "Developer" },
            { name: "Tyler Cowles", description: "Developer" },
            { name: "Yifan Vicky Zhu", description: "Developer" },
            { name: "Dylan Perkins", description: "Developer" },
            { name: "Samson Nguyen", description: "Developer" },
            { name: "Lina Jeffers", description: "Developer" },
            { name: "Dylan Yu", description: "Developer" },
            { name: "Lily Comeau", description: "Developer" },
        ],
    },
    {
        name: "Beantown Baby Diaper Bank",
        members: [
            { name: "Dilanur Bayraktar", description: "Project Manager" },
            { name: "Cooper Golemme", description: "Developer" },
            { name: "An Tran", description: "Developer" },
            { name: "Rakshi Rangaprasad", description: "Developer" },
            { name: "Aray Argingazina", description: "Developer" },
            { name: "Colin Ho", description: "Developer" },
            { name: "Valentina Henao", description: "Developer" },
            { name: "Elchin Alishov", description: "Developer" },
            { name: "Caitlyn Wei", description: "Developer" },
            { name: "Ashton Shen", description: "Developer" },
            { name: "Aryaa Modi", description: "Developer" },
            { name: "Anna Zou", description: "Developer" },
            { name: "Hanah Kim", description: "Developer" },
            { name: "Madeline Lei", description: "Developer" },
        ],
    },
    {
        name: "Boston Community Pediatrics",
        members: [
            { name: "Ava Sim", description: "Developer" },
            { name: "Manuel Pena", description: "Developer" },
            { name: "Chau Ba Ngo", description: "Developer" },
            { name: "Peter Llamas", description: "Developer" },
            { name: "Jeremiah Longino", description: "Developer" },
            { name: "Bezawit Gessesse", description: "Developer" },
            { name: "Mina Shimada", description: "Developer" },
            { name: "Natalie Arai", description: "Developer" },
            { name: "Priyanka Onta", description: "Developer" },
            { name: "Logan Yuan", description: "Developer" },
            { name: "Tomas Maranga", description: "Developer" },
            { name: "Eduardo Hernandez", description: "Developer" },
            { name: "Haley McWilliams", description: "Developer" },
        ],
    },
    {
        name: "Boston's Higher Ground",
        members: [
            { name: "Jennifer Luo", description: "Project Manager" },
            { name: "Amitav Nott", description: "Developer" },
            { name: "Fatima Tahir", description: "Developer" },
            { name: "Weston Starbird", description: "Developer" },
            { name: "Kai Kaplinsky", description: "Developer" },
            { name: "Kristy Yau", description: "Developer" },
            { name: "Anson Kwan", description: "Developer" },
            { name: "Aadit Zaveri", description: "Developer" },
            { name: "Hande Naz Kavas", description: "Developer" },
        ],
    },
    {
        name: "Breaktime",
        members: [
            { name: "Person Name", description: "Developer" },
            // ...
        ],
    },
    {
        name: "Commonwealth Kitchen",
        members: [
            { name: "Person Name", description: "Developer" },
            // ...
        ],
    },
    {
        name: "Food for Free",
        members: [
            { name: "Person Name", description: "Developer" },
            // ...
        ],
    },
    {
        name: "Food Link",
        members: [
            { name: "Person Name", description: "Developer" },
            // ...
        ],
    },
    {
        name: "Lexington Zero Waste",
        members: [
            { name: "Person Name", description: "Developer" },
            // ...
        ],
    },
    {
        name: "Massachusetts History Day",
        members: [
            { name: "Dan Glorioso", description: "Project Manager" },
            { name: "Shayne Sidman", description: "Technical Lead" },
            { name: "Tika Capon", description: "Designer" },
            { name: "Anne Wu", description: "Developer" },
            { name: "Chiara Martello", description: "Developer" },
            { name: "Elki Laranas", description: "Developer" },
            { name: "Hansini Gundavarapu", description: "Developer" },
            { name: "Jack Liu", description: "Developer" },
            { name: "Justin Ngan", description: "Developer" },
            { name: "Steven Bagade", description: "Developer" },
            { name: "Will O'Leary", description: "Developer" },
            { name: "Zander Barba", description: "Developer" },
        ],
    },
    {
        name: "School on Wheels",
        members: [
            { name: "Person Name", description: "Developer" },
            // ...
        ],
    },
    {
        name: "The Loop Lab",
        members: [
            { name: "Person Name", description: "Developer" },
            // ...
        ],
    },
];

export const teams: Team[] = rawTeams.map(team => ({
    ...team,
    members: team.members.map(member => ({
        ...member,
        src: `/alumni/${team.name}/${member.name}.png`,
    })),
}));
