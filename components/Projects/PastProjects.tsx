"use client"

interface PastProjectsProps {
  projects: {
    [key: string]: {
      name: string,
      img: ImageProps,
      description: string,
      href: string
    }
  }
}

export default function PastProjects(props: PastProjectsProps) {
  return (
    <>
      <
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        <div className="border border-gray rounded-xl p-8">
          <h3 className="text-white text-2xl font-semibold my-4 lg:my-6">2023-2024</h3>
          <p className="text-white/90 text-md leading-4">Coming Soon!</p>
        </div>
      </div>
    </>
  )
}