import Link from "next/link";

const teams = ["Engineering", "Design", "Cloud", "Data & AI", "Consulting"];

export default function CareersCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-violet-700 to-fuchsia-700 text-white">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-pink-400/20 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
          {/* Main content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-200">
              Build With Us
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Do meaningful technology work with people who care about the
              craft.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-indigo-100">
              Join teams solving real technology problems across software,
              cloud, data, AI, design, and consulting.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/careers"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-100"
              >
                Explore Careers
              </Link>

              <Link
                href="/careers/jobs"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white"
              >
                View Open Roles
                <span
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Team list */}
          <div className="border-t border-white/20">
            {teams.map((team, index) => (
              <div
                key={team}
                className="flex items-center justify-between border-b border-white/20 py-5"
              >
                <div className="flex items-center gap-5">
                  <span className="text-xs font-medium text-indigo-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-lg font-medium text-white sm:text-xl">
                    {team}
                  </span>
                </div>

                <span className="text-indigo-200" aria-hidden="true">
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
