const beliefs = [
  {
    number: "01",
    title: "The problem comes before the technology",
    description:
      "A technology choice only makes sense in the context of the users, systems, organization, constraints, and outcomes around it.",
  },
  {
    number: "02",
    title: "Engineering quality is a business concern",
    description:
      "Maintainability, reliability, security, observability, and delivery quality influence how effectively an organization can keep changing.",
  },
  {
    number: "03",
    title: "Simple is valuable when it is sufficient",
    description:
      "Complexity should be introduced because the problem requires it, not because the technology makes it possible.",
  },
  {
    number: "04",
    title: "Ownership should improve through the engagement",
    description:
      "Good consulting should strengthen the client's ability to understand, operate, maintain, and evolve what is delivered.",
  },
  {
    number: "05",
    title: "Disciplines work better together",
    description:
      "Software, cloud, data, AI, security, architecture, and product decisions often affect the same underlying system.",
  },
  {
    number: "06",
    title: "Trade-offs should be visible",
    description:
      "Strong technical decisions explain the constraints, alternatives, implications, and reasons behind the chosen direction.",
  },
];

export default function WhatWeBelieve() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 sm:text-sm">
              What We Believe
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Principles that shape
              <span className="block text-slate-500">
                technical decisions and delivery.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">
            Methods and technologies will continue changing. The principles
            behind useful consulting and sustainable engineering should be more
            durable.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {beliefs.map((belief) => (
            <article
              key={belief.number}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-7 lg:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold tracking-[0.18em] text-indigo-700">
                  {belief.number}
                </span>

                <span
                  className="h-2 w-2 rounded-full bg-indigo-500"
                  aria-hidden="true"
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950">
                {belief.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                {belief.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}