import clsx from "clsx";

export default function WhatWeDo({
  variant,
}: {
  variant: "compact" | "full-width";
}) {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-white">What We Do</h2>

      <div
        className={clsx(
          "mt-6 grid gap-6",
          variant === "compact" && "md:grid-cols-2"
        )}
      >
        <Card
          title="🗓️ Year-Long Projects With NPOs"
          body={
            variant === "compact" ? (
              <p>
                Teams of 12 students work with non-profit organizations to
                design, develop, and ship a digital solution.
              </p>
            ) : (
              <>
                <p>
                  Teams complete software development projects for{" "}
                  <strong>Boston area non-profits</strong> under the guidance of
                  a Project Manager, Tech Lead, and Designer.
                </p>
                <p>
                  Students gain{" "}
                  <strong>hands-on experience building web applications</strong>{" "}
                  from the ground up while working closely with clients to meet
                  their specific needs.
                </p>
              </>
            )
          }
          imageSrc="/culture-house.jpg"
        />

        <Card
          title="🧑‍🤝‍🧑 Team Collaboration"
          body={
            variant === "compact" ? (
              <p>
                JumboCode creates opportunities for students with varying
                majors, ages, and skills to connect with one another.
              </p>
            ) : (
              <>
                <p>
                  JumboCode fosters collaboration among students of{" "}
                  <strong>all majors, academic years, and skill levels.</strong>
                </p>
                <p>
                  Teams work together to exchange ideas, strengthen their
                  skills, and <strong>tackle real-world challenges</strong> in a
                  supportive learning environment.
                </p>
              </>
            )
          }
          imageSrc="/my-lingual-lawyer.jpg"
        />

        <Card
          title="🧩 Community Events"
          body={
            variant === "compact" ? (
              <p>
                We arrange events like field day and project presentations,
                allowing our members to bond with each other and the Tufts
                community.
              </p>
            ) : (
              <>
                <p>
                  We host events like field day, guest speakers, project
                  showcases, and a weekly Hack Night to{" "}
                  <strong>
                    connect members and celebrate their achievements
                  </strong>
                  .
                </p>
                <p>
                  JumboCode events serve members and the broader Tufts
                  community, uniting students across disciplines.
                </p>
              </>
            )
          }
          imageSrc="/jumbohack-crowd.jpg"
        />

        <Card
          title={
            <>
              🏆{" "}
              <a href="https://jumbohack.org" className="hover:underline">
                JumboHack
              </a>
            </>
          }
          body={
            variant === "compact" ? (
              <p>
                Each year we host JumboHack, a 48-hour hackathon that brings
                together Boston area students to develop software for social
                good.
              </p>
            ) : (
              <>
                <p>
                  Each year we host JumboHack, a{" "}
                  <strong>48-hour hackathon</strong> that brings together Boston
                  area students to develop software for social good.{" "}
                </p>
                <p>
                  It’s a fast-paced, collaborative event designed to inspire
                  creativity and drive impact. To learn more, visit the{" "}
                  <a href="https://jumbohack.org">JumboHack website</a>.
                </p>
              </>
            )
          }
          imageSrc="/jumbohack-checkin.jpg"
        />
      </div>
    </div>
  );
}

function Card({
  title,
  body,
  imageSrc,
}: {
  title: string | React.ReactNode;
  body: React.ReactNode;
  imageSrc: string;
}) {
  return (
    <section className="@container border border-white/60 rounded-2xl p-6">
      <div className="@lg:grid @lg:grid-cols-2 @lg:gap-16">
        <img
          src={imageSrc}
          alt=""
          className="w-full h-auto rounded-lg aspect-[3/2] object-cover"
        />
        <div className="pt-6">
          <h3 className="text-white text-2xl font-semibold">{title}</h3>
          <div className="text-white/90 mt-6 space-y-6 [&_a]:text-brand [&_a]:font-medium [&_a]:hover:underline">
            {body}
          </div>
        </div>
      </div>
    </section>
  );
}
