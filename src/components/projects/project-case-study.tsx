"use client";

import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { CaseStudyArchitecture } from "@/components/projects/case-study-architecture";
import { CaseStudyFeatures } from "@/components/projects/case-study-features";
import { CaseStudyGallery } from "@/components/projects/case-study-gallery";
import { CaseStudyHero } from "@/components/projects/case-study-hero";
import { CaseStudyOverview } from "@/components/projects/case-study-overview";
import { CaseStudyScaling } from "@/components/projects/case-study-scaling";
import { CaseStudyTechStack } from "@/components/projects/case-study-tech-stack";
import { CaseStudyWorkflows } from "@/components/projects/case-study-workflows";

export type CaseStudyFeature = {
  number: string;
  title: string;
  description: string;
};

export type CaseStudyEcosystemItem = {
  label: string;
  value: string;
  description: string;
};

export type CaseStudyDecision = {
  title: string;
  reasoning: string;
  outcome: string;
};

export type CaseStudyHeroAspect = "landscape" | "portrait" | "square";

export type CaseStudyProject = {
  number: string;
  category: string;
  title: string;
  description: string;

  heroImage: string;
  heroImageAlt: string;

  /**
   * Aspect ratio for the hero image.
   * - "landscape" (default) → 16/9, best for web & desktop
   * - "portrait"            → 9/16, best for mobile apps
   * - "square"              → 1/1
   */
  heroAspect?: CaseStudyHeroAspect;

  technologies: string[];

  role: string;
  type: string;
  platform: string;
  status: string;

  overview: string;
  challenge: string;
  solution: string;

  features: CaseStudyFeature[];

  ecosystem?: CaseStudyEcosystemItem[];

  architecture?: {
    frontend: string[];
    backend: string[];
    database: string[];
    services: string[];
  };

  decisions?: CaseStudyDecision[];

  gallery: {
    src: string;
    alt: string;
    caption?: string;
    group?: string;
  }[];

  github?: string;
  liveUrl?: string;
};

type ProjectCaseStudyProps = {
  project: CaseStudyProject;
};

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  let section = 0;
  const nextSection = () => String(++section).padStart(2, "0");

  // Sections the parent owns and renders inline.
  // Children (Hero, Gallery, Overview, Features, etc.) render their
  // own internal numbering — they're not part of this counter.
  const ecosystemNumber = project.ecosystem?.length ? nextSection() : null;
  const challengeNumber = nextSection();
  const roleNumber = nextSection();
  const decisionsNumber = project.decisions?.length ? nextSection() : null;

  return (
    <main className="overflow-hidden">
      {/* Back navigation */}
      <div className="mx-auto max-w-7xl px-5 pt-28 sm:px-8 lg:px-12 lg:pt-32">
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to projects
        </Link>
      </div>

      {/* 01 — Hero */}
      <CaseStudyHero project={project} />

      {/* 02 — Product Showcase (Gallery) */}
      <CaseStudyGallery images={project.gallery} />

      {/* 03 — Overview */}
      <CaseStudyOverview project={project} />

      {/* 04 — Product Ecosystem */}
      {ecosystemNumber && project.ecosystem && (
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <div className="mb-14 max-w-3xl sm:mb-20">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
                {ecosystemNumber} / Product Ecosystem
              </p>

              <h2 className="mt-5 font-heading text-3xl font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl">
                Every piece that makes the product work.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                The project isn&apos;t a single surface — it&apos;s a set of coordinated experiences
                and systems that share data, users, and business logic.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
              {project.ecosystem.map((item, index) => (
                <article
                  key={item.label}
                  className="group relative bg-background p-7 transition-colors duration-500 hover:bg-muted/20 lg:p-9"
                >
                  <span className="font-mono text-xs text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-6 font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                    {item.label}
                  </h3>

                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {item.value}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>

                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-primary to-transparent transition-all duration-700 group-hover:w-full"
                  />
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 05 — Challenge + Solution */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
                {challengeNumber} / The Challenge
              </p>

              <h2 className="mt-5 max-w-3xl font-heading text-3xl font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl">
                The problem behind the product.
              </h2>
            </div>

            <div className="space-y-12">
              <div>
                <p className="text-lg leading-8 text-muted-foreground sm:text-xl">
                  {project.challenge}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
                  The Solution
                </p>

                <p className="mt-5 text-lg leading-8 text-muted-foreground sm:text-xl">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features — child owns its number */}
      <CaseStudyFeatures features={project.features} />

      {/* Core Workflows — child owns its number */}
      <CaseStudyWorkflows />

      {/* Scaling & Performance — child owns its number */}
      <CaseStudyScaling />

      {/* Architecture — child owns its number */}
      {project.architecture && <CaseStudyArchitecture architecture={project.architecture} />}

      {/* Tech Stack — child owns its number */}
      <CaseStudyTechStack technologies={project.technologies} />

      {/* My Role */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
                {roleNumber} / My Role
              </p>

              <h2 className="mt-5 max-w-3xl font-heading text-3xl font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl">
                What I owned and shipped.
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { label: "Role", value: project.role },
                { label: "Type", value: project.type },
                { label: "Platform", value: project.platform },
                { label: "Status", value: project.status },
              ].map((row) => (
                <div
                  key={row.label}
                  className="rounded-2xl border border-border/60 bg-card/40 p-6 transition-colors duration-500 hover:border-primary/30 dark:bg-zinc-950/60"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {row.label}
                  </p>

                  <p className="mt-3 font-heading text-lg font-semibold">{row.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Decisions */}
      {decisionsNumber && project.decisions && (
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <div className="mb-14 max-w-3xl sm:mb-20">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
                {decisionsNumber} / Engineering Decisions
              </p>

              <h2 className="mt-5 font-heading text-3xl font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl">
                The tradeoffs behind the build.
              </h2>
            </div>

            <div className="space-y-px overflow-hidden rounded-2xl border border-border/60 bg-border/60">
              {project.decisions.map((decision, index) => (
                <article
                  key={decision.title}
                  className="group grid gap-6 bg-background p-7 transition-colors duration-500 hover:bg-muted/20 sm:grid-cols-[auto_1fr_1fr] sm:items-start lg:p-9"
                >
                  <span className="font-mono text-xs text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                      {decision.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      {decision.reasoning}
                    </p>
                  </div>

                  <div className="border-t border-border/60 pt-4 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      Outcome
                    </p>

                    <p className="mt-3 text-sm leading-7 text-foreground">{decision.outcome}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
                Next step
              </p>

              <h2 className="mt-5 max-w-2xl font-heading text-3xl font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl">
                Want to explore the implementation?
              </h2>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-6 py-3.5 text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  Live Project
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              )}

              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
                >
                  Source Code
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              )}
            </div>
          </div>

          <div className="mt-20 border-t border-border pt-8">
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              <ArrowLeft
                size={16}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back to all projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
