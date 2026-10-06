import type { CaseStudyProject } from "@/components/projects/project-case-study";

type CaseStudyOverviewProps = {
  project: CaseStudyProject;
};

export function CaseStudyOverview({ project }: CaseStudyOverviewProps) {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          {/* Section heading */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
              03 / Overview
            </p>

            <h2 className="mt-5 max-w-md font-heading text-3xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-4xl">
              Building software around real-world needs.
            </h2>
          </div>

          {/* Project overview */}
          <div>
            <p className="max-w-3xl text-xl leading-9 text-muted-foreground sm:text-2xl sm:leading-10">
              {project.overview}
            </p>

            <div aria-hidden="true" className="mt-10 h-px w-20 bg-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
