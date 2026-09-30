const teams = [
  {
    number: "01",
    title: "Software Engineering",
    description:
      "Digital products, web applications, APIs, backend systems, architecture, modernization, and engineering enablement.",
    areas: [
      "Product Engineering",
      "Web & Applications",
      "Platforms & APIs",
    ],
    accent: "text-cyan-700",
    surface: "bg-cyan-50",
    border: "border-cyan-100",
    dot: "bg-cyan-500",
  },
  {
    number: "02",
    title: "AI & Data",
    description:
      "Data engineering, analytics, applied AI, machine learning, evaluation, integration, and production operations.",
    areas: [
      "Data Platforms",
      "Applied AI",
      "Machine Learning",
    ],
    accent: "text-violet-700",
    surface: "bg-violet-50",
    border: "border-violet-100",
    dot: "bg-violet-500",
  },
  {
    number: "03",
    title: "Cloud & Platform",
    description:
      "Cloud foundations, platform engineering, infrastructure automation, delivery systems, observability, and reliability.",
    areas: [
      "Cloud Engineering",
      "Platform Engineering",
      "DevOps & Reliability",
    ],
    accent: "text-sky-700",
    surface: "bg-sky-50",
    border: "border-sky-100",
    dot: "bg-sky-500",
  },
  {
    number: "04",
    title: "Cybersecurity",
    description:
      "Security architecture, application security, cloud security, identity, automation, and secure engineering practices.",
    areas: [
      "Application Security",
      "Cloud Security",
      "Security Engineering",
    ],
    accent: "text-emerald-700",
    surface: "bg-emerald-50",
    border: "border-emerald-100",
    dot: "bg-emerald-500",
  },
];

export default function Teams() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700 sm:text-sm">
              Teams & Disciplines
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Develop your specialty.
              <span className="block text-slate-500">
                Understand the system around it.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">
            Career disciplines provide depth, but client problems often cross
            those boundaries. Our model is designed around specialists who can
            collaborate effectively across them.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 lg:mt-16">
          {teams.map((team) => (
            <article
              key={team.number}
              className={`overflow-hidden rounded-3xl border ${team.border} bg-white`}
            >
              <div className={`${team.surface} p-6 sm:p-7`}>
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`text-xs font-semibold tracking-[0.18em] ${team.accent}`}
                  >
                    {team.number}
                  </span>

                  <span
                    className={`h-2 w-2 rounded-full ${team.dot}`}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                  {team.title}
                </h3>
              </div>

              <div className="p-6 sm:p-7">
                <p className="text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  {team.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {team.areas.map((area) => (
                    <span
                      key={area}
                      className={`rounded-full border ${team.border} ${team.surface} px-3 py-1.5 text-xs font-medium text-slate-700`}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs leading-5 text-slate-500">
          Career disciplines shown here describe areas of work and do not imply
          that a vacancy is currently open. Current vacancies are listed
          separately on the Jobs page.
        </p>
      </div>
    </section>
  );
}