"use client"
import Image from "next/image";

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
  return (
    <div className="gap-x-6 space-y-12">
      {Object.entries(props.projects).map(([year, projects]) => (
        Object.entries(projects).map(([projectId, project]) => (
          <div key={projectId} className="">
            <PastProjectCard
              key={projectId}
              name={project.name}
              img={project.img}
              description={project.description}
              href={`/dev/projects/${projectId}`}
            />
          </div>
        ))
      ))}

    </div>
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