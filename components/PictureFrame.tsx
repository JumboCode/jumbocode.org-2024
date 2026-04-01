/*  PictureFrame.tsx
*
*   This file creates a picture frame component. It takes in a picture, name,
*   and description as props and displays them in a frame.
*
*   Created by Holden Kittelberger on 2/5/2025
*
*/

import Image from "next/image";

type Frame = {
    src: string;
    name: string;
    description: string;
}

const PictureFrame: React.FC<Frame> = ({ src, name, description }) => {
    return (
        <div className="flex flex-col border border-off_white p-3 rounded-lg">
            <Image src={src} alt={name} width={300} height={300} className="object-cover w-full rounded-lg mb-3" />
            <h2 className="text-base font-bold text-white leading-snug mb-0.5">
                {name}
            </h2>
            <p className="text-sm text-white/60">
                {description}
            </p>
        </div>
    );
}

export default PictureFrame;
