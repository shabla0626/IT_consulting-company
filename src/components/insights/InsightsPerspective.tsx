const principles = [
  {
    number: "01",
    title: "Context before conclusions.",
    description:
      "Technology decisions depend on the business problem, operating environment, users, constraints, existing systems, risk, and the capabilities of the team that will own the result.",
  },
  {
    number: "02",
    title: "Trade-offs are part of the answer.",
    description:
      "There is rarely one universally correct architecture, platform, model, or engineering practice. Good decisions make the trade-offs visible and choose deliberately.",
  },
  {
    number: "03",
    title: "Production reality matters.",
    description:
      "A promising prototype is not the same as a dependable production system. Reliability, security, observability, operations, cost, and ownership all matter.",
  },
  {
    number: "04",
    title: "Use the simplest approach that works.",
    description:
      "More technology does not automatically create more value. We prefer solutions that are understandable, proportionate to the problem, and sustainable over time.",
  },
];

export default function InsightsPerspective() {
  return (
    <section className="bg-slate-950 py-24 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
              Our Perspective
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Less hype.
              <span className="block text-slate-400">
                More useful technical judgment.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">
              Our goal is not to publish technology commentary for its own
              sake. We want to explore the decisions that affect real systems,
              teams, products, and organizations.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold text-white">
                The question behind most of our writing
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                What is the most practical way to solve this problem in the
                context of the organization that actually has to build,
                operate, secure, and maintain the result?
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:border-white/20 hover:bg-white/[0.07] sm:p-8"
              >
                <span className="text-sm font-semibold tracking-[0.18em] text-indigo-300">
                  {principle.number}
                </span>

                <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
                  {principle.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-white">
                Practical
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Focused on decisions teams can actually apply.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Evidence-aware
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Clear about assumptions, uncertainty, and what still needs
                validation.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Long-term
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Interested in what remains maintainable after the initial
                implementation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}