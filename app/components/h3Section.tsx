import clsx from "clsx";

export default function H3Section({
    header,
    headerAlignment,
    children
}: {
    header: string;
    headerAlignment: "right" | "center";
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col items-center gap-y-6 md:gap-y-10 lg:gap-y-20">
            <h3 className={clsx(
            "font-bold text-white",
            { "self-start": headerAlignment === "right" },
            "text-2xl md:text-3xl lg:text-4xl"
            )}>{header}</h3>
            {children}
        </div >
    )
}