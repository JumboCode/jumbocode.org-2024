/**
 * @fileoverview A simple section with a small title and a block of bolded text
 * 
 * @file FeaturedTextBlock.tsx
 * @date January 5th, 2025
 * @author Gabriel Sessions
 * 
 */

import { ReactNode } from "react"

interface FeaturedTextBlockProps {
  title: ReactNode,
  featuredText: ReactNode
}

/**
 * Displays a header and descriptor text below the header.
 * 
 * @param Takes in a title (header) and featured text (descriptor)
 */
export default function FeaturedTextBlock(props: FeaturedTextBlockProps) {
  return (
    <>
      <div className="flex py-10 md:py-10 lg:py-24 flex-col justify-center items-start gap-2">
        <h2 className="text-lg md:text-xl text-white opacity-60 font-bold">{props.title}</h2>
        <h3 className="text-2xl md:text-4xl lg:text-5xl text-white font-semibold lg:leading-[56px]">{props.featuredText}</h3>
      </div>
    </>
  )
}