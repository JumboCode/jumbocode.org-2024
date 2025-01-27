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
      <div className={props.className}>
        <h3 className="text-center mb-12 text-3xl text-white font-semibold">Project Timeline</h3>
        <div className="grid grid-cols-9 grid-rows-3 gap-y-1">
          {
            timelineMonths.map((month, idx) => {
              return (
                <div
                  className={clsx(
                    idx === 0 && "border-l",
                    "border-white border-r mb-3"
                  )
                  } key={idx}
                >
                  <p className="text-white text-center p-3">{month}</p>
                </div>

              )
            })
          }

          {/* Second Row */}
          <div className="bg-brand border-transparent rounded-[41px] col-span-2 align-middle w-full m-auto">
            <p className="text-2xl text-center font-semibold text-black px-7 py-3">
              Onboarding
            </p>
          </div>

          <div className="col-span-4" />

          <div className="bg-brand border-transparent rounded-[41px] col-span-2 align-middle w-full m-auto">
            <p className="text-2xl text-center font-semibold text-black px-7 py-3">
              Deployment
            </p>
          </div>
  
          <div />

          {/* Third Row */}
          <div />

          <div className="bg-[#5745E2] border-transparent rounded-[41px] w-full col-span-6 align-middle m-auto">
            <p className="text-2xl text-center font-semibold text-white px-7 py-3">
              Project Development
            </p>
          </div>

          <div />


          <div className="bg-[#828282] border-transparent rounded-[41px] col-span-1 align-middle m-auto">
            <p className="text-2xl text-center font-semibold text-white px-7 py-3">
              Handoff
            </p>
          </div>


        </div>

      </div>
    </>
  )
}