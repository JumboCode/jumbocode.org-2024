"use client"

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { clsx } from 'clsx';

const IMG_HEIGHT = 389;
const IMG_WIDTH = 665;

interface ImageProps {
  path: string,
  altText: string,
  className?: string
}

interface ImageCarouselProps {
  images: Array<ImageProps>,
  className?: string
}

export default function ImageCarousel(props: ImageCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
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
    <div className={
      clsx(
        "flex justify-center transition-opacity duration-300",
        isVisible ? 'opacity-100' : 'opacity-0',
        props.className
      )
    }
    >
      <div
        className="relative flex overflow-x-auto hide-scrollbar scroll-snap-x space-x-6 px-2 max-w-full"
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
    </div >
  )
}

function ImageContainer(props: ImageProps) {
  return (
    <Image
      src={props.path}
      alt={props.altText}
      width={IMG_WIDTH}
      height={IMG_HEIGHT}
      className={
        `border-background rounded-xl scroll-snap-center 
        w-[300px] h-auto
        md:w-[450px] 
        xl:w-[600px] ${props.className}`
      }
    />
  )
}

