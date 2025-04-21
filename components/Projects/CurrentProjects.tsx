import Image from "next/image";
import Button from "../button";
import { ImageProps } from "../ImageCarousel";

export interface ProjectProps {
  name: string,
  img: ImageProps,
  description: string,
  href: string
}

interface CurrentProjectsProps {
  projects: {
    [key: string]: ProjectProps
  }
}

export default function CurrentProjects(props: CurrentProjectsProps) {
  return (
    <>
      <h2 className="text-white text-center md:text-left font-semibold text-4xl mb-12 mt-24">2024-25 Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        {Object.keys(props.projects).map((key, idx) => {
          const project = props.projects[key];
          return (
            <CurrentProjectCard key={idx} {...project} />
          )
        })}
      </div>
    </>
  )
}

function CurrentProjectCard(props: ProjectProps) {
  return (
    <>
      <div className="border border-gray rounded-xl p-8">
        <Image
          src={props.img.src}
          alt={props.img.alt}
          width={296}
          height={312}
          className="border border-transparent rounded-xl mx-auto h-48 object-cover md:h-fit"
        />
        <h3 className="text-white text-2xl font-semibold my-4 lg:my-6">{props.name}</h3>
        <p className="text-white/90 text-md leading-4">{props.description}</p>
        <div className="mt-8">
          <Button
            text="Read More"
            href={props.href}
            variant="secondary"
          />
          {props.img.src}
        </div>
      </div>
    </>
  )
}