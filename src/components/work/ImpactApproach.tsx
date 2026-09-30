const steps = [
  {
    number: "01",
    title: "Understand the environment",
    description:
      "Start with the business problem, users, existing systems, constraints, risks, dependencies, and organizational context.",
  },
  {
    number: "02",
    title: "Make the important decisions",
    description:
      "Clarify architecture, priorities, delivery sequencing, technology choices, and the trade-offs that shape the work.",
  },
  {
    number: "03",
    title: "Deliver across disciplines",
    description:
      "Bring together product, software, cloud, data, AI, security, design, and consulting expertise around one outcome.",
  },
  {
    number: "04",
    title: "Strengthen ownership",
    description:
      "Leave behind technology, practices, documentation, and operational foundations that teams can continue evolving.",
  },
];

export default function ImpactApproach() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 sm:text-sm">
              How We Create Impact
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Good delivery starts
              <span className="block text-slate-500">
                before the first build.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">
            Technology outcomes depend on the quality of the decisions,
            architecture, delivery approach, collaboration, and ownership
            surrounding the implementation.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white sm:mt-14 lg:mt-16">
          <div className="grid lg:grid-cols-4">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className={`min-w-0 p-6 sm:p-8 lg:p-9 ${
                  index !== steps.length - 1
                    ? "border-b border-slate-200 lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold tracking-[0.18em] text-indigo-700">
                    {step.number}
                  </span>

                  <span
                    className="h-2 w-2 rounded-full bg-indigo-500"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-7 text-xl font-semibold tracking-tight text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}