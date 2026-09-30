const steps = [
  {
    number: "01",
    title: "Apply",
    description:
      "Choose a relevant open role and share the information needed for the recruiting team to review your application.",
  },
  {
    number: "02",
    title: "Initial conversation",
    description:
      "Discuss the role, your experience, the kind of work you are looking for, and practical expectations on both sides.",
  },
  {
    number: "03",
    title: "Role conversation",
    description:
      "Explore your experience in more depth with people connected to the discipline and responsibilities of the role.",
  },
  {
    number: "04",
    title: "Technical assessment",
    description:
      "Where appropriate for the role, explore how you reason about realistic technical problems rather than relying only on trivia.",
  },
  {
    number: "05",
    title: "Decision & next steps",
    description:
      "Complete the process with clear communication about the outcome, remaining steps, and any offer process where applicable.",
  },
];

export default function HiringProcess() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700 sm:text-sm">
              Hiring Process
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              A process candidates
              <span className="block text-slate-500">
                can understand from the start.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">
            Recruiting should help both sides understand whether the role,
            experience, working environment, and expectations are a strong
            match.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white sm:mt-14 lg:mt-16">
          <div className="grid lg:grid-cols-5">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className={`min-w-0 p-6 sm:p-7 lg:p-8 ${
                  index !== steps.length - 1
                    ? "border-b border-slate-200 lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold tracking-[0.18em] text-violet-700">
                    {step.number}
                  </span>

                  <span
                    className="h-2 w-2 rounded-full bg-violet-500"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-6 text-lg font-semibold tracking-tight text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-5 text-xs leading-5 text-slate-500">
          Development note: confirm the final recruiting stages, assessments,
          responsibilities, and candidate communications before production.
        </p>
      </div>
    </section>
  );
}