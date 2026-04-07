import projectsRaw from "@/app/(main)/projects/projectsRaw.json";
import projectCardsRaw from "@/app/(main)/projects/projectCardsRaw.json";
import type { ProjectPageProps } from "@/components/Projects/ProjectPage";
import type { ProjectProps } from "@/components/Projects/CurrentProjects";

const TECH_STACK_MAP: Record<string, string> = {
  javascript: "JavaScript",
  typescript: "TypeScript",
  nextjs: "Next.js",
  react: "React",
  nodejs: "Node.js",
  prisma: "Prisma",
  python: "Python",
  clerk: "Clerk",
  neon: "Neon",
  tailwind: "Tailwind CSS",
  vite: "Vite",
  postgresql: "PostgreSQL",
  nodemailer: "Nodemailer",
  nextauth: "NextAuth",
  drizzle: "Drizzle",
  mongodb: "MongoDB",
  bun: "Bun",
};

type RawProject = {
  name: string;
  summary: string;
  "project-goal": string;
  "tech-stack": string[];
  "final-screens": string[];
};

type RawProjects = Record<string, Record<string, RawProject>>;
type RawCards = Record<string, Record<string, { name: string; description: string }>>;

const raw = projectsRaw as RawProjects;
const rawCards = projectCardsRaw as RawCards;

// The most recent year in the data is treated as the current year
const currentYear = Object.keys(raw).at(-1)!;

export function getProjectPageData(slug: string): ProjectPageProps | null {
  for (const [year, projects] of Object.entries(raw)) {
    if (!(slug in projects)) continue;
    const project = projects[slug];
    const isCurrent = year === currentYear;

    return {
      hero: {
        projectName: project.name,
        schoolYear: isCurrent ? `Current Project (${year})` : `Past Project (${year})`,
        image: {
          src: `/projects/${year}/${slug}/hero.png`,
          alt: `${project.name} Hero Image`,
        },
      },
      overview: {
        logo: {
          src: `/projects/${year}/${slug}/${slug}.png`,
          alt: `${project.name} Logo`,
        },
        summary: project.summary,
        projectGoal: project["project-goal"],
        teamPicture: {
          src: `/projects/${year}/${slug}/team-photo.png`,
          alt: `${project.name} Team Photo`,
        },
      },
      techStack: project["tech-stack"].map((item) => ({
        name: TECH_STACK_MAP[item] ?? item,
        logo: {
          src: `/projects/tech-stacks/${item}.png`,
          alt: `${item.charAt(0).toUpperCase() + item.slice(1)} Logo`,
        },
      })),
      finalScreens: project["final-screens"].map((screen) => ({
        src: `/projects/${year}/${slug}/${screen}`,
        alt: "[TBD]",
      })),
    };
  }
  return null;
}

export function getAllProjectSlugs(): string[] {
  return Object.values(raw).flatMap((yearProjects) => Object.keys(yearProjects));
}

export function getProjectCards(): Record<string, Record<string, ProjectProps>> {
  const result: Record<string, Record<string, ProjectProps>> = {};
  for (const [year, projects] of Object.entries(rawCards)) {
    result[year] = {};
    for (const [slug, project] of Object.entries(projects)) {
      result[year][slug] = {
        name: project.name,
        img: {
          src: `/projects/${year}/${slug}/${slug}.png`,
          alt: `${project.name} Logo`,
        },
        description: project.description,
        href: `/projects/${slug}`,
      };
    }
  }
  return result;
}
