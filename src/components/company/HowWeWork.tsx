const stages = [
  {
    number: "01",
    title: "Understand",
    description:
      "Learn the business context, users, systems, technical constraints, dependencies, and desired outcome.",
  },
  {
    number: "02",
    title: "Shape",
    description:
      "Define priorities, architecture, delivery approach, team composition, and the important technical trade-offs.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Deliver collaboratively using the engineering, cloud, data, security, product, and delivery disciplines the work requires.",
  },
  {
    number: "04",
    title: "Evolve",
    description:
      "Strengthen operational ownership, engineering practices, reliability, knowledge, and the ability to continue changing.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 sm:text-sm">
              How We Work
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              From context
              <span className="block text-slate-500">
                to sustainable ownership.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">
            The delivery model should adapt to the problem, but the underlying
            approach remains consistent: understand first, make deliberate
            decisions, deliver collaboratively, and strengthen ownership.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white sm:mt-14 lg:mt-16">
          <div className="grid lg:grid-cols-4">
            {stages.map((stage, index) => (
              <article
                key={stage.number}
                className={`min-w-0 p-6 sm:p-8 lg:p-9 ${
                  index !== stages.length - 1
                    ? "border-b border-slate-200 lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold tracking-[0.18em] text-indigo-700">
                    {stage.number}
                  </span>

                  <span
                    className="h-2 w-2 rounded-full bg-indigo-500"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-7 text-xl font-semibold tracking-tight text-slate-950">
                  {stage.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {stage.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Adaptable",
              description:
                "The engagement model follows the problem rather than forcing every challenge into the same process.",
            },
            {
              title: "Collaborative",
              description:
                "Decisions are made with the people who understand and will continue owning the technology.",
            },
            {
              title: "Practical",
              description:
                "Architecture and strategy remain connected to what teams can realistically build and operate.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
            >
              <h3 className="font-semibold text-slate-950">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}