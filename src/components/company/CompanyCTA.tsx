import Link from "next/link";

export default function CompanyCTA() {
  return (
    <section className="bg-indigo-700 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">
              Start a Conversation
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Looking for a consulting partner that stays close to the work?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-indigo-100">
              If you are navigating a complex technology challenge, modernizing
              critical systems, building a new platform, or strengthening your
              engineering foundations, we can start with the problem and shape
              the right path forward together.
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
              href="/work"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              Explore Our Work
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-8">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-white">
                Senior expertise
              </p>
              <p className="mt-2 text-sm leading-6 text-indigo-100">
                Experienced people remain involved in the difficult decisions.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Multidisciplinary delivery
              </p>
              <p className="mt-2 text-sm leading-6 text-indigo-100">
                The right technical disciplines work together around the same problem.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Long-term ownership
              </p>
              <p className="mt-2 text-sm leading-6 text-indigo-100">
                The result should be something your organization can continue to own and evolve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}