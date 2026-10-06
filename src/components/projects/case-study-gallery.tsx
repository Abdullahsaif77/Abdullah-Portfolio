"use client";

import { useMemo, useState } from "react";
import { X } from "lucide-react";

type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
  group?: string;
};

type CaseStudyGalleryProps = {
  images: GalleryImage[];
  number?: string;
};

/**
 * Detect orientation from the group name so we can apply the right
 * aspect ratio. If you name your groups clearly ("Mobile App",
 * "Driver App", "Admin Web"), this works automatically.
 */
function getGroupOrientation(groupName: string): "portrait" | "landscape" {
  const name = groupName.toLowerCase();

  // Mobile applications
  if (
    name.includes("mobile") ||
    name.includes("app") ||
    name.includes("driver") ||
    name.includes("customer") ||
    name === "admin" ||
    name.includes("ios") ||
    name.includes("android")
  ) {
    return "portrait";
  }

  // Web / desktop interfaces
  return "landscape";
}

export function CaseStudyGallery({ images, number = "02" }: CaseStudyGalleryProps) {
  // Group images by their `group` field.
  const groups = useMemo(() => {
    const map = new Map<string, GalleryImage[]>();
    for (const img of images) {
      const key = img.group ?? "Screens";
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(img);
    }
    return Array.from(map.entries());
  }, [images]);

  const [activeGroup, setActiveGroup] = useState(groups[0]?.[0] ?? "Screens");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const activeEntry = groups.find(([name]) => name === activeGroup);
  const activeImages = activeEntry?.[1] ?? [];
  const orientation = getGroupOrientation(activeGroup);

  if (images.length === 0) return null;

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        {/* Header */}
        <div className="mb-14 max-w-3xl sm:mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
            {number} / Product Showcase
          </p>

          <h2 className="mt-5 font-heading text-3xl font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl">
            Screens from the product.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            A walkthrough of the key surfaces — grouped by the part of the product they belong to.
          </p>
        </div>

        {/* Group tabs */}
        {groups.length > 1 && (
          <div className="mb-10 flex flex-wrap gap-2 border-b border-border/60 pb-6">
            {groups.map(([name, items]) => {
              const isActive = name === activeGroup;
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => setActiveGroup(name)}
                  className={`group/tab inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] transition-all duration-300 ${
                    isActive
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border/60 text-muted-foreground hover:border-border hover:text-foreground"
                  }`}
                >
                  {name}
                  <span
                    className={`rounded-full px-1.5 py-0.5 font-mono text-[10px] ${
                      isActive ? "bg-primary/20 text-primary" : "bg-muted/40 text-muted-foreground"
                    }`}
                  >
                    {items.length}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Group counter */}
        <div className="mb-6 flex items-center justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            {activeGroup}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            {String(activeImages.length).padStart(2, "0")} screens
          </p>
        </div>

        {/* ─────────────── LANDSCAPE GRID ─────────────── */}
        {orientation === "landscape" && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {activeImages.map((img, i) => (
              <button
                key={`${img.src}-${i}`}
                type="button"
                onClick={() => setLightbox(img)}
                className="group relative overflow-hidden rounded-xl border border-border/60 bg-card/40 text-left transition-all duration-500 hover:border-primary/40 dark:bg-zinc-950/60"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  {/* Index badge */}
                  <span className="absolute left-3 top-3 rounded-full bg-black/50 px-2 py-0.5 font-mono text-[10px] tracking-wider text-white/90 backdrop-blur-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {img.caption && (
                  <div className="border-t border-border/60 p-4">
                    <p className="text-sm text-foreground">{img.caption}</p>
                  </div>
                )}

                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-primary to-transparent transition-all duration-700 group-hover:w-full"
                />
              </button>
            ))}
          </div>
        )}

        {/* ─────────────── PORTRAIT GRID (mobile) ─────────────── */}
        {orientation === "portrait" && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
            {activeImages.map((img, i) => (
              <button
                key={`${img.src}-${i}`}
                type="button"
                onClick={() => setLightbox(img)}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 text-left transition-all duration-500 hover:border-primary/40 dark:bg-zinc-950/60"
              >
                <div className="relative aspect-[9/16] overflow-hidden bg-black/20">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <span className="absolute left-2 top-2 rounded-full bg-black/50 px-2 py-0.5 font-mono text-[9px] tracking-wider text-white/90 backdrop-blur-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {img.caption && (
                  <div className="border-t border-border/60 px-3 py-2.5">
                    <p className="line-clamp-2 text-xs text-foreground">{img.caption}</p>
                  </div>
                )}

                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-primary to-transparent transition-all duration-700 group-hover:w-full"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 inline-flex size-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
          >
            <X size={18} />
          </button>

          <div
            className="relative flex max-h-[90vh] max-w-6xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[82vh] w-auto max-w-full rounded-lg object-contain"
            />

            {lightbox.caption && (
              <p className="mt-4 max-w-2xl text-center text-sm text-white/80">{lightbox.caption}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
