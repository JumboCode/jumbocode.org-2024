/*  PictureFrame.tsx
*
*   This file creates a picture frame component. It takes in a picture, name,
*   and description as props and displays them in a frame.
* 
*   Created by Holden Kittelberger on 2/5/2025
*
*/

type Frame = {
    src: string;
    name: string;
    description: string;
}

const PictureFrame: React.FC<Frame> = ({ src, name, description }) => {
    return (
        <div className="flex flex-col border border-off_white p-3 rounded-lg lg:p-4 sm:text-sm">
            <img src={src} alt={name} className="object-cover w-30 lg:w-full rounded-lg mb-3 lg:mb-5" style={{ aspectRatio: '1 / 1' }} />
            <h2 className="text-sm md:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-1">
            {name}
            </h2>
            <p className="text-sm md:text-lg lg:text-xl text-white mb-2">
            {description}
            </p>
        </div>
    );
}

export default PictureFrame;