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
    path: "/homepage/who-we-are-1.png",
    altText: "A live demo at JumboCode final presentations"
  },
  {
    path: "/homepage/who-we-are-2.png",
    altText: "JumboCode Team Photo"
  },
  {
    path: "/homepage/who-we-are-3.png",
    altText: "A team having fun at a JumboCode hack night"
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
      <FeaturedTextBlock {...whoWeAreText} />
      <ImageCarousel
        images={whoWeAreImages}
        className="md:py-6 md:pb-8 lg:py-20"
      />
      <FeaturedStatistics
        statistics={featuredStatistics}
        className={"py-8 md:mt-8 lg:py-12 lg:pb-20"}
      />
    </>
  )
}

