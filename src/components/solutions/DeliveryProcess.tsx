const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the business context, users, systems, constraints, risks, and the technology decisions that matter most.",
  },
  {
    number: "02",
    title: "Shape",
    description:
      "Define the architecture, delivery approach, priorities, and the combination of expertise needed for the work.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Turn decisions into working software, platforms, data capabilities, cloud foundations, and security improvements.",
  },
  {
    number: "04",
    title: "Evolve",
    description:
      "Strengthen reliability, ownership, maintainability, and the practices that help technology continue to improve over time.",
  },
];

export default function DeliveryProcess() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 sm:text-sm">
              How We Deliver
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              From uncertainty
              <span className="block text-slate-500">
                to practical delivery.
              </span>
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-base leading-7 text-slate-600">
              Engagements can take different shapes, but the underlying
              principle stays the same: understand the problem first, make
              deliberate technology decisions, and connect those decisions to
              hands-on delivery.
            </p>
          </div>
        </div>

        {/* Process */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white sm:mt-14 lg:mt-16">
          <div className="grid lg:grid-cols-4">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className={`relative min-w-0 p-6 sm:p-8 lg:p-9 ${
                  index !== steps.length - 1
                    ? "border-b border-slate-200 lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold tracking-[0.18em] text-indigo-700 sm:text-sm">
                    {step.number}
                  </span>

                  <span
                    className="h-2 w-2 rounded-full bg-indigo-500"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-7 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  {step.description}
                </p>

                {index !== steps.length - 1 && (
                  <span
                    className="absolute bottom-0 left-6 h-px w-10 bg-indigo-200 lg:bottom-auto lg:left-auto lg:right-0 lg:top-9 lg:h-10 lg:w-px"
                    aria-hidden="true"
                  />
                )}
              </article>
            ))}
          </div>
        </div>

        {/* Delivery principles */}
        <div className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-3 lg:mt-16">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Adaptable
            </p>

            <h3 className="mt-3 text-lg font-semibold text-slate-950">
              The process fits the problem.
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Not every engagement needs the same phases, team shape, or
              delivery model.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Collaborative
            </p>

            <h3 className="mt-3 text-lg font-semibold text-slate-950">
              Decisions stay close to the team.
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Technical, product, delivery, and business perspectives work
              together rather than being handed off between silos.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Sustainable
            </p>

            <h3 className="mt-3 text-lg font-semibold text-slate-950">
              Delivery should improve ownership.
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Architecture, documentation, reliability, security, and
              maintainability matter beyond the immediate release.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}