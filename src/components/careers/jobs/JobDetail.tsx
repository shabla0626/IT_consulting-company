import Link from "next/link";

import {
  getRelatedJobs,
  type Job,
} from "@/data/jobs";

type JobDetailProps = {
  job: Job;
};

export default function JobDetail({ job }: JobDetailProps) {
  const relatedJobs = getRelatedJobs(job);

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-slate-400"
          >
            <Link
              href="/careers"
              className="transition hover:text-white"
            >
              Careers
            </Link>

            <span aria-hidden="true">/</span>

            <Link
              href="/careers/jobs"
              className="transition hover:text-white"
            >
              Open Roles
            </Link>

            <span aria-hidden="true">/</span>

            <span className="text-slate-200">{job.title}</span>
          </nav>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_320px] lg:items-end lg:gap-20">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
                {job.team}
              </p>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                {job.title}
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                {job.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <MetadataBadge>{job.experienceLevel}</MetadataBadge>
                <MetadataBadge>{job.employmentType}</MetadataBadge>
                <MetadataBadge>{job.locationType}</MetadataBadge>
              </div>
            </div>

            <div className="border-t border-white/10 pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Location
              </p>

              <p className="mt-2 text-base font-medium text-white">
                {job.location}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                {job.locationType}
              </p>

              <Link
                href={`/application?job=${job.slug}`}
                className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Apply for this role
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-20 lg:px-8">
          <div className="min-w-0">
            {/* About */}
            <JobSection
              eyebrow="The Role"
              title="About this role"
            >
              <p className="text-base leading-8 text-slate-600">
                {job.aboutRole}
              </p>
            </JobSection>

            <Divider />

            {/* Responsibilities */}
            <JobSection
              eyebrow="Responsibilities"
              title="What you’ll do"
            >
              <BulletList items={job.responsibilities} />
            </JobSection>

            <Divider />

            {/* Work */}
            <JobSection
              eyebrow="The Work"
              title="What you’ll work on"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {job.whatYouWillWorkOn.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
                  >
                    <p className="text-sm font-medium leading-6 text-slate-800">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </JobSection>

            <Divider />

            {/* Requirements */}
            <JobSection
              eyebrow="What We’re Looking For"
              title="Experience and capabilities"
            >
              <BulletList items={job.requirements} />
            </JobSection>

            <Divider />

            {/* Nice to have */}
            <JobSection
              eyebrow="Additional Experience"
              title="Nice to have"
            >
              <p className="mb-6 text-sm leading-6 text-slate-600">
                These are useful additions, not necessarily requirements for
                every candidate.
              </p>

              <BulletList items={job.niceToHave} />
            </JobSection>

            <Divider />

            {/* Technologies */}
            <JobSection
              eyebrow="Technology & Practice"
              title="Areas you may work with"
            >
              <div className="flex flex-wrap gap-2.5">
                {job.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm leading-6 text-slate-500">
                The exact technology mix can vary by engagement. We care about
                engineering judgment and the ability to learn as much as
                familiarity with a specific tool.
              </p>
            </JobSection>

            <Divider />

            {/* Offer */}
            <JobSection
              eyebrow="Working Here"
              title="What we aim to offer"
            >
              <BulletList items={job.whatWeOffer} />

              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm leading-6 text-slate-600">
                  Specific compensation, benefits, working arrangements, and
                  employment terms should be confirmed for the real opening
                  before the role is publicly advertised.
                </p>
              </div>
            </JobSection>

            <Divider />

            {/* Hiring */}
            <JobSection
              eyebrow="Hiring Process"
              title="What to expect"
            >
              <div className="overflow-hidden rounded-3xl border border-slate-200">
                {job.hiringProcess.map((step, index) => (
                  <div
                    key={step}
                    className={`grid gap-4 bg-white p-6 sm:grid-cols-[60px_1fr] sm:p-7 ${
                      index !== job.hiringProcess.length - 1
                        ? "border-b border-slate-200"
                        : ""
                    }`}
                  >
                    <span className="text-sm font-semibold tracking-[0.16em] text-violet-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-sm font-medium leading-6 text-slate-800">
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm leading-6 text-slate-500">
                The exact interview sequence may vary depending on the role,
                seniority, location, and type of assessment required.
              </p>
            </JobSection>
          </div>

          {/* Sticky application panel */}
          <aside className="self-start lg:sticky lg:top-28">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">
                Interested?
              </p>

              <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
                Apply for {job.title}
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                Review the role carefully, then submit your details and resume
                through the application form.
              </p>

              <dl className="mt-7 space-y-5 border-t border-slate-200 pt-6">
                <JobMetadata
                  label="Team"
                  value={job.team}
                />

                <JobMetadata
                  label="Experience"
                  value={job.experienceLevel}
                />

                <JobMetadata
                  label="Employment"
                  value={job.employmentType}
                />

                <JobMetadata
                  label="Location"
                  value={job.location}
                />

                <JobMetadata
                  label="Arrangement"
                  value={job.locationType}
                />
              </dl>

              <Link
                href={`/application?job=${job.slug}`}
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Apply for this role
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>

              <p className="mt-4 text-xs leading-5 text-slate-500">
                No candidate account should be required for the initial
                application.
              </p>
            </div>

            <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold text-slate-950">
                Have questions first?
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Review our Careers page for more information about teams,
                culture, development, and the hiring process.
              </p>

              <Link
                href="/careers"
                className="mt-4 inline-flex text-sm font-semibold text-violet-700 transition hover:text-violet-900"
              >
                Explore Careers
                <span className="ml-1.5" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Related jobs */}
      {relatedJobs.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">
                  Other Opportunities
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                  Explore related roles.
                </h2>
              </div>

              <Link
                href="/careers/jobs"
                className="text-sm font-semibold text-slate-700 transition hover:text-slate-950"
              >
                View all roles →
              </Link>
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white">
              {relatedJobs.map((relatedJob, index) => (
                <Link
                  key={relatedJob.id}
                  href={`/careers/jobs/${relatedJob.slug}`}
                  className={`group block p-7 transition hover:bg-slate-50 ${
                    index !== relatedJobs.length - 1
                      ? "border-b border-slate-200"
                      : ""
                  }`}
                >
                  <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-violet-700">
                        {relatedJob.team}
                      </p>

                      <h3 className="mt-2 text-lg font-semibold text-slate-950">
                        {relatedJob.title}
                      </h3>

                      <p className="mt-2 text-sm text-slate-500">
                        {relatedJob.experienceLevel} ·{" "}
                        {relatedJob.employmentType} ·{" "}
                        {relatedJob.locationType}
                      </p>
                    </div>

                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition group-hover:border-slate-950 group-hover:bg-slate-950 group-hover:text-white"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Development disclaimer */}
      <section className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="max-w-4xl text-xs leading-5 text-slate-500">
            This job description is representative development content used to
            design and validate the recruiting experience. It should not be
            treated as an active vacancy until the role and employment details
            have been formally approved.
          </p>
        </div>
      </section>
    </main>
  );
}

type JobSectionProps = {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

function JobSection({
  eyebrow,
  title,
  children,
}: JobSectionProps) {
  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>

      <div className="mt-6">{children}</div>
    </section>
  );
}

function Divider() {
  return <div className="my-12 border-t border-slate-200 sm:my-14" />;
}

type BulletListProps = {
  items: string[];
};

function BulletList({ items }: BulletListProps) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li
          key={item}
          className="grid grid-cols-[18px_1fr] gap-3 text-sm leading-7 text-slate-600"
        >
          <span
            className="mt-[11px] h-1.5 w-1.5 rounded-full bg-violet-600"
            aria-hidden="true"
          />

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

type MetadataBadgeProps = {
  children: React.ReactNode;
};

function MetadataBadge({ children }: MetadataBadgeProps) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300">
      {children}
    </span>
  );
}

type JobMetadataProps = {
  label: string;
  value: string;
};

function JobMetadata({
  label,
  value,
}: JobMetadataProps) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
        {label}
      </dt>

      <dd className="mt-1.5 text-sm font-medium text-slate-900">
        {value}
      </dd>
    </div>
  );
}