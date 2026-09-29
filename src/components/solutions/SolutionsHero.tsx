import Link from "next/link";

export default function SolutionsHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute -right-40 -top-44 h-[560px] w-[560px] rounded-full bg-gradient-to-br from-indigo-200/70 via-violet-200/50 to-cyan-100/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-56 -left-40 h-[460px] w-[460px] rounded-full bg-gradient-to-br from-cyan-100/70 via-blue-100/40 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-indigo-600" />
              <p className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-sm font-semibold uppercase tracking-[0.18em] text-transparent">
                Solutions
              </p>
            </div>

            <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-neutral-950 sm:text-6xl lg:text-7xl">
              Technology capabilities
              <span className="mt-2 block bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                built around real problems.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl">
              We combine software engineering, AI, cloud, data, and security to
              help organizations modernize technology, launch products, and
              build platforms designed for long-term growth.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Talk to an Expert
              </Link>

              <Link
                href="/work"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white/70 px-7 py-3.5 text-sm font-semibold text-neutral-950 backdrop-blur transition hover:border-neutral-950"
              >
                Explore Our Work
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <CapabilityBadge number="01" name="Software" classes="from-blue-500 to-cyan-400" />
            <CapabilityBadge number="02" name="AI & Data" classes="from-violet-500 to-purple-400" />
            <CapabilityBadge number="03" name="Cloud" classes="from-sky-500 to-teal-400" />
            <CapabilityBadge number="04" name="Security" classes="from-emerald-500 to-green-400" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilityBadge({ number, name, classes }: { number: string; name: string; classes: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white/80 p-5 shadow-sm backdrop-blur sm:p-6">
      <div className={`h-1.5 w-10 rounded-full bg-gradient-to-r ${classes}`} />
      <p className="mt-8 text-xs font-medium text-neutral-400">{number}</p>
      <p className="mt-2 text-lg font-semibold text-neutral-950 sm:text-xl">{name}</p>
    </div>
  );
}
