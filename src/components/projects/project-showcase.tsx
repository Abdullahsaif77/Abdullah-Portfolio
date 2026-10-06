"use client";

import { useRef } from "react";

import Link from "next/link";

import { ArrowUpRight, ExternalLink } from "lucide-react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGSAP } from "@gsap/react";

import { prefersReducedMotion } from "@/lib/animations";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ProjectLayout = "web" | "mobile" | "desktop";

type ProjectShowcaseProps = {
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  imageAlt: string;

  /**
   * Dedicated case-study page.
   * Example: /cargoza
   */
  caseStudyHref: string;

  /**
   * Optional live/deployed project URL.
   */
  liveUrl?: string;

  /**
   * Optional GitHub repository.
   */
  github?: string;

  layout: ProjectLayout;

  /**
   * Optional accent override. Defaults to theme primary.
   */
  accent?: "primary" | "emerald" | "teal" | "cyan";
};

const layoutStyles = {
  web: {
    frame: "aspect-[16/9]",
    image: "object-cover",
  },
  mobile: {
    frame: "aspect-[9/16] max-w-[420px] mx-auto",
    image: "object-cover",
  },
  desktop: {
    frame: "aspect-[16/10]",
    image: "object-cover",
  },
};

const accents = {
  primary: {
    glow: "bg-primary/20",
    wash: "from-primary/15 via-primary/[0.03]",
    dot: "bg-primary",
    tagHover: "group-hover/btn:border-primary group-hover/btn:text-primary",
    number: "text-primary",
    button: "bg-primary text-primary-foreground",
  },

  emerald: {
    glow: "bg-emerald-500/20",
    wash: "from-emerald-500/15 via-emerald-500/[0.03]",
    dot: "bg-emerald-400",
    tagHover: "group-hover/btn:border-emerald-500 group-hover/btn:text-emerald-500",
    number: "text-emerald-400",
    button: "bg-emerald-500 text-black",
  },

  teal: {
    glow: "bg-teal-500/20",
    wash: "from-teal-500/15 via-teal-500/[0.03]",
    dot: "bg-teal-400",
    tagHover: "group-hover/btn:border-teal-500 group-hover/btn:text-teal-500",
    number: "text-teal-400",
    button: "bg-teal-500 text-black",
  },

  cyan: {
    glow: "bg-cyan-500/20",
    wash: "from-cyan-500/15 via-cyan-500/[0.03]",
    dot: "bg-cyan-400",
    tagHover: "group-hover/btn:border-cyan-500 group-hover/btn:text-cyan-500",
    number: "text-cyan-400",
    button: "bg-cyan-500 text-black",
  },
};

export function ProjectShowcase({
  number,
  category,
  title,
  description,
  technologies,
  image,
  imageAlt,
  caseStudyHref,
  liveUrl,
  github,
  layout,
  accent = "primary",
}: ProjectShowcaseProps) {
  const container = useRef<HTMLElement>(null);

  const styles = layoutStyles[layout];
  const a = accents[accent];

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 78%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".project-info", {
        x: -35,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          ".project-visual",
          {
            y: 50,
            opacity: 0,
            scale: 0.96,
            duration: 1,
          },
          "-=0.6",
        )
        .from(
          ".project-frame",
          {
            clipPath: "inset(8% 0% 8% 0%)",
            duration: 1,
          },
          "-=0.8",
        );

      // Subtle parallax on the image.
      gsap.to(".project-image", {
        yPercent: 6,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    {
      scope: container,
    },
  );

  return (
    <article
      ref={container}
      className="group relative border-t border-border/60 py-16 sm:py-20 lg:py-28"
    >
      {/* Section-level accent glow */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute right-0 top-1/3 -z-10 size-[26rem] rounded-full ${a.glow} opacity-60 blur-[120px]`}
      />

      <div className="grid gap-12 lg:grid-cols-[0.75fr_1.4fr] lg:items-center lg:gap-16">
        {/* Project information */}
        <div className="project-info">
          <div className="mb-8 flex items-center gap-4">
            <span className={`font-mono text-xs ${a.number}`}>{number}</span>

            <span className={`h-px w-10 ${a.glow}`} />

            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {category}
            </span>
          </div>

          <h3 className="relative font-heading text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.055em]">
            {title}

            <span
              aria-hidden="true"
              className={`ml-2 inline-block size-2 translate-y-[-0.6em] rounded-full ${a.dot}`}
            />
          </h3>

          <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            {description}
          </p>

          {/* Technologies */}
          <div className="mt-8 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-border bg-background/40 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm transition-colors duration-300 group-hover:border-border/80 group-hover:text-foreground"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-9 flex flex-wrap gap-3">
            {/* Case Study */}
            <Link
              href={caseStudyHref}
              className={`group/btn inline-flex h-11 items-center gap-2 rounded-full ${a.button} px-5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5`}
            >
              View Case Study
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
              />
            </Link>

            {/* Live Project - only shown when deployed */}
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className={`group/btn inline-flex h-11 items-center gap-2 rounded-full border border-border bg-background/40 px-5 text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 ${a.tagHover}`}
              >
                Live Project
                <ExternalLink
                  size={14}
                  className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                />
              </Link>
            )}

            {/* GitHub */}
            {github && (
              <Link
                href={github}
                target="_blank"
                rel="noreferrer"
                className={`group/btn inline-flex h-11 items-center gap-2 rounded-full border border-border bg-background/40 px-5 text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 ${a.tagHover}`}
              >
                Source Code
                <ExternalLink
                  size={14}
                  className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                />
              </Link>
            )}
          </div>
        </div>

        {/* Project visual */}
        <div className="project-visual relative">
          {/* Ambient glow */}
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute -inset-10 -z-10 rounded-full ${a.glow} opacity-70 blur-3xl`}
          />

          {/* Image */}
          <div className={`project-frame relative overflow-hidden ${styles.frame}`}>
            {/* Subtle highlight */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-6 top-0 z-20 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
            />

            <img
              src={image}
              alt={imageAlt}
              className={`project-image relative h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.02] ${styles.image}`}
            />

            {/* Bottom gradient */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/3 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>

          {/* Caption */}
          <div className="mt-4 flex items-center justify-between px-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            <span>{category}</span>

            <span className={a.number}>{number}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
