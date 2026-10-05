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
      <div className="grid gap-12 lg:grid-cols-[0.75fr_1.4fr] lg:items-center lg:gap-16">
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
                className="group/btn inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
              >
                View project
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                />
              </Link>
            )}

            {github && (
              <Link
                href={github}
                target="_blank"
                rel="noreferrer"
                className="group/btn inline-flex h-11 items-center gap-2 rounded-full border border-border px-5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                Source code
                <ExternalLink
                  size={14}
                  className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                />
              </Link>
            )}
          </div>
        </div>

        {/* Project visual — no frame, no border, just the image */}
        <div className="project-visual relative">
          <div className={`project-frame relative overflow-hidden ${styles.frame}`}>
            <img
              src={image}
              alt={imageAlt}
              className={`h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.02] ${styles.image}`}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
