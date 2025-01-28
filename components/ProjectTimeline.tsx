/**
 * @fileoverview Displays JumboCode's yearly project timeline in graphical form 
 * 
 * @file ProjectTimeline.tsx
 * @date January 26th, 2025
 * @author Gabriel Sessions
 */

import clsx from "clsx";

interface ProjectTimelineProps {
  className?: string
}

const timelineMonths = [
  "Sep.",
  "Oct.",
  "Nov.",
  "Dec.",
  "Jan.",
  "Feb.",
  "Mar.",
  "Apr.",
  "May"
];

export default function ProjectTimeline(props: ProjectTimelineProps) {
  return (
    <>
      <div className={clsx(props.className)}>
        <h3 className="text-center mb-8 lg:mb-16 text-3xl text-white font-semibold">Project Timeline</h3>

        {/* Desktop/Large Screen View */}
        <div className="hidden lg:grid lg:grid-cols-9 lg:grid-rows-3 lg:gap-y-2 items-center">
          {
            timelineMonths.map((month, idx) => {
              return (
                <div
                  className={clsx(
                    idx === 0 && "border-l",
                    "border-white border-r mb-1"
                  )
                  } key={idx}
                >
                  <p className="text-white text-center p-3">{month}</p>
                </div>

              )
            })
          }

          {/* Second Row */}
          <TimelineBlob
            className="bg-brand col-span-2"
            textClassName="text-black"
            text="Onboarding"
          />

          <div className="col-span-4" />

          <TimelineBlob
            className="bg-brand col-span-2"
            textClassName="text-black"
            text="Deployment"
          />

          <div />

          {/* Third Row */}
          <div />

          <TimelineBlob
            className="bg-[#5745E2] col-span-6"
            textClassName="text-white"
            text="Project Development"
          />

          <TimelineBlob
            className="bg-[#828282] col-span-2 ml-16"
            textClassName="text-white"
            text="Handoff"
          />

        </div>

        {/* Mobile View */}
        <div className="mx-4 space-y-4 lg:hidden">
          <TimelineBlob
            className="bg-brand"
            textClassName="text-black"
            text="Sep - Oct: Onboarding"
          />

          <TimelineBlob
            className="bg-[#5745E2]"
            textClassName="text-white"
            text="Oct - Mar: Project Development"
          />

          <TimelineBlob
            className="bg-brand"
            textClassName="text-black"
            text="Mar - May: Deployment"
          />

          <TimelineBlob
            className="bg-[#828282]"
            textClassName="text-white"
            text="Apr - May: Handoff"
          />

        </div>

      </div>
    </>
  )
}

interface TimelineBlobProps {
  className?: string,
  textClassName?: string,
  text: string
}

function TimelineBlob(props: TimelineBlobProps) {

  return (
    <div className={clsx("border-transparent rounded-[41px] align-middle", props.className)}>
      <p className={clsx("text-lg lg:text-[26px] text-center font-semibold px-7 py-1 lg:py-2", props.textClassName)}>
        {props.text}
      </p>
    </div>

  )
}