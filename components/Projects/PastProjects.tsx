"use client"
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

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
        logo?: ImageProps;
        description: string;
        href: string;
      };
    };
  };
}

export default function PastProjects(props: PastProjectsProps) {
  const years = Object.keys(props.projects).reverse();
  const searchParams = useSearchParams();
  const router = useRouter();

  const yearParam = searchParams.get("past-year");
  const selectedYear = years.includes(yearParam ?? "") ? yearParam! : years[0] ?? "";

  function setYear(year: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("past-year", year);
    router.replace(`?${params.toString()}`, { scroll: false });
  }

  return (
    <>
      <h2 className="text-white font-semibold text-4xl mt-12 mb-6 text-center md:text-left">Past Projects</h2>
      <div className="mb-8">
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
              logo={project.logo}
              description={project.description}
              href={`/projects/${projectId}`}
              projectKey={projectId}
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
  logo?: ImageProps;
  description: string;
  href: string;
}

function PastProjectCard(props: PastProjectCardProps & { projectKey: string }) {
  return (
    <a id={props.projectKey} href={props.href} className="min-w-full">
      <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-0 md:space-x-3 border border-off-white p-6 rounded-xl hover:border-gray-500 hover:filter hover:brightness-75 transition-all">
        <div>
          {props.logo && (
            <Image
              src={props.logo.src}
              alt={props.logo.alt}
              width={80}
              height={80}
              className="h-12 w-12 object-contain mb-3 bg-white rounded-lg p-1"
            />
          )}
          <h3 className="text-white text-xl font-semibold mb-2">{props.name}</h3>
          <p className="text-white/90 text-sm">{props.description}</p>
        </div>
        <div className="col-span-2">
          <Image
            src={props.img.src}
            alt={props.img.alt}
            className="w-full h-64 object-cover rounded-lg"
            width={500}
            height={500}
          />
        </div>
      </div>
    </a>
  );
}
