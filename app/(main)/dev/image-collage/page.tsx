import ImageCollage from "@/components/ImageCollage"
import OurMission from "@/components/OurMission"

const imgs = [
  {
    src: "/about-us/image-collage-1.png",
    alt: "JumboCode banner"
  },
  {
    src: "/about-us/image-collage-3.png",
    alt: "The Documentary Songwriters team presenting their work"
  },
  {
    src: "/about-us/image-collage-4.png",
    alt: "A team working on a game at JumboHack"
  },
  {
    src: "/about-us/image-collage-2.png",
    alt: "JumboCode developers working during hack night"
  },
]


export default function ImageCollagePage() {

  return (
    <>
      <div className="font-inter">
        <OurMission />
        <ImageCollage images={imgs} />
      </div>
    </>
  )
}