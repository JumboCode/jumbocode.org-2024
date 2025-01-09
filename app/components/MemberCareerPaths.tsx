import H3Section from "./h3Section";

export default function MemberCareerPaths() {
    const imageStyle = "object-contain mx-4"

    return (
        <H3Section
            header="Member Career Paths"
            headerAlignment="center"
        >
            <div className="w-full max-w-[1280px] justify-between bg-red-700 py-4 px-2">
                <div className="flex justify-between">
                    <img src="/member-career-paths/amazon_logo.png" alt="Amazon" className={imageStyle} />
                    <img src="/member-career-paths/ey_logo.png" alt="EY" className={imageStyle} />
                    <img src="/member-career-paths/mathworks_logo.png" alt="MathWorks" className={imageStyle} />
                    <img src="/member-career-paths/meta_logo.png" alt="Meta" className={imageStyle} />
                    <img src="/member-career-paths/bluecat_logo.png" alt="BlueCat Networks" className={imageStyle} />
                </div>
                <div className="flex justify-between">
                    <img src="/member-career-paths/nasuni_logo.png" alt="Nasuni" className={imageStyle} />
                    <img src="/member-career-paths/datadog_logo.png" alt="Datadog" className={imageStyle} />
                    <img src="/member-career-paths/google_logo.png" alt="Google" className={imageStyle} />
                    <img src="/member-career-paths/palantir_logo.png" alt="Palantir" className={imageStyle} />
                    <img src="/member-career-paths/apple_logo.png" alt="Apple" className={`${imageStyle} mb-4`} />
                </div>
                <div className="flex justify-between">
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
    )
}