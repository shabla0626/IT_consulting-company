import Link from "next/link";

export default function CareersHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">
              Careers at Nexora
            </p>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Do meaningful technology work
              <span className="block bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                with people who care about the craft.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Join multidisciplinary teams solving real technology problems
              across software engineering, cloud, data, AI, security, design,
              and consulting.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/careers/jobs"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                View Open Roles
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>

              <Link
                href="#life-at-nexora"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                Life at Nexora
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-7">
              {[
                "Engineering",
                "Cloud",
                "Data & AI",
                "Design",
                "Consulting",
              ].map((team) => (
                <span
                  key={team}
                  className="text-sm font-medium text-slate-400"
                >
                  {team}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">
              Find Your Place
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              Work on problems that need more than one discipline.
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              Our teams work across the boundaries between product,
              engineering, cloud, data, AI, security, design, and consulting.
              You will have opportunities to learn from people with different
              expertise while contributing your own.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  number: "01",
                  title: "Solve meaningful problems",
                },
                {
                  number: "02",
                  title: "Work with experienced people",
                },
                {
                  number: "03",
                  title: "Own what you build",
                },
                {
                  number: "04",
                  title: "Keep learning",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="flex items-center gap-4 border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
                >
                  <span className="text-xs font-semibold tracking-[0.16em] text-violet-300">
                    {item.number}
                  </span>

                  <p className="text-sm font-medium text-slate-200">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/careers/jobs"
              className="mt-8 flex w-full items-center justify-between rounded-2xl bg-violet-500/10 px-5 py-4 text-sm font-semibold text-violet-200 transition hover:bg-violet-500/20"
            >
              Explore opportunities
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}