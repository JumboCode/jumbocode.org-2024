import clsx from "clsx";

export default function Button({
  text,
  route,
  variant,
  icon = undefined,
}: {
  text: string;
  route: string;
  variant: "primary" | "secondary" | "ghost";
  icon?: React.ElementType;
}) {
  const Icon = icon;
  return (
    <a
      href={route}
      className={clsx(
        "block max-w-max px-4 py-2 rounded-lg font-semibold",
        "flex items-center gap-2",
        "hover:ring-2 hover:ring-offset-2 hover:ring-offset-black transition-shadow duration-200",
        variant === "primary" && "bg-brand text-gray-900 hover:ring-brand",
        variant === "secondary" && "bg-white text-gray-900 hover:ring-white",
        variant === "ghost" && "text-white hover:ring-white"
      )}
    >
      {Icon && <Icon className="w-4 h-4" />}
      <span>{text}</span>
    </a>
  );
}
