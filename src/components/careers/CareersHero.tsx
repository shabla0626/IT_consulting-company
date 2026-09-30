import Link from "next/link";

const journey = [
  {
    number: "01",
    title: "Meaningful problems",
    description:
      "Work around software, cloud, data, AI, security, architecture, and technology transformation.",
  },
  {
    number: "02",
    title: "Experienced teams",
    description:
      "Learn through collaboration with people who care about both technical depth and wider context.",
  },
  {
    number: "03",
    title: "Room to grow",
    description:
      "Develop deeper expertise while continuing to understand the disciplines around your work.",
  },
];

export default function CareersHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl sm:h-96 sm:w-96"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-fuchsia-500/5 blur-3xl sm:left-1/4 sm:h-96 sm:w-96"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300 sm:text-sm">
              Careers
            </p>

            <h1 className="mt-5 max-w-4xl text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl sm:leading-[1.04] lg:text-6xl xl:text-7xl">
              Build your career
              <span className="block text-slate-400">
                around meaningful technology work.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:mt-7 sm:text-lg sm:leading-8">
              Join multidisciplinary teams working across software engineering,
              cloud, data, AI, cybersecurity, architecture, and technology
              consulting.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
              We want Careers to show more than vacancies. It should help
              candidates understand the work, teams, learning environment, and
              expectations before choosing to apply.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
              <Link
                href="/careers/jobs"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-400/20 sm:w-auto"
              >
                View Open Roles
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>

              <Link
                href="#life-at-company"
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
                  What You Can Explore
                </p>
              </div>

              <div className="divide-y divide-white/10">
                {journey.map((item) => (
                  <div
                    key={item.number}
                    className="grid grid-cols-[42px_1fr] gap-4 px-6 py-5 sm:grid-cols-[52px_1fr] sm:px-7 sm:py-6"
                  >
                    <span className="pt-1 text-xs font-semibold tracking-[0.16em] text-violet-300">
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
                Learn
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Develop depth through real technical problems and collaboration.
              </p>
            </div>

            <div className="border-t border-white/10 pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
              <p className="text-sm font-semibold text-white">
                Contribute
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Bring your perspective to teams solving connected technology
                challenges.
              </p>
            </div>

            <div className="border-t border-white/10 pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
              <p className="text-sm font-semibold text-white">
                Grow
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Build deeper expertise without losing sight of the wider system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}