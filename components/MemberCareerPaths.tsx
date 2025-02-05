/*  MemberCareerPaths.tsx
*
*   This component is a section of the website that displays a collage of
*   company logos that members have gone on to work for.
* 
*   Created by: Megan Yi and Holden Kittelberger
*   Date: 1/16/25
*/

import H3Section from "./h3Section";
import ImageCollageMapper from "./imageCollageMapper";

export default function MemberCareerPaths() {

    /* Constant Array of all the images being used in the collage */
    const logos = [
        {src: "/member-career-paths/amazon_logo.png", alt: "Amazon"},
        {src: "/member-career-paths/ey_logo.png", alt: "EY"},
        {src: "/member-career-paths/mathworks_logo.png", alt: "MathWorks"},
        {src: "/member-career-paths/meta_logo.png", alt: "Meta"},
        {src: "/member-career-paths/bluecat_logo.png", alt: "BlueCat Networks"},
        {src: "/member-career-paths/nasuni_logo.png", alt: "Nasuni"},
        {src: "/member-career-paths/datadog_logo.png", alt: "Datadog"},
        {src: "/member-career-paths/google_logo.png", alt: "Google"},
        {src: "/member-career-paths/palantir_logo.png", alt: "Palantir"},
        {src: "/member-career-paths/apple_logo.png", alt: "Apple"},
        {src: "/member-career-paths/spotify_logo.png", alt: "Aaron's Presents"},
        {src: "/member-career-paths/notion_logo.png", alt: "Notion"},
        {src: "/member-career-paths/snapchat_logo.png", alt: "Snapchat"},
        {src: "/member-career-paths/microsoft_logo.png", alt: "Microsoft"},
        {src: "/member-career-paths/mastercard_logo.png", alt: "Mastercard"},
        {src: "/member-career-paths/goldmann_sachs_logo.png", alt: "Goldmann Sachs"},
        {src: "/member-career-paths/disney_logo.png", alt: "Disney+"},
    ]

    /* constant representation of how the images will be split up between
       rows according to the figma
    */
    const rows = [
        logos.slice(0, 5), // First row
        logos.slice(5, 10), // Second row
        logos.slice(10), // Third row
    ];

    /* returns the h3 section component with a title and its children */
    /* the child div is a map of the const array of images */
    /* at smaller screen sizes it cuts off the left and right images and
       resizes
    */
    return (
        <H3Section
            header="Member Career Paths"
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
            header="Member Career Paths"
            headerAlignment="center"
        >
            <div className="w-full max-w-[1280px] p-4">
                <div className={rowStyle}>
                    <img src="/member-career-paths/amazon_logo.png" alt="Amazon" className={imageStyle} />
                    <img src="/member-career-paths/ey_logo.png" alt="EY" className={imageStyle} />
                    <img src="/member-career-paths/mathworks_logo.png" alt="MathWorks" className={imageStyle} />
                    <img src="/member-career-paths/meta_logo.png" alt="Meta" className={imageStyle} />
                    <img src="/member-career-paths/bluecat_logo.png" alt="BlueCat Networks" className={imageStyle} />
                </div>
                <div className={rowStyle}>
                    <img src="/member-career-paths/nasuni_logo.png" alt="Nasuni" className={imageStyle} />
                    <img src="/member-career-paths/datadog_logo.png" alt="Datadog" className={imageStyle} />
                    <img src="/member-career-paths/google_logo.png" alt="Google" className={imageStyle} />
                    <img src="/member-career-paths/palantir_logo.png" alt="Palantir" className={imageStyle} />
                    <img src="/member-career-paths/apple_logo.png" alt="Apple" className={`${imageStyle} mb-4`} />
                </div>
                <div className={rowStyle}>
                    <img src="/member-career-paths/spotify_logo.png" alt="Aaron's Presents" className={imageStyle} />
                    <img src="/member-career-paths/notion_logo.png" alt="Notion" className={imageStyle} />
                    <img src="/member-career-paths/snapchat_logo.png" alt="Snapchat" className={imageStyle} />
                    <img src="/member-career-paths/microsoft_logo.png" alt="Microsoft" className={imageStyle} />
                    <img src="/member-career-paths/mastercard_logo.png" alt="Mastercard" className="object-contain self-end pb-2" />
                    <img src="/member-career-paths/goldmann_sachs_logo.png" alt="Goldmann Sachs" className={imageStyle} />
                    <img src="/member-career-paths/disney_logo.png" alt="Disney+" className={imageStyle} />
                </div>
            </div>
        </H3Section>
    ) */
}