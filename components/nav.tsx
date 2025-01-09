"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  return (
    <nav className="flex gap-x-6">
      <NavLink href="/" label="Home" />
      <NavLink href="/about" label="About" />
      <NavLink href="/projects" label="Projects" />
      <NavLink href="/apply" label="Apply" />
    </nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const location = usePathname();
  const isCurrent = location === href;
  return (
    <Link
      href={href}
      className={clsx(
        "font-medium",
        isCurrent ? "text-white" : "text-white/60"
      )}
    >
      {label}
    </Link>
  );
}
