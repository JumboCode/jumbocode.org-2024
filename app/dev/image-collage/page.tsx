import ImageCollage from "@/components/ImageCollage"
import OurMission from "@/components/OurMission"

const imgs = [
  {
    path: "/about-us/image-collage-1.png",
    altText: "JumboCode banner"
  },
  {
    path: "/about-us/image-collage-3.png",
    altText: "The Documentary Songwriters team presenting their work"
  },
  {
    path: "/about-us/image-collage-4.png",
    altText: "A team working on a game at JumboHack"
  },
  {
    path: "/about-us/image-collage-2.png",
    altText: "JumboCode developers working during hack night"
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