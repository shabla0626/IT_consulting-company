import Link from "next/link";

const deliveryStages = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the problem, users, systems, and constraints.",
  },
  {
    number: "02",
    title: "Design",
    description: "Shape the architecture, experience, and delivery approach.",
  },
  {
    number: "03",
    title: "Build",
    description: "Deliver with experienced multidisciplinary teams.",
  },
  {
    number: "04",
    title: "Scale",
    description: "Improve reliability, capability, and long-term ownership.",
  },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#10211c] text-white">
      <div
        className="hero-grid pointer-events-none absolute inset-0 opacity-80"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-[-9rem] top-28 h-72 w-72 rounded-full border border-lime-200/10 sm:right-[-6rem] sm:top-24 sm:h-96 sm:w-96"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.06fr_0.94fr] lg:items-center lg:gap-20">
          {/* Main message */}
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-200 sm:text-sm">
              Technology Consulting
            </p>

            <h1 className="mt-5 max-w-4xl text-[2.5rem] font-medium leading-[1.05] text-white sm:text-5xl sm:leading-[1.04] lg:text-5xl xl:text-6xl">
              Build better technology.
              <span className="mt-1 block text-lime-100/75 sm:mt-2">
                Move business forward.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:mt-7 sm:text-lg sm:leading-8">
              We help organizations solve complex technology problems through
              experienced teams spanning software engineering, cloud, data, AI,
              security, design, and consulting.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
              From strategy and architecture through hands-on delivery, we
              focus on building technology that can evolve with the business.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/contact"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-lime-200 px-6 py-3.5 text-sm font-semibold text-[#10211c] transition hover:bg-lime-100 focus:outline-none focus:ring-4 focus:ring-lime-100/30 sm:w-auto"
              >
                Talk to an Expert
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>

              <Link
                href="/work"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-lime-100/60 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/10 sm:w-auto"
              >
                Explore Our Work
              </Link>
            </div>

            {/* Capability strip */}
            <div className="mt-10 border-t border-white/10 pt-6 sm:mt-12 sm:pt-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Expertise across
              </p>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-slate-300">
                <span>Software</span>
                <span className="hidden text-slate-700 sm:inline">/</span>

                <span>Cloud</span>
                <span className="hidden text-slate-700 sm:inline">/</span>

                <span>Data & AI</span>
                <span className="hidden text-slate-700 sm:inline">/</span>

                <span>Security</span>
              </div>
            </div>
          </div>

          {/* Delivery panel */}
          <div className="min-w-0">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20 backdrop-blur-sm">
              <div className="border-b border-white/10 px-6 py-5 sm:px-7">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lime-200">
                      How We Deliver
                    </p>

                    <p className="mt-2 text-sm text-slate-400">
                      From uncertainty to durable technology.
                    </p>
                  </div>

                  <span
                    className="hidden h-2 w-2 rounded-full bg-lime-200 sm:block"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div className="divide-y divide-white/10">
                {deliveryStages.map((stage) => (
                  <div
                    key={stage.number}
                    className="grid grid-cols-[42px_1fr] gap-4 px-6 py-5 sm:grid-cols-[54px_1fr] sm:px-7 sm:py-6"
                  >
                    <span className="pt-0.5 text-xs font-semibold tracking-[0.16em] text-lime-200">
                      {stage.number}
                    </span>

                    <div>
                      <h2 className="text-base font-semibold text-white sm:text-lg">
                        {stage.title}
                      </h2>

                      <p className="mt-1.5 text-sm leading-6 text-slate-400">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 bg-white/[0.025] px-6 py-5 sm:px-7">
                <p className="text-sm leading-6 text-slate-400">
                  The exact engagement shape depends on the problem—not a
                  predefined staffing model.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom positioning statement */}
        <div className="mt-14 border-t border-white/10 pt-7 sm:mt-16 lg:mt-20">
          <div className="grid gap-5 sm:grid-cols-3 sm:gap-8">
            <div>
              <p className="text-sm font-semibold text-white">
                Strategy + delivery
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Connect technology decisions with hands-on implementation.
              </p>
            </div>

            <div className="border-t border-white/10 pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
              <p className="text-sm font-semibold text-white">
                Multidisciplinary teams
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Bring together the expertise the problem actually requires.
              </p>
            </div>

            <div className="border-t border-white/10 pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
              <p className="text-sm font-semibold text-white">
                Built for the long term
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Prioritize quality, ownership, reliability, and maintainability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}