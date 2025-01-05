/**
 * @fileoverview A section that displays a set of large statistics 
 * and statistic descriptions.
 * 
 * @file FeaturedStatistics.tsx
 * @date January 5th, 2023
 * @author Gabriel Sessions
 *  
 */

import clsx from "clsx"

interface FeaturedStatisticsProps {
  statistics: Array<Statistic>,
  className?: string
}

/**
 * Displays a set of statistics in a row (or column depending on screen size)
 * 
 * @param props - An array of statistics to be fed into DisplayStatistic 
 */
export default function FeaturedStatistics(props: FeaturedStatisticsProps) {
  return (
    <div className={
      clsx(
        "block md:flex justify-center md:space-x-6 lg:space-x-16 flex-wrap space-y-8 md:space-y-0 text-center",
        props.className
      )
    }>
      {
        props.statistics.map((stat, idx) =>
          <div key={idx}>
            <DisplayStatistic
              key={idx}
              {...stat}
            />
          </div>
        )
      }
    </div>
  )
}

interface Statistic {
  statistic: string,
  label: string
}

/**
 * Displays a bold statistic (e.g. number) 
 * and a short description of the statistic
 * 
 * @param props - A statistic and a descriptor (label)
 */
function DisplayStatistic(props: Statistic) {
  return (
    <>
      <div className="text-white">
        <h2 className="font-semibold text-2xl md:text-3xl lg:text-5xl mb-2">{props.statistic}</h2>
        <h3 className="font-normal text-md md:text-lg lg:text-xl">{props.label}</h3>
      </div>
    </>
  )
}