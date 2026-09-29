import Link from "next/link";

export default function InsightsCTA() {
  return (
    <section className="bg-indigo-700 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">
              Turn Insight Into Action
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Thinking about a technology decision your team needs to make?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-indigo-100">
              Whether you are evaluating architecture, modernizing a platform,
              exploring AI, improving cloud foundations, or addressing an
              engineering challenge, we can help turn the discussion into a
              practical technical direction.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-indigo-950/20 transition hover:bg-slate-100"
            >
              Talk to an Expert
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>

            <Link
              href="/solutions"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              Explore Solutions
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-8">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-white">
                Architecture
              </p>
              <p className="mt-2 text-sm leading-6 text-indigo-100">
                Evaluate technical options and make trade-offs explicit.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Modernization
              </p>
              <p className="mt-2 text-sm leading-6 text-indigo-100">
                Define a practical path from the current environment to what
                comes next.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Engineering Strategy
              </p>
              <p className="mt-2 text-sm leading-6 text-indigo-100">
                Connect technology decisions with delivery, operations, and
                long-term ownership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}