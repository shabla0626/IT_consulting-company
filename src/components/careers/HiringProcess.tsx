const steps = [
  {
    number: "01",
    title: "Application",
    description:
      "Submit your details, resume, and any relevant links. We aim to keep the application focused on information that actually helps us understand your background.",
    detail:
      "No candidate account is required for the initial application.",
  },
  {
    number: "02",
    title: "Initial Review",
    description:
      "We review your experience against the role requirements, team needs, and the type of work involved.",
    detail:
      "If there is a potential match, we move to an initial conversation.",
  },
  {
    number: "03",
    title: "Introductory Conversation",
    description:
      "A first discussion about your experience, interests, expectations, and what you are looking for in your next role.",
    detail:
      "This is also your opportunity to ask questions about Nexora and the role.",
  },
  {
    number: "04",
    title: "Role-Specific Assessment",
    description:
      "Depending on the role, this may involve a technical discussion, portfolio review, practical exercise, architecture conversation, or another relevant assessment.",
    detail:
      "The format should reflect the actual work rather than create unnecessary interview exercises.",
  },
  {
    number: "05",
    title: "Team Conversation",
    description:
      "Meet people you may work with and discuss collaboration, problem-solving, ownership, communication, and how the team operates.",
    detail:
      "We want candidates to evaluate us as carefully as we evaluate them.",
  },
  {
    number: "06",
    title: "Decision & Offer",
    description:
      "If there is a strong mutual fit, we discuss the role, expectations, compensation, employment details, and next steps clearly.",
    detail:
      "Important employment information should be transparent before acceptance.",
  },
];

export default function HiringProcess() {
  return (
    <section className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
              Hiring Process
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              A clear process from
              <span className="block text-slate-500">
                application to decision.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              Candidates should understand what is happening, what comes next,
              and why each stage exists. We want the hiring process to be
              structured without becoming unnecessarily complicated.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              The exact process may vary by role, seniority, discipline, and
              location, but the underlying principle stays the same: relevant
              assessment, transparent communication, and mutual evaluation.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className={`grid gap-5 p-7 sm:p-8 md:grid-cols-[80px_1fr] ${
                  index !== steps.length - 1
                    ? "border-b border-slate-200"
                    : ""
                }`}
              >
                <div>
                  <span className="text-sm font-semibold tracking-[0.18em] text-violet-700">
                    {step.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>

                  <p className="mt-4 text-sm font-medium leading-6 text-slate-800">
                    {step.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <article className="border-t border-slate-300 pt-6">
            <p className="text-sm font-semibold text-slate-950">
              Relevant assessment
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Interview stages should reflect the skills and responsibilities
              that actually matter in the role.
            </p>
          </article>

          <article className="border-t border-slate-300 pt-6">
            <p className="text-sm font-semibold text-slate-950">
              Two-way conversation
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Candidates should have enough access and context to decide
              whether Nexora is right for them as well.
            </p>
          </article>

          <article className="border-t border-slate-300 pt-6">
            <p className="text-sm font-semibold text-slate-950">
              Clear expectations
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Role scope, working arrangement, compensation, and important
              employment details should be communicated clearly.
            </p>
          </article>
        </div>

        <div className="mt-16 rounded-3xl bg-slate-950 p-8 text-white sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">
                Candidate Experience
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Respect people&apos;s time.
              </h3>
            </div>

            <p className="text-base leading-7 text-slate-300">
              Hiring should gather enough information to make a thoughtful
              decision without turning the process into a test of endurance.
              We want each stage to have a clear purpose and to give candidates
              useful context about the role and the people they may work with.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}