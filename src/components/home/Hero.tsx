import Link from "next/link";

const capabilities = [
  "Software Engineering",
  "AI & Data",
  "Cloud & DevOps",
  "Cybersecurity",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Decorative background */}
        <div
        className="pointer-events-none absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-indigo-200/70 via-violet-200/50 to-cyan-100/40 blur-3xl"
        aria-hidden="true"
        />

        <div
        className="pointer-events-none absolute -bottom-52 -left-40 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-cyan-100/70 via-sky-100/40 to-transparent blur-3xl"
        aria-hidden="true"
        />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* Left column */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-indigo-600" />

              <p className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-sm font-semibold uppercase tracking-[0.18em] text-transparent">
                Technology Consulting
              </p>
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-neutral-950 sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              Build better technology.
              <span className="mt-2 block bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                Move business forward.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl">
              We help organizations design, build, modernize, and scale digital
              products, cloud platforms, data systems, and AI-powered
              experiences.
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
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 px-7 py-3.5 text-sm font-semibold text-neutral-900 transition hover:border-neutral-950"
              >
                Explore Our Work

                <span
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>

            {/* Capability list */}
            <div className="mt-14 border-t border-neutral-200 pt-7">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Core capabilities
              </p>

              <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {capabilities.map((capability) => (
                  <div
                    key={capability}
                    className="flex items-center gap-3 text-sm font-medium text-neutral-700"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />

                    {capability}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="relative">
            <div className="rounded-[2rem] border border-neutral-200 bg-neutral-950 p-6 shadow-2xl shadow-neutral-950/10 sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
                    Digital Systems
                  </p>

                  <p className="mt-2 text-lg font-medium text-white">
                    From strategy to scale
                  </p>
                </div>

                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-neutral-600" />
                  <span className="h-2 w-2 rounded-full bg-neutral-600" />
                  <span className="h-2 w-2 rounded-full bg-indigo-500" />
                </div>
              </div>

              <div className="py-10">
                <div className="space-y-4">
                  <ProcessRow number="01" title="Discover" />
                  <ProcessRow number="02" title="Design" />
                  <ProcessRow number="03" title="Build" />
                  <ProcessRow number="04" title="Scale" active />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <Metric value="4×" label="Faster delivery" />
                <Metric value="99.9%" label="Platform reliability" />
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-8 -left-5 hidden rounded-2xl border border-neutral-200 bg-white p-5 shadow-xl sm:block lg:-left-10">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-400">
                Focus
              </p>

              <p className="mt-2 text-sm font-semibold text-neutral-900">
                Business outcomes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessRow({
  number,
  title,
  active = false,
}: {
  number: string;
  title: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between rounded-xl border px-5 py-4 ${
        active
          ? "border-indigo-500/50 bg-indigo-500/10"
          : "border-white/10 bg-white/[0.03]"
      }`}
    >
      <div className="flex items-center gap-5">
        <span
          className={`text-xs font-medium ${
            active ? "text-indigo-400" : "text-neutral-600"
          }`}
        >
          {number}
        </span>

        <span className="font-medium text-white">{title}</span>
      </div>

      <span
        className={active ? "text-indigo-400" : "text-neutral-600"}
        aria-hidden="true"
      >
        →
      </span>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-2xl font-semibold tracking-tight text-white">{value}</p>
      <p className="mt-1 text-xs text-neutral-500">{label}</p>
    </div>
  );
}