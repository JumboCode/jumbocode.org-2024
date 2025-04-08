"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const testimonials = [
  {
    name: "Lucas Maley",
    role: "President (2023-2024)",
    image: "/apply/lucas.jpg",
    quote:
      "Being in JumboCode was easily one of the most rewarding experiences I've ever had. It's a community of incredibly smart, kind, and hardworking people, and I'm proud to call the people I met there my friends. As President, I was able to truly appreciate what people put into the club, and what comes out of it - skilled, community-oriented Jumbos and genuinely impactful projects which help nonprofits focus on the things that matter most. I'd do it all over again in a heartbeat :)",
  },
  {
    name: "Sylvia Wang",
    role: "PM (2022-2023)",
    image: "/apply/sylvia.jpg",
    quote:
      "My year as a PM in JumboCode was an amazing experience, allowing me to work with clients pursuing a powerful mission and to oversee a high-impact project with a passionate team of developers. From all-day hackathons to team building activities to presentations, I really enjoyed seeing the project grow and building such meaningful connections with my team, all while working together for a greater cause.",
  },
  {
    name: "Guo Chen",
    role: "Head of Design (2022-2023)",
    image: "/apply/guo.jpg",
    quote:
      "JumboCode gave me a unique opportunity at Tufts to not only lead a team of designers but also improve my design critique skills. From creating a design onboarding document and overseeing the progress of all ten designers to crafting a supportive space for designers, I grew tremendously as a designer, enhancing my leadership and community-building skills.",
  },
  {
    name: "Nick Doan",
    role: "Developer (2021-2022), Tech Lead (2023-2024)",
    image: "/apply/nick.jpg",
    quote:
      "Throughout my 3 years with Jumbo Code, I met great people, many of whom became my close friends, even post graduation. Jumbo Code brings together an assortment of people, but they all tie together by a common trait: the drive to make impact and the passion to uplift one another. Therefore, every moment in the club was very rewarding, and I would redo this experience again if possible.",
  },
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        <button
          onClick={prevTestimonial}
          className="p-2 text-white hover:text-white/50 transition-colors"
        >
          <ChevronLeftIcon className="w-8 h-8" />
        </button>

        <div className="flex-1 mx-8">
          <div className="bg-white/5 rounded-2xl p-8">
            <div className="flex items-center gap-6">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-white font-semibold text-xl">
                  {testimonials[activeIndex].name}
                </h3>
                <p className="text-white/60">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
            <p className="mt-6 text-white/80">
              {testimonials[activeIndex].quote}
            </p>
          </div>
        </div>

        <button
          onClick={nextTestimonial}
          className="p-2 text-white hover:text-white/50 transition-colors"
        >
          <ChevronRightIcon className="w-8 h-8" />
        </button>
      </div>

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
    </div>
  );
}
