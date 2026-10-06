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
    tags: ["React", "Next.js", "TypeScript"],
    gradient: "from-primary/15 via-primary/[0.03] to-transparent",
    glow: "bg-primary/25",
    ring: "group-hover:border-primary/40",
    dot: "bg-primary",
  },
  {
    number: "02",
    title: "Mobile Experiences",
    description: "Cross-platform mobile applications with React Native and Expo.",
    tags: ["React Native", "Expo"],
    gradient: "from-emerald-500/12 via-emerald-500/[0.03] to-transparent",
    glow: "bg-emerald-500/25",
    ring: "group-hover:border-emerald-500/40",
    dot: "bg-emerald-400",
  },
  {
    number: "03",
    title: "Desktop Applications",
    description:
      "Native and cross-platform desktop software designed for performance, offline reliability, and everyday workflows.",
    tags: ["Electron.js", "Node.js"],
    gradient: "from-teal-500/12 via-teal-500/[0.03] to-transparent",
    glow: "bg-teal-500/25",
    ring: "group-hover:border-teal-500/40",
    dot: "bg-teal-400",
  },
  {
    number: "04",
    title: "Business Software",
    description:
      "Practical software for sales, inventory, finance, and day-to-day business operations.",
    tags: ["Postgres", "Express"],
    gradient: "from-cyan-500/10 via-cyan-500/[0.03] to-transparent",
    glow: "bg-cyan-500/20",
    ring: "group-hover:border-cyan-500/40",
    dot: "bg-cyan-400",
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
      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      tl.from(".about-ticker", { y: -20, opacity: 0, duration: 0.6 })
        .from(".about-rail-item", {
          x: -20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
        })
        .from(
          ".about-word",
          {
            yPercent: 110,
            opacity: 0,
            duration: 0.9,
            stagger: 0.06,
            ease: "power4.out",
          },
          "-=0.3",
        )
        .from(".about-meta", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(
          ".about-card",
          {
            y: 40,
            opacity: 0,
            duration: 0.7,
            stagger: { each: 0.12, from: "start" },
          },
          "-=0.3",
        );

      gsap.to(".about-shimmer", {
        backgroundPosition: "200% center",
        duration: 5,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".about-ticker-track", {
        xPercent: -50,
        duration: 32,
        repeat: -1,
        ease: "none",
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      id="about"
      className="relative overflow-hidden border-t border-border/60 py-24 sm:py-32"
      aria-labelledby="about-title"
    >
      {/* Ambient background glow — theme-aware */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/4 top-1/3 -z-10 size-[32rem] rounded-full bg-primary/[0.07] blur-[140px] dark:bg-primary/[0.09]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 -z-10 size-[26rem] rounded-full bg-emerald-500/[0.06] blur-[130px] dark:bg-emerald-500/[0.08]"
      />

      {/* Top tech ticker */}
      <div className="about-ticker mb-20 border-y border-border/60 bg-muted/5 py-3 sm:mb-28">
        <div className="about-ticker-track flex w-max gap-x-10 whitespace-nowrap will-change-transform">
          {[...technologies, ...technologies].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground"
            >
              <span className="size-1 rounded-full bg-primary/60" />
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[220px_1fr] lg:gap-24">
          {/* LEFT RAIL — sticky */}
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <div className="flex flex-col gap-8">
              <div className="about-rail-item flex items-center gap-3">
                <span className="font-mono text-xs text-primary">01</span>
                <span className="h-px w-8 bg-primary/50" />
                <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
                  About
                </span>
              </div>

              {/* Monogram block — theme-aware surface */}
              <div className="about-rail-item relative w-full max-w-[180px] aspect-square overflow-hidden rounded-2xl border border-border/60 bg-card/40 dark:bg-zinc-950/60">
                {/* Diagonal accent strip */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/10 to-transparent"
                />
                <div
                  aria-hidden="true"
                  className="absolute -inset-y-6 left-1/2 w-10 -translate-x-1/2 rotate-[20deg] bg-primary/10 blur-xl"
                />

                {/* Centered monogram */}
                <span className="absolute inset-0 flex items-center justify-center font-heading text-[5.5rem] font-semibold leading-none tracking-tighter text-foreground">
                  AJ
                </span>

                {/* Hairline cross */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-4 top-1/2 h-px -translate-y-1/2 bg-border/60"
                />

                <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  est. 2020
                </span>
              </div>

              <ul className="about-rail-item space-y-3 text-sm">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="size-1.5 rounded-full bg-primary" />
                  Available for work
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  Remote · Worldwide
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  Full-stack engineer
                </li>
              </ul>

              <div className="about-rail-item border-t border-border/60 pt-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-4xl font-semibold tracking-tight text-primary">
                    13
                  </span>
                  <span className="font-heading text-2xl text-muted-foreground">+</span>
                </div>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Technologies mastered
                </p>
              </div>
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <div>
            <h2
              id="about-title"
              className="font-heading text-[clamp(2.6rem,5.2vw,4.8rem)] font-semibold leading-[1.02] tracking-[-0.05em]"
            >
              <span className="block overflow-hidden">
                <span className="about-word inline-block">I</span>{" "}
                <span className="about-word inline-block">build</span>{" "}
                <span className="about-word inline-block">software</span>{" "}
                <span className="about-word inline-block">that</span>
              </span>
              <span className="block overflow-hidden">
                <span className="about-word about-shimmer inline-block bg-gradient-to-r from-primary via-emerald-300 to-primary bg-[length:200%_auto] bg-clip-text text-transparent dark:via-emerald-400">
                  solves
                </span>{" "}
                <span className="about-word inline-block">real</span>{" "}
                <span className="about-word inline-block">problems.</span>
              </span>
            </h2>

            <div className="about-meta mt-10 grid gap-8 border-t border-border/60 pt-8 sm:grid-cols-[1fr_auto]">
              <p className="max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
                I&apos;m <span className="text-foreground">Abdullah Jutt</span>, a software engineer
                focused on building modern web applications, mobile experiences, desktop
                applications, and practical business software. I enjoy turning ideas and complex
                requirements into products that are useful, maintainable, and easy to use.
              </p>
              <div className="flex items-end"></div>
            </div>

            {/* CAPABILITY BENTO — theme-aware cards */}
            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((item, i) => {
                const isWide = i === 0;
                return (
                  <article
                    key={item.number}
                    className={`about-card group relative isolate overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-6 transition-colors duration-500 dark:bg-zinc-950/60 ${item.ring} ${
                      isWide ? "sm:col-span-2 lg:col-span-2" : ""
                    }`}
                  >
                    {/* 1. Base gradient wash */}
                    <div
                      aria-hidden="true"
                      className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${item.gradient} opacity-80 transition-opacity duration-500 group-hover:opacity-100`}
                    />

                    {/* 2. Dotted texture */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] dark:opacity-[0.12] [background-image:radial-gradient(var(--color-foreground)_1px,transparent_1px)] [background-size:14px_14px] [mask-image:radial-gradient(circle_at_top_left,black,transparent_75%)]"
                    />

                    {/* 3. Corner radial glow */}
                    <div
                      aria-hidden="true"
                      className={`pointer-events-none absolute -right-16 -top-16 -z-10 size-44 rounded-full ${item.glow} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100`}
                    />

                    {/* 4. Bottom-edge ambient wash */}
                    <div
                      aria-hidden="true"
                      className={`pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/2 ${item.glow} opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-50`}
                    />

                    {/* 5. Top inner highlight — light/dark aware */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent dark:via-white/10"
                    />

                    <div className="relative flex items-start justify-between">
                      <span className="font-mono text-xs text-primary">{item.number}</span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        ↗ explore
                      </span>
                    </div>

                    <h3 className="relative mt-10 font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                      {item.title}
                    </h3>

                    <p
                      className={`relative mt-3 text-sm leading-7 text-muted-foreground ${
                        isWide ? "max-w-lg" : ""
                      }`}
                    >
                      {item.description}
                    </p>

                    <div className="relative mt-6 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border/60 bg-background/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur-sm transition-colors duration-300 group-hover:border-primary/40 group-hover:text-foreground dark:bg-background/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span
                      className={`absolute bottom-4 right-4 size-1.5 rounded-full ${item.dot} opacity-50 transition-opacity duration-300 group-hover:opacity-100`}
                    />
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
