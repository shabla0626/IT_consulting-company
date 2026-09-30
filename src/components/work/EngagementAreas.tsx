const areas = [
  {
    title: "Product & Software Engineering",
    description:
      "Digital products, applications, APIs, architecture, modernization, and engineering enablement.",
  },
  {
    title: "Cloud & Platform Engineering",
    description:
      "Cloud foundations, platform engineering, infrastructure automation, delivery, and reliability.",
  },
  {
    title: "Data & AI",
    description:
      "Data platforms, analytics, applied AI, machine learning, evaluation, and production operations.",
  },
  {
    title: "Cybersecurity",
    description:
      "Application security, cloud security, identity, architecture, DevSecOps, and engineering controls.",
  },
  {
    title: "Technology Modernization",
    description:
      "Incrementally evolving legacy systems, architecture, platforms, infrastructure, and delivery practices.",
  },
  {
    title: "Technology Consulting",
    description:
      "Architecture, assessment, technical strategy, delivery planning, and multidisciplinary problem solving.",
  },
];

export default function EngagementAreas() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 sm:text-sm">
              Engagement Areas
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Different challenges.
              <span className="block text-slate-500">
                Connected capabilities.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">
            Engagements rarely fit neatly inside a single service line. The
            team should be shaped around the technology problem rather than
            around an organizational capability list.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {areas.map((area, index) => (
            <article
              key={area.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-7 lg:p-8"
            >
              <span className="text-xs font-semibold tracking-[0.18em] text-indigo-700">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950">
                {area.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}