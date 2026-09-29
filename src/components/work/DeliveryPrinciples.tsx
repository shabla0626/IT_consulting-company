const principles = [
  {
    number: "01",
    title: "Senior expertise stays involved.",
    description:
      "Experienced practitioners remain close to the work—from understanding the problem and shaping architecture to guiding delivery and resolving difficult technical decisions.",
  },
  {
    number: "02",
    title: "Business outcomes come first.",
    description:
      "Technology decisions should support the underlying objective. We connect architecture, engineering, delivery, and technical trade-offs back to the business problem being solved.",
  },
  {
    number: "03",
    title: "One multidisciplinary team.",
    description:
      "Software, cloud, data, AI, security, platform, and consulting disciplines work together around the same engagement instead of operating as disconnected service lines.",
  },
  {
    number: "04",
    title: "Built for long-term ownership.",
    description:
      "We aim to leave behind technology that is understandable, maintainable, observable, and practical for the teams responsible for evolving it after delivery.",
  },
];

export default function DeliveryPrinciples() {
  return (
    <section className="bg-slate-950 py-24 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
              Delivery Principles
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Consulting should strengthen
              <span className="block text-slate-400">
                the client, not create dependency.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">
              Good technology consulting is not only about completing a scope
              of work. It is about making sound technical decisions, working
              effectively with client teams, and creating systems and practices
              that can continue to evolve after the engagement.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold text-white">
                The standard we aim for
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Solve the right problem, involve the right expertise, build
                with discipline, and leave the organization better equipped
                to own what comes next.
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
                Collaborative
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Work with client teams rather than around them.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Transparent
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Make decisions, trade-offs, progress, and risks visible.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Sustainable
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Favor maintainable systems over short-term technical fixes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}