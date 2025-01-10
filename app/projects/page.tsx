import Button from "@/components/button";
import Hero from "@/components/hero";

export default function ProjectsPage() {
  return (
    <div>
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
    </div>
  );
}
