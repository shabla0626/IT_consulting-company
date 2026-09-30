import type { Metadata } from "next";
import Link from "next/link";

import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import SoftwareHero from "@/components/solutions/software/SoftwareHero";
import SoftwareCapabilities from "@/components/solutions/software/SoftwareCapabilities";
import EngineeringApproach from "@/components/solutions/software/EngineeringApproach";


import { siteConfig } from "@/lib/site";


const pageTitle =
  "Software Engineering";

const pageDescription =
  "Software engineering services for digital products, platforms, APIs, modernization, and engineering enablement.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  alternates: {
    canonical: "/solutions/software-engineering",
  },

  openGraph: {
    type: "website",
    url: "/solutions/software-engineering",
    siteName: siteConfig.name,
    title: pageTitle,
    description: pageDescription,
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

const technologyAreas = [
  "Frontend Engineering",
  "Backend Engineering",
  "APIs & Integrations",
  "Cloud-Native Applications",
  "Platform Engineering",
  "Quality Engineering",
  "Observability",
  "Developer Experience",
];

export default function SoftwareEngineeringPage() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Solutions", href: "/solutions" },
          { name: "Software Engineering", href: "/solutions/software-engineering" },
        ]}
      />
      <SoftwareHero />
      <SoftwareCapabilities />
      <EngineeringApproach />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Technology Areas</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] text-neutral-950 sm:text-5xl">Modern engineering across the stack.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {technologyAreas.map((area) => (
                <div key={area} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                    <span className="font-medium text-neutral-800">{area}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">Build With Us</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">Have a software product or platform challenge?</h2>
            </div>
            <div>
              <p className="max-w-md leading-7 text-blue-100">Tell us what you&apos;re trying to build, modernize, or improve, and we&apos;ll explore the engineering approach with you.</p>
              <Link href="/contact" className="group mt-8 inline-flex items-center gap-3 rounded-full bg-neutral-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800">
                Discuss Your Project
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
