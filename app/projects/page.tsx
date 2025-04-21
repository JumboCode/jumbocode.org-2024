import Button from "@/components/button";
import Hero from "@/components/hero";
import CurrentProjects from "@/components/Projects/CurrentProjects";
import PastProjects from "@/components/Projects/PastProjects";
import projects from "./projectCards.json";

export default function MainProjectPage() {
  const currentYear = "2024-2025"
  const currentProjects = projects[currentYear];
  const pastProjects = Object.fromEntries(
    Object.entries(projects).filter(([year]) => year !== currentYear)
  );
  return (
    <>
      <Hero
        title={<>Projects</>}
        subtitle={<>Check out our current and past projects!</>}
        buttons={
          <Button
            text="View our GitHub"
            href="https://github.com/jumbocode"
            variant="secondary"
          />
        }
      />
      <CurrentProjects projects={currentProjects} />
      <PastProjects projects={pastProjects} />
    </>
  )
}

