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
        <div className="flex flex-col">
            <img src={src} alt={name} className="object-cover h-64 w-64" />
            <h2 className="text-2xl font-bold text-white">{name}</h2>
            <p className="text-2xl text-white">{description}</p>
        </div>
    );
}

export default PictureFrame;