const waysOfWorking = [
  {
    number: "01",
    title: "Work with the client team, not around it.",
    description:
      "We collaborate closely with product, engineering, security, operations, and business stakeholders so decisions remain connected to the people who will own the outcome.",
  },
  {
    number: "02",
    title: "Make decisions and trade-offs visible.",
    description:
      "Architecture choices, delivery priorities, risks, assumptions, and constraints should be explicit enough that everyone understands why a direction was chosen.",
  },
  {
    number: "03",
    title: "Deliver in useful increments.",
    description:
      "We prefer iterative delivery that produces meaningful progress, reduces risk, and creates regular opportunities to validate assumptions and adjust the approach.",
  },
  {
    number: "04",
    title: "Build ownership throughout the engagement.",
    description:
      "Documentation, knowledge transfer, shared implementation, and operational readiness are part of delivery rather than activities postponed until the end.",
  },
];

const engagementRhythm = [
  {
    title: "Discover",
    description:
      "Understand the business problem, users, systems, constraints, risks, and current operating environment.",
  },
  {
    title: "Align",
    description:
      "Define priorities, architecture direction, success criteria, responsibilities, and a practical delivery path.",
  },
  {
    title: "Deliver",
    description:
      "Build and improve the solution through coordinated engineering, regular validation, and transparent progress.",
  },
  {
    title: "Enable",
    description:
      "Strengthen operational readiness, documentation, knowledge, and the client team's ability to continue evolving the result.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              How We Work
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Collaborative delivery with
              <span className="block text-slate-500">
                clear ownership and visibility.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              Consulting works best when the client is not separated from the
              work. We aim to create a shared delivery environment where
              decisions, progress, risks, and technical understanding remain
              visible throughout the engagement.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              The goal is not simply to hand over a finished solution. It is to
              build the solution while strengthening the client&apos; s ability to
              understand, operate, and evolve it.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {waysOfWorking.map((item) => (
              <article
                key={item.number}
                className="rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/5 sm:p-8"
              >
                <span className="text-sm font-semibold tracking-[0.18em] text-indigo-600">
                  {item.number}
                </span>

                <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-slate-950 p-8 text-white sm:p-10 lg:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-300">
              Engagement Rhythm
            </p>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              A practical path from uncertainty to ownership.
            </h3>

            <p className="mt-5 text-base leading-7 text-slate-300">
              Every engagement is different, but the underlying rhythm stays
              consistent: understand the environment, align on the direction,
              deliver iteratively, and enable long-term ownership.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {engagementRhythm.map((stage, index) => (
              <article
                key={stage.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="text-xs font-semibold tracking-[0.16em] text-indigo-300">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h4 className="mt-5 text-lg font-semibold text-white">
                  {stage.title}
                </h4>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {stage.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}