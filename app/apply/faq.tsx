"use client";

const faqs = [
  {
    question: "How do I apply?",
    answer:
      "During our recruitment cycles at the beginning of each semester, you can apply through links to the Google Form for each role posted on our Instagram. Your application helps us learn about who you are and how you might contribute to our community. We understand that application season can get stressful, so we're here with you every step of the way. Good luck!",
  },
  {
    question: "How long does the application process take?",
    answer:
      "The application process typically takes around 1 month, starting from application to final decision.",
  },
  {
    question: "How will I be evaluated?",
    answer:
      "We evaluate how well your background, experiences, and passion match with our values and core responsibilities of the role you applied for.",
  },
  {
    question:
      "I want to join but don't have previous experience. Can I still apply?",
    answer:
      "Yes, you can still apply. Every role has different qualifications. Check the specific role you are interested in for more information about qualifications.",
  },
  {
    question:
      "If I was on JumboCode last year, do I still have to apply again?",
    answer:
      "Yes, if you were on JumboCode before, you still have to apply again. We do this in order to create an equal opportunity for both new and old members to join JumboCode.",
  },
];

export default function FAQ() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white/5 rounded-xl p-6">
            <h3 className="text-white font-medium text-lg">{faq.question}</h3>
            <p className="mt-4 text-white/80">{faq.answer}</p>
          </div>
        ))}
      </div>
      <div className="relative hidden lg:block">
        <img
          src="/apply/jumbohack-podium.jpg"
          alt="JumboHack podium"
          className="w-full h-[600px] object-cover rounded-xl"
        />
      </div>
    </div>
  );
}
