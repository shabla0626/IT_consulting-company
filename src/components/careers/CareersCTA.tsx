import Link from "next/link";

export default function CareersCTA() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-10 text-white sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-500/15 blur-3xl"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-24 left-0 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300 sm:text-sm">
                Your Next Step
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Interested in building
                <span className="block text-slate-400">
                  technology with us?
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                Explore current opportunities, read the role details carefully,
                and apply to the position that best matches your experience and
                direction.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 sm:p-7">
              <p className="text-sm font-semibold text-white">
                Before applying
              </p>

              <ul className="mt-5 space-y-4">
                {[
                  "Review the role responsibilities",
                  "Check location and working arrangements",
                  "Compare the requirements with your experience",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-slate-300"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400"
                      aria-hidden="true"
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/careers/jobs"
                className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-400/20"
              >
                Explore Open Roles

                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}