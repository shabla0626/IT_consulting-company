import Link from "next/link";

const footerNavigation = [
  {
    title: "Explore",
    links: [
      { label: "Solutions", href: "/solutions" },
      { label: "Industries", href: "/industries" },
      { label: "Work", href: "/work" },
      { label: "Insights", href: "/insights" },
    ],
  },
  {
    title: "Expertise",
    links: [
      {
        label: "Software Engineering",
        href: "/solutions/software-engineering",
      },
      {
        label: "AI & Data",
        href: "/solutions/ai-data",
      },
      {
        label: "Cloud & DevOps",
        href: "/solutions/cloud-devops",
      },
      {
        label: "Cybersecurity",
        href: "/solutions/cybersecurity",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Nexora", href: "/company" },
      { label: "Careers", href: "/careers" },
      { label: "Open Roles", href: "/careers/jobs" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Primary footer */}
        <div className="grid gap-14 border-b border-white/10 py-16 sm:py-20 lg:grid-cols-[1.1fr_1.9fr] lg:gap-20">
          {/* Brand */}
          <div className="max-w-md">
            <Link
              href="/"
              aria-label="Nexora home"
              className="inline-flex items-center gap-3"
            >
              <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white text-sm font-bold text-slate-950">
                N

                <span
                  className="absolute bottom-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500"
                  aria-hidden="true"
                />
              </span>

              <span className="flex flex-col">
                <span className="text-lg font-semibold leading-none tracking-tight text-white">
                  Nexora
                </span>

                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Consulting
                </span>
              </span>
            </Link>

            <p className="mt-6 text-base leading-7 text-slate-400">
              We help organizations solve complex technology problems through
              experienced multidisciplinary teams across software, cloud, data,
              AI, security, design, and consulting.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Talk to an Expert
                <span
                  className="ml-2"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>

              <Link
                href="/careers"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
              >
                Explore Careers
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="grid gap-10 sm:grid-cols-3">
            {footerNavigation.map((section) => (
              <div key={section.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {section.title}
                </p>

                <ul className="mt-5 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-300 transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Journey strip */}
        <div className="grid gap-8 border-b border-white/10 py-10 md:grid-cols-2">
          <div className="border-l border-indigo-500/60 pl-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-300">
              For Clients
            </p>

            <h2 className="mt-2 text-base font-semibold text-white">
              Solve a technology challenge.
            </h2>

            <p className="mt-2 max-w-lg text-sm leading-6 text-slate-400">
              Explore our expertise, industry context, representative work, and
              approach to technology consulting.
            </p>

            <Link
              href="/solutions"
              className="mt-4 inline-flex text-sm font-semibold text-white transition hover:text-indigo-300"
            >
              Explore Solutions
              <span
                className="ml-2"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>

          <div className="border-l border-violet-500/60 pl-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">
              For Candidates
            </p>

            <h2 className="mt-2 text-base font-semibold text-white">
              Build your next chapter.
            </h2>

            <p className="mt-2 max-w-lg text-sm leading-6 text-slate-400">
              Learn about our teams, working culture, career development, and
              current opportunities.
            </p>

            <Link
              href="/careers/jobs"
              className="mt-4 inline-flex text-sm font-semibold text-white transition hover:text-violet-300"
            >
              View Open Roles
              <span
                className="ml-2"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Nexora Consulting. All rights reserved.
          </p>

          <p>
            Technology consulting built around expertise, delivery, and
            long-term value.
          </p>
        </div>
      </div>
    </footer>
  );
}