import Button from "./button";

export default function GetInvolved() {
  return (
    <section>
      <h2 className="text-4xl font-semibold text-white">Get Involved</h2>

      <div className="mt-16 grid grid-cols-[3fr,2fr] gap-16">
        <div>
          <p className="text-white font-semibold text-2xl">
            🐘 Tufts University Students
          </p>
          <div className="mt-6 space-y-4 text-white/70">
            <p>
              JumboCode is a year-long commitment, with projects starting in mid
              September and wrapping up in early May. Applications for most
              positions open in the spring semester, so keep an eye out for
              them.
            </p>
            <p>
              Follow our{" "}
              <a
                href="https://instagram.com/jumbocode"
                target="_blank"
                className="font-medium text-brand hover:underline"
              >
                Instagram
              </a>{" "}
              and subscribe to our{" "}
              <a
                href="https://us11.list-manage.com/subscribe?u=d3c507093f7b2f71584f684c0&id=25ebfbc332"
                target="_blank"
                className="font-medium text-brand hover:underline"
              >
                newsletter
              </a>{" "}
              to stay updated!
            </p>
          </div>
          <div className="mt-8">
            <Button text="Learn more" href="/apply" variant="secondary" />
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/jumbohack-checkin.jpg" alt="" className="rounded-2xl" />
      </div>

      <div className="mt-20 grid grid-cols-[2fr,3fr] gap-16">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/jumbohack-checkin.jpg" alt="" className="rounded-2xl" />

        <div>
          <p className="text-white font-semibold text-2xl">
            🏠 Non-Profit Organizations
          </p>
          <div className="mt-6 space-y-4 text-white/70">
            <p>
              If you&apos;re a nonprofit organization with a project in mind, we
              encourage you to apply! We accept NPO applications every June.
            </p>
            <p>
              <a href="/" className="font-medium text-brand hover:underline">
                Contact us
              </a>{" "}
              to learn more!
            </p>
          </div>
          <div className="mt-8">
            <Button text="Learn more" href="/" variant="secondary" />
          </div>
        </div>
      </div>
    </section>
  );
}
