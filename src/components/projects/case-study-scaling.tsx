"use client";

import { Database, Gauge, Map, Radio, Server, Zap } from "lucide-react";

type ScalingPoint = {
  number: string;
  title: string;
  description: string;
  icon: typeof Radio;
};

const scalingPoints: ScalingPoint[] = [
  {
    number: "01",
    title: "Real-time location layer",
    description:
      "Driver location updates are handled through Socket.IO so the system can provide live movement information without relying on repeated polling requests.",
    icon: Radio,
  },
  {
    number: "02",
    title: "Meaningful movement",
    description:
      "The system does not treat every incoming location update as a database write. Movement is evaluated so unnecessary persistence can be avoided.",
    icon: Map,
  },
  {
    number: "03",
    title: "Batch persistence",
    description:
      "Meaningful movement points are accumulated and persisted in batches rather than writing every real-time update directly to the database.",
    icon: Database,
  },
  {
    number: "04",
    title: "Reduced external API work",
    description:
      "Redis is used to reduce repeated work and unnecessary external API calls where cached or reusable data can be served instead.",
    icon: Zap,
  },
];

export function CaseStudyScaling() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
              08 / Scaling &amp; Performance
            </p>

            <h2 className="mt-5 max-w-2xl font-heading text-3xl font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl">
              Designing around high-frequency data.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Real-time logistics creates a different kind of backend problem: location data can
            arrive continuously, while most of those updates do not need to become permanent
            database records. Cargoza separates real-time communication from persistence so the
            system can stay responsive without creating unnecessary database load.
          </p>
        </div>

        {/* Architecture flow */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-border/60 bg-card/30 sm:mt-20">
          <div className="grid lg:grid-cols-5">
            <FlowNode icon={Radio} label="Driver" description="Live location" />

            <FlowConnector />

            <FlowNode icon={Server} label="Socket.IO" description="Real-time transport" />

            <FlowConnector />

            <FlowNode icon={Gauge} label="Processing" description="Evaluate movement" />
          </div>

          <div className="border-t border-border/60">
            <div className="grid lg:grid-cols-5">
              <div className="hidden lg:block" />

              <FlowConnector />

              <FlowNode
                icon={Database}
                label="Batch persistence"
                description="Store meaningful points"
              />

              <FlowConnector />

              <FlowNode icon={Zap} label="Redis" description="Reduce repeated work" />
            </div>
          </div>
        </div>

        {/* Engineering decisions */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2">
          {scalingPoints.map((point) => {
            const Icon = point.icon;

            return (
              <article
                key={point.number}
                className="group relative bg-background p-7 transition-colors duration-500 hover:bg-muted/20 lg:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-primary">{point.number}</span>

                  <Icon
                    size={18}
                    strokeWidth={1.5}
                    className="text-muted-foreground transition-colors duration-300 group-hover:text-primary"
                  />
                </div>

                <h3 className="mt-7 font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                  {point.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
                  {point.description}
                </p>

                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-primary to-transparent transition-all duration-700 group-hover:w-full"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FlowNode({
  icon: Icon,
  label,
  description,
}: {
  icon: typeof Radio;
  label: string;
  description: string;
}) {
  return (
    <div className="flex min-h-32 items-center gap-4 p-6 sm:p-8">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-background text-primary">
        <Icon size={17} strokeWidth={1.5} />
      </div>

      <div>
        <p className="font-heading text-sm font-semibold sm:text-base">{label}</p>

        <p className="mt-1 text-xs leading-5 text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function FlowConnector() {
  return (
    <div aria-hidden="true" className="relative hidden items-center justify-center lg:flex">
      <span className="h-px w-full bg-border" />

      <span className="absolute size-1.5 rounded-full bg-primary" />
    </div>
  );
}
