import data from "@/app/(main)/projects/projectsData.json";
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

type Project = {
  name: string;
  description: string;
  summary: string;
  "project-goal": string;
  "tech-stack": string[];
  "final-screens": string[];
  logo?: string; // optional filename override, e.g. "logo.jpg" (defaults to "${slug}.png")
};

type ProjectsData = Record<string, Record<string, Project>>;

const projects = data as ProjectsData;

// The most recent year in the data is treated as the current year
const currentYear = Object.keys(projects).at(-1)!;

export function getProjectPageData(slug: string): ProjectPageProps | null {
  for (const [year, yearProjects] of Object.entries(projects)) {
    if (!(slug in yearProjects)) continue;
    const project = yearProjects[slug];
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
  return Object.values(projects).flatMap((yearProjects) => Object.keys(yearProjects));
}

export function getProjectCards(): Record<string, Record<string, ProjectProps>> {
  const result: Record<string, Record<string, ProjectProps>> = {};
  for (const [year, yearProjects] of Object.entries(projects)) {
    result[year] = {};
    for (const [slug, project] of Object.entries(yearProjects)) {
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
