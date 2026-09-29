const benefits = [
  {
    number: "01",
    category: "Work Environment",
    title: "Flexibility that supports good work",
    description:
      "We want people to have an environment where they can focus, collaborate effectively, and do high-quality work without unnecessary friction.",
  },
  {
    number: "02",
    category: "Growth",
    title: "Continuous learning and development",
    description:
      "Growth comes through challenging work, mentorship, feedback, knowledge sharing, and opportunities to develop both technical depth and broader perspective.",
  },
  {
    number: "03",
    category: "Wellbeing",
    title: "A sustainable way of working",
    description:
      "Strong performance should be sustainable. We want teams to work with clear priorities, realistic expectations, and respect for people’s time and wellbeing.",
  },
  {
    number: "04",
    category: "Tools",
    title: "The tools needed to do the job well",
    description:
      "People should have access to appropriate technology, software, environments, and engineering resources required to work effectively.",
  },
  {
    number: "05",
    category: "Ownership",
    title: "Meaningful responsibility",
    description:
      "We want people to contribute to real decisions, understand the wider context of their work, and have ownership appropriate to their experience and role.",
  },
  {
    number: "06",
    category: "Community",
    title: "Learn from people across disciplines",
    description:
      "Software, cloud, data, AI, security, design, and consulting perspectives create opportunities to learn beyond a single specialty.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
              Benefits & Support
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Support for doing
              <span className="block text-slate-500">
                your best work.
              </span>
            </h2>
          </div>

          <div className="max-w-2xl lg:pt-7">
            <p className="text-base leading-7 text-slate-600">
              Benefits should support people both professionally and
              personally. As Nexora&apos;s employment policies are finalized,
              this section will clearly explain the specific programs,
              coverage, time-off policies, and other benefits available to
              employees.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              For now, these principles describe the experience we want our
              benefits and working environment to support.
            </p>
          </div>
        </div>

        {/* Benefits list */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-white">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.number}
              className={`group grid gap-6 p-7 transition duration-300 hover:bg-slate-50 sm:p-8 lg:grid-cols-[100px_180px_1fr] lg:items-start ${
                index !== benefits.length - 1
                  ? "border-b border-slate-200"
                  : ""
              }`}
            >
              <div>
                <span className="text-sm font-semibold tracking-[0.18em] text-violet-700">
                  {benefit.number}
                </span>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {benefit.category}
                </p>
              </div>

              <div className="max-w-2xl">
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {benefit.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Policy note */}
        <div className="mt-10 grid gap-6 rounded-3xl border border-slate-200 bg-white p-7 sm:p-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Employment Benefits
            </p>

            <h3 className="mt-3 text-xl font-semibold text-slate-950">
              Clear information before you apply.
            </h3>
          </div>

          <p className="text-sm leading-6 text-slate-600">
            Once company policies are finalized, job postings and Careers
            pages should clearly communicate applicable compensation,
            benefits, working arrangements, eligibility, and other important
            employment information rather than leaving candidates to guess.
          </p>
        </div>
      </div>
    </section>
  );
}