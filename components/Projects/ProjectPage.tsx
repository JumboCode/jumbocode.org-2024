import clsx from "clsx"
import Image from "next/image"
import React from "react"
import Button from "../button"
import Hero from "../hero"
import { ImageProps } from "../ImageCarousel"
import ImageCollage from "../ImageCollage"

// Layout of a JumboCode project page in JSON format
export interface ProjectPageProps {
  hero: {
    projectName: string,
    schoolYear: string,
    image: ImageProps
  },
  overview: {
    logo: ImageProps,
    summary: string,
    projectGoal: string,
    teamMembers: {
      leadership: string,
      developers: string
    },
    teamPicture: ImageProps
  },
  techStack: Array<{
    name: string,
    logo: ImageProps
  }>,
  finalScreens: Array<ImageProps>
}

const h3Class = "text-white text-3xl font-semibold";

export default function ProjectPage(props: ProjectPageProps) {
  return (
    <>
      <Hero
        title={<>{props.hero.projectName}</>}
        subtitle={<>{props.hero.schoolYear}</>}
        image={
          <Image
            src={props.hero.image.src}
            alt={props.hero.image.alt}
            width={800}
            height={400}
          />
        }
      />

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
      <TextSection
        title="Team Members"
        text={
          <>
            <p className="mb-4"><span className="font-bold">Leadership: </span>
              {props.overview.teamMembers.leadership}</p>

            <p><span className="font-bold">Developers: </span>
              {props.overview.teamMembers.developers}</p>
          </>
        }
      />

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

      <h3 className={clsx(h3Class, "my-12 md:mt-4")}>Final Screens</h3>
      <ImageCollage
        images={props.finalScreens}
        className="object-top-left"
      />


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