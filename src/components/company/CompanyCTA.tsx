import Link from "next/link";

export default function CompanyCTA() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-indigo-700 px-6 py-10 text-white sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-100 sm:text-sm">
                Start a Conversation
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Need experienced people
                <span className="block text-indigo-100">
                  around a complex technology problem?
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-indigo-100">
                Tell us what you are trying to change, what technology surrounds
                the problem, and where you need additional expertise.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-indigo-800 transition hover:bg-indigo-50 focus:outline-none focus:ring-4 focus:ring-white/30 sm:w-auto"
              >
                Talk to an Expert

                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>

              <Link
                href="/work"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/20 sm:w-auto"
              >
                Explore Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}