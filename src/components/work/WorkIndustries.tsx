import Link from "next/link";

const industries = [
  {
    number: "01",
    title: "Financial Services",
    description:
      "Modernization, platform engineering, data, security, and digital delivery for complex financial technology environments.",
    href: "/industries/financial-services",
    accent: "text-blue-600",
    soft: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    number: "02",
    title: "Healthcare",
    description:
      "Digital platforms, connected data, cloud foundations, and engineering capabilities for evolving healthcare environments.",
    href: "/industries/healthcare",
    accent: "text-emerald-600",
    soft: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    number: "03",
    title: "Retail & Commerce",
    description:
      "Commerce platforms, customer experiences, systems integration, data, and scalable digital product engineering.",
    href: "/industries/retail-commerce",
    accent: "text-violet-600",
    soft: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    number: "04",
    title: "Manufacturing",
    description:
      "Application modernization, systems integration, operational data, cloud platforms, and engineering enablement.",
    href: "/industries/manufacturing",
    accent: "text-amber-600",
    soft: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    number: "05",
    title: "Technology & Startups",
    description:
      "Product engineering, architecture, cloud, data, AI, and platform capabilities designed to evolve with growing technology organizations.",
    href: "/industries/technology-startups",
    accent: "text-sky-600",
    soft: "bg-sky-50",
    border: "border-sky-100",
  },
];

export default function WorkIndustries() {
  return (
    <section className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Industry Context
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Technology decisions change
              <span className="block text-slate-500">
                with the environment around them.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              The same engineering capability can look very different across
              industries. Modernizing a financial platform, building a
              healthcare application, scaling a commerce system, or improving
              industrial operations each brings different constraints,
              dependencies, risks, and priorities.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Our role is to connect technical decisions with that operating
              context rather than treating every engagement as the same type
              of implementation.
            </p>

            <Link
              href="/industries"
              className="mt-8 inline-flex items-center text-sm font-semibold text-indigo-600 transition hover:text-indigo-800"
            >
              Explore all industries
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>
          </div>

          <div className="space-y-4">
            {industries.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="group block rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-950/5 sm:p-7"
              >
                <div className="grid gap-5 sm:grid-cols-[70px_1fr_auto] sm:items-center">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${industry.border} ${industry.soft}`}
                  >
                    <span
                      className={`text-xs font-semibold tracking-[0.15em] ${industry.accent}`}
                    >
                      {industry.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">
                      {industry.title}
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                      {industry.description}
                    </p>
                  </div>

                  <div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition group-hover:border-slate-950 group-hover:bg-slate-950 group-hover:text-white">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}