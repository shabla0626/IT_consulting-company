import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div
        className="pointer-events-none absolute -bottom-40 right-0 h-[420px] w-[420px] rounded-full bg-indigo-600/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-400">
              Start a Conversation
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Have a technology challenge?
              <span className="mt-2 block text-neutral-500">
                Let&apos;s talk about what you&apos;re building.
              </span>
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="max-w-md text-lg leading-8 text-neutral-400">
              Whether you&apos;re modernizing an existing platform, launching a
              new product, adopting AI, or solving a complex engineering
              problem, we&apos;d like to hear about it.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
            >
              Talk to an Expert
              <span
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
