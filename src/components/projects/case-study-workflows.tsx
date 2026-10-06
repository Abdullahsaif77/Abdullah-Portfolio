"use client";

import { ArrowDown, ArrowRight, MapPin, MessageSquare, Radio, Truck } from "lucide-react";

type WorkflowStep = {
  number: string;
  title: string;
  description: string;
};

type Workflow = {
  number: string;
  label: string;
  title: string;
  description: string;
  steps: WorkflowStep[];
};

const workflows: Workflow[] = [
  {
    number: "01",
    label: "DISPATCH FLOW",
    title: "From shipment to driver response.",
    description:
      "Admins can create shipment opportunities and propose them to drivers. Drivers can review available bids and respond according to the opportunity.",
    steps: [
      {
        number: "01",
        title: "Admin creates a shipment",
        description:
          "The admin defines the shipment and creates a dispatch opportunity for the relevant drivers.",
      },
      {
        number: "02",
        title: "Bid reaches the driver",
        description:
          "Drivers can see available opportunities and review the details before deciding how to respond.",
      },
      {
        number: "03",
        title: "Driver accepts or counters",
        description:
          "The driver can accept the bid or make an offer instead of simply accepting the original proposal.",
      },
    ],
  },
  {
    number: "02",
    label: "REAL-TIME TRACKING",
    title: "Location data without unnecessary database writes.",
    description:
      "The driver application continuously communicates location updates through Socket.IO while the backend controls how movement data is processed and persisted.",
    steps: [
      {
        number: "01",
        title: "Driver sends location",
        description:
          "The mobile application sends location updates through the real-time connection while the driver is moving.",
      },
      {
        number: "02",
        title: "Movement is evaluated",
        description:
          "The system evaluates meaningful movement instead of treating every incoming location update as a database record.",
      },
      {
        number: "03",
        title: "Route data is persisted",
        description:
          "Meaningful movement points are accumulated and persisted in batches to reduce unnecessary database writes.",
      },
    ],
  },
  {
    number: "03",
    label: "ADMIN OPERATIONS",
    title: "A live view of the driver's side of the operation.",
    description:
      "Admins can manage drivers and monitor their current locations through the connected mobile and web administration surfaces.",
    steps: [
      {
        number: "01",
        title: "Drivers stay connected",
        description:
          "Connected drivers continuously provide their current location through the real-time communication layer.",
      },
      {
        number: "02",
        title: "Admin receives live updates",
        description:
          "The admin side receives location changes without requiring constant manual refreshes.",
      },
      {
        number: "03",
        title: "Operations stay coordinated",
        description:
          "The live location view gives admins better visibility while managing drivers and dispatch activity.",
      },
    ],
  },
];

export function CaseStudyWorkflows() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        {/* Header */}
        <div className="mb-16 max-w-4xl sm:mb-20">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
            07 / Core Workflows
          </p>

          <h2 className="mt-5 max-w-3xl font-heading text-3xl font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl">
            How the system works behind the interface.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Cargoza is more than a collection of screens. Its core experience depends on coordinated
            workflows between admins, drivers, real-time services, and the backend.
          </p>
        </div>

        {/* Workflow sections */}
        <div className="space-y-20 sm:space-y-28">
          {workflows.map((workflow, workflowIndex) => (
            <article key={workflow.number}>
              {/* Workflow heading */}
              <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
                <div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-primary">{workflow.number}</span>

                    <span className="h-px w-10 bg-primary/30" />

                    <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                      {workflow.label}
                    </span>
                  </div>

                  <h3 className="mt-6 max-w-xl font-heading text-2xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                    {workflow.title}
                  </h3>
                </div>

                <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  {workflow.description}
                </p>
              </div>

              {/* Workflow steps */}
              <div className="mt-10 overflow-hidden rounded-2xl border border-border/60">
                <div className="grid lg:grid-cols-3">
                  {workflow.steps.map((step, stepIndex) => (
                    <div
                      key={step.number}
                      className="group relative border-b border-border/60 p-7 last:border-b-0 lg:border-b-0 lg:border-r lg:p-8 lg:last:border-r-0"
                    >
                      {/* Connector */}
                      {stepIndex < workflow.steps.length - 1 && (
                        <ArrowRight
                          aria-hidden="true"
                          size={16}
                          className="absolute right-4 top-8 hidden text-primary/50 lg:block"
                        />
                      )}

                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-primary">{step.number}</span>

                        <WorkflowIcon workflow={workflowIndex} step={stepIndex} />
                      </div>

                      <h4 className="mt-7 font-heading text-lg font-semibold tracking-tight sm:text-xl">
                        {step.title}
                      </h4>

                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {step.description}
                      </p>

                      <span
                        aria-hidden="true"
                        className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-primary to-transparent transition-all duration-700 group-hover:w-full"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile connector */}
              {workflowIndex < workflows.length - 1 && (
                <div aria-hidden="true" className="flex justify-center py-8 text-border sm:py-10">
                  <ArrowDown size={18} />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowIcon({ workflow, step }: { workflow: number; step: number }) {
  if (workflow === 0) {
    return step === 0 ? (
      <Truck size={17} className="text-muted-foreground" />
    ) : (
      <MessageSquare size={17} className="text-muted-foreground" />
    );
  }

  if (workflow === 1) {
    return <Radio size={17} className="text-muted-foreground" />;
  }

  return <MapPin size={17} className="text-muted-foreground" />;
}
