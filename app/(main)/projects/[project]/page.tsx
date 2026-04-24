import ProjectPage from "@/components/Projects/ProjectPage";
import { getProjectPageData, getAllProjectSlugs } from "@/lib/projectUtils";
import { notFound } from "next/navigation";
import { ROSTERS, YEARS } from "@/data/rosters";

interface ProjectShowcasePageProps {
  params: {
    project?: string;
  };
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ project: slug }));
}

export default function ProjectShowcasePage(props: ProjectShowcasePageProps) {
  const { project } = props.params;
  if (!project) return notFound();

  const projectData = getProjectPageData(project);
  if (!projectData) return notFound();

  const projectPath = `/projects/${project}`;
  const rosterTeam = YEARS
    .flatMap(year => ROSTERS[year].teams)
    .find(team => team.link === projectPath);

  return <ProjectPage {...projectData} projectKey={project} rosterMembers={rosterTeam?.members} />;
}
