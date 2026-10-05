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
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1-2.063-2.065 2.064 2.064 0 0 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
          ".hero-mobile-visual",
          {
            y: 40,
            opacity: 0,
            duration: 0.9,
          },
          "-=0.3",
        );
    },
    {
      scope: container,
    },
  );

  return (
    <section
      ref={container}
      id="top"
      className="relative isolate overflow-hidden lg:min-h-[760px]"
      aria-labelledby="hero-title"
    >
      {/* Base background — matches the site theme so empty space blends */}
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-background" />

      {/* ===================== */}
      {/* DESKTOP BACKGROUND   */}
      {/* ===================== */}

      {/* Desktop — LIGHT theme banner */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 hidden
          bg-[url('/images/Banner_white.jfif')]
          bg-cover bg-center bg-no-repeat
          dark:hidden
          lg:block"
      />

      {/* Desktop — DARK theme banner */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 hidden
          bg-[url('/images/Banner.png')]
          bg-cover bg-center bg-no-repeat
          dark:block"
      />

      {/* Desktop overlay — DARK theme only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 hidden
          bg-gradient-to-r from-[#020807]/80 via-[#020807]/40
          via-40% to-transparent
          dark:block"
      />

      {/* Bottom fade into the next section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10
          hidden h-32 bg-gradient-to-t from-background to-transparent
          lg:block"
      />

      {/* Content wrapper */}
      <div
        className="mx-auto flex max-w-7xl flex-col px-5 pt-28 pb-0
          sm:px-8 lg:min-h-[760px] lg:flex-row lg:items-center
          lg:px-12 lg:pt-24 lg:pb-20"
      >
        {/* LEFT CONTENT */}
        <div className="relative z-10 w-full max-w-3xl">
          <div className="hero-eyebrow mb-6 flex items-center gap-3 sm:mb-7">
            <span
              className="size-2 rounded-full bg-primary
                shadow-[0_0_14px_var(--color-primary)]"
              aria-hidden="true"
            />

            <span
              className="text-[11px] font-medium uppercase
                tracking-[0.22em] text-muted-foreground sm:text-sm"
            >
              Software Engineer · Pakistan
            </span>
          </div>

          <h1
            id="hero-title"
            className="font-heading text-[clamp(2.25rem,9vw,5.5rem)]
              font-semibold leading-[0.98] tracking-[-0.06em]
              sm:text-[clamp(3rem,6.5vw,5.5rem)] sm:leading-[0.96]
              sm:tracking-[-0.07em]"
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

          <p
            className="hero-description mt-6 max-w-xl text-[15px]
              leading-7 text-muted-foreground sm:mt-8 sm:text-base
              sm:leading-8 lg:text-lg"
          >
            I&apos;m Abdullah, a software engineer building production web, mobile, and desktop
            systems — from logistics platforms and POS software to cross-platform business apps used
            in real operations every day.
          </p>

          <div className="hero-actions mt-8 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
            <Link
              href="#projects"
              className="group inline-flex h-11 items-center gap-2
                rounded-full bg-primary px-5 text-sm font-semibold
                text-primary-foreground transition-all duration-300
                hover:-translate-y-0.5 sm:h-12 sm:px-6"
            >
              Explore my work
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300
                  group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href="#contact"
              className="inline-flex h-11 items-center gap-2
                rounded-full border border-border px-5 text-sm
                font-semibold transition-all duration-300
                hover:-translate-y-0.5 hover:border-primary
                hover:text-primary sm:h-12 sm:px-6"
            >
              Get in touch
            </Link>
          </div>

          <div className="hero-socials mt-10 flex items-center gap-4 sm:mt-12 sm:gap-5">
            <span
              className="text-[11px] uppercase tracking-[0.18em]
                text-muted-foreground sm:text-xs"
            >
              Find me on
            </span>

            <Link
              href="https://github.com/Abdullahsaif77"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-muted-foreground transition-all duration-300
                hover:-translate-y-0.5 hover:text-primary"
            >
              <SiGithub size={18} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/abdullah-jutt7"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-muted-foreground transition-all duration-300
                hover:-translate-y-0.5 hover:text-primary"
            >
              <LinkedInIcon size={18} />
            </Link>
          </div>
        </div>

        {/* MOBILE VISUAL — theme-aware */}
        <div
          aria-hidden="true"
          className="hero-mobile-visual relative mt-12 w-full
            overflow-hidden rounded-2xl border border-border/60
            bg-background lg:hidden"
        >
          <img
            src="/images/Banner_white.jfif"
            alt=""
            className="h-full w-full object-cover object-[90%_top] dark:hidden"
            style={{ aspectRatio: "4 / 5" }}
          />

          <img
            src="/images/Banner.png"
            alt=""
            className="hidden h-full w-full object-cover object-[90%_top] dark:block"
            style={{ aspectRatio: "4 / 5" }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0
              h-24 bg-gradient-to-t from-background to-transparent"
          />
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <div
        className="mx-auto hidden max-w-7xl items-center gap-3 px-12 pb-8
          text-xs uppercase tracking-[0.2em] text-muted-foreground lg:flex"
      >
        <ArrowDown size={14} />
        Scroll to explore
      </div>
    </section>
  );
}
