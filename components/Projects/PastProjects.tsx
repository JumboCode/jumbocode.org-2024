"use client"
import Image from "next/image";
import { useState } from "react";

interface ImageProps {
  src: string;
  alt: string;
}

interface PastProjectsProps {
  projects: {
    [key: string]: {
      [key: string]: {
        name: string;
        img: ImageProps;
        description: string;
        href: string;
      };
    };
  };
}

export default function PastProjects(props: PastProjectsProps) {
  const years = Object.keys(props.projects).reverse();
  const [selectedYear, setYear] = useState(years[0] ?? "");

  return (
    <>
      <div className="mt-12 mb-8">
        <div className="relative inline-block">
          <select
            value={selectedYear}
            onChange={(e) => setYear(e.target.value)}
            className="appearance-none bg-transparent border border-off_white/40 hover:border-off_white text-white rounded-lg pl-4 pr-12 py-2.5 text-base font-medium cursor-pointer focus:outline-none focus:border-brand transition-colors"
          >
            {years.map((year) => (
              <option key={year} value={year} className="text-white bg-black">
                {year}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
            <svg className="w-4 h-4 text-off_white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      <div className="gap-x-6 space-y-8">
        {selectedYear && Object.entries(props.projects[selectedYear]).map(([projectId, project]) => (
          <div key={projectId}>
            <PastProjectCard
              name={project.name}
              img={project.img}
              description={project.description}
              href={`/projects/${projectId}`}
            />
          </div>
        ))}
      </div>
    </>
  );
}

interface PastProjectCardProps {
  name: string;
  img: ImageProps;
  description: string;
  href: string;
}

function PastProjectCard(props: PastProjectCardProps) {
  return (
    <a
      href={props.href}
      className="min-w-full"
    >
      <div className="grid grid-cols-3 space-x-3 border border-off-white p-6 rounded-xl hover:border-gray-500 hover:filter hover:brightness-75 transition-all">
        <div>
          <h3 className="text-white text-xl font-semibold mb-2">{props.name}</h3>
          <p className="text-white/90 text-sm">{props.description}</p>
        </div>
        <div className="col-span-2">
          <Image
            src={props.img.src}
            alt={props.img.alt}
            className="w-full h-64 object-cover rounded-lg mb-4"
            width={500}
            height={500}
          />
        </div>
      </div>
    </a>
  );
}
