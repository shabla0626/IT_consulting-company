import Link from "next/link";

const caseStudies = [
  {
    number: "01",
    type: "Cloud Modernization",
    title: "Modernizing a platform for more sustainable delivery.",
    description:
      "A representative engagement exploring how legacy infrastructure, deployment practices, architecture, and operational ownership could be modernized together.",
    themes: [
      "Cloud",
      "Platform Engineering",
      "DevOps",
      "Modernization",
    ],
    href: "/work/cloud-modernization-platform",
    accent: "text-sky-700",
    surface: "bg-sky-50",
    border: "border-sky-100",
    dot: "bg-sky-500",
  },
  {
    number: "02",
    type: "AI & Data",
    title: "Creating the foundations for production data and AI.",
    description:
      "A representative engagement showing how data foundations, applied AI, software engineering, evaluation, and operations can work as one production system.",
    themes: [
      "Data Platform",
      "Applied AI",
      "Machine Learning",
      "AI Operations",
    ],
    href: "/work/data-ai-platform",
    accent: "text-violet-700",
    surface: "bg-violet-50",
    border: "border-violet-100",
    dot: "bg-violet-500",
  },
  {
    number: "03",
    type: "Digital Product",
    title: "Building a product platform designed to evolve.",
    description:
      "A representative engagement connecting product experience, application architecture, APIs, cloud foundations, quality, and engineering practices.",
    themes: [
      "Product Engineering",
      "Software Architecture",
      "APIs",
      "Cloud",
    ],
    href: "/work/digital-product-platform",
    accent: "text-cyan-700",
    surface: "bg-cyan-50",
    border: "border-cyan-100",
    dot: "bg-cyan-500",
  },
];

export default function CaseStudyShowcase() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 sm:text-sm">
              Representative Case Studies
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              See the problem,
              <span className="block text-slate-500">
                decisions, and delivery.
              </span>
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-base leading-7 text-slate-600">
              These scenarios illustrate the kind of multidisciplinary
              technology work the site is designed to communicate. They are not
              presented as verified client engagements.
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-5 sm:mt-14 lg:mt-16">
          {caseStudies.map((study) => (
            <Link
              key={study.href}
              href={study.href}
              className={`group block overflow-hidden rounded-3xl border ${study.border} transition hover:shadow-xl hover:shadow-slate-950/5`}
            >
              <article className="grid min-w-0 lg:grid-cols-[190px_1fr_auto]">
                <div
                  className={`border-b ${study.border} ${study.surface} p-6 sm:p-7 lg:border-b-0 lg:border-r lg:p-8`}
                >
                  <span
                    className={`text-xs font-semibold tracking-[0.18em] ${study.accent}`}
                  >
                    {study.number}
                  </span>

                  <div className="mt-8">
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-2 w-2 rounded-full ${study.dot}`}
                        aria-hidden="true"
                      />
                      <p className={`text-sm font-semibold ${study.accent}`}>
                        {study.type}
                      </p>
                    </div>

                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      Representative
                    </p>
                  </div>
                </div>

                <div className="min-w-0 bg-white p-6 sm:p-7 lg:p-8">
                  <h3 className="max-w-3xl text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                    {study.title}
                  </h3>

                  <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                    {study.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {study.themes.map((theme) => (
                      <span
                        key={theme}
                        className={`rounded-full border ${study.border} ${study.surface} px-3 py-1.5 text-xs font-medium text-slate-600`}
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center border-t border-slate-200 bg-white px-6 py-5 sm:px-7 lg:border-l lg:border-t-0 lg:px-8">
                  <div className="flex w-full items-center justify-between gap-4 lg:w-auto lg:flex-col lg:justify-center">
                    <span className={`text-sm font-semibold ${study.accent}`}>
                      Read case study
                    </span>

                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition group-hover:border-slate-950 group-hover:bg-slate-950 group-hover:text-white"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <p className="mt-6 text-xs leading-5 text-slate-500">
          Development note: replace representative scenarios with approved,
          verifiable client work before presenting them as real engagements.
        </p>
      </div>
    </section>
  );
}