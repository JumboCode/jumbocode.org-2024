/**
 * @fileoverview A scrollable image carousel which shows a preview of the 
 * next/previous images.
 * 
 * @file ImageCarousel.tsx
 * @date January 5th, 2025
 * @author Gabriel Sessions
 *  
 * @todo Remove hardcoded width/height values if this component is reused
 * with different image dimensions.
 */

"use client"

import { clsx } from 'clsx';
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const IMG_HEIGHT = 389;
const IMG_WIDTH = 665;

/**
 * @param path - Local or absolute path to an image asset
 * @param altText - A text descriptor of the image
 * @param className - Optional field to add CSS styles
 */
export interface ImageProps {
  path: string,
  altText: string,
  className?: string
}

/**
 * @param images - An array of objects to be fed into the Image component
 * @param className - Optional field to add CSS styles
 */
export interface ImageCarouselProps {
  images: Array<ImageProps>,
  className?: string
}

/**
 * An Image Carousel with basic scrolling functionality
 * 
 * @param props - An array of images 
 * @todo Adjust the useEffect scrolling logic to display an even number 
 * of images properly.
 */
export default function ImageCarousel(props: ImageCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // The carousel is hidden from the user while it loads and waits for the 
  // useEffect to scroll the carousel
  const [isVisible, setIsVisible] = useState(false);

  // Scrolls the carousel to the center when the page loads
  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current;
      const centerPosition = (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2;
      scrollContainer.scrollLeft = centerPosition;
      setIsVisible(true);
    }
  }, []);

  return (
    <div
      className={
        clsx(
          "relative transition-opacity duration-300",
          isVisible ? 'opacity-100' : 'opacity-0',
          props.className
        )
      }
    >
      <div
        className="relative flex overflow-x-auto hide-scrollbar space-x-6 xl:-mx-32"
        ref={scrollContainerRef}
      >
        {props.images.map((image, idx) => (
          <ImageContainer
            key={idx}
            path={image.path}
            altText={image.altText}
            className="scroll-snap-center"
          />
        ))}
      </div>
    </div>
  )
}


/**
 * An image container generator. Creates a responsive, rounded box 
 * for images with a max width of 600px.
 * 
 * @param props - Image path, alt text. Width and height are defined globally.
 * @returns A React component
 * 
 * @todo Change width/height to props values if the component needs to be reused
 * with new image dimensions.
 */
function ImageContainer(props: ImageProps) {
  return (
    <Image
      src={props.path}
      alt={props.altText}
      width={IMG_WIDTH}
      height={IMG_HEIGHT}
      className={
        `border-transparent rounded-xl scroll-snap-center 
        w-[300px] h-auto
        md:w-[450px] 
        xl:w-[600px] ${props.className}`
      }
    />
  )
}

