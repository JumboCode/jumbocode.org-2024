export default function Hero({
  title,
  subtitle,
  buttons,
}: {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  buttons?: React.ReactNode;
}) {
  return (
    <div className="py-24 sm:py-48">
      <h1 className="text-white font-semibold text-4xl">{title}</h1>

      <h2 className="mt-4 text-white/70 text-xl font-medium max-w-screen-md">
        {subtitle}
      </h2>

      {buttons && <div className="mt-8 flex gap-x-4">{buttons}</div>}
    </div>
  );
}
