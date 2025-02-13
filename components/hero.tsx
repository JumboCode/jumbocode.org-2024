import clsx from "clsx";

// Images + Buttons probably don't work - Gabe (Feb 2025) 
export default function Hero({
  title,
  subtitle,
  buttons,
  image
}: {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  buttons?: React.ReactNode;
  image?: React.ReactNode;
}) {
  return (
    <div className={clsx(
      image && "md:flex md:space-x-64",
      "py-24 sm:py-48"
    )}>
      <div>
        <h1 className="text-white font-semibold text-4xl">{title}</h1>

        <h2 className="mt-4 text-white/70 text-xl font-medium max-w-screen-md">
          {subtitle}
        </h2>
      </div>

      {buttons && <div className="mt-8 flex gap-x-4">{buttons}</div>}

      {image && <div className="-mt-24">{image}</div>}
    </div>
  );
}
