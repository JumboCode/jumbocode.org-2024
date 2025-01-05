/**
 * @fileoverview A simple section with a small title and a block of bolded text
 * 
 * @file FeaturedTextBlock.tsx
 * @date January 3rd, 2025
 * @author Gabriel Sessions
 * 
 */

import { FC } from "react"

interface FeaturedTextBlockProps {
  title: FC,
  featuredText: FC
}

/**
 * 
 */
export default function FeaturedTextBlock(props: FeaturedTextBlockProps) {
  return (
    <>
      <div className="flex py-10 px-6 md:py-10 md:px-12 lg:py-24 lg:px-28 flex-col justify-center items-start bg-gray gap-2">
        <h2 className="text-md md:text-lg lg:text-xl text-white opacity-60 font-bold">{props.title}</h2>
        <h3 className="text-xl md:text-3xl lg:text-5xl text-white font-semibold lg:leading-[56px]">{props.featuredText}</h3>
      </div>
    </>
  )
}