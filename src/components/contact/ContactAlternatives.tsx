import Link from "next/link";

const pathways = [
  {
    title: "Looking for a career opportunity?",
    description:
      "Explore teams, open roles, the hiring process, and the candidate experience through our Careers section.",
    href: "/careers",
    linkLabel: "Explore Careers",
  },
  {
    title: "Want to understand our work first?",
    description:
      "Review representative case studies and delivery approaches to see how we think about complex technology engagements.",
    href: "/work",
    linkLabel: "Explore Our Work",
  },
  {
    title: "Researching a technology topic?",
    description:
      "Browse long-form perspectives on software engineering, cloud modernization, data, AI, and related technology decisions.",
    href: "/insights",
    linkLabel: "Read Insights",
  },
];

const confidencePoints = [
  {
    title: "Start without a full specification",
    description:
      "An initial conversation can begin with an incomplete idea, technical concern, modernization challenge, or delivery problem.",
  },
  {
    title: "Avoid sensitive information",
    description:
      "Do not include passwords, credentials, personal records, confidential datasets, or other sensitive information in an initial inquiry.",
  },
  {
    title: "No commitment from an inquiry",
    description:
      "Submitting initial context should begin a conversation, not create an engagement or contractual commitment.",
  },
];

export default function ContactAlternatives() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          {/* Heading */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
              Other Ways to Explore
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Not every conversation
              <span className="block text-slate-500">
                needs to start with a form.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              You may want to understand our work, read our perspectives, or
              explore career opportunities before getting in touch. Use the
              path that best matches what you are looking for.
            </p>
          </div>

          {/* Alternative pathways */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            {pathways.map((pathway, index) => (
              <article
                key={pathway.title}
                className={`group p-7 transition duration-300 hover:bg-slate-50 sm:p-8 ${
                  index !== pathways.length - 1
                    ? "border-b border-slate-200"
                    : ""
                }`}
              >
                <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                      {pathway.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                      {pathway.description}
                    </p>

                    <Link
                      href={pathway.href}
                      className="mt-5 inline-flex text-sm font-semibold text-indigo-700 transition hover:text-indigo-900"
                    >
                      {pathway.linkLabel}
                      <span className="ml-2" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </div>

                  <Link
                    href={pathway.href}
                    aria-label={pathway.linkLabel}
                    className="hidden h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition group-hover:border-slate-950 group-hover:bg-slate-950 group-hover:text-white sm:flex"
                  >
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Confidence / privacy guidance */}
        <div className="mt-16 border-t border-slate-200 pt-14">
          <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Before You Reach Out
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                Keep the first conversation simple.
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                The purpose of the initial inquiry is to provide enough context
                to decide whether a useful conversation should happen next.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              {confidencePoints.map((point, index) => (
                <article
                  key={point.title}
                  className="border-t border-slate-300 pt-5"
                >
                  <span className="text-xs font-semibold tracking-[0.16em] text-indigo-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h4 className="mt-4 text-base font-semibold text-slate-950">
                    {point.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {point.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Final route back to the form */}
        <div className="mt-16 rounded-3xl bg-slate-950 p-8 text-white sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-300">
                Ready to Talk?
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Start with the problem you want to solve.
              </h3>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                Share the current situation, the outcome you are aiming for,
                and any important constraints. The next step can be shaped from
                there.
              </p>
            </div>

            <a
              href="#contact-form"
              className="inline-flex w-fit items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Start a Conversation
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}