const principles = [
  {
    number: "01",
    title: "Context before technology",
    description:
      "We start by understanding the operating environment, business problem, users, constraints, and existing systems before choosing a technical direction.",
  },
  {
    number: "02",
    title: "Architecture for change",
    description:
      "We favor technology foundations that can evolve as products, customer expectations, processes, and organizations change.",
  },
  {
    number: "03",
    title: "Engineering with ownership",
    description:
      "Solutions should be understandable, maintainable, observable, and practical for the teams responsible for them after delivery.",
  },
];

export default function IndustryPerspective() {
  return (
    <section className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Our Perspective
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Different industries.
            <span className="block text-slate-500">
              The same delivery discipline.
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600">
            Industry expertise matters most when it improves technology
            decisions. We combine domain context with software, cloud, data,
            AI, and security capabilities rather than treating them as separate
            conversations.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="rounded-3xl border border-slate-200 bg-white p-8"
            >
              <span className="text-sm font-semibold tracking-[0.16em] text-indigo-600">
                {principle.number}
              </span>

              <h3 className="mt-6 text-xl font-semibold text-slate-950">
                {principle.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}