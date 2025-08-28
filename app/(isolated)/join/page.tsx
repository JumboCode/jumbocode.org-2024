import Button from "@/components/button";
import Hero from "@/components/hero";
import Mailchimp from "@/components/mailchimp";
import type { Metadata } from "next";
import ImageCarousel from "../../../components/ImageCarousel";

export const metadata: Metadata = {
  title: "JumboCode",
  description: "Tufts University's student-run CS club empowering students and elevating non-profits.",
};

const whoWeAreImages = [
  {
    src: "/homepage/who-we-are-4.png",
    alt: "Project presentation"
  },
  {
    src: "/homepage/who-we-are-1.png",
    alt: "A live demo at JumboCode final presentations"
  },
  {
    src: "/homepage/who-we-are-2.png",
    alt: "JumboCode Team Photo"
  },
  {
    src: "/homepage/who-we-are-3.png",
    alt: "A team having fun at a JumboCode hack night"
  },
  {
    src: "/homepage/who-we-are-5.png",
    alt: "JumboHack programmers working on their projects"
  }
];

export default function JoinPage() {
  return (
    <>
      <Hero
              title={<>Welcome to Jumbo<span className="text-brand">Code</span>!</>}
              subtitle={
                <>
                  We&apos;re a passionate community of Tufts developers and designers 
                  building meaningful software for local non-profits. Join us in making 
                  a real impact through technology.
                </>
              }
              buttons={
                <>
                  <Button text="Sign up for updates" href="#signup" variant="secondary" />
                  <Button text="Learn more" href="/apply" variant="primary" />
                </>
              }
            />

            <section className="">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
                <div>
                  <h2 className="text-white font-semibold text-3xl lg:text-4xl">
                    What We Do
                  </h2>
                  <div className="mt-6 text-white/80 space-y-4">
                    <p>
                      JumboCode partners with local non-profits to build custom software 
                      solutions that help them achieve their missions more effectively.
                    </p>
                    <p>
                      Our student teams work year-long on real projects, gaining valuable 
                      experience while making a tangible difference in the community.
                    </p>
                    <p>
                      <strong className="text-white">Developer positions</strong> open 
                      in September, with applications typically due in early fall. 
                      No prior experience required &mdash; we welcome all skill levels!
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <img
                    src="/homepage/who-we-are-1.png"
                    alt=""
                    className="rounded-2xl max-sm:-order-1"
                />
                  {/* <ImageCollage 
                    images={[
                      { src: "/homepage/who-we-are-1.png", alt: "JumboCode team members working together" },
                      { src: "/apply/homestart-team.png", alt: "Homestart project team" },
                      { src: "/homepage/who-we-are-2.png", alt: "Students collaborating on code" },
                      { src: "/apply/jumbohack-ben.jpg", alt: "JumboHack event presentation" }
                    ]}
                  /> */}
                </div>
              </div>
            </section>

            <section className="mt-16 lg:mt-24">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 rounded-xl p-6">
                  <h3 className="text-white font-semibold text-xl">Real Impact</h3>
                  <p className="mt-3 text-white/80">
                    Build software that directly helps local non-profits serve their communities better.
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <h3 className="text-white font-semibold text-xl">Learn & Grow</h3>
                  <p className="mt-3 text-white/80">
                    Develop technical skills through mentorship and hands-on project experience.
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <h3 className="text-white font-semibold text-xl">Community</h3>
                  <p className="mt-3 text-white/80">
                    Join a supportive community of passionate developers and designers.
                  </p>
                </div>
              </div>
            </section>

            <section id="signup" className="mt-16 lg:mt-24 scroll-mt-20">
              <div className="text-center mb-8">
                <h2 className="text-white font-semibold text-3xl lg:text-4xl">
                  Stay Connected
                </h2>
                <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
                  Sign up for our newsletter to get notified when applications open 
                  and stay updated on events, workshops, and opportunities to get involved.
                </p>
              </div>
              
              <Mailchimp />
            </section>

            <ImageCarousel
              images={whoWeAreImages}
              className="py-8 md:pb-8 lg:py-20"
            />

            <section className="text-center">
              <div className="bg-white/5 rounded-xl p-8 lg:p-12">
                <h2 className="text-white font-semibold text-2xl lg:text-3xl mb-4">
                  Ready to Learn More?
                </h2>
                <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
                  Visit our full application page for detailed information about all 
                  our open positions, the application process, and member testimonials.
                </p>
                <div className="flex justify-center">
                  <Button text="View Application Details" href="/apply" variant="primary" />
                </div>
              </div>
            </section>
    </>
  );
}
