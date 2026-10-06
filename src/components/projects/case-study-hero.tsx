"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { CaseStudyProject } from "@/components/projects/project-case-study";

type CaseStudyHeroProps = {
  project: CaseStudyProject;
};

export function CaseStudyHero({ project }: CaseStudyHeroProps) {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 lg:px-12 lg:pb-28 lg:pt-20">
        {/* Heading */}
        <div className="max-w-5xl">
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            <span className="text-primary">{project.number}</span>

            <span>/</span>

            <span>{project.category}</span>
          </div>

          <h1 className="mt-7 font-heading text-[clamp(4rem,11vw,9rem)] font-semibold leading-[0.82] tracking-[-0.075em]">
            {project.title}
          </h1>

          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              {project.description}
            </p>

            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                Source Code
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            )}
          </div>
        </div>

        {/* Hero image */}
        <div className="mt-16 overflow-hidden border border-border bg-card sm:mt-20">
          <div className="relative aspect-[16/9]">
            <Image
              src={project.heroImage}
              alt={project.heroImageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"
            />
          </div>
        </div>

        {/* Metadata */}
        <div className="mt-8 grid border-y border-border sm:grid-cols-2 lg:grid-cols-4">
          <MetaItem label="Role" value={project.role} />

          <MetaItem label="Type" value={project.type} />

          <MetaItem label="Platform" value={project.platform} />

          <MetaItem label="Status" value={project.status} />
        </div>
      </div>
    </section>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-border px-5 py-6 last:border-b-0 sm:border-r sm:px-6 lg:border-b-0 lg:last:border-r-0">
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </p>

      <p className="mt-2 text-sm font-medium">{value}</p>
    </div>
  );
}
