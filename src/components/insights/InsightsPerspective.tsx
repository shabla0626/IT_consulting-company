const principles = [
  {
    title: "Start with the problem",
    description:
      "Useful technical thinking begins with context rather than with a preferred technology or trend.",
  },
  {
    title: "Make trade-offs visible",
    description:
      "Architecture and engineering decisions involve constraints. Good analysis explains what is gained and what is accepted.",
  },
  {
    title: "Think beyond the prototype",
    description:
      "Production technology also needs reliability, security, observability, operations, and ownership.",
  },
];

export default function InsightsPerspective() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-slate-950 text-white">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
            <div className="p-7 sm:p-9 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300 sm:text-sm">
                Editorial Perspective
              </p>

              <h2 className="mt-4 max-w-lg text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                Technology thinking should help teams make better decisions.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                The aim is not to publish commentary for its own sake. Useful
                insight should connect technical choices with practical
                consequences for architecture, delivery, operation, and
                ownership.
              </p>
            </div>

            <div className="border-t border-white/10 p-7 sm:p-9 lg:border-l lg:border-t-0 lg:p-12">
              <div className="space-y-7">
                {principles.map((principle, index) => (
                  <div
                    key={principle.title}
                    className={
                      index > 0 ? "border-t border-white/10 pt-7" : ""
                    }
                  >
                    <div className="flex gap-4">
                      <span className="text-xs font-semibold tracking-[0.16em] text-indigo-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <h3 className="text-base font-semibold text-white">
                          {principle.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}