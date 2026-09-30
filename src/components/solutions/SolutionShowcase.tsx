import Link from "next/link";

const solutions = [
  {
    number: "01",
    eyebrow: "Software Engineering",
    title: "Build and evolve software that supports the business.",
    description:
      "From new digital products to modernization of existing systems, we help shape architecture, improve engineering foundations, and carry solutions through hands-on delivery.",
    capabilities: [
      "Product Engineering",
      "Application Modernization",
      "APIs & Platforms",
      "Engineering Quality",
    ],
    href: "/solutions/software-engineering",
    linkLabel: "Explore Software Engineering",
    surface: "bg-cyan-50",
    border: "border-cyan-100",
    accent: "text-cyan-700",
    marker: "bg-cyan-500",
  },
  {
    number: "02",
    eyebrow: "AI & Data",
    title: "Turn data and AI opportunities into dependable systems.",
    description:
      "We connect data foundations, analytics, applied AI, software engineering, evaluation, and operations so promising ideas can move toward practical production use.",
    capabilities: [
      "Data Platforms",
      "Applied AI",
      "Analytics",
      "AI Operations",
    ],
    href: "/solutions/ai-data",
    linkLabel: "Explore AI & Data",
    surface: "bg-violet-50",
    border: "border-violet-100",
    accent: "text-violet-700",
    marker: "bg-violet-500",
  },
  {
    number: "03",
    eyebrow: "Cloud & DevOps",
    title: "Create cloud foundations that make delivery easier to sustain.",
    description:
      "We help teams modernize infrastructure, improve developer workflows, automate delivery, and strengthen reliability without treating cloud transformation as an isolated infrastructure exercise.",
    capabilities: [
      "Cloud Modernization",
      "Platform Engineering",
      "DevOps",
      "Reliability",
    ],
    href: "/solutions/cloud-devops",
    linkLabel: "Explore Cloud & DevOps",
    surface: "bg-sky-50",
    border: "border-sky-100",
    accent: "text-sky-700",
    marker: "bg-sky-500",
  },
  {
    number: "04",
    eyebrow: "Cybersecurity",
    title: "Build security into technology decisions and delivery.",
    description:
      "Security works best when it is integrated across applications, cloud environments, identity, architecture, and engineering practices rather than added only at the end.",
    capabilities: [
      "Application Security",
      "Cloud Security",
      "Identity",
      "DevSecOps",
    ],
    href: "/solutions/cybersecurity",
    linkLabel: "Explore Cybersecurity",
    surface: "bg-emerald-50",
    border: "border-emerald-100",
    accent: "text-emerald-700",
    marker: "bg-emerald-500",
  },
];

export default function SolutionShowcase() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section intro */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 sm:text-sm">
              Core Capabilities
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Deep expertise,
              <span className="block text-slate-500">
                connected across disciplines.
              </span>
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-base leading-7 text-slate-600">
              Each capability can address a focused problem, but complex
              technology programs often require several disciplines working
              together around the same outcome.
            </p>
          </div>
        </div>

        {/* Solution rows */}
        <div className="mt-12 space-y-6 sm:mt-14 lg:mt-16 lg:space-y-8">
          {solutions.map((solution, index) => (
            <article
              key={solution.href}
              className={`overflow-hidden rounded-3xl border ${solution.border} ${solution.surface}`}
            >
              <div
                className={`grid min-w-0 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Main content */}
                <div className="min-w-0 p-6 sm:p-8 lg:p-10 xl:p-12">
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full ${solution.marker}`}
                      aria-hidden="true"
                    />

                    <p
                      className={`text-xs font-semibold uppercase tracking-[0.16em] sm:text-sm ${solution.accent}`}
                    >
                      {solution.eyebrow}
                    </p>
                  </div>

                  <h3 className="mt-5 max-w-xl text-2xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-3xl">
                    {solution.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                    {solution.description}
                  </p>

                  <Link
                    href={solution.href}
                    className={`mt-7 inline-flex min-h-11 items-center text-sm font-semibold ${solution.accent}`}
                  >
                    {solution.linkLabel}

                    <span
                      className="ml-2 transition-transform duration-300"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </div>

                {/* Capability panel */}
                <div className="border-t border-slate-900/5 bg-white/60 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10 xl:p-12">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Capability
                      </p>

                      <p className={`mt-2 text-sm font-semibold ${solution.accent}`}>
                        {solution.number}
                      </p>
                    </div>

                    <span
                      className="text-3xl font-semibold tracking-tight text-slate-200 sm:text-4xl"
                      aria-hidden="true"
                    >
                      {solution.number}
                    </span>
                  </div>

                  <div className="mt-8 divide-y divide-slate-200">
                    {solution.capabilities.map((capability) => (
                      <div
                        key={capability}
                        className="flex min-h-14 items-center justify-between gap-4 py-4"
                      >
                        <span className="text-sm font-medium text-slate-700 sm:text-base">
                          {capability}
                        </span>

                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full ${solution.marker}`}
                          aria-hidden="true"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Cross-disciplinary note */}
        <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:mt-14 sm:p-9 lg:mt-16 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700 sm:text-sm">
                Beyond Service Lines
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Real technology problems cross boundaries.
              </h3>
            </div>

            <div>
              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                A cloud modernization effort can also involve software
                architecture, security, data, developer experience, and
                operating-model decisions. We shape the combination of
                expertise around the work rather than forcing the work into a
                single capability.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-indigo-700 transition hover:text-indigo-900"
              >
                Discuss your technology challenge

                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}