import Eboard from "@/components/eboard";
import Hero from "@/components/hero";
import OurPartnerships from "@/components/OurPartnerships";

export default function AboutPage() {
  return (
    <div>
      <Hero
        title={<>About</>}
        subtitle={
          <>
            JumboCode is a student-run digital agency at Tufts University that
            provides custom and high-quality software to nonprofits through
            year-long pro bono projects.
          </>
        }
      />
      <OurPartnerships />
      <Eboard />
    </div>
  );
}
