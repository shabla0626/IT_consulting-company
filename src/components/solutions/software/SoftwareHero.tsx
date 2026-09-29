import Link from "next/link";

export default function SoftwareHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-blue-200/70 via-cyan-100/50 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-36">
        <div className="max-w-5xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-blue-600" />
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Software Engineering</p>
          </div>

          <h1 className="mt-8 text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-neutral-950 sm:text-6xl lg:text-7xl">
            Build digital products
            <span className="mt-2 block text-blue-600">designed to evolve.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600 sm:text-xl">
            We design and engineer modern applications, platforms, APIs, and digital products that help organizations move faster without creating unnecessary technical complexity.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800">Discuss Your Project</Link>
            <Link href="/work" className="group inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 px-7 py-3.5 text-sm font-semibold text-neutral-950 transition hover:border-neutral-950">
              View Our Work
              <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
