const qualities = [
  {
    number: "01",
    title: "Consultants who understand technology",
    description:
      "Technical decisions need more than presentation. They need people who understand architecture, engineering, systems, delivery, and operations.",
  },
  {
    number: "02",
    title: "Engineers who understand context",
    description:
      "Good engineering starts with why the technology exists, who depends on it, what constraints surround it, and what needs to change.",
  },
  {
    number: "03",
    title: "Teams built around the problem",
    description:
      "Software, cloud, data, AI, security, product, and architecture capabilities should come together according to the challenge.",
  },
];

export default function WhoWeAre() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 sm:text-sm">
              Who We Are
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Consulting and engineering
              <span className="block text-slate-500">
                belong in the same conversation.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">
            Technology consulting is strongest when strategic thinking stays
            connected to the architecture, engineering, delivery, and
            operational realities of the systems being changed.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 sm:mt-14 lg:mt-16">
          {qualities.map((quality, index) => (
            <article
              key={quality.number}
              className={`grid min-w-0 gap-4 p-6 sm:p-7 lg:grid-cols-[72px_320px_1fr] lg:gap-8 lg:p-8 ${
                index !== qualities.length - 1
                  ? "border-b border-slate-200"
                  : ""
              }`}
            >
              <span className="text-xs font-semibold tracking-[0.18em] text-indigo-700">
                {quality.number}
              </span>

              <h3 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
                {quality.title}
              </h3>

              <p className="text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                {quality.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}