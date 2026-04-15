"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  return (
    <nav className="flex gap-x-4 sm:gap-x-6">
      <NavLink href="/" label="Home" />
      <AboutDropdown />
      <NavLink href="/projects" label="Projects" />
      <NavLink href="/apply" label="Apply" />
    </nav>
  );
}

function AboutDropdown() {
  const location = usePathname();
  const isActive = location === "/about" || location === "/members";

  return (
    <div className="group relative">
      <Link
        href="/about"
        className={clsx(
          "flex items-center gap-x-1 font-medium",
          isActive ? "text-white" : "text-white/60"
        )}
      >
        About
        <svg
          className="h-3 w-3 transition-transform group-hover:rotate-180"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 4l4 4 4-4" />
        </svg>
      </Link>
      <div className="absolute left-1/2 top-full z-10 hidden -translate-x-1/2 pt-2 group-hover:block">
        <div className="flex flex-col overflow-hidden rounded-md bg-background shadow-lg ring-1 ring-white/10">
          <DropdownLink href="/about" label="About" />
          <DropdownLink href="/members" label="Members" />
        </div>
      </div>
    </div>
  );
}

function DropdownLink({ href, label }: { href: string; label: string }) {
  const location = usePathname();
  const isCurrent = location === href;
  return (
    <Link
      href={href}
      className={clsx(
        "whitespace-nowrap px-4 py-2 text-sm font-medium transition-colors hover:text-brand",
        isCurrent ? "text-white" : "text-white/60"
      )}
    >
      {label}
    </Link>
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
