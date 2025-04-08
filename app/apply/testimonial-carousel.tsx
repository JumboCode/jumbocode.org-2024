"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}

interface ReusableTestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({
  testimonials,
}: ReusableTestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!testimonials || testimonials.length === 0) {
    return null; // Don't render anything if there are no testimonials
  }

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        <button
          onClick={prevTestimonial}
          className="p-2 text-white hover:text-white/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={testimonials.length <= 1}
        >
          <ChevronLeftIcon className="w-8 h-8" />
        </button>

        <div className="flex-1 mx-8">
          <div className="bg-white/5 rounded-2xl p-8 flex flex-col justify-center">
            <div className="flex items-center gap-6">
              <img
                src={activeTestimonial.image}
                alt={activeTestimonial.name}
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="text-white font-semibold text-xl">
                  {activeTestimonial.name}
                </h3>
                <p className="text-white/60">{activeTestimonial.role}</p>
              </div>
            </div>
            <p className="mt-6 text-white/80">{activeTestimonial.quote}</p>
          </div>
        </div>

        <button
          onClick={nextTestimonial}
          className="p-2 text-white hover:text-white/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={testimonials.length <= 1}
        >
          <ChevronRightIcon className="w-8 h-8" />
        </button>
      </div>

      {testimonials.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === activeIndex ? "bg-brand" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
