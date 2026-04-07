import clsx from "clsx"
import Image from "next/image"
import React from "react"
import Button from "../button"
import { ImageProps } from "../ImageCarousel"
import PictureFrame from "../PictureFrame"
import type { TeamMember } from "@/data/rosters"

// Layout of a JumboCode project page in JSON format
export interface ProjectPageProps {
  hero: {
    projectName: string,
    schoolYear: string,
    image: ImageProps,
  },
  overview: {
    logo: ImageProps,
    summary: string,
    projectGoal: string,
    teamPicture: ImageProps
  },
  techStack: Array<{
    name: string,
    logo: ImageProps
  }>,
  finalScreens: Array<ImageProps>,
  rosterMembers?: TeamMember[]
}


const h3Class = "text-white text-3xl font-semibold";

export default function ProjectPage(props: ProjectPageProps) {
  return (
    <>
      <div className="py-24 sm:py-48 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-6">
            <Image
              src={props.overview.logo.src}
              alt={props.overview.logo.alt}
              width={200}
              height={84}
              className="h-20 w-auto object-contain bg-white rounded-lg p-1"
            />
            <h1 className="text-white font-semibold text-4xl">{props.hero.projectName}</h1>
          </div>
          <h2 className="mt-4 text-white/70 text-xl font-medium">{props.hero.schoolYear}</h2>
        </div>
        <div>
          <Image
            src={props.hero.image.src}
            alt={props.hero.image.alt}
            width={700}
            height={450}
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>
      </div>

      <div className="md:grid md:grid-cols-2">
        <div>
          <TextSection
            title={props.hero.projectName}
            text={<p>{props.overview.summary}</p>}
          />
          <TextSection
            title="Project Goal"
            text={<p>{props.overview.projectGoal}</p>}
          />
        </div>

        <div className="flex justify-center items-center mx-6 mb-12 md:mb-0">
          <Image
            src={props.overview.teamPicture.src}
            alt={props.overview.teamPicture.alt}
            width={465}
            height={295}
            className="border-transparent rounded-xl"
          />
        </div>

      </div>
      {props.rosterMembers && props.rosterMembers.length > 0 && (
        <>
          <h3 className={clsx(h3Class, "mb-8")}>Team Members</h3>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-8 mb-12">
            {props.rosterMembers
              .slice()
              .sort((a, b) => {
                const roleOrder: Record<string, number> = {
                  "Project Manager": 1,
                  "Technical Lead": 2,
                  "Designer": 3,
                  "Developer": 4,
                };
                const orderA = roleOrder[a.description] ?? 5;
                const orderB = roleOrder[b.description] ?? 5;
                if (orderA !== orderB) return orderA - orderB;
                const lastA = a.name.trim().split(/\s+/).at(-1)!;
                const lastB = b.name.trim().split(/\s+/).at(-1)!;
                return lastA.localeCompare(lastB);
              })
              .map((member, idx) => (
                <PictureFrame key={idx} src={member.src!} name={member.name} description={member.description} />
              ))}
          </div>
        </>
      )}

      <h3 className={clsx(h3Class, "mb-12")}>Tech Stack</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex md:text-center md:space-y-0">
        {
          props.techStack.map((elem, idx) => {
            return (
              <div key={idx} className="m-auto text-center mb-8">
                <div className="h-[55px] flex items-center justify-center">
                  <Image
                    src={elem.logo.src}
                    alt={elem.logo.alt}
                    width={55}
                    height={55}
                  />
                </div>
                <p className="text-white mt-4">{elem.name}</p>
              </div>
            )
          })
        }
      </div>
      {
        props.finalScreens.length > 0 &&
        <>
          <h3 className={clsx(h3Class, "my-12 md:mt-4")}>Final Screens</h3>
          <div className="grid justify-center md:grid-cols-2 gap-x-7 gap-y-6">
            {props.finalScreens.map((screen, idx) => (
              <Image
                key={idx}
                src={screen.src}
                alt={screen.alt}
                width={597}
                height={450}
              />
            ))}
          </div>
        </>
      }



      <div className="flex justify-center mt-28 mb-8">
        <Button
          text="Back to Projects"
          href="/projects"
          variant="secondary"
        />
      </div>
    </>
  )
}




interface TextSectionProps {
  title: string,
  text: React.ReactNode,
  logo?: ImageProps
}
function TextSection(props: TextSectionProps) {
  return (
    <div>
      <h3 className={h3Class}>{props.title}</h3>
      <div className="text-white/90 my-4 mb-12">{props.text}</div>
    </div>
  )
}