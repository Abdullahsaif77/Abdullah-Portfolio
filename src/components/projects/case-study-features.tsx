import type { CaseStudyFeature } from "@/components/projects/project-case-study";

type CaseStudyFeaturesProps = {
  features: CaseStudyFeature[];
};

export function CaseStudyFeatures({ features }: CaseStudyFeaturesProps) {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
              04 / Key Features
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl font-heading text-3xl font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl">
              Built around the way people actually work.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              The product is shaped around the workflows that matter most, from dispatch operations
              and communication to real-time visibility and day-to-day management.
            </p>
          </div>
        </div>

        <div className="border-t border-border">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="group grid gap-6 border-b border-border py-8 transition-colors duration-300 hover:bg-muted/10 sm:grid-cols-[100px_0.8fr_1.2fr] sm:items-start sm:gap-10 sm:py-10"
            >
              <div className="flex items-center gap-4 sm:block">
                <span className="font-mono text-sm text-primary">{feature.number}</span>

                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-border transition-all duration-500 group-hover:w-12 group-hover:bg-primary sm:mt-5 sm:block"
                />
              </div>

              <h3 className="font-heading text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                {feature.title}
              </h3>

              <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
