const pillars = [
  {
    number: "01",
    title: "Strategy connected to execution",
    description:
      "We help shape the technical direction, but we also stay close to architecture, engineering, delivery, and the operational realities of implementation.",
  },
  {
    number: "02",
    title: "Engineering depth",
    description:
      "Our work spans software, cloud, data, AI, platform engineering, security, quality, and observability rather than stopping at high-level recommendations.",
  },
  {
    number: "03",
    title: "Multidisciplinary delivery",
    description:
      "The right expertise is brought together around the problem so clients do not need to coordinate disconnected technical workstreams themselves.",
  },
  {
    number: "04",
    title: "Long-term ownership",
    description:
      "We design solutions, documentation, platforms, practices, and knowledge transfer so internal teams can continue operating and evolving what has been built.",
  },
];

export default function WhoWeAre() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Who We Are
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              A consulting company that sits between
              <span className="block text-slate-500">
                strategy and hands-on engineering.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              Technology problems rarely fit neatly into one discipline. A
              modernization initiative may involve architecture, software,
              cloud, data, security, platform engineering, and changes to how
              teams deliver and operate systems.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Our role is to connect those decisions and capabilities into one
              practical approach rather than treating them as separate pieces
              of work.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <article
                key={pillar.number}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-950/5 sm:p-8"
              >
                <span className="text-sm font-semibold tracking-[0.18em] text-indigo-600">
                  {pillar.number}
                </span>

                <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950">
                  {pillar.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-slate-950 p-8 text-white sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-300">
                Our Role
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Help clients make better technology decisions and deliver them well.
              </h3>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold text-white">
                  We are not only advisors
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Recommendations should remain connected to architecture,
                  engineering, delivery, and what it will actually take to make
                  the change real.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold text-white">
                  We are not only implementers
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Delivery should remain connected to business context,
                  technical trade-offs, long-term ownership, and the reasons
                  the work matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}