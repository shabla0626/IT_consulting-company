import Link from "next/link";

const industries = [
  {
    number: "01",
    title: "Financial Services",
    description:
      "Modernize platforms, strengthen engineering foundations, improve data capabilities, and support secure technology delivery in complex financial environments.",
    themes: [
      "Platform Modernization",
      "Data & AI",
      "Cloud",
      "Security",
    ],
    href: "/industries/financial-services",
    accent: "text-blue-700",
    soft: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    number: "02",
    title: "Healthcare",
    description:
      "Build dependable digital platforms, data foundations, integrations, and secure technology capabilities across healthcare environments.",
    themes: [
      "Digital Platforms",
      "Data",
      "Interoperability",
      "Security",
    ],
    href: "/industries/healthcare",
    accent: "text-emerald-700",
    soft: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    number: "03",
    title: "Retail & Commerce",
    description:
      "Improve digital commerce, customer experiences, product platforms, data systems, and the technology foundations needed for continuous change.",
    themes: [
      "Digital Commerce",
      "Customer Experience",
      "Data",
      "Platforms",
    ],
    href: "/industries/retail-commerce",
    accent: "text-violet-700",
    soft: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    number: "04",
    title: "Manufacturing",
    description:
      "Connect operational technology with modern software, cloud, data, and platform capabilities to support more adaptable technology environments.",
    themes: [
      "Modernization",
      "Cloud",
      "Data Platforms",
      "Engineering",
    ],
    href: "/industries/manufacturing",
    accent: "text-amber-700",
    soft: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    number: "05",
    title: "Technology & Startups",
    description:
      "Help product and technology companies build scalable platforms, strengthen engineering practices, and evolve architecture as the business grows.",
    themes: [
      "Product Engineering",
      "Cloud",
      "Platform Architecture",
      "Scaling",
    ],
    href: "/industries/technology-startups",
    accent: "text-sky-700",
    soft: "bg-sky-50",
    border: "border-sky-100",
  },
];

export default function Industries() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 sm:text-sm">
              Industries
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Technology decisions
              <span className="block text-slate-500">
                shaped by industry context.
              </span>
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-base leading-7 text-slate-600">
              The same technology approach does not work everywhere. Industry
              context influences architecture, regulation, risk, delivery,
              customer expectations, and how systems need to evolve.
            </p>
          </div>
        </div>

        {/* Industries */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white sm:mt-14 lg:mt-16">
          {industries.map((industry, index) => (
            <Link
              key={industry.href}
              href={industry.href}
              className={`group block transition duration-300 hover:bg-slate-50 ${
                index !== industries.length - 1
                  ? "border-b border-slate-200"
                  : ""
              }`}
            >
              <article className="grid min-w-0 gap-6 p-6 sm:p-7 lg:grid-cols-[80px_260px_1fr_auto] lg:items-center lg:gap-8 lg:p-8">
                {/* Number */}
                <div className="flex items-center justify-between lg:block">
                  <span
                    className={`text-xs font-semibold tracking-[0.18em] sm:text-sm ${industry.accent}`}
                  >
                    {industry.number}
                  </span>

                  <span
                    className={`h-2 w-2 rounded-full lg:hidden ${industry.soft}`}
                    aria-hidden="true"
                  />
                </div>

                {/* Identity */}
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                    {industry.title}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2 lg:hidden">
                    {industry.themes.map((theme) => (
                      <span
                        key={theme}
                        className={`rounded-full border ${industry.border} ${industry.soft} px-3 py-1.5 text-xs font-medium text-slate-600`}
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="min-w-0">
                  <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                    {industry.description}
                  </p>

                  <div className="mt-5 hidden flex-wrap gap-2 lg:flex">
                    {industry.themes.map((theme) => (
                      <span
                        key={theme}
                        className={`rounded-full border ${industry.border} ${industry.soft} px-3 py-1.5 text-xs font-medium text-slate-600`}
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between border-t border-slate-200 pt-5 lg:border-t-0 lg:pt-0">
                  <span
                    className={`text-sm font-semibold lg:hidden ${industry.accent}`}
                  >
                    Explore industry
                  </span>

                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition group-hover:border-slate-950 group-hover:bg-slate-950 group-hover:text-white"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Perspective */}
        <div className="mt-12 grid gap-8 rounded-3xl bg-white p-7 ring-1 ring-slate-200 sm:mt-14 sm:p-9 lg:mt-16 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-14 lg:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
              Industry Context Matters
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Technology strategy has to fit the environment around it.
            </h3>
          </div>

          <div>
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Regulations, operating models, legacy systems, customer
              expectations, security requirements, and organizational maturity
              all affect the right technical approach. We connect engineering
              decisions with that wider context.
            </p>

            <Link
              href="/industries"
              className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-indigo-700 transition hover:text-indigo-900"
            >
              Explore all industries
              <span
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}