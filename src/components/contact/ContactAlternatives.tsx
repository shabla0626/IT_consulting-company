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
    <section className="border-t border-slate-200 bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 xl:gap-20">
          {/* Heading */}
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 sm:text-sm">
              Other Ways to Explore
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Not every conversation
              <span className="block text-slate-500">
                needs to start with a form.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:mt-6">
              You may want to understand our work, read our perspectives, or
              explore career opportunities before getting in touch. Use the
              path that best matches what you are looking for.
            </p>
          </div>

          {/* Alternative pathways */}
          <div className="min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white">
            {pathways.map(
              (pathway, index) => (
                <article
                  key={pathway.title}
                  className={`group p-6 transition duration-300 hover:bg-slate-50 sm:p-7 md:p-8 ${
                    index !==
                    pathways.length - 1
                      ? "border-b border-slate-200"
                      : ""
                  }`}
                >
                  <div className="grid min-w-0 gap-5 sm:grid-cols-[minmax(0,1fr)_44px] sm:items-center sm:gap-6">
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                        {pathway.title}
                      </h3>

                      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                        {pathway.description}
                      </p>

                      <Link
                        href={pathway.href}
                        className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-indigo-700 transition hover:text-indigo-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 sm:mt-5"
                      >
                        {pathway.linkLabel}

                        <span
                          className="ml-2"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </Link>
                    </div>

                    <Link
                      href={pathway.href}
                      aria-label={
                        pathway.linkLabel
                      }
                      className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition group-hover:border-slate-950 group-hover:bg-slate-950 group-hover:text-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 sm:flex"
                    >
                      <span aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>

        {/* Confidence / privacy guidance */}
        <div className="mt-12 border-t border-slate-200 pt-12 sm:mt-16 sm:pt-14">
          <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
                Before You Reach Out
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                Keep the first conversation simple.
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600">
                The purpose of the initial inquiry is to provide enough context
                to decide whether a useful conversation should happen next.
              </p>
            </div>

            <div className="grid gap-7 sm:grid-cols-3 sm:gap-6 lg:gap-8">
              {confidencePoints.map(
                (point, index) => (
                  <article
                    key={point.title}
                    className="min-w-0 border-t border-slate-300 pt-5"
                  >
                    <span className="text-xs font-semibold tracking-[0.16em] text-indigo-700">
                      {String(index + 1).padStart(
                        2,
                        "0",
                      )}
                    </span>

                    <h4 className="mt-4 text-base font-semibold text-slate-950">
                      {point.title}
                    </h4>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {point.description}
                    </p>
                  </article>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 rounded-3xl bg-slate-950 p-6 text-white sm:mt-16 sm:p-8 lg:p-10 xl:p-12">
          <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-10">
            <div className="min-w-0 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300 sm:text-sm">
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
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-white/20 sm:w-fit lg:w-auto"
            >
              Start a Conversation

              <span
                className="ml-2"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}