import type { Metadata } from "next";
import Link from "next/link";

import SolutionsHero from "@/components/solutions/SolutionsHero";
import SolutionShowcase from "@/components/solutions/SolutionShowcase";
import DeliveryProcess from "@/components/solutions/DeliveryProcess";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Explore our capabilities across software engineering, AI and data, cloud and DevOps, and cybersecurity.",
};

export default function SolutionsPage() {
  return (
    <main>
      <SolutionsHero />
      <SolutionShowcase />
      <DeliveryProcess />

      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -bottom-40 right-0 h-[420px] w-[420px] rounded-full bg-violet-200/40 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
          <div className="rounded-[2rem] bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-8 text-white sm:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-200">Let&apos;s Work Together</p>
                <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Your technology problem may cross more than one discipline.</h2>
              </div>
              <div>
                <p className="text-base leading-7 text-indigo-100">Tell us what you&apos;re trying to build, modernize, scale, or improve. We&apos;ll help identify the right combination of expertise.</p>
                <Link href="/contact" className="group mt-8 inline-flex items-center gap-3 rounded-full bg-neutral-950 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-neutral-950/20 transition hover:bg-neutral-800">
                  Start a Conversation
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
