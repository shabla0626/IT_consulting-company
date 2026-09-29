import Link from "next/link";

export default function CompanyHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-300">
              Company
            </p>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Technology consulting built around
              <span className="block text-indigo-300">
                expertise, ownership, and outcomes.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              We bring together experienced consultants, engineers, cloud
              specialists, data and AI practitioners, and security experts to
              solve complex technology problems as one multidisciplinary team.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/work"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Explore Our Work
              </Link>

              <Link
                href="/careers"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                Explore Careers
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-300">
              What Defines Us
            </p>

            <div className="mt-7 space-y-6">
              {[
                {
                  number: "01",
                  title: "Senior expertise stays involved",
                },
                {
                  number: "02",
                  title: "Business outcomes come first",
                },
                {
                  number: "03",
                  title: "One multidisciplinary team",
                },
                {
                  number: "04",
                  title: "Built for long-term ownership",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="flex gap-4 border-b border-white/10 pb-6 last:border-b-0 last:pb-0"
                >
                  <span className="text-xs font-semibold tracking-[0.16em] text-indigo-300">
                    {item.number}
                  </span>

                  <p className="text-sm font-medium leading-6 text-slate-200">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}