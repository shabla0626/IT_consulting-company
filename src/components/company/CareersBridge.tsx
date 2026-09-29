import Link from "next/link";

const teams = [
  "Engineering",
  "Design",
  "Cloud",
  "Data & AI",
  "Consulting",
];

export default function CareersBridge() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50">
          <div className="grid gap-12 p-8 sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
                Build With Us
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Do meaningful technology work
                <span className="block text-slate-500">
                  with people who care about the craft.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
                We want to build teams that combine strong technical judgment,
                curiosity, collaboration, and a real sense of ownership. The
                work spans software, cloud, data, AI, security, design, and
                consulting.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/careers"
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Explore Careers
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>

                <Link
                  href="/careers/jobs"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  View Open Roles
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/80 bg-white/80 p-7 shadow-sm backdrop-blur sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Teams
              </p>

              <div className="mt-6 space-y-4">
                {teams.map((team, index) => (
                  <div
                    key={team}
                    className="flex items-center justify-between border-b border-slate-200 pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-semibold tracking-[0.16em] text-violet-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="text-sm font-medium text-slate-800">
                        {team}
                      </p>
                    </div>

                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-50 text-violet-700"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}