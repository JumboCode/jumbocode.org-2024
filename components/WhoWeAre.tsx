/**
 * @fileoverview The "Who We Are" section of the JumboCode homepage.
 * 
 * @file WhoWeAre.tsx
 * @date January 5th, 2025
 * @author Gabriel Sessions
 */

import FeaturedStatistics from "./FeaturedStatistics";
import FeaturedTextBlock from "./FeaturedTextBlock";
import ImageCarousel from "./ImageCarousel";

const whoWeAreText = {
  title: "Who we are",
  featuredText:
    <>
      JumboCode is a <span className="text-brand">student-run digital agency</span> at Tufts University that provides custom and high-quality <span className="text-brand">software to nonprofits</span> through year-long pro bono projects.
    </>
}

const whoWeAreImages = [
  {
    src: "/homepage/who-we-are-4.png",
    alt: "Project presentation"
  },
  {
    src: "/homepage/who-we-are-1.png",
    alt: "A live demo at JumboCode final presentations"
  },
  {
    src: "/homepage/who-we-are-2.png",
    alt: "JumboCode Team Photo"
  },
  {
    src: "/homepage/who-we-are-3.png",
    alt: "A team having fun at a JumboCode hack night"
  },
  {
    src: "/homepage/who-we-are-5.png",
    alt: "JumboHack programmers working on their projects"
  }
];

const featuredStatistics = [
  {
    statistic: "170+",
    label: "Annual Members"
  },
  {
    statistic: "80K+",
    label: "Hours Volunteered"
  },
  {
    statistic: "75+",
    label: "Shipped Apps"
  }
]

export default function WhoWeAre() {
  return (
    <>
      <div>
        <FeaturedTextBlock {...whoWeAreText} />
        <ImageCarousel
          images={whoWeAreImages}
          className="py-8 md:pb-8 lg:py-20"
        />
        <FeaturedStatistics
          statistics={featuredStatistics}
          className={"py-8 md:mt-8 lg:py-12 lg:pb-20"}
        />

      </div>
    </>
  )
}

