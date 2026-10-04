"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "@/lib/animations";

gsap.registerPlugin(useGSAP);

const capabilities = [
  {
    number: "01",
    title: "Web Applications",
    description: "Modern, responsive applications built with React, Next.js, and TypeScript.",
  },
  {
    number: "02",
    title: "Mobile Experiences",
    description: "Cross-platform mobile applications with React Native and Expo.",
  },
  {
    number: "03",
    title: "Desktop Applications",
    description:
      "Native and cross-platform desktop software designed for performance, offline reliability, and everyday workflows.",
  },
  {
    number: "04",
    title: "Business Software",
    description:
      "Practical software for sales, inventory, finance, and day-to-day business operations.",
  },
];

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "Electron.js",
  "Node.js",
  "Express",
  "Python",
  "FastApi",
  "MongoDB",
  "Postgres",
  "MySql",
  "Git",
];

export function About() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".about-header", {
        y: 30,
        opacity: 0,
        duration: 0.7,
      })
        .fromTo(
          ".about-header-line",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.7, ease: "power2.out" },
          0,
        )
        .from(".about-glow", { scale: 0.7, opacity: 0, duration: 1.4 }, 0)
        .from(".about-headline", { y: 50, opacity: 0, duration: 0.9 }, "-=0.35")
        .from(".about-description", { y: 30, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(".about-capability", { y: 35, opacity: 0, duration: 0.7, stagger: 0.1 }, "-=0.35")
        .from(".about-tech", { y: 20, opacity: 0, duration: 0.6 }, "-=0.3");
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      id="about"
      className="relative overflow-hidden border-t border-border/60 py-28 sm:py-36 lg:py-44"
      aria-labelledby="about-title"
    >
      {/* Ambient glow behind the headline — grows in on scroll */}
      <div
        aria-hidden="true"
        className="about-glow pointer-events-none absolute left-[-10rem] top-40 -z-10 size-[28rem] rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="about-header mb-16 flex items-center gap-4 sm:mb-20">
          <span className="font-mono text-xs text-primary">01</span>
          <span className="about-header-line h-px w-10 origin-left bg-primary/50" />
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            About
          </span>
        </div>

        {/* Headline + description */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div className="about-headline">
            <h2
              id="about-title"
              className="max-w-4xl font-heading text-[clamp(2.8rem,5.5vw,5.2rem)] font-semibold leading-[1] tracking-[-0.055em]"
            >
              I build software that{" "}
              <span className="headline-shimmer bg-gradient-to-r from-primary via-emerald-300 to-primary bg-[length:200%_auto] bg-clip-text text-transparent">
                solves real problems.
              </span>
            </h2>
          </div>

          <div className="about-description flex items-end">
            <p className="max-w-lg text-base leading-8 text-muted-foreground sm:text-lg">
              I&apos;m Abdullah Jutt, a software engineer focused on building modern web
              applications, mobile experiences, desktop applications, and practical business
              software. I enjoy turning ideas and complex requirements into products that are
              useful, maintainable, and easy to use.
            </p>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mt-24 border-t border-border/60 sm:mt-32">
          <div className="grid md:grid-cols-2">
            {capabilities.map((item) => (
              <article
                key={item.number}
                className="about-capability group border-b border-border/60 py-8 md:even:border-l md:even:pl-10 md:odd:pr-10 lg:py-10"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-xs text-primary">{item.number}</span>
                  <span className="size-2 rounded-full bg-border transition-colors duration-300 group-hover:bg-primary group-hover:shadow-[0_0_12px_var(--color-primary)]" />
                </div>

                <h3 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-md leading-7 text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Technology marquee */}
        <div className="about-tech mt-20 overflow-hidden border-y border-border/60 py-8 sm:mt-28">
          <div className="flex items-center gap-4 lg:gap-12">
            <span className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Technologies I work with
            </span>

            <div className="marquee-mask relative flex-1 overflow-hidden">
              <div className="marquee-track flex gap-x-8 whitespace-nowrap">
                {[...technologies, ...technologies].map((tech, i) => (
                  <span
                    key={`${tech}-${i}`}
                    className="font-heading text-sm font-medium text-foreground/80 sm:text-base"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
