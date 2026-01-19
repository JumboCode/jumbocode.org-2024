/*  page.tsx
*
*   Page for viewing the current Jumbocup leaderboard
* 
*   Created by Holden Kittelberger on 11/29/2025
*
*/

import Leaderboard from "@/components/leaderboard";

export default function JumboCupPage() {
    return (
        <div className="flex flex-col items-center justify-center mt-8">
            <Leaderboard />
        </div>
    );
}