import Link from "next/link";

const guidance = [
  "Review the full responsibilities",
  "Check the location and working arrangement",
  "Consider how your experience relates to the role",
];

export default function JobsHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div
        className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl sm:h-96 sm:w-96"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-fuchsia-500/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <Link
          href="/careers"
          className="inline-flex min-h-11 items-center text-sm font-semibold text-slate-400 transition hover:text-white focus:outline-none focus:ring-4 focus:ring-white/10"
        >
          <span className="mr-2" aria-hidden="true">
            ←
          </span>
          Careers
        </Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-20">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300 sm:text-sm">
              Open Roles
            </p>

            <h1 className="mt-5 max-w-4xl text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl sm:leading-[1.04] lg:text-6xl">
              Find the opportunity
              <span className="block text-slate-400">
                that fits your next step.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Explore current opportunities and learn more about the work,
              expectations, technologies, and environment behind each role.
            </p>
          </div>

          <div className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">
              Before You Apply
            </p>

            <div className="mt-6 space-y-4">
              {guidance.map((item, index) => (
                <div
                  key={item}
                  className="grid grid-cols-[32px_1fr] gap-3"
                >
                  <span className="text-xs font-semibold tracking-[0.14em] text-violet-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm leading-6 text-slate-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-7 sm:mt-16">
          <div className="grid gap-5 sm:grid-cols-3 sm:gap-8">
            <div>
              <p className="text-sm font-semibold text-white">
                Understand the role
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Read beyond the title and understand the work involved.
              </p>
            </div>

            <div className="border-t border-white/10 pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
              <p className="text-sm font-semibold text-white">
                Understand the environment
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Consider the team, location, working style, and technology.
              </p>
            </div>

            <div className="border-t border-white/10 pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
              <p className="text-sm font-semibold text-white">
                Apply deliberately
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Choose the opportunity that best connects with your experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}