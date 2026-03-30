import MembersYearSelector from "@/components/MembersYearSelector";
import { Suspense } from "react";

export default function MembersPage() {
    return (
        <div className="mt-32">
            <Suspense>
                <MembersYearSelector />
            </Suspense>
        </div>
    );
}
