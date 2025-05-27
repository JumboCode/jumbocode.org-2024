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
      {/* Buttons for larger screens */}
      <button
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-white hover:text-white/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed hidden lg:block"
        disabled={testimonials.length <= 1}
      >
        <ChevronLeftIcon className="w-8 h-8" />
      </button>

      {/* Buttons for smaller screens (top-right) */}
      {testimonials.length > 1 && (
        <div className="flex justify-end gap-2 mb-4 lg:hidden">
          <button
            onClick={prevTestimonial}
            className="p-1 text-white hover:text-white/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-1 text-white hover:text-white/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Testimonial Card */}
      <div className="flex-1 lg:mx-16">
        <div className="bg-white/5 rounded-2xl p-8 flex flex-col justify-center min-h-72">
          <div className="flex items-center gap-6">
            <img
              key={activeTestimonial.image}
              src={activeTestimonial.image}
              alt={activeTestimonial.name}
              className="w-16 h-16 rounded-full object-cover flex-shrink-0 bg-gray-800"
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

      {/* Buttons for larger screens */}
      <button
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-white hover:text-white/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed hidden lg:block"
        disabled={testimonials.length <= 1}
      >
        <ChevronRightIcon className="w-8 h-8" />
      </button>

      {/* Pagination Dots */}
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
