import clsx from "clsx"

interface FeaturedStatisticsProps {
  statistics: Array<Statistic>
}

export default function FeaturedStatistics(props: FeaturedStatisticsProps) {
  return (
    <div className={
      clsx(
        "py-12 md:pt-0 block md:flex justify-center md:space-x-6 lg:space-x-16 flex-wrap text-center"
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

function DisplayStatistic(props: Statistic) {
  return (
    <>
      <div className="text-white my-8">
        <h2 className="font-semibold text-2xl md:text-3xl lg:text-5xl mb-2">{props.statistic}</h2>
        <h3 className="font-normal text-md md:text-lg lg:text-xl">{props.label}</h3>
      </div>
    </>
  )
}