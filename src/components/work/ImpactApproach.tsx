const stages = [
  {
    number: "01",
    eyebrow: "Understand",
    title: "Start with the problem, not the technology.",
    description:
      "We work to understand the business objective, users, operating environment, existing systems, constraints, risks, and the reasons change is needed before defining a technical solution.",
    activities: [
      "Business and stakeholder context",
      "Current-state assessment",
      "User and workflow understanding",
      "Technical constraints",
      "Risk and dependency discovery",
    ],
  },
  {
    number: "02",
    eyebrow: "Shape",
    title: "Turn complexity into a practical direction.",
    description:
      "We translate what we learn into an approach that connects business priorities with architecture, engineering decisions, delivery sequencing, and measurable objectives.",
    activities: [
      "Solution architecture",
      "Technology strategy",
      "Modernization roadmap",
      "Delivery planning",
      "Prioritization and trade-offs",
    ],
  },
  {
    number: "03",
    eyebrow: "Build",
    title: "Deliver with multidisciplinary engineering teams.",
    description:
      "Software, cloud, data, AI, security, and platform disciplines work together around the same problem rather than operating as disconnected technical workstreams.",
    activities: [
      "Product and software engineering",
      "Cloud and platform engineering",
      "Data and AI engineering",
      "Security engineering",
      "Quality and automation",
    ],
  },
  {
    number: "04",
    eyebrow: "Operate",
    title: "Design for reliability and real-world ownership.",
    description:
      "Delivery includes the operational foundations needed to understand, support, maintain, and evolve what has been built after the initial implementation.",
    activities: [
      "Observability",
      "Reliability practices",
      "Operational readiness",
      "Documentation",
      "Knowledge transfer",
    ],
  },
  {
    number: "05",
    eyebrow: "Enable",
    title: "Leave teams stronger than when the work started.",
    description:
      "The goal is not permanent dependency on consultants. We aim to improve the technology, practices, platforms, and knowledge that internal teams can continue to own and evolve.",
    activities: [
      "Engineering enablement",
      "Reusable platform capabilities",
      "Team collaboration",
      "Technical knowledge transfer",
      "Long-term maintainability",
    ],
  },
];

export default function ImpactApproach() {
  return (
    <section className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Introduction */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              How We Create Impact
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              From business problem
              <span className="block text-slate-500">
                to technology that lasts.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              Strong consulting work is more than delivering a piece of
              software. It connects business context, technical judgment,
              disciplined engineering, operational readiness, and long-term
              ownership.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold text-slate-950">
                Our delivery principle
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                The objective is not simply to complete a project. It is to
                leave behind technology and engineering foundations that the
                organization can understand, operate, maintain, and continue
                improving.
              </p>
            </div>
          </div>

          {/* Stages */}
          <div className="space-y-5">
            {stages.map((stage) => (
              <article
                key={stage.number}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-950/5 sm:p-8"
              >
                <div className="grid gap-7 md:grid-cols-[90px_1fr]">
                  <div>
                    <span className="text-sm font-semibold tracking-[0.18em] text-indigo-600">
                      {stage.number}
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
                      {stage.eyebrow}
                    </p>

                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                      {stage.title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
                      {stage.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {stage.activities.map((activity) => (
                        <span
                          key={activity}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}