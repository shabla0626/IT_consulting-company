import Link from "next/link";

const industries = [
  {
    number: "01",
    title: "Financial Services",
    description:
      "Modernize platforms, improve digital delivery, strengthen data foundations, and build technology for complex financial environments.",
    href: "/industries/financial-services",
    accent: "from-blue-500 to-cyan-400",
    soft: "bg-blue-50",
    text: "text-blue-700",
  },
  {
    number: "02",
    title: "Healthcare",
    description:
      "Create dependable digital platforms, connected data experiences, and technology that supports evolving healthcare workflows.",
    href: "/industries/healthcare",
    accent: "from-emerald-500 to-teal-400",
    soft: "bg-emerald-50",
    text: "text-emerald-700",
  },
  {
    number: "03",
    title: "Retail & Commerce",
    description:
      "Build digital commerce experiences and technology platforms designed for changing customer expectations and operational demands.",
    href: "/industries/retail-commerce",
    accent: "from-violet-500 to-fuchsia-400",
    soft: "bg-violet-50",
    text: "text-violet-700",
  },
  {
    number: "04",
    title: "Manufacturing",
    description:
      "Connect systems, data, platforms, and engineering workflows to support more adaptable digital operations.",
    href: "/industries/manufacturing",
    accent: "from-amber-500 to-orange-400",
    soft: "bg-amber-50",
    text: "text-amber-700",
  },
  {
    number: "05",
    title: "Technology & Startups",
    description:
      "Design and scale products, platforms, cloud infrastructure, and engineering capabilities as technology organizations grow.",
    href: "/industries/technology-startups",
    accent: "from-sky-500 to-indigo-500",
    soft: "bg-sky-50",
    text: "text-sky-700",
  },
];

export default function IndustryShowcase() {
  return (
    <section id="industries" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Where We Work
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Industry context changes how good technology gets built.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              The underlying engineering disciplines may be shared, but the
              business environment is not. Our industry focus helps connect
              technical decisions to the realities surrounding the work.
            </p>
          </div>

          <div className="space-y-5">
            {industries.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-950/5"
              >
                <div className="grid sm:grid-cols-[110px_1fr_auto]">
                  <div
                    className={`${industry.soft} flex items-center justify-center px-6 py-8`}
                  >
                    <span
                      className={`text-sm font-semibold tracking-[0.18em] ${industry.text}`}
                    >
                      {industry.number}
                    </span>
                  </div>

                  <div className="px-7 py-7 sm:px-8">
                    <h3 className="text-xl font-semibold text-slate-950">
                      {industry.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                      {industry.description}
                    </p>
                  </div>

                  <div className="flex items-center px-7 pb-7 sm:pb-0">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-lg text-slate-700 transition group-hover:border-slate-900 group-hover:bg-slate-950 group-hover:text-white">
                      →
                    </span>
                  </div>
                </div>

                <div
                  className={`h-1 w-0 bg-gradient-to-r ${industry.accent} transition-all duration-500 group-hover:w-full`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}