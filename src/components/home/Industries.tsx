import Link from "next/link";

const industries = [
  {
    number: "01",
    title: "Financial Services",
    description:
      "Modern platforms, data systems, secure digital products, and technology modernization for financial organizations.",
    href: "/industries/financial-services",
  },
  {
    number: "02",
    title: "Healthcare",
    description:
      "Digital experiences, cloud platforms, integration, analytics, and secure technology for healthcare organizations.",
    href: "/industries/healthcare",
  },
  {
    number: "03",
    title: "Retail & Commerce",
    description:
      "Customer experiences, commerce platforms, operational systems, data, and scalable digital infrastructure.",
    href: "/industries/retail-commerce",
  },
  {
    number: "04",
    title: "Manufacturing",
    description:
      "Connected systems, operational platforms, analytics, cloud modernization, and intelligent automation.",
    href: "/industries/manufacturing",
  },
  {
    number: "05",
    title: "Technology & Startups",
    description:
      "Product engineering, cloud architecture, AI, platform development, and technical scaling for growing companies.",
    href: "/industries/technology-startups",
  },
];

export default function Industries() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          {/* Intro */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
              Industries
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.035em] text-neutral-950 sm:text-5xl">
              Technology shaped around the realities of your industry.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-600">
              Different industries face different operational, regulatory, and
              customer challenges. We combine technology expertise with an
              understanding of the environment in which our clients operate.
            </p>

            <Link
              href="/industries"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-neutral-950"
            >
              Explore all industries

              <span
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>

          {/* Industry list */}
          <div className="border-t border-neutral-200">
            {industries.map((industry) => (
              <Link
                key={industry.title}
                href={industry.href}
                className="group grid gap-4 border-b border-neutral-200 py-7 sm:grid-cols-[60px_1fr_auto] sm:items-start lg:py-8"
              >
                <span className="text-sm font-medium text-neutral-400">
                  {industry.number}
                </span>

                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-neutral-950 transition-colors group-hover:text-indigo-600 sm:text-2xl">
                    {industry.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
                    {industry.description}
                  </p>
                </div>

                <span
                  className="text-xl text-neutral-400 transition-all group-hover:translate-x-1 group-hover:text-neutral-950"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}