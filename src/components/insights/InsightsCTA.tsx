import Link from "next/link";

export default function InsightsCTA() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-9 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 sm:text-sm">
              From Perspective to Practice
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Working through a similar
              <span className="block text-slate-500">
                technology decision?
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              We can help connect the architecture, engineering, cloud, data,
              AI, security, and delivery questions around the challenge you are
              working through.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
            <Link
              href="/contact"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-950/10 sm:w-auto"
            >
              Talk to an Expert
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>

            <Link
              href="/work"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-slate-950/5 sm:w-auto"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}