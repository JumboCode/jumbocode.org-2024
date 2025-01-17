/*  MemberCareerPaths.tsx
*
*   This component is a section of the website that displays a collage of
*   non-profit logos that JumboCode has made projects for.
* 
*   Created by: Megan Yi and Holden Kittelberger
*   Date: 1/16/25
*/

import H3Section from "./h3Section";
import ImageCollageMapper from "./imageCollageMapper";

export default function OurPartnerships() {

    /* Constant Array of all the images being used in the collage */
    const logos = [
        {src: "/partnerships/Peace_corps_logo.png", alt: "Peace Corps"},
        {src: "/partnerships/HomeStart_logo.png", alt: "HomeStart"},
        {src: "/partnerships/Bergen_Family_Center_logo.png", alt: "Bergen Family Center"},
        {src: "/partnerships/SS_Villages_logo.png", alt: "SimplySmiles children's villages"},
        {src: "/partnerships/Bisexual_Resource_Center_logo.png", alt: "Bisexual Resource Center"},
        {src: "/partnerships/Casa_Myrna_logo.png", alt: "Casa Myrna"},
        {src: "/partnerships/Animal_Aid_Logo.png", alt: "Animal Aid"},
        {src: "/partnerships/kmb_logo.png", alt: "Keep Massachusetts Beautiful"},
        {src: "/partnerships/Dress_for_Success_logo.png", alt: "Dress For Success"},
        {src: "/partnerships/Ocean_Alliance_Logo.png", alt: "Ocean Alliance"},
        {src: "/partnerships/AaronsPresents_logo.png", alt: "Aaron's Presents"},
        {src: "/partnerships/images-4.png", alt: ""}, /* not sure what image this is */
        {src: "/partnerships/potencialogo.png", alt: "Potencia"},
        {src: "/partnerships/Emerald_Necklace_Conservancy_logo.png", alt: "Emerald Necklace Conservancy"},
    ]

    /* constant representation of how the images will be split up between
       rows according to the figma
    */
    const rows = [
        logos.slice(0, 4), // First row
        logos.slice(4, 8), // Second row
        logos.slice(8), // Third row
    ];

    /* returns the h3 section component with a title and its children */
    /* the child div is a map of the const array of images */
    /* at smaller screen sizes it cuts off the left and right images and
       resizes
    */
    return (
        <H3Section
            header="Our Partnerships"
            headerAlignment="center"
        >
            <ImageCollageMapper
                rows={rows}
                logos={logos}
            />
        </H3Section>
    );

    /* Megan's code */
    /* At desktop screen sizes, looks perfect to Figma, just lacking
       the responsiveness
    */
    /* return (
        <H3Section
            header="Our Partnerships"
            headerAlignment="center"
        >
            <div className="w-full max-w-[1280px] justify-between p-4">
                <div className="flex justify-between">
                    <img src="/partnerships/Peace_corps_logo.png" alt="Peace Corps" className="object-contain" />
                    <img src="/partnerships/HomeStart_logo.png" alt="HomeStart" className="object-contain self-start mt-2 ml-8 mr-9" />
                    <img src="/partnerships/Bergen_Family_Center_logo.png" alt="Bergen Family Center" className="object-contain mt-2 self-start" />
                    <img src="/partnerships/SS_Villages_logo.png" alt="SimplySmiles children's villages" className="object-contain ml-16 mr-10 -mb-6" />
                </div>
                <div className="flex justify-between">
                    <img src="/partnerships/Bisexual_Resource_Center_logo.png" alt="Bisexual Resource Center" className="object-contain" />
                    <img src="/partnerships/Casa_Myrna_logo.png" alt="Casa Myrna" className="object-contain mt-3 ml-5" />
                    <img src="/partnerships/Animal_Aid_Logo.png" alt="Animal Aid" className="object-contain -mt-20" />
                    <img src="/partnerships/kmb_logo.png" alt="Keep Massachusetts Beautiful" className="object-contain -mt-14 ml-6 mr-4" />
                    <img src="/partnerships/Dress_for_Success_logo.png" alt="Dress For Success" className="object-contain mt-4" />
                    <img src="/partnerships/Ocean_Alliance_Logo.png" alt="Ocean Alliance" className="object-contain -mb-14 ml-20 mr-14" />
                </div>
                <div className="flex">
                    <img src="/partnerships/AaronsPresents_logo.png" alt="Aaron's Presents" className="object-contain -mt-6" />
                    <img src="/partnerships/images-4.png" alt="" className="object-contain -mt-6 ml-10 mr-14" />
                    <img src="/partnerships/potencialogo.png" alt="Potencia" className="object-contain -mt-16 mr-8" />
                    <img src="/partnerships/Emerald_Necklace_Conservancy_logo.png" alt="Emerald Necklace Conservancy" className="object-contain mr-[40rem] -mt-20" />
                </div>
            </div>
        </H3Section>
    ) */
}