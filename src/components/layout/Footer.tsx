import Link from "next/link";

const navigation = {
  services: [
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

  company: [
    {
      label: "About",
      href: "/company",
    },
    {
      label: "Work",
      href: "/work",
    },
    {
      label: "Insights",
      href: "/insights",
    },
    {
      label: "Careers",
      href: "/careers",
    },
  ],

  resources: [
    {
      label: "Open Roles",
      href: "/careers/jobs",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1.8fr] lg:gap-24">
          {/* Company */}
          <div>
            <Link
              href="/"
              className="text-2xl font-semibold tracking-tight text-white"
            >
              Nexora
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-neutral-400">
              Technology consulting across software engineering, cloud, data,
              AI, cybersecurity, and digital transformation.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Start a conversation
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="grid gap-10 sm:grid-cols-3">
            <FooterColumn
              title="Solutions"
              links={navigation.services}
            />

            <FooterColumn
              title="Company"
              links={navigation.company}
            />

            <FooterColumn
              title="Connect"
              links={navigation.resources}
            />
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Nexora Consulting. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <Link
              href="/privacy"
              className="text-xs text-neutral-500 transition hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="text-xs text-neutral-500 transition hover:text-white"
            >
              Terms
            </Link>

            <Link
              href="/accessibility"
              className="text-xs text-neutral-500 transition hover:text-white"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterLink = {
  label: string;
  href: string;
};

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
        {title}
      </p>

      <ul className="mt-5 space-y-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-neutral-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}