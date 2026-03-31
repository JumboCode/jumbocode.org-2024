import ProjectPage, { ProjectPageProps } from "@/components/Projects/ProjectPage";
import { notFound } from "next/navigation";
import projects from "../projects.json";
import { ROSTERS, YEARS } from "@/data/rosters";

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

  const projectPath = `/projects/${project}`;
  const rosterTeam = YEARS
    .flatMap(year => ROSTERS[year].teams)
    .find(team => team.link === projectPath);

  return (
    <>
      <ProjectPage {...typedProjects[project]} rosterMembers={rosterTeam?.members} />
    </>
  );
}