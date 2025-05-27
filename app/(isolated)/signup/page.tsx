/*  page.tsx
*
*   Page exclusively for the people trying to sign up for our Mailchimp
*   newsletter.
* 
*   Created by Holden Kittelberger on 5/27/2025
*
*/

import Mailchimp from "@/components/mailchimp";


export default function SignupPage() {
    return (
        <div className="flex flex-col items-center justify-center mt-8">
            <Mailchimp />
        </div>   
    );
}