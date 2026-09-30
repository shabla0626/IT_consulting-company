import Link from "next/link";

const disciplines = [
  "Engineering",
  "Cloud",
  "Data & AI",
  "Security",
  "Design",
  "Consulting",
];

export default function JobsHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div
        className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-fuchsia-500/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-sm text-slate-400"
        >
          <Link
            href="/careers"
            className="transition hover:text-white"
          >
            Careers
          </Link>

          <span aria-hidden="true">/</span>

          <span className="text-slate-200">Open Roles</span>
        </nav>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
              Open Opportunities
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Find work where your
              <span className="block text-slate-400">
                experience can make an impact.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Explore opportunities across technology and consulting
              disciplines. Search by role, team, experience level, working
              arrangement, or the technologies you want to work with.
            </p>
          </div>

          <div className="lg:border-l lg:border-white/10 lg:pl-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Career Areas
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {disciplines.map((discipline) => (
                <span
                  key={discipline}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300"
                >
                  {discipline}
                </span>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm leading-6 text-slate-400">
                Every role should provide clear information about
                responsibilities, expectations, working arrangements, and the
                hiring process before you apply.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-7">
          <div className="flex items-center gap-3">
            <span
              className="h-2 w-2 rounded-full bg-violet-400"
              aria-hidden="true"
            />

            <span className="text-sm text-slate-300">
              Search and filter roles
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span
              className="h-2 w-2 rounded-full bg-violet-400"
              aria-hidden="true"
            />

            <span className="text-sm text-slate-300">
              Review complete job details
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span
              className="h-2 w-2 rounded-full bg-violet-400"
              aria-hidden="true"
            />

            <span className="text-sm text-slate-300">
              Apply without unnecessary account creation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}