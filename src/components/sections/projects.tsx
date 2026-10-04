"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { ProjectShowcase } from "@/components/projects/project-showcase";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    number: "01",
    category: "Dispatch & Logistics",
    title: "Cargoza",
    description:
      "A logistics platform designed to connect drivers and vehicle owners with dispatch opportunities through route-based matching and real-time communication.",
    technologies: ["React Native", "Expo", "Node.js", "MongoDB", "Socket.IO", "Stripe"],
    image: "/projects/cargoza/hero.png",
    imageAlt: "Cargoza logistics platform interface",
    href: "https://cargoza.example.com",
    github: "https://github.com/Abdullahsaif77/cargoza",
    layout: "web" as const,
  },
  {
    number: "02",
    category: "Business Management",
    title: "Siflo",
    description:
      "A cross-platform POS and business management application for handling sales, purchases, customers, suppliers, payments, inventory, and financial reporting.",
    technologies: ["React Native", "Expo", "Express", "MongoDB", "RTK Query", "SQLite"],
    image: "/projects/siflo/hero.png",
    imageAlt: "Siflo point of sale application interface",
    href: "https://siflo.example.com",
    github: "https://github.com/Abdullahsaif77/siflo",
    layout: "mobile" as const,
  },
  {
    number: "03",
    category: "Desktop Business Software",
    title: "Pesticide Shop POS",
    description:
      "A desktop point-of-sale system built for day-to-day shop operations including inventory, sales, purchases, suppliers, customers, ledgers, expenses, reports, and backups.",
    technologies: ["React", "Electron", "Vite", "SQLite", "Node.js"],
    image: "/projects/pos/hero2.png",
    imageAlt: "Pesticide Shop POS application interface",
    href: "https://pesticide-pos.example.com",
    github: "https://github.com/Abdullahsaif77/pesticide-pos",
    layout: "desktop" as const,
  },
];

export function Projects() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) return;

      gsap.from(".projects-header", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
      });

      gsap.from(".project-item", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-list",
          start: "top 75%",
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      id="projects"
      className="relative overflow-hidden py-28 sm:py-36 lg:py-44"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="projects-header">
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-xs text-primary">02</span>
            <span className="h-px w-10 bg-primary/50" />
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Selected work
            </span>
          </div>

          <h2
            id="projects-title"
            className="max-w-4xl font-heading text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.95] tracking-[-0.06em]"
          >
            Projects built for <span className="text-primary">real use.</span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            A selection of products and systems I&apos;ve worked on across logistics, business
            management, mobile applications, and desktop software.
          </p>
        </div>

        <div className="projects-list mt-16 flex flex-col gap-24 sm:mt-24 sm:gap-32 lg:gap-40">
          {projects.map((project) => (
            <div key={project.number} className="project-item">
              <ProjectShowcase {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
