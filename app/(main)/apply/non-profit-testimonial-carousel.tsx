"use client";

import TestimonialCarousel, { Testimonial } from "./testimonial-carousel";

const nonprofitTestimonials: Testimonial[] = [
  {
    name: "Amanda Wang",
    role: "Co-founder & CEO of Potencia (2021-2023 Client)",
    image: "/apply/amanda.jpg",
    quote:
      "JumboCode was instrumental in bringing our vision for the Potencia App to life. Their talented students provided invaluable technical support, helping us develop a user-friendly and effective platform that empowers adult immigrants",
  },
  {
    name: "Sam Schultz",
    role: "Chief of Staff at Casa Myrna (2023-2024 Client)",
    image: "/apply/sam.jpg",
    quote:
      "JumboCode did a really great job with communication and building a product that fulfills a great need of ours.",
  },
  {
    name: "Kim Todd",
    role: "President at Dress For Success (2023-2024 Client)",
    image: "/apply/kim.jpg",
    quote:
      "We enjoyed working with our team, and they did an amazing job. I feel like they really listened to what we wanted, and they made it happen!",
  },
  {
    name: "Gabriela Caruso Greaves",
    role: "Manager at Somerville Homeless Coalition (2023-2024 Client)",
    image: "/apply/gabriela.png",
    quote:
      "The team did a great job on our website! This tool will help us with onboarding new staff into our program.",
  },
];

export default function NonProfitTestimonialCarousel() {
  return <TestimonialCarousel testimonials={nonprofitTestimonials} />;
}
