import Link from "next/link";

const industries = [
  {
    number: "01",
    title: "Financial Services",
    description:
      "Modern platforms, data capabilities, cloud foundations, and secure technology delivery.",
    href: "/industries/financial-services",
    accent: "text-blue-300",
    dot: "bg-blue-400",
  },
  {
    number: "02",
    title: "Healthcare",
    description:
      "Dependable digital platforms, integrations, data foundations, and secure systems.",
    href: "/industries/healthcare",
    accent: "text-emerald-300",
    dot: "bg-emerald-400",
  },
  {
    number: "03",
    title: "Retail & Commerce",
    description:
      "Digital commerce, customer experiences, data, and scalable product platforms.",
    href: "/industries/retail-commerce",
    accent: "text-violet-300",
    dot: "bg-violet-400",
  },
  {
    number: "04",
    title: "Manufacturing",
    description:
      "Modern software, cloud, data, and engineering foundations for connected operations.",
    href: "/industries/manufacturing",
    accent: "text-amber-300",
    dot: "bg-amber-400",
  },
  {
    number: "05",
    title: "Technology & Startups",
    description:
      "Products, platforms, architecture, and engineering practices built for continued growth.",
    href: "/industries/technology-startups",
    accent: "text-sky-300",
    dot: "bg-sky-400",
  },
];

export default function IndustriesHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Controlled background accents */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl sm:h-96 sm:w-96"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-36 left-0 h-80 w-80 rounded-full bg-sky-500/5 blur-3xl sm:left-1/4 sm:h-96 sm:w-96"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          {/* Main message */}
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300 sm:text-sm">
              Industries
            </p>

            <h1 className="mt-5 max-w-4xl text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl sm:leading-[1.04] lg:text-6xl xl:text-7xl">
              Technology shaped by
              <span className="block text-slate-400">
                the environment around it.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:mt-7 sm:text-lg sm:leading-8">
              Architecture, delivery, security, data, and modernization
              decisions are influenced by industry context. We connect
              technology expertise with the realities surrounding the systems
              being built and operated.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
              That means understanding the organization, users, existing
              technology, operating constraints, risk, and the pace of change
              before deciding what the technical answer should look like.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-white/20 sm:w-auto"
              >
                Talk to an Expert
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>

              <Link
                href="/work"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/10 sm:w-auto"
              >
                Explore Our Work
              </Link>
            </div>

            {/* Positioning */}
            <div className="mt-10 border-t border-white/10 pt-6 sm:mt-12 sm:pt-7">
              <p className="max-w-xl text-sm leading-6 text-slate-400">
                Industry context helps shape the solution. It does not replace
                strong engineering fundamentals.
              </p>
            </div>
          </div>

          {/* Industry navigation */}
          <div className="min-w-0">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20 backdrop-blur-sm">
              <div className="border-b border-white/10 px-6 py-5 sm:px-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Explore Industries
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  See how technology priorities shift across different operating
                  environments.
                </p>
              </div>

              <div className="divide-y divide-white/10">
                {industries.map((industry) => (
                  <Link
                    key={industry.href}
                    href={industry.href}
                    className="group grid min-w-0 grid-cols-[36px_1fr_auto] items-start gap-3 px-5 py-5 transition hover:bg-white/[0.05] sm:grid-cols-[48px_1fr_auto] sm:gap-4 sm:px-7 sm:py-6"
                  >
                    <span
                      className={`pt-1 text-xs font-semibold tracking-[0.14em] ${industry.accent}`}
                    >
                      {industry.number}
                    </span>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full ${industry.dot}`}
                          aria-hidden="true"
                        />

                        <h2 className="min-w-0 text-base font-semibold text-white sm:text-lg">
                          {industry.title}
                        </h2>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {industry.description}
                      </p>
                    </div>

                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-300 transition group-hover:border-white/30 group-hover:bg-white group-hover:text-slate-950 sm:h-10 sm:w-10"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom context */}
        <div className="mt-14 border-t border-white/10 pt-7 sm:mt-16 lg:mt-20">
          <div className="grid gap-5 sm:grid-cols-3 sm:gap-8">
            <div>
              <p className="text-sm font-semibold text-white">
                Understand the environment
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Consider users, operating models, systems, constraints, and
                organizational priorities.
              </p>
            </div>

            <div className="border-t border-white/10 pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
              <p className="text-sm font-semibold text-white">
                Apply the right expertise
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Combine software, cloud, data, AI, security, design, and
                consulting around the actual challenge.
              </p>
            </div>

            <div className="border-t border-white/10 pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
              <p className="text-sm font-semibold text-white">
                Build for ownership
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Make technology choices that teams can operate, maintain, and
                evolve over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}