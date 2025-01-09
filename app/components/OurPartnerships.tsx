import H3Section from "./h3Section"

export default function OurPartnerships() {
    return (
        <H3Section
            header="Our Partnerships"
            headerAlignment="center"
        >
            <div className="w-full max-w-[1280px] justify-between bg-red-700 p-4">
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
                    <img src="/partnerships/images-4.png" alt="" className="object-contain -mt-6 ml-10 mr-14" /> {/* not sure whose logo this is */}
                    <img src="/partnerships/potencialogo.png" alt="Potencia" className="object-contain -mt-16 mr-8" />
                    <img src="/partnerships/Emerald_Necklace_Conservancy_logo.png" alt="Emerald Necklace Conservancy" className="object-contain mr-[40rem] -mt-20" />
                </div>
            </div>
        </H3Section>
    )
}