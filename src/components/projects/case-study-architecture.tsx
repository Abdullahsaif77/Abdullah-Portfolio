type Architecture = {
  frontend: string[];
  backend: string[];
  database: string[];
  services: string[];
};

type CaseStudyArchitectureProps = {
  architecture: Architecture;
};

const layers = [
  {
    key: "frontend" as const,
    number: "01",
    title: "Client Applications",
    description: "Mobile and web interfaces used by drivers and administrators.",
  },
  {
    key: "backend" as const,
    number: "02",
    title: "Application Backend",
    description: "The API and server-side business logic connecting users, workflows, and data.",
  },
  {
    key: "database" as const,
    number: "03",
    title: "Data Layer",
    description: "Persistent application data and operational records.",
  },
  {
    key: "services" as const,
    number: "04",
    title: "Real-Time & External Services",
    description: "Real-time communication, caching, payments, media, and mapping integrations.",
  },
];

export function CaseStudyArchitecture({ architecture }: CaseStudyArchitectureProps) {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          {/* Introduction */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
              08 / Architecture
            </p>

            <h2 className="mt-5 max-w-md font-heading text-3xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-4xl">
              How the system fits together.
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">
              Cargoza separates the client applications, backend, persistent data, and supporting
              services so each part of the platform can handle its own responsibility while
              remaining connected through the application backend.
            </p>
          </div>

          {/* Architecture layers */}
          <div className="relative">
            {/* Connection line */}
            <div
              aria-hidden="true"
              className="absolute bottom-8 left-[23px] top-8 hidden w-px bg-border sm:block"
            />

            <div className="space-y-5">
              {layers.map((layer) => {
                const technologies = architecture[layer.key];

                return (
                  <article
                    key={layer.key}
                    className="group relative grid gap-5 border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/40 sm:grid-cols-[48px_180px_1fr] sm:items-start sm:p-7"
                  >
                    {/* Number */}
                    <div className="relative z-10 flex size-12 shrink-0 items-center justify-center border border-border bg-background font-mono text-xs text-primary transition-colors duration-300 group-hover:border-primary/50">
                      {layer.number}
                    </div>

                    {/* Layer information */}
                    <div>
                      <h3 className="font-heading text-xl font-semibold tracking-[-0.03em]">
                        {layer.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {layer.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 sm:pt-1">
                      {technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors duration-300 group-hover:border-border/80 group-hover:text-foreground"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
