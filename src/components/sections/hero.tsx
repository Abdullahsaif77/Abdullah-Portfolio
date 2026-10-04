"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "@/lib/animations";

gsap.registerPlugin(useGSAP);

function LinkedInIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1-2.063-2.065 2.064 2.064 0 0 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.792 0 22.813 0h-.588z" />
    </svg>
  );
}

export function Hero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        return;
      }

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".hero-eyebrow", {
        y: 20,
        opacity: 0,
        duration: 0.7,
      })
        .from(
          ".hero-title-line",
          {
            y: 80,
            opacity: 0,
            duration: 1,
            stagger: 0.12,
          },
          "-=0.35",
        )
        .from(
          ".hero-description",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.45",
        )
        .from(
          ".hero-actions",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4",
        )
        .from(
          ".hero-socials",
          {
            y: 15,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.35",
        )
        .from(
          ".hero-visual",
          {
            x: 50,
            opacity: 0,
            scale: 0.96,
            duration: 1,
          },
          "-=0.8",
        )
        .from(
          ".hero-badge",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.45",
        );
    },
    {
      scope: container,
    },
  );

  return (
    <section
      ref={container}
      className="relative isolate overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 -z-10 size-[32rem] rounded-full bg-primary/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-12rem] top-1/2 -z-10 size-[28rem] rounded-full bg-emerald-500/5 blur-[100px]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pt-10 pb-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-12 lg:pt-14 lg:pb-20">
        <div className="relative z-10">
          <div className="hero-eyebrow mb-7 flex items-center gap-3">
            <span
              className="size-2 rounded-full bg-primary shadow-[0_0_14px_var(--color-primary)]"
              aria-hidden="true"
            />

            <span className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground sm:text-sm">
              Software Engineer · Pakistan
            </span>
          </div>

          <h1
            id="hero-title"
            className="font-heading text-[clamp(3rem,6.5vw,5.5rem)] font-semibold leading-[0.96] tracking-[-0.07em]"
          >
            <span className="hero-title-line block">Software</span>

            <span className="hero-title-line block">engineer for</span>

            <span className="hero-title-line block text-primary">
              real businesses
              <span className="text-foreground" aria-hidden="true">
                .
              </span>
            </span>
          </h1>

          <p className="hero-description mt-8 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            I&apos;m Abdullah, a software engineer building production web, mobile, and desktop
            systems — from logistics platforms and POS software to cross-platform business apps used
            in real operations every day.
          </p>

          <div className="hero-actions mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="#projects"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore my work
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
              />
            </Link>

            <Link
              href="#contact"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-border px-6 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              Get in touch
            </Link>
          </div>

          <div className="hero-socials mt-12 flex items-center gap-5">
            <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Find me on
            </span>

            <Link
              href="https://github.com/Abdullahsaif77"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
            >
              <SiGithub size={18} />
            </Link>

            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
            >
              <LinkedInIcon size={18} />
            </Link>
          </div>
        </div>

        <div className="hero-visual relative mx-auto w-full max-w-[34rem]">
          <div
            aria-hidden="true"
            className="absolute -inset-5 rotate-3 rounded-[2.5rem] border border-primary/20"
          />

          <div
            aria-hidden="true"
            className="absolute -inset-2 -rotate-2 rounded-[2.2rem] border border-border/70"
          />

          <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/70 bg-card">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_35%,rgba(16,185,129,0.2),transparent_45%),linear-gradient(145deg,transparent_20%,rgba(16,185,129,0.07))]"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:36px_36px]"
            />

            {/* Replace this placeholder with your portrait later. */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
              <div className="flex size-28 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-heading text-4xl font-semibold text-primary shadow-[0_0_70px_rgba(16,185,129,0.12)]">
                AS
              </div>

              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Your portrait goes here
              </span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-border/70 bg-background/75 p-4 backdrop-blur-xl">
              <div>
                <p className="font-heading text-sm font-semibold">Abdullah Saif</p>

                <p className="mt-1 text-xs text-muted-foreground">Software Engineer</p>
              </div>

              <span className="hero-badge flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-2 text-xs font-medium text-primary">
                <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                Open to opportunities
              </span>
            </div>
          </div>

          <div className="absolute -right-3 top-10 hidden rounded-xl border border-border bg-card/90 px-4 py-3 shadow-xl backdrop-blur sm:block">
            <span className="font-mono text-xs text-primary">
              {"<"}code /{">"}
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto hidden max-w-7xl items-center gap-3 px-12 pb-8 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:flex">
        <ArrowDown size={14} />
        Scroll to explore
      </div>
    </section>
  );
}
