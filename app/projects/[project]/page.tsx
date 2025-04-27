import ProjectPage, { ProjectPageProps } from "@/components/Projects/ProjectPage";
import { notFound } from "next/navigation";
import projects from "../projects.json";

interface Projects {
  [key: string]: ProjectPageProps;
}

const typedProjects: Projects = projects;

interface ProjectShowcasePageProps {
  params: {
    project?: string;
  };
}

export default function ProjectShowcasePage(props: ProjectShowcasePageProps) {
  const { project } = props.params;

  if (!project || !(project in typedProjects)) return notFound();

  return (
    <>
      <ProjectPage {...typedProjects[project]} />
    </>
  );
}