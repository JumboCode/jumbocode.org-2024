import data from "@/app/(main)/projects/projectsData.json";
import type { ProjectPageProps } from "@/components/Projects/ProjectPage";
import type { ProjectProps } from "@/components/Projects/CurrentProjects";
import fs from "fs";
import path from "path";

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
};

type ProjectsData = Record<string, Record<string, Project>>;

const projects = data as ProjectsData;

// The most recent year in the data is treated as the current year
const currentYear = Object.keys(projects).at(-1)!;

function findProjectFile(year: string, slug: string, ...basenames: string[]): string {
  const base = path.join(process.cwd(), "public", "projects", year, slug);
  for (const basename of basenames) {
    for (const ext of ["png", "jpg", "jpeg"]) {
      if (fs.existsSync(path.join(base, `${basename}.${ext}`))) {
        return `${basename}.${ext}`;
      }
    }
  }
  return `${basenames[0]}.png`; // final fallback
}

// Returns the logo filename if a logo.* file exists, otherwise null
function findLogoFile(year: string, slug: string): string | null {
  const base = path.join(process.cwd(), "public", "projects", year, slug);
  for (const ext of ["png", "jpg", "jpeg"]) {
    const file = `logo.${ext}`;
    if (fs.existsSync(path.join(base, file))) return file;
  }
  return null;
}

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
          src: `/projects/${year}/${slug}/${findProjectFile(year, slug, "logo", slug)}`,
          alt: `${project.name} Logo`,
        },
        summary: project.summary,
        projectGoal: project["project-goal"],
        teamPicture: {
          src: `/projects/${year}/${slug}/${findProjectFile(year, slug, "team", "team-photo")}`,
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
      const isCurrent = year === currentYear;
      const logoFile = findLogoFile(year, slug);
      // Current projects: show the logo (or slug.png fallback) as the card image
      // Past projects: show the slug-named screenshot as the card image, logo separately
      const imgFile = isCurrent
        ? (logoFile ?? findProjectFile(year, slug, slug))
        : findProjectFile(year, slug, "hero");
      result[year][slug] = {
        name: project.name,
        img: { src: `/projects/${year}/${slug}/${imgFile}`, alt: `${project.name}` },
        logo: !isCurrent
          ? { src: `/projects/${year}/${slug}/${logoFile ?? findProjectFile(year, slug, "hero")}`, alt: `${project.name} Logo` }
          : undefined,
        description: project.description,
        href: `/projects/${slug}`,
      };
    }
  }
  return result;
}
