import Link from "next/link";

const industries = [
  {
    number: "01",
    title: "Financial Services",
    description:
      "Technology environments in financial services often combine modernization needs with security, data, integration, reliability, and operational complexity.",
    areas: [
      "Platform Modernization",
      "Data & AI",
      "Cloud",
      "Security",
    ],
    href: "/industries/financial-services",
    accent: "text-blue-700",
    surface: "bg-blue-50",
    border: "border-blue-100",
    dot: "bg-blue-500",
  },
  {
    number: "02",
    title: "Healthcare",
    description:
      "Healthcare technology requires dependable platforms, secure information flows, useful data, integrations, and systems designed around complex operational environments.",
    areas: [
      "Digital Platforms",
      "Data",
      "Interoperability",
      "Security",
    ],
    href: "/industries/healthcare",
    accent: "text-emerald-700",
    surface: "bg-emerald-50",
    border: "border-emerald-100",
    dot: "bg-emerald-500",
  },
  {
    number: "03",
    title: "Retail & Commerce",
    description:
      "Retail and commerce systems connect customer experience, digital products, data, integrations, platforms, and the need to adapt continuously.",
    areas: [
      "Digital Commerce",
      "Customer Experience",
      "Data",
      "Platforms",
    ],
    href: "/industries/retail-commerce",
    accent: "text-violet-700",
    surface: "bg-violet-50",
    border: "border-violet-100",
    dot: "bg-violet-500",
  },
  {
    number: "04",
    title: "Manufacturing",
    description:
      "Manufacturing technology increasingly connects operational environments with software, data platforms, cloud services, automation, and modern engineering practices.",
    areas: [
      "Modernization",
      "Cloud",
      "Data Platforms",
      "Engineering",
    ],
    href: "/industries/manufacturing",
    accent: "text-amber-700",
    surface: "bg-amber-50",
    border: "border-amber-100",
    dot: "bg-amber-500",
  },
  {
    number: "05",
    title: "Technology & Startups",
    description:
      "Technology companies need product and platform foundations that can evolve as customers, teams, architecture, operational demands, and business priorities change.",
    areas: [
      "Product Engineering",
      "Cloud",
      "Platform Architecture",
      "Scaling",
    ],
    href: "/industries/technology-startups",
    accent: "text-sky-700",
    surface: "bg-sky-50",
    border: "border-sky-100",
    dot: "bg-sky-500",
  },
];

export default function IndustryShowcase() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 sm:text-sm">
              Industry Experience
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Different environments.
              <span className="block text-slate-500">
                Different technology pressures.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">
            Industry context influences how technology needs to perform, where
            risk sits, how change can be introduced, and which capabilities
            need to work together.
          </p>
        </div>

        <div className="mt-12 space-y-5 sm:mt-14 lg:mt-16">
          {industries.map((industry) => (
            <Link
              key={industry.href}
              href={industry.href}
              className={`group block overflow-hidden rounded-3xl border ${industry.border} transition hover:shadow-xl hover:shadow-slate-950/5`}
            >
              <article className="grid min-w-0 lg:grid-cols-[190px_1fr_auto]">
                <div
                  className={`border-b ${industry.border} ${industry.surface} p-6 sm:p-7 lg:border-b-0 lg:border-r lg:p-8`}
                >
                  <span
                    className={`text-xs font-semibold tracking-[0.18em] ${industry.accent}`}
                  >
                    {industry.number}
                  </span>

                  <div className="mt-8 flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${industry.dot}`}
                      aria-hidden="true"
                    />

                    <p className={`text-sm font-semibold ${industry.accent}`}>
                      Industry
                    </p>
                  </div>
                </div>

                <div className="min-w-0 bg-white p-6 sm:p-7 lg:p-8">
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                    {industry.title}
                  </h3>

                  <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                    {industry.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {industry.areas.map((area) => (
                      <span
                        key={area}
                        className={`rounded-full border ${industry.border} ${industry.surface} px-3 py-1.5 text-xs font-medium text-slate-600`}
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center border-t border-slate-200 bg-white px-6 py-5 sm:px-7 lg:border-l lg:border-t-0 lg:px-8">
                  <div className="flex w-full items-center justify-between gap-4 lg:w-auto lg:flex-col lg:justify-center">
                    <span className={`text-sm font-semibold ${industry.accent}`}>
                      Explore industry
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
      </div>
    </section>
  );
}