import Hero from "@/components/hero";
import MembersYearSelector from "@/components/MembersYearSelector";
import { Suspense } from "react";

export default function MembersPage() {
    return (
        <div>
            <Hero
                title={<>Members</>}
                subtitle={
                    <>
                        Meet the students behind JumboCode. Use the year
                        selector below to browse members from past and present
                        cohorts.
                    </>
                }
            />
            <div className="mt-12">
                <Suspense>
                    <MembersYearSelector />
                </Suspense>
            </div>
        </div>
    );
}
