import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Technology depth",
    description:
      "Experienced practitioners working across software, cloud, data, AI, security, and architecture.",
  },
  {
    number: "02",
    title: "Problem-led thinking",
    description:
      "Start with the context and the outcome before choosing the technical answer.",
  },
  {
    number: "03",
    title: "Multidisciplinary delivery",
    description:
      "Bring the right capabilities together around one technology challenge.",
  },
];

export default function CompanyHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl sm:h-96 sm:w-96"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl sm:left-1/4 sm:h-96 sm:w-96"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300 sm:text-sm">
              Company
            </p>

            <h1 className="mt-5 max-w-4xl text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl sm:leading-[1.04] lg:text-6xl xl:text-7xl">
              Technology expertise
              <span className="block text-slate-400">
                organized around real problems.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:mt-7 sm:text-lg sm:leading-8">
              We are building a technology consulting company around experienced
              people, multidisciplinary teams, strong engineering practices,
              and practical problem solving.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
              The aim is straightforward: understand the environment, bring
              together the right expertise, make sound technical decisions,
              and build technology organizations can continue to own.
            </p>

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
                href="/careers"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/10 sm:w-auto"
              >
                Explore Careers
              </Link>
            </div>
          </div>

          <div className="min-w-0">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20">
              <div className="border-b border-white/10 px-6 py-5 sm:px-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  How We Think About Consulting
                </p>
              </div>

              <div className="divide-y divide-white/10">
                {principles.map((principle) => (
                  <div
                    key={principle.number}
                    className="grid grid-cols-[42px_1fr] gap-4 px-6 py-5 sm:grid-cols-[52px_1fr] sm:px-7 sm:py-6"
                  >
                    <span className="pt-1 text-xs font-semibold tracking-[0.16em] text-indigo-300">
                      {principle.number}
                    </span>

                    <div className="min-w-0">
                      <h2 className="text-base font-semibold text-white sm:text-lg">
                        {principle.title}
                      </h2>

                      <p className="mt-1.5 text-sm leading-6 text-slate-400">
                        {principle.description}
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
                Expertise
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Deep technical capability across connected disciplines.
              </p>
            </div>

            <div className="border-t border-white/10 pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
              <p className="text-sm font-semibold text-white">
                Collaboration
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Teams working with clients rather than operating around them.
              </p>
            </div>

            <div className="border-t border-white/10 pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
              <p className="text-sm font-semibold text-white">
                Ownership
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Technology designed to remain understandable and evolvable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}