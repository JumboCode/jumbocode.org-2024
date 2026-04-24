import Image from "next/image";
import Button from "../button";
import Link from "next/link";
import { ImageProps } from "../ImageCarousel";

export interface ProjectProps {
  name: string;
  img: ImageProps;
  logo?: ImageProps; // org logo shown on past project cards (separate from screenshot)
  description: string;
  href: string;
}

interface CurrentProjectsProps {
  projects: {
    [key: string]: ProjectProps;
  };
  year: string; // e.g. "2025-2026"
}

function formatYear(year: string): string {
  const [start, end] = year.split("-");
  return `${start}-${end.slice(2)}`;
}

export default function CurrentProjects(props: CurrentProjectsProps) {
  return (
    <>
      <h2 className="text-white text-center md:text-left font-semibold text-4xl mb-12">
        {formatYear(props.year)} Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        {Object.keys(props.projects).map((key, idx) => {
          const project = props.projects[key];
          return <CurrentProjectCard key={idx} {...project} />;
        })}
      </div>
    </>
  );
}

function CurrentProjectCard(props: ProjectProps) {
  return (
    <>
      <div className="border border-gray rounded-xl p-8 flex flex-col">
        <Link href={props.href}>
          <Image
            src={props.img.src}
            alt={props.img.alt}
            width={296}
            height={312}
            className="border border-transparent rounded-xl mx-auto h-48 w-48 object-contain bg-white p-2 cursor-pointer hover:opacity-80 transition-all duration-200 hover:scale-105"
          />
        </Link>
        <h3 className="text-white text-2xl font-semibold my-4 lg:my-6">
          {props.name}
        </h3>
        <p className="text-white/90 text-md mb-6">{props.description}</p>
        <div className="mt-auto">
          <Button text="Read More" href={props.href} variant="secondary" />
        </div>
      </div>
    </>
  );
}
