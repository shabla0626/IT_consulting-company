const beliefs = [
  {
    number: "01",
    title: "Good technology starts with good judgment.",
    description:
      "The strongest technical solution is not always the newest or most complex. We value clear thinking, explicit trade-offs, and decisions grounded in the real context of the organization.",
  },
  {
    number: "02",
    title: "Business and technology should stay connected.",
    description:
      "Architecture, engineering, cloud, data, AI, and security decisions are most useful when they remain connected to the problem the organization is actually trying to solve.",
  },
  {
    number: "03",
    title: "Quality is part of delivery.",
    description:
      "Testing, observability, security, reliability, maintainability, and operational readiness should be built into the work rather than treated as final-stage activities.",
  },
  {
    number: "04",
    title: "Clarity beats unnecessary complexity.",
    description:
      "We prefer systems, processes, and architectures that teams can understand, operate, and evolve confidently instead of introducing complexity without a clear reason.",
  },
  {
    number: "05",
    title: "Ownership should grow during the engagement.",
    description:
      "Consulting should strengthen the client team. Knowledge, documentation, technical context, and operational capability should become more distributed as the work progresses.",
  },
  {
    number: "06",
    title: "The best teams cross disciplines.",
    description:
      "Complex technology problems often span software, cloud, data, AI, security, operations, product, and business context. We believe those perspectives should work together around the same outcome.",
  },
];

export default function WhatWeBelieve() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            What We Believe
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Principles that shape
            <span className="block text-slate-500">
              how we make decisions and deliver.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
            These principles guide how we approach technology, how we work with
            client teams, and how we think about the long-term value of the
            systems we help build.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {beliefs.map((belief) => (
            <article
              key={belief.number}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-950/5 sm:p-8"
            >
              <span className="text-sm font-semibold tracking-[0.18em] text-indigo-600">
                {belief.number}
              </span>

              <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950">
                {belief.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {belief.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-indigo-100 bg-indigo-50 p-8 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">
                A Simple Standard
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Leave the client in a stronger position.
              </h3>
            </div>

            <p className="text-base leading-7 text-slate-700">
              The work should create more than a technical deliverable. It
              should leave behind stronger systems, clearer decisions,
              improved engineering foundations, useful knowledge, and a better
              ability to handle what comes next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}