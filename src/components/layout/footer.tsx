import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 size-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Main closing statement */}
        <div className="border-b border-border/60 py-20 sm:py-24 lg:py-32">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                Thanks for stopping by
              </p>

              <h2 className="max-w-5xl font-heading text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
                Software that works
                <br />
                <span className="text-muted-foreground">the way it should.</span>
              </h2>
            </div>

            <Link
              href="#top"
              className="group flex size-20 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground sm:size-24"
              aria-label="Back to top"
            >
              <ArrowUpRight
                size={28}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Navigation + identity */}
        <div className="grid gap-12 py-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Link href="#top" className="font-heading text-2xl font-semibold tracking-[-0.05em]">
              Abdullah<span className="text-primary">.</span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
              Software engineer focused on building thoughtful web, mobile, and business software.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-x-12 gap-y-4 sm:flex sm:flex-wrap sm:gap-x-8"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}

                <ArrowUpRight
                  size={12}
                  className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom metadata */}
        <div className="flex flex-col gap-4 border-t border-border/60 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Abdullah Saif</p>

          <div className="flex items-center gap-6">
            <span>Pakistan</span>

            <Link
              href="https://github.com/Abdullahsaif77"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-primary"
            >
              GitHub
            </Link>

            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-primary"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
