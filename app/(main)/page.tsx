import Button from "@/components/button";
import GetInvolved from "@/components/get-involved";
import Hero from "@/components/hero";
import MemberCareerPaths from "@/components/MemberCareerPaths";
import OurMission from "@/components/OurMission";
import WhatWeDo from "@/components/what-we-do";
import WhoWeAre from "@/components/WhoWeAre";

export default function HomePage() {
  return (
    <div>
      <Hero
        title={
          <>
            Jumbo<span className="text-brand">Code</span>
          </>
        }
        subtitle={<>Empowering students, elevating non-profits.</>}
        buttons={
          <>
            <Button text="What we do" href="/about" variant="secondary" />
            <Button text="Get involved" href="/apply" variant="primary" />
          </>
        }
      />

      <WhoWeAre />

      <OurMission />

      <div className="mt-24">
        <WhatWeDo variant="compact" />
      </div>

      <div className="mt-36">
        <GetInvolved />
      </div>

      <div className="mt-48">
        <MemberCareerPaths />
      </div>
    </div>
  );
}
