import { Suspense } from "react";
import Button from "@/components/button";
import Hero from "@/components/hero";
import CurrentProjects from "@/components/Projects/CurrentProjects";
import PastProjects from "@/components/Projects/PastProjects";
import { getProjectCards } from "@/lib/projectUtils";

export default function MainProjectPage() {
  const projectsByYear = getProjectCards();
  const currentYear = Object.keys(projectsByYear).at(-1)!;
  const currentProjects = projectsByYear[currentYear] ?? {};
  const pastProjects = Object.fromEntries(
    Object.entries(projectsByYear).filter(([year]) => year !== currentYear)
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
      <CurrentProjects projects={currentProjects} year={currentYear} />
      <Suspense fallback={<div>Loading past projects...</div>}>
        <PastProjects projects={pastProjects} />
      </Suspense>
    </>
  )
}
