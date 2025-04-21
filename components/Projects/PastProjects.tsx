"use client"
import clsx from "clsx";
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
  const [selectedYear, setYear] = useState({
    label: "Past Projects",
    value: "2023-2024",
  });

  return (
    <>
      <Dropdown
        title={selectedYear.label}
        items={Object.keys(props.projects).reverse()}
        onSelect={(year) => setYear({ label: year, value: year })}
        className="mt-12 mb-4"
      />
      <div className="gap-x-6 space-y-8">
        {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
        {
          Object.entries(props.projects[selectedYear.value]).map(([projectId, project]) => (
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


interface DropdownProps {
  title: string;
  items: string[];
  onSelect: (item: string) => void;
  className?: string;
}

function Dropdown(props: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsx("relative inline-block text-left", props.className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-800 text-white px-4 p-2 rounded-md w-full flex justify-between items-center"
      >
        {props.title}
        <span className={`ml-2 transform ${isOpen ? "rotate-180" : "rotate-0"}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <ul className="absolute left-0 w-full bg-gray-900 text-white rounded-md shadow-lg z-10">
          {props.items.map((item, idx) => (
            <li
              key={idx}
              onClick={() => {
                props.onSelect(item);
                setIsOpen(false);
              }}
              className="rounded-md px-4 py-2 hover:bg-gray-700 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}