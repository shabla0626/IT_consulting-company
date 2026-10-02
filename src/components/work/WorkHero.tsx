import Link from "next/link";
import ArrowIcon from "@/components/shared/ArrowIcon";

const proofPrinciples = [
  {
    number: "01",
    title: "Context",
    description:
      "What problem existed, what constraints mattered, and what needed to change.",
  },
  {
    number: "02",
    title: "Decisions",
    description:
      "How architecture, product, engineering, cloud, data, and security choices were shaped.",
  },
  {
    number: "03",
    title: "Delivery",
    description:
      "How multidisciplinary teams could turn those decisions into working technology.",
  },
  {
    number: "04",
    title: "Outcomes",
    description:
      "What the work could enable without relying on invented performance claims.",
  },
];

export default function WorkHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl sm:h-96 sm:w-96"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-sky-500/5 blur-3xl sm:left-1/4 sm:h-96 sm:w-96"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300 sm:text-sm">
              Work
            </p>

            <h1 className="mt-5 max-w-4xl text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl sm:leading-[1.04] lg:text-6xl xl:text-7xl">
              Technology work
              <span className="block text-slate-400">
                explained through the decisions behind it.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:mt-7 sm:text-lg sm:leading-8">
              Our case-study format is designed to show how complex technology
              challenges can be understood, shaped, delivered, and carried
              forward by multidisciplinary teams.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
              The examples currently shown on this site are representative
              scenarios for design and development purposes. Production content
              should be replaced with verified client work and approved
              outcomes.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-white/20 sm:w-auto"
              >
                Talk to an Expert
                <ArrowIcon className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/solutions"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/10 sm:w-auto"
              >
                Explore Solutions
              </Link>
            </div>
          </div>

          <div className="min-w-0">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20">
              <div className="border-b border-white/10 px-6 py-5 sm:px-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  How We Present the Work
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Focus on the thinking and delivery behind the engagement.
                </p>
              </div>

              <div className="divide-y divide-white/10">
                {proofPrinciples.map((item) => (
                  <div
                    key={item.number}
                    className="grid grid-cols-[42px_1fr] gap-4 px-6 py-5 sm:grid-cols-[52px_1fr] sm:px-7 sm:py-6"
                  >
                    <span className="pt-1 text-xs font-semibold tracking-[0.16em] text-indigo-300">
                      {item.number}
                    </span>

                    <div className="min-w-0">
                      <h2 className="text-base font-semibold text-white sm:text-lg">
                        {item.title}
                      </h2>

                      <p className="mt-1.5 text-sm leading-6 text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-7 sm:mt-16 lg:mt-20">
          <div className="grid gap-5 sm:grid-cols-3 sm:gap-8">
            <div>
              <p className="text-sm font-semibold text-white">
                Strategy connected to delivery
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Decisions should connect directly to architecture and
                engineering execution.
              </p>
            </div>

            <div className="border-t border-white/10 pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
              <p className="text-sm font-semibold text-white">
                Multidisciplinary teams
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Different disciplines work around one technology problem rather
                than operating as separate silos.
              </p>
            </div>

            <div className="border-t border-white/10 pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
              <p className="text-sm font-semibold text-white">
                Long-term ownership
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Delivery should leave systems easier to operate, understand,
                and evolve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}