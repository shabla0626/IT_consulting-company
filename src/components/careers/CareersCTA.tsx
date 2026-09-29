import Link from "next/link";

export default function CareersCTA() {
  return (
    <section className="bg-slate-950 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
              Your Next Step
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to see where you could contribute?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Explore current opportunities across engineering, cloud, data,
              AI, security, design, and consulting. Each role will clearly
              explain what the work involves, what we are looking for, and what
              candidates can expect from the hiring process.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/careers/jobs"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              View Open Roles
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>

            <Link
              href="/company"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              Learn About Nexora
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="grid gap-7 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-white">
                Explore the work
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Understand the kind of technology challenges our teams work on.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Find the right role
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Search opportunities by team, location, working arrangement,
                and experience level.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Apply clearly
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Review the full role details and apply without unnecessary
                account creation or application friction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}