import Link from "next/link";

const industries = [
  {
    number: "01",
    title: "Financial Services",
    href: "/industries/financial-services",
  },
  {
    number: "02",
    title: "Healthcare",
    href: "/industries/healthcare",
  },
  {
    number: "03",
    title: "Retail & Commerce",
    href: "/industries/retail-commerce",
  },
  {
    number: "04",
    title: "Manufacturing",
    href: "/industries/manufacturing",
  },
  {
    number: "05",
    title: "Technology & Startups",
    href: "/industries/technology-startups",
  },
];

export default function WorkIndustries() {
  return (
    <section className="bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300 sm:text-sm">
              Industry Context
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              The same technology
              <span className="block text-slate-400">
                behaves differently in different environments.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
              Industry context influences risk, operating constraints,
              integration complexity, users, data, regulation, and the pace at
              which technology can change.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
            <div className="divide-y divide-white/10">
              {industries.map((industry) => (
                <Link
                  key={industry.href}
                  href={industry.href}
                  className="group grid min-w-0 grid-cols-[42px_1fr_auto] items-center gap-4 px-6 py-5 transition hover:bg-white/[0.05] sm:grid-cols-[54px_1fr_auto] sm:px-7 sm:py-6"
                >
                  <span className="text-xs font-semibold tracking-[0.16em] text-indigo-300">
                    {industry.number}
                  </span>

                  <span className="min-w-0 text-base font-semibold text-white sm:text-lg">
                    {industry.title}
                  </span>

                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-300 transition group-hover:border-white/30 group-hover:bg-white group-hover:text-slate-950"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}