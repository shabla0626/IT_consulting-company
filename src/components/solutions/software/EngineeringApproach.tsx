const principles = [
  {
    number: "01",
    title: "Start with the problem",
    description:
      "Understand the users, business context, existing systems, constraints, and expected outcomes before choosing technologies or architecture.",
  },
  {
    number: "02",
    title: "Design for change",
    description:
      "Create software boundaries, interfaces, and architecture that can evolve as requirements, teams, integrations, and operating conditions change.",
  },
  {
    number: "03",
    title: "Automate quality",
    description:
      "Build testing, delivery automation, security checks, and engineering feedback into the development workflow rather than relying on final-stage validation.",
  },
  {
    number: "04",
    title: "Operate what we build",
    description:
      "Consider observability, reliability, supportability, performance, and operational ownership as part of engineering from the beginning.",
  },
];

export default function EngineeringApproach() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 sm:text-sm">
              Engineering Approach
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Build deliberately.
              <span className="block text-slate-500">
                Engineer for what comes next.
              </span>
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-base leading-7 text-slate-600">
              Sustainable software engineering connects architecture, quality,
              delivery, operations, and ownership. The goal is not only to
              release software, but to leave behind a system that teams can
              continue evolving with confidence.
            </p>
          </div>
        </div>

        {/* Principles */}
        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="min-w-0 rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 lg:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold tracking-[0.18em] text-cyan-700 sm:text-sm">
                  {principle.number}
                </span>

                <span
                  className="h-2 w-2 shrink-0 rounded-full bg-cyan-500"
                  aria-hidden="true"
                />
              </div>

              <h3 className="mt-7 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                {principle.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                {principle.description}
              </p>
            </article>
          ))}
        </div>

        {/* Engineering system */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-slate-950 text-white sm:mt-14 lg:mt-16">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
            <div className="p-7 sm:p-9 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300 sm:text-sm">
                Engineering as a System
              </p>

              <h3 className="mt-4 max-w-lg text-2xl font-semibold tracking-tight sm:text-3xl">
                Good software depends on more than code.
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                Architecture, delivery pipelines, testing, security,
                observability, documentation, and developer experience all
                influence how safely and effectively a system can change.
              </p>
            </div>

            <div className="border-t border-white/10 p-7 sm:p-9 lg:border-l lg:border-t-0 lg:p-12">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-white">
                    During development
                  </p>

                  <ul className="mt-4 space-y-3">
                    {[
                      "Clear architecture boundaries",
                      "Automated testing and delivery",
                      "Security integrated into engineering",
                      "Fast technical feedback loops",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-slate-400"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"
                          aria-hidden="true"
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-white/10 pt-6 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                  <p className="text-sm font-semibold text-white">
                    After release
                  </p>

                  <ul className="mt-4 space-y-3">
                    {[
                      "Useful observability",
                      "Reliable operational ownership",
                      "Maintainable system knowledge",
                      "Safer paths for future change",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-slate-400"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"
                          aria-hidden="true"
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}