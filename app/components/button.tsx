import clsx from "clsx";

export default function Button({
  text,
  route,
  variant,
  icon,
}: {
  text: string;
  route: string;
  variant: "primary" | "secondary" | "ghost";
  icon: React.ElementType;
}) {
  const Icon = icon;
  return (
    <a
      href={route}
      className={clsx(
        "block max-w-max px-4 py-2 rounded-lg font-semibold",
        "flex items-center gap-2",
        "transition-opacity duration-200 hover:opacity-70",
        variant === "primary" && "bg-brand text-gray-900",
        variant === "secondary" && "bg-white text-gray-900",
        variant === "ghost" && "text-white"
      )}
    >
      {icon && <Icon className="w-4 h-4" />}
      <span>{text}</span>
    </a>
  );
}
