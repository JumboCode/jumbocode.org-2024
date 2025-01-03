
/**
 * @fileoverview A scrollable carousel of images; static by default
 * 
 * @file ImageGallery.tsx
 * @date January 3rd, 2025
 * @author Gabriel Sessions
 * 
 */

import Image from "next/image";
import { clsx } from 'clsx';

const IMG_HEIGHT = 389;
const IMG_WIDTH = 665;

/**
 * @param path - Path (or URL) to an image
 * @param altText - A text description of the image
 * @param className - An optional parameter to style the image container
 */
interface ImageProps {
  path: string,
  altText: string,
  className?: string
}

/**
 * @param images - An array of image objects
 */
interface ImageGalleryProps {
  images: Array<ImageProps>
}

/**
 * 
 * @param props 
 * @returns 
 */
export default function ImageGallery(props: ImageGalleryProps) {

  return (
    <>
      <div className="lg:py-20 lg:pb-36">
        <div
          className="overflow-x-auto flex space-x-6 hide-scrollbar"
        >
          {
            props.images.map((image, idx) =>
                <ImageContainer
                  key={idx}
                  path={image.path}
                  altText={image.altText}
                />
            )
          }
        </div>
      </div>
    </>
  )
}

/**
 * Creates an appopriately sized image container for the ImageGallery component
 * @param props - An ImageProps object with a 
 * @returns 
 * 
 * @todo Add props that allows varying image sizes (if needed)
 */
function ImageContainer(props: ImageProps) {
  return (
    <Image
      src={props.path}
      alt={props.altText}
      width={IMG_WIDTH}
      height={IMG_HEIGHT}
      className={
        clsx("border-background rounded-xl scroll-snap-center", props.className)
      }
    />
  )
}