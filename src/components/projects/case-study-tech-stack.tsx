type CaseStudyTechStackProps = {
  technologies: string[];
};

export function CaseStudyTechStack({ technologies }: CaseStudyTechStackProps) {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          {/* Heading */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
              09 / Technology
            </p>

            <h2 className="mt-5 max-w-md font-heading text-3xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-4xl">
              Tools behind the product.
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">
              The stack combines application frameworks, backend services, real-time communication,
              data infrastructure, and third-party integrations to support the product end to end.
            </p>
          </div>

          {/* Technologies */}
          <div>
            <div className="flex flex-wrap gap-3">
              {technologies.map((technology, index) => (
                <div
                  key={technology}
                  className="group relative overflow-hidden border border-border bg-card/30 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[9px] text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-medium transition-colors duration-300 group-hover:text-primary">
                      {technology}
                    </span>
                  </div>

                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full"
                  />
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-border pt-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Stack size
              </p>

              <p className="mt-2 font-heading text-2xl font-semibold tracking-tight">
                {technologies.length} technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
