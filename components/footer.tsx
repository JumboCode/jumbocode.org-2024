/*  footer.tsx
 *
 *   This file contains the footer component for the JumboCode website. The
 *   footer contains links to the main pages of the website, as well as contact
 *   information and social media links.
 *
 *   Created by Holden Kittelberger on 1/2/2025
 *
 */


/* array of all the pages/links that are used, each title is a new column */
const LINKS = [
  {
    title: "JumboCode",
    items: [
      { name: "Home", url: "/" },
      { name: "About", url: "/about" },
      { name: "Our Work", url: "/projects" },
    ],
  },
  {
    title: "Students",
    items: [
      { name: "Applications", url: "/apply#students" },
      { name: "Testimonials", url: "/apply#student-testimonials" },
      { name: "FAQs", url: "/apply#student-faqs" },
    ],
  },
  {
    title: "Non-profits",
    items: [
      { name: "Work with us", url: "/apply#nonprofits" },
      { name: "Testimonials", url: "/apply#nonprofit-testimonials" },
      { name: "FAQs", url: "/apply#nonprofit-faqs" },
    ],
  },
];

/* All the links associated with the media icons */
const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/jumbocode",
    src: "/social-icons/Insta.png",
    alt: "Instagram",
  },
  {
    href: "https://www.facebook.com/JumboCode/",
    src: "/social-icons/fb.png",
    alt: "Facebook",
  },
  {
    href: "https://www.linkedin.com/company/tuftsjumbocode/posts/?feedView=all",
    src: "/social-icons/LinkedIn.png",
    alt: "LinkedIn",
  },
  {
    href: "https://github.com/JumboCode",
    src: "/social-icons/Git.png",
    alt: "GitHub",
  },
];

/*  Footer
 *   returns the footer component
 *   takes no input
 */
export default function Footer() {
  return (
    <footer className="relative w-full bg-background text-white border-t-2 border-subtext">
      <div className="mx-auto w-full max-w-7xl px-20">
        <div className="flex flex-col md:flex-row justify-between mt-10 gap-5 md:gap-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-20">
            {LINKS.map(({ title, items }) => (
              <ul key={title} className="space-y-2">
                <div className="font-bold mb-1">{title}</div>
                {items.map(({ name, url }) => (
                  <li key={name}>
                    <a href={url}>
                      <div className="text-subtext hover:opacity-50 transition-opacity duration-200">
                        {name}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="md:ml-auto">
            <h4
              className="font-bold hover:opacity-50 transition-opacity duration-200"
              id="email-header"
            >
              <a href="mailto:board@jumbocode.org" target="_blank">
                board@jumbocode.org
              </a>
            </h4>
            <div className="flex mt-3 space-x-6">
              {SOCIAL_LINKS.map(({ href, src, alt }) => (
                <a
                  key={alt}
                  href={href}
                  target="_blank"
                  className="flex-shrink-0 hover:opacity-50 transition-opacity duration-200"
                >
                  <img src={src} alt={alt} className="w-8 h-8" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 py-10">
          <div className="text-subtext">
            &copy; 2015&ndash;{new Date().getFullYear()} JumboCode
          </div>
        </div>
      </div>
    </footer>
  );
}
