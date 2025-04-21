import CurrentProjects from "@/components/Projects/CurrentProjects";
import PastProjects from "@/components/Projects/PastProjects";
import projects from "./projectCards.json";


export default function MainProjectPage() {
  const currentProjects = projects["2024-2025"];
  const pastProjects = Object.keys(projects).filter((key) => key !== "2024-2025");
  return (
    <>
      <CurrentProjects projects={currentProjects} />
      <PastProjects projects={pastProjects} />
    </>
  )
}

