import CurrentProjects from "@/components/Projects/CurrentProjects";
import projects from "./projectCards.json";


export default function MainProjectPage() {
  const currentProjects = projects["2024-2025"];
  return (
    <>

      {<CurrentProjects projects={currentProjects} />}
    </>
  )
}

