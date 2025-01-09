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
        <div className="flex flex-col items-center gap-y-12">
            <h3 className={clsx(
                "text-2xl font-semibold text-white",
                { "self-start": headerAlignment === "right" }
            )}>{header}</h3>
            {children}
        </div >
    )
}