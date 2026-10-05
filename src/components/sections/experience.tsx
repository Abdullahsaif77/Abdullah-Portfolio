"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "@/lib/animations";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const experiences = [
  {
    period: "2025 — Present",
    role: "Software Developer",
    company: "TECHFLOW SOLUTIONS",
    logo: "/Experiances/Techflow.jpg",
    description:
      "Leading development on multi-tenant SaaS products and business platforms — architecting scalable backend services, designing data models, and shipping production features that power real customer workflows. Working across web, mobile, and admin dashboards with a focus on reliability, performance, and clean architecture.",
    technologies: [
      "Backend",
      "React",
      "Next.js",
      "React Native",
      "Node.js",
      "MongoDB",
      "REST APIs",
    ],
  },
  {
    period: "2025",
    role: "Junior Software Engineer",
    company: "MEZ TECH SOLUTIONS",
    logo: "/Experiances/Mez.jpg",
    description:
      "Built SaaS products, cross-platform mobile applications, and admin dashboards — contributing across the full stack from frontend interfaces and backend APIs to database design and deployment.",
    technologies: ["React", "React Native", "Node.js", "Express", "MongoDB", "REST APIs"],
  },
  {
    period: "2024 — 2025",
    role: "Full-Stack Developer Intern",
    company: "CODELAB",
    logo: "/Experiances/Codelab.jpg",
    description:
      "Completed intensive full-stack development training through practical projects, strengthening fundamentals across frontend, backend, databases, Git, and application development.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Git"],
  },
];

export function Experience() {
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

      tl.from(".experience-header", {
        y: 30,
        opacity: 0,
        duration: 0.7,
      })
        .from(
          ".experience-intro",
          {
            y: 35,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.4",
        )
        .from(
          ".experience-item",
          {
            y: 40,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
          },
          "-=0.35",
        );
    },
    { scope: container },
  );

  return (
    <section ref={container} id="experience" className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="experience-header grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              03 / Experience
            </p>
          </div>

          <div className="experience-intro">
            <h2 className="max-w-4xl font-heading text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.055em]">
              From learning to building real software.
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              My experience has grown through hands-on development, from structured training to
              professional software development and production-focused projects.
            </p>
          </div>
        </div>

        <div className="experience-list mt-20 border-b border-border/60">
          {experiences.map((experience) => (
            <article
              key={`${experience.period}-${experience.role}`}
              className="experience-item grid gap-6 border-t border-border/60 py-10 lg:grid-cols-[0.35fr_0.65fr] lg:gap-16 lg:py-14"
            >
              {/*
                Left column — period + company logo.
                Mobile: stacked vertically, logo sized moderately.
                Desktop: stacked vertically (unchanged).
              */}
              <div className="flex flex-col items-start gap-5 lg:gap-6">
                <p className="font-mono text-xs tracking-[0.15em] text-primary">
                  {experience.period}
                </p>

                {/* Company logo — responsive sizing */}
                <div
                  className="relative size-24 shrink-0
                    sm:size-28
                    lg:size-56"
                >
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    fill
                    sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 224px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Right column — role, company, description, tags */}
              <div>
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="font-heading text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                      {experience.role}
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">{experience.company}</p>
                  </div>
                </div>

                <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
                  {experience.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
