import { ImageProps } from "@/components/ImageCarousel";
import ProjectPage, { ProjectPageProps } from "@/components/Projects/ProjectPage";
import { notFound } from "next/navigation";


const getTechStack = ((displayName: string, name: string): { name: string; logo: ImageProps } => {
  return {
    name: displayName,
    logo: {
      src: `/projects/tech-stacks/${name}.png`,
      alt: `${displayName} Logo`
    }
  }
})

// Example JSON for HomeStart

const projects: Record<string, ProjectPageProps> = {
  homestart: {
    hero: {
      projectName: "HomeStart",
      schoolYear: "2023-24",
      image: {
        src: "/projects/2023-24/homestart/hero_img.png",
        alt: "HomeStart About Page: Mission and Our Services"
      }
    },

    overview: {
      logo: {
        src: "/projects/2023-24/homestart/homestart_logo.png",
        alt: "HomeStart Logo"
      },
      summary: "HomeStart is a Boston non-profit that provides services for people who are currently experiencing homelessness, have recently moved from homelessness to housing, or are at risk of becoming homeless through eviction.",
      projectGoal: "Create a web-app for a phone or tablet platform that allows clients to answer surveys and admin to manage and analyze the data.",
      teamMembers: {
        leadership: "Rebecca Dinsmore (PM), Rusny Rahman (TL), Wilson Skinner (Designer)",
        developers: "Rindha Reddy, Andersen Prince, Eddy He, Ranvir Malik, Kerwin Teh, Jennifer Luo, Jack Flores, Ashley Jeon, Logan Yuan, Rohan Valia"
      },
      teamPicture: {
        src: "/projects/2023-24/homestart/homestart_team_photo.jpg",
        alt: "HomeStart Team Photo"
      }
    },
    techStack: [
      getTechStack("JavaScript", "javascript"),
      getTechStack("React", "react"),
      getTechStack("TailwindCSS", "tailwind"),
      getTechStack("MongoDB", "mongodb"),
      getTechStack("Prisma", "prisma"),
      getTechStack("Next.js", "nextjs")
    ],

    finalScreens: [
      {
        src: "/projects/2023-24/homestart/survey_img3.png",
        alt: "[TBD]"
      },
      {
        src: "/projects/2023-24/homestart/survey_img2.png",
        alt: "[TBD]"
      },
      {
        src: "/projects/2023-24/homestart/survey_img1.png",
        alt: "[TBD]"
      },
      {
        src: "/projects/2023-24/homestart/admin_data_overview.png",
        alt: "[TBD]"
      }
    ]
  },

};

interface ProjectShowcasePageProps {
  params: {
    project?: string;
  };
}

export default function ProjectShowcasePage(props: ProjectShowcasePageProps) {

  const { project } = props.params;

  if (!project || !(project in projects))
    return notFound();

  return (
    <>
      <ProjectPage
        {...projects[project]}
      />
    </>
  )
}