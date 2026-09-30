const benefitThemes = [
  {
    number: "01",
    title: "Health & wellbeing",
    description:
      "Production content should clearly explain any verified health, wellbeing, leave, or employee-support benefits available in each location.",
  },
  {
    number: "02",
    title: "Flexible ways of working",
    description:
      "Verified remote, hybrid, office, working-hours, and location policies should be explained clearly rather than implied.",
  },
  {
    number: "03",
    title: "Learning & development",
    description:
      "Document the real support available for training, certifications, conferences, mentoring, technical learning, and career development.",
  },
  {
    number: "04",
    title: "Tools & work environment",
    description:
      "Explain the actual equipment, software, workplace, and engineering environment employees receive to do their work effectively.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-violet-50/50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700 sm:text-sm">
              Benefits
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Support should extend
              <span className="block text-slate-500">
                beyond the work itself.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">
            Benefit details should be factual, location-aware, and easy for
            candidates to understand. Until company policies are finalized,
            this section should not imply benefits that have not been approved.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {benefitThemes.map((benefit) => (
            <article
              key={benefit.number}
              className="rounded-3xl border border-violet-100 bg-white p-6 sm:p-7"
            >
              <span className="text-xs font-semibold tracking-[0.18em] text-violet-700">
                {benefit.number}
              </span>

              <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950">
                {benefit.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-violet-200 bg-white p-5 sm:p-6">
          <p className="text-sm font-semibold text-slate-950">
            Content note
          </p>

          <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">
            Replace these planning descriptions with verified company benefits
            and applicable eligibility details before production launch.
          </p>
        </div>
      </div>
    </section>
  );
}