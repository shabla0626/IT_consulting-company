const steps = [
  {
    number: "01",
    title: "We review the context",
    description:
      "We look at the challenge, project stage, timing, and the type of expertise that may be relevant.",
  },
  {
    number: "02",
    title: "We arrange an initial conversation",
    description:
      "A first discussion helps clarify goals, constraints, current systems, risks, and what a useful next step could look like.",
  },
  {
    number: "03",
    title: "We shape the right approach",
    description:
      "Depending on the situation, that may involve discovery, technical assessment, architecture work, delivery support, or a broader multidisciplinary engagement.",
  },
  {
    number: "04",
    title: "We define the next step clearly",
    description:
      "Before meaningful work begins, scope, responsibilities, priorities, assumptions, and delivery expectations should be made explicit.",
  },
];

export default function ContactNextSteps() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-16 xl:gap-20">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 sm:text-sm">
              What Happens Next?
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              A clear path from
              <span className="block text-slate-500">
                first conversation to next step.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:mt-6">
              The first conversation is about understanding the situation, not
              forcing a predefined service. The goal is to establish whether
              there is a useful way to work together and what that should look
              like.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Some situations need a focused technical assessment. Others may
              need discovery, architecture, engineering delivery, or a
              combination of disciplines.
            </p>
          </div>

          <div className="min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className={`grid min-w-0 gap-4 p-6 sm:p-7 md:grid-cols-[72px_minmax(0,1fr)] md:gap-5 md:p-8 ${
                  index !== steps.length - 1
                    ? "border-b border-slate-200"
                    : ""
                }`}
              >
                <span className="text-xs font-semibold tracking-[0.18em] text-indigo-700 sm:text-sm">
                  {step.number}
                </span>

                <div className="min-w-0">
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-3xl bg-slate-950 p-6 text-white sm:mt-16 sm:p-8 lg:p-10 xl:p-12">
          <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-10">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300 sm:text-sm">
                No Forced Fit
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                The first step should create clarity.
              </h3>
            </div>

            <p className="min-w-0 text-base leading-7 text-slate-300">
              A useful initial conversation should help determine the real
              problem, the level of support required, and whether Nexora is the
              right fit. The next step should follow from that understanding,
              not from a preset engagement model.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}