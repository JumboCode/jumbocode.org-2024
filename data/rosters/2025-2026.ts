import { CLOUDINARY_BASE } from "../cloudinary";
import type { EboardMember, Team } from "./index";

const YEAR = "2025-2026";
const toFilename = (name: string) =>
    `${YEAR}_${name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '_')}`;

export const eboard: EboardMember[] = [
    { src: `${CLOUDINARY_BASE}/${toFilename("Holden Kittelberger")}.png`, name: "Holden Kittelberger", description: "President" },
    { src: `${CLOUDINARY_BASE}/${toFilename("Lillian Tran")}.png`, name: "Lillian Tran", description: "Co-President" },
    { src: `${CLOUDINARY_BASE}/${toFilename("Will Soylemez")}.png`, name: "Will Soylemez", description: "Head of Engineering" },
    { src: `${CLOUDINARY_BASE}/${toFilename("Dilanur Bayraktar")}.png`, name: "Dilanur Bayraktar", description: "Head of Project Management" },
    { src: `${CLOUDINARY_BASE}/${toFilename("Jennifer Luo")}.png`, name: "Jennifer Luo", description: "Head of Project Management" },
    { src: `${CLOUDINARY_BASE}/${toFilename("Hannah Jiang")}.png`, name: "Hannah Jiang", description: "Head of Design" },
    { src: `${CLOUDINARY_BASE}/${toFilename("Aryaa Modi")}.png`, name: "Aryaa Modi", description: "Head of Operations" },
    { src: `${CLOUDINARY_BASE}/${toFilename("Claire Lee")}.png`, name: "Claire Lee", description: "Head of Communications" },
    { src: `${CLOUDINARY_BASE}/${toFilename("Daniel Graham")}.png`, name: "Daniel Graham", description: "Head of Client Management" },
    { src: `${CLOUDINARY_BASE}/${toFilename("Elisa Yu")}.png`, name: "Elisa Yu", description: "Head of Client Management" },
    { src: `${CLOUDINARY_BASE}/${toFilename("Dan Glorioso")}.png`, name: "Dan Glorioso", description: "JumboHack Liaison" },
];

const rawTeams: Team[] = [
    {
        name: "Artists for Humanity",
        members: [
            { name: "John Puka", description: "Project Manager" },
            { name: "Lauren Wu", description: "Technical Lead" },
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
            { name: "Cooper Golemme", description: "Technical Lead" },
            { name: "An Tran", description: "Designer" },
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
            { name: "Ava Sim", description: "Project Manager" },
            { name: "Manuel Pena", description: "Technical Lead" },
            { name: "Chau Ba Ngo", description: "Designer" },
            { name: "Julia Shen", description: "Designer" },
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
            { name: "Amitav Nott", description: "Technical Lead" },
            { name: "Fatima Tahir", description: "Designer" },
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
            { name: "Luis Suarez", description: "Project Manager" },
            { name: "Yoda Ermias", description: "Technical Lead" },
            { name: "Allen Wang", description: "Designer" },
        ],
    },
    {
        name: "Commonwealth Kitchen",
        members: [
            { name: "Jordan Pittignano", description: "Project Manager" },
            { name: "Zack White", description: "Technical Lead" },
            { name: "Angie Zhang", description: "Designer" },
            { name: "Sophia Yung", description: "Designer" },
        ],
    },
    {
        name: "Food for Free",
        members: [
            { name: "Riddhi Sahni", description: "Project Manager" },
            { name: "Benjamin Li", description: "Technical Lead" },
            { name: "Chelsea Camp", description: "Designer" },
        ],
    },
    {
        name: "Food Link",
        members: [
            { name: "Ada Wu", description: "Project Manager" },
            { name: "Gabe Klaris", description: "Technical Lead" },
            { name: "Madison Johnson", description: "Designer" },
        ],
    },
    {
        name: "Lexington Zero Waste",
        members: [
            { name: "Rindha Reddy", description: "Project Manager" },
            { name: "Ha Nguyen", description: "Technical Lead" },
            { name: "Summer Peterson", description: "Designer" },            // ...
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
            { name: "Lakshita Jain", description: "Project Manager" },
            { name: "Vanessa Rose", description: "Technical Lead" },
            { name: "Chloe Wong", description: "Designer" },  
        ],
    },
    {
        name: "The Loop Lab",
        members: [
            { name: "Stella Matsukawa", description: "Project Manager" },
            { name: "Keiji Numata", description: "Technical Lead" },
            { name: "Ke Chen", description: "Designer" },  
        ],
    },
];

export const teams: Team[] = rawTeams.map(team => ({
    ...team,
    members: team.members.map(member => ({
        ...member,
        src: `${CLOUDINARY_BASE}/${toFilename(member.name)}.png`,
    })),
}));
