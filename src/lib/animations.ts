import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

type RevealOptions = {
  y?: number;
  duration?: number;
  delay?: number;
  start?: string;
};

export function revealOnScroll(element: gsap.DOMTarget | string, options: RevealOptions = {}) {
  if (prefersReducedMotion()) {
    return;
  }

  return gsap.from(element, {
    y: options.y ?? 40,
    opacity: 0,
    duration: options.duration ?? 0.8,
    delay: options.delay ?? 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: element,
      start: options.start ?? "top 85%",
      once: true,
    },
  });
}
