"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "../../components/theme-toggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-border/60
        bg-background/80 backdrop-blur-xl"
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-18 max-w-7xl items-center justify-between
          px-5 sm:px-8 lg:px-12"
      >
        <Link
          href="/"
          className="font-heading text-xl font-bold tracking-tight"
          aria-label="Abdullah jutt home"
        >
          AJ<span className="text-primary">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm text-muted-foreground
                transition-colors duration-300 hover:text-primary"
            >
              {link.label}

              <span
                className="absolute -bottom-1 left-0 h-px w-0 bg-primary
                  transition-all duration-300 group-hover:w-full"
              />
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            href="#contact"
            className="inline-flex h-10 items-center gap-2 rounded-full
              bg-primary px-5 text-sm font-semibold text-primary-foreground
              transition-transform hover:-translate-y-0.5"
          >
            Let&apos;s talk
            <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex size-10 items-center justify-center
              rounded-full border border-border"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="border-t border-border/60 bg-background px-5 py-5
            md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-2 text-sm text-muted-foreground
                  transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-11 items-center justify-center gap-2
                rounded-full bg-primary px-5 text-sm font-semibold
                text-primary-foreground"
            >
              Let&apos;s talk <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
