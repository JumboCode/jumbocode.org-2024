"use client";

import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

// Data for the Non-Profit FAQ section
const nonProfitFaqs = [
  {
    question: "How do I get in touch with JumboCode?",
    answer:
      "The best way to contact us is by email: board@jumbocode.org. We look forward to getting in touch and hearing about your web application needs.",
  },
  {
    question: "What types of projects have you completed before?",
    answer:
      "We have shipped numerous application types from websites to apps. Some of the common projects we take on include data management, survey administration, inventory handling, event scheduling. Please reach out to us if you have specific questions about a project.",
  },
  {
    question: "How does the handoff process work?",
    answer:
      "Project managers work closely with clients and their leadership team to prepare a detailed report that documents relevant information to the project. This includes access to Github files, deployment instructions, passwords, and general project structure.",
  },
  {
    question:
      "I have specific branding guidelines I want to maintain. Can JumboCode work with my needs?",
    answer:
      "Yes! Our designers have experience implementing existing designs systems to create intuitive interfaces. Clients meet throughout the year with the designer and leadership team to review prototypes and offer feedback for any improvements.",
  },
  {
    question:
      "Who would be the main contact points throughout the projects duration?",
    answer:
      "After contacting us and drafting an agreement with our heads of client management, you are then paired with a team. From there the project manager will handle all communication and the rest of the leadership team (technology lead and designer) will join for project meetings.",
  },
];

// AccordionItem Component for Non-Profit FAQs
const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  return (
    <details className="group py-4">
      <summary className="flex cursor-pointer list-none items-start gap-x-4 text-white">
        <div className="pt-1 flex-shrink-0">
          <PlusIcon className="h-5 w-5 text-white group-open:hidden" />
          <MinusIcon className="h-5 w-5 text-white hidden group-open:block" />
        </div>
        <span className="font-semibold text-lg">{question}</span>
      </summary>

      <div className="mt-3 pl-[2.25rem] text-white/80">{answer}</div>
    </details>
  );
};

// Main NonProfitFAQ Component
export default function NonProfitFAQ() {
  return (
    <section className="mt-24 pb-20">
      <h2 className="text-white font-semibold text-2xl">Non-Profit FAQs</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 md:gap-20">
        <div className="space-y-4">
          {nonProfitFaqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
        <img
          src="/apply/jumbohack-ben.jpg"
          alt="Ben, a JumboCode member, smiling in front of a blackboard"
          className="rounded-xl object-cover w-full h-auto max-h-[500px] place-self-start hidden md:block"
        />
      </div>
    </section>
  );
}
