/**
 * @fileoverview The "Our Mission" section on the JumboCode homepage
 * 
 * @file OurMission.tsx
 * @date January 5th, 2025
 * @author Gabriel Sessions
 */

import FeaturedTextBlock from "./FeaturedTextBlock"

const ourMissionText = {
  title: "Our mission",
  featuredText:
    <>
      To <span className="text-brand">strengthen communities</span> by developing custom software solutions that promote change and <span className="text-brand">foster student growth</span>.
    </>
}

export default function OurMission() {

  return (
    <>
      <FeaturedTextBlock {...ourMissionText} />
    </>
  )
}