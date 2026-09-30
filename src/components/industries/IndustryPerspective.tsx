const perspectives = [
  {
    number: "01",
    title: "Business context",
    description:
      "Technology choices need to support the operating model, customer expectations, priorities, and pace of change around them.",
  },
  {
    number: "02",
    title: "Technology reality",
    description:
      "Existing systems, architecture, data, integrations, security requirements, and engineering maturity shape what is practical.",
  },
  {
    number: "03",
    title: "Delivery constraints",
    description:
      "Risk, organizational readiness, dependencies, timelines, and internal capability influence how change should be introduced.",
  },
];

export default function IndustryPerspective() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 sm:text-sm">
              Our Perspective
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Context changes
              <span className="block text-slate-500">
                the right technical answer.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">
            Strong engineering principles remain important everywhere, but the
            right architecture, roadmap, delivery approach, and team shape
            depend on the environment in which the technology has to work.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-3 lg:mt-16 lg:gap-6">
          {perspectives.map((perspective) => (
            <article
              key={perspective.number}
              className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 lg:p-8"
            >
              <span className="text-xs font-semibold tracking-[0.18em] text-indigo-700">
                {perspective.number}
              </span>

              <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950">
                {perspective.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                {perspective.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl bg-slate-950 text-white sm:mt-14 lg:mt-16">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="p-7 sm:p-9 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300 sm:text-sm">
                Industry + Expertise
              </p>

              <h3 className="mt-4 max-w-lg text-2xl font-semibold tracking-tight sm:text-3xl">
                Industry knowledge works best when connected to engineering
                depth.
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                Understanding the industry helps frame the problem. Software,
                cloud, data, AI, security, design, and consulting capabilities
                help solve it.
              </p>
            </div>

            <div className="border-t border-white/10 p-7 sm:p-9 lg:border-l lg:border-t-0 lg:p-12">
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  "Architecture and modernization",
                  "Data and AI foundations",
                  "Cloud and platform engineering",
                  "Security and operational resilience",
                  "Product and customer experience",
                  "Engineering and delivery practices",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 border-t border-white/10 pt-4"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300"
                      aria-hidden="true"
                    />

                    <p className="text-sm leading-6 text-slate-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}