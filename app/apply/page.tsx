import Button from "@/components/button";
import Hero from "@/components/hero";
import clsx from "clsx";
import FAQ from "./faq";
import TestimonialCarousel from "./testimonial-carousel";

export default function ApplyPage() {
  return (
    <div>
      <Hero
        title={<>Apply</>}
        subtitle={
          <>
            Join us — we're a passionate community of developers and designers
            committed to building meaningful products for non-profits.
          </>
        }
        buttons={
          <>
            <Button text="For students" href="/" variant="secondary" />
            <Button text="For non-profits" href="/" variant="secondary" />
          </>
        }
      />

      <section className="mt-20">
        <h1 className="text-white font-semibold text-4xl">
          Tufts University Students
        </h1>

        <div className="mt-12 grid grid-cols-[1.5fr_1fr] gap-20">
          <div>
            <h2 className="text-white font-medium text-2xl">
              Leadership Positions Open in March
            </h2>
            <div className="mt-4 text-white/80 space-y-2">
              <p>
                JumboCode is a year-long commitment, with projects starting in
                mid-September and wrapping up in April or May.
              </p>
              <p>
                Applications for Project Manager, Tech Lead, and Designer
                positions open in the spring semester.
              </p>
              <p>
                {/* TODO: newsletter signup URL */}
                Follow our{" "}
                <a
                  href="https://instagram.com/jumbocode"
                  className="text-brand font-medium underline decoration-brand/30"
                >
                  Instagram
                </a>{" "}
                and subscribe to our{" "}
                <a
                  href=""
                  className="text-brand font-medium underline decoration-brand/30"
                >
                  newsletter
                </a>{" "}
                to stay updated!
              </p>
            </div>
            <h2 className="mt-12 text-white font-medium text-2xl">
              Developer Positions Open in September
            </h2>
            <div className="mt-4 text-white/80 space-y-2">
              <p>
                Applications for Developer positions open in the fall semester,
                closer to when projects start.
              </p>
              <p>
                {/* TODO: newsletter signup URL */}
                Follow our{" "}
                <a href="https://instagram.com/jumbocode">Instagram</a> and
                subscribe to our <a href="">newsletter</a> to stay updated!
              </p>
            </div>
          </div>

          <img
            src="/apply/homestart.jpg"
            alt="Developers and team leadership for the Homestart team. Two rows of students standing in front of a white wall."
            className="rounded-xl"
          />
        </div>

        <div className="mt-24">
          <h2 className="text-white font-semibold text-xl">Open Positions</h2>

          <div className="mt-6 grid grid-cols-3 gap-6">
            <PositionCard
              title="Developer"
              subtitle="Applications open in September"
              isOpen={false}
            />
            <PositionCard
              title="Designer"
              subtitle="Applications open in March"
              isOpen={false}
            />
            <PositionCard
              title="Project Manager"
              subtitle="Applications open in March"
              isOpen={false}
            />
            <PositionCard
              title="Tech Lead"
              subtitle="Applications open in March"
              isOpen={false}
            />
            <PositionCard
              title="Board Member"
              subtitle="Applications have closed"
              isOpen={false}
            />
          </div>
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-white font-semibold text-2xl">
          Application Process
        </h2>

        <div className="mt-8 grid grid-cols-4 gap-12">
          <ApplicationProcessCard
            src="/apply/icons/application-icon.png"
            title="Application"
            subtitle="Apply to our open roles so we know you are interested."
          />
          <ApplicationProcessCard
            src="/apply/icons/interview-icon.png"
            title="Interview"
            subtitle="If you are selected for an interview, we will contact you via email to set up a time. (Note that we do not require interviews for developers.)"
          />
          <ApplicationProcessCard
            src="/apply/icons/decision-icon.png"
            title="Decision"
            subtitle="Our board will inform you directly via email."
          />
          <ApplicationProcessCard
            src="/apply/icons/onboarding-icon.png"
            title="Onboarding"
            subtitle="Onboarding for most roles begins the summer before the school year starts."
          />
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-white font-semibold text-2xl">
          Member Testimonials
        </h2>
        <div className="mt-8">
          <TestimonialCarousel />
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-white font-semibold text-2xl">FAQs</h2>
        <div className="mt-8">
          <FAQ />
        </div>
      </section>
    </div>
  );
}

const PositionCard = ({
  title,
  subtitle,
  isOpen,
  href = undefined,
}: {
  title: string;
  subtitle: string;
  isOpen: boolean;
  href?: string;
}) => {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper href={href} target={href ? "_blank" : undefined}>
      <div className={clsx("rounded-xl p-6 bg-white", !isOpen && "opacity-75")}>
        <p className="text-background font-medium text-xl">{title}</p>
        <p className="mt-1 text-background/60">{subtitle}</p>
      </div>
    </Wrapper>
  );
};

const ApplicationProcessCard = ({
  src,
  title,
  subtitle,
}: {
  src: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <div>
      <img src={src} alt="" className="" />
      <h3 className="mt-4 text-white font-semibold text-xl">{title}</h3>
      <p className="mt-2 text-white/80">{subtitle}</p>
    </div>
  );
};
