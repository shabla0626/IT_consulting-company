const principles = [
  {
    number: "01",
    title: "Senior expertise stays involved",
    description:
      "Experienced practitioners remain close to the work, contributing to architecture, delivery decisions, problem-solving, and technical quality.",
  },
  {
    number: "02",
    title: "Business outcomes come first",
    description:
      "Technology decisions should connect to the wider business problem, operating context, risks, priorities, and outcomes that matter.",
  },
  {
    number: "03",
    title: "One multidisciplinary team",
    description:
      "Software, cloud, data, AI, security, design, and consulting expertise can work together around the same challenge instead of operating in isolated silos.",
  },
  {
    number: "04",
    title: "Built for long-term ownership",
    description:
      "We care about maintainability, reliability, security, documentation, observability, and making systems easier for teams to own after delivery.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 sm:text-sm">
              Why CoVera
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Experienced people,
              <span className="block text-slate-500">
                connected to the work.
              </span>
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-base leading-7 text-slate-600">
              Good consulting should combine technical depth, business context,
              clear communication, and practical delivery. We want experienced
              people to stay close to the decisions that shape the outcome.
            </p>
          </div>
        </div>

        {/* Principles */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 sm:mt-14 lg:mt-16">
          {principles.map((principle, index) => (
            <article
              key={principle.number}
              className={`grid min-w-0 gap-5 p-6 sm:p-7 md:grid-cols-[72px_1fr] lg:grid-cols-[90px_320px_1fr] lg:items-start lg:gap-8 lg:p-8 ${
                index !== principles.length - 1
                  ? "border-b border-slate-200"
                  : ""
              }`}
            >
              <span className="text-xs font-semibold tracking-[0.18em] text-indigo-700 sm:text-sm">
                {principle.number}
              </span>

              <h3 className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                {principle.title}
              </h3>

              <p className="text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                {principle.description}
              </p>
            </article>
          ))}
        </div>

        {/* Positioning statement */}
        <div className="mt-12 rounded-3xl bg-slate-950 p-7 text-white sm:mt-14 sm:p-9 lg:mt-16 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300 sm:text-sm">
                Our Position
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Not staffing. Technology problem-solving.
              </h3>
            </div>

            <div>
              <p className="text-sm leading-7 text-slate-300 sm:text-base">
                We are not positioning CoVera as a company that simply supplies
                developers. The goal is to bring together experienced,
                multidisciplinary teams that can understand the problem, make
                sound technology decisions, and help carry those decisions
                through delivery.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div className="border-t border-white/10 pt-5">
                  <p className="text-sm font-semibold text-white">
                    Expertise that stays engaged
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Senior practitioners contribute beyond the initial proposal
                    or discovery phase.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-5">
                  <p className="text-sm font-semibold text-white">
                    Delivery that creates ownership
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    The work should leave teams with stronger systems,
                    practices, and understanding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}