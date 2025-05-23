import Alumni from "@/components/alumni";
import Eboard from "@/components/eboard";
import Hero from "@/components/hero";
import ImageCollage from "@/components/ImageCollage";
import OurMission from "@/components/OurMission";
import OurPartnerships from "@/components/OurPartnerships";
import ProjectTimeline from "@/components/ProjectTimeline";
import WhatWeDo from "@/components/what-we-do";

const imgs = [
  {
    src: "/about-us/image-collage-1.png",
    alt: "JumboCode banner",
  },
  {
    src: "/about-us/image-collage-3.png",
    alt: "The Documentary Songwriters team presenting their work",
  },
  {
    src: "/about-us/image-collage-4.png",
    alt: "A team working on a game at JumboHack",
  },
  {
    src: "/about-us/image-collage-2.png",
    alt: "JumboCode developers working during hack night",
  },
];

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

      <div>
        <WhatWeDo variant="full-width" />
      </div>

      <div className="mt-12">
        <OurMission />
      </div>

      <div>
        <ImageCollage images={imgs} />
      </div>

      <div className="mt-48">
        <ProjectTimeline />
      </div>

      <div className="mt-32">
        <OurPartnerships />
      </div>

      <div className="mt-32">
        <Eboard />
      </div>

      <Alumni />
    </div>
  );
}
