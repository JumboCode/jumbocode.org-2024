/**
 * @fileoverview An image gallery with a tiled pattern based on 
 * a set of height weights.
 * 
 * @file ImageCollage.tsx
 * @date January 16th, 2025
 * @author Gabriel Sessions
 *  
 * @todo Make this component more modular if reused
 */

import clsx from "clsx";
import Image from "next/image";
import { ImageCarouselProps } from "./ImageCarousel";

export default function ImageCollage(props: ImageCarouselProps) {
  const baseClass = "col-span-1 object-cover border-transparent rounded-xl";
  const longerImageClass = "row-span-2 h-[300px] md:h-[300px] lg:h-[450px] lg:w-[597px]";
  const shorterImageClass = "h-[280px] md:h-[250px] lg:h-[349px] lg:w-[597px]";
  const hideOnMobile = "hidden md:block"

  // You can def refactor this as a map, but it's far easier to test/debug 
  // in this form given how simple the component is
  return (
    <div className="grid justify-center md:grid-cols-2 gap-x-7 gap-y-6">
      <Image
        src={props.images[0].path}
        alt={props.images[0].path}
        className={clsx(baseClass, longerImageClass, hideOnMobile)}
        width={597}
        height={450}
      />
      <Image
        src={props.images[1].path}
        alt={props.images[1].path}
        className={clsx(baseClass, shorterImageClass)}
        width={597}
        height={349}
      />
      <Image
        src={props.images[2].path}
        alt={props.images[2].path}
        className={clsx(baseClass, longerImageClass, hideOnMobile)}
        width={597}
        height={450}
      />
      <Image
        src={props.images[3].path}
        alt={props.images[3].path}
        className={clsx(baseClass, shorterImageClass)}
        width={597}
        height={349} 
      />
    </div>
  );
}