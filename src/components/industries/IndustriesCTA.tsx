import Link from "next/link";

export default function IndustriesCTA() {
  return (
    <section className="bg-indigo-700 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">
              Start a Conversation
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Technology challenges rarely fit into neat categories.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-indigo-100">
              Tell us what you are trying to improve, modernize, build, or
              scale. We can start with the problem and work outward from there.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-indigo-950/20 transition hover:bg-slate-100"
          >
            Talk to an Expert
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}