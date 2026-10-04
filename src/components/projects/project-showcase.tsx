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
  href?: string;
  github?: string;
  layout: ProjectLayout;
};

const layoutStyles = {
  web: {
    frame: "aspect-[16/9]",
    image: "object-contain",
  },
  mobile: {
    frame: "aspect-[9/16] max-w-[360px] mx-auto",
    image: "object-contain",
  },
  desktop: {
    frame: "aspect-[16/10]",
    image: "object-contain",
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
  href,
  github,
  layout,
}: ProjectShowcaseProps) {
  const container = useRef<HTMLElement>(null);
  const styles = layoutStyles[layout];

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        return;
      }

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
    },
    { scope: container },
  );

  return (
    <article ref={container} className="group border-t border-border/60 py-16 sm:py-20 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
        {/* Project information */}
        <div className="project-info">
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-xs text-primary">{number}</span>

            <span className="h-px w-10 bg-primary/50" />

            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {category}
            </span>
          </div>

          <h3 className="font-heading text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.055em]">
            {title}
          </h3>

          <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            {href && (
              <Link
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                View project
                <ArrowUpRight size={15} />
              </Link>
            )}

            {github && (
              <Link
                href={github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                Source code
                <ExternalLink size={14} />
              </Link>
            )}
          </div>
        </div>

        {/* Project visual */}
        <div className="project-visual relative">
          <div
            className={`project-frame relative overflow-hidden rounded-[1.5rem] border border-border/70 bg-card ${styles.frame}`}
          >
            <img
              src={image}
              alt={imageAlt}
              className={`h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02] ${styles.image}`}
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>

          <div className="absolute -inset-3 -z-10 rounded-[2rem] border border-border/40 transition-colors duration-500 group-hover:border-primary/20" />
        </div>
      </div>
    </article>
  );
}
