import Link from "next/link";

const focusAreas = [
  {
    number: "01",
    title: "Product Engineering",
    description: "Digital products and modern web applications.",
  },
  {
    number: "02",
    title: "Platforms & APIs",
    description: "Backend services, APIs, and platform foundations.",
  },
  {
    number: "03",
    title: "Modernization",
    description: "Evolving legacy applications and architecture.",
  },
  {
    number: "04",
    title: "Engineering Enablement",
    description: "Quality, delivery, observability, and developer experience.",
  },
];

export default function SoftwareHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Controlled software accent */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl sm:h-96 sm:w-96"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl sm:left-1/4 sm:h-96 sm:w-96"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          {/* Main message */}
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-cyan-400"
                aria-hidden="true"
              />

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 sm:text-sm">
                Software Engineering
              </p>
            </div>

            <h1 className="mt-5 max-w-4xl text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl sm:leading-[1.04] lg:text-6xl xl:text-7xl">
              Build software that
              <span className="block text-slate-400">
                can evolve with the business.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:mt-7 sm:text-lg sm:leading-8">
              We help organizations design, build, modernize, and improve
              software products and platforms with engineering practices
              focused on quality, adaptability, reliability, and long-term
              ownership.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
              From architecture and product engineering through APIs, cloud
              integration, modernization, and engineering enablement, the goal
              is software that remains understandable and maintainable as
              requirements change.
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
                Engineering is not only about shipping features. Architecture,
                quality, delivery, observability, and ownership all shape the
                long-term value of the software.
              </p>
            </div>
          </div>

          {/* Focus-area panel */}
          <div className="min-w-0">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20 backdrop-blur-sm">
              <div className="border-b border-white/10 px-6 py-5 sm:px-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                  Engineering Focus
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  The disciplines that help software remain useful beyond the
                  first release.
                </p>
              </div>

              <div className="divide-y divide-white/10">
                {focusAreas.map((area) => (
                  <div
                    key={area.number}
                    className="grid min-w-0 grid-cols-[38px_1fr] gap-4 px-6 py-5 sm:grid-cols-[48px_1fr] sm:px-7 sm:py-6"
                  >
                    <span className="pt-0.5 text-xs font-semibold tracking-[0.16em] text-cyan-300">
                      {area.number}
                    </span>

                    <div className="min-w-0">
                      <h2 className="text-base font-semibold text-white sm:text-lg">
                        {area.title}
                      </h2>

                      <p className="mt-1.5 text-sm leading-6 text-slate-400">
                        {area.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 bg-white/[0.025] px-6 py-5 sm:px-7">
                <div className="flex flex-wrap gap-2">
                  {[
                    "Frontend",
                    "Backend",
                    "APIs",
                    "Cloud Native",
                    "Quality",
                    "Observability",
                  ].map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom engineering principles */}
        <div className="mt-14 border-t border-white/10 pt-7 sm:mt-16 lg:mt-20">
          <div className="grid gap-5 sm:grid-cols-3 sm:gap-8">
            <div>
              <p className="text-sm font-semibold text-white">
                Architecture with purpose
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Make technical decisions around the problem, constraints, and
                expected evolution of the system.
              </p>
            </div>

            <div className="border-t border-white/10 pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
              <p className="text-sm font-semibold text-white">
                Quality throughout delivery
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Treat testing, automation, security, and observability as part
                of engineering rather than final-stage activities.
              </p>
            </div>

            <div className="border-t border-white/10 pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
              <p className="text-sm font-semibold text-white">
                Designed for ownership
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Build systems that teams can understand, maintain, operate, and
                continue improving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}