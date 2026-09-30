import Link from "next/link";

import type { Job } from "@/data/jobs";

type JobDetailProps = {
  job: Job;
};

type JobRecord = Record<string, unknown>;

function asRecord(job: Job): JobRecord {
  return job as unknown as JobRecord;
}

function getString(
  job: Job,
  keys: string[],
  fallback = "",
) {
  const record = asRecord(job);

  for (const key of keys) {
    const value = record[key];

    if (
      typeof value === "string" &&
      value.trim().length > 0
    ) {
      return value.trim();
    }
  }

  return fallback;
}

function getStringArray(
  job: Job,
  keys: string[],
) {
  const record = asRecord(job);

  for (const key of keys) {
    const value = record[key];

    if (!Array.isArray(value)) {
      continue;
    }

    const strings = value.filter(
      (item): item is string =>
        typeof item === "string" &&
        item.trim().length > 0,
    );

    if (strings.length > 0) {
      return strings;
    }
  }

  return [];
}

function getTitle(job: Job) {
  return getString(
    job,
    ["title", "name", "role"],
    "Technology role",
  );
}

function getSlug(job: Job) {
  return getString(
    job,
    ["slug", "id"],
  );
}

function getTeam(job: Job) {
  return getString(
    job,
    [
      "department",
      "team",
      "discipline",
      "category",
    ],
  );
}

function getSummary(job: Job) {
  return getString(
    job,
    [
      "description",
      "summary",
      "overview",
      "excerpt",
    ],
  );
}

function getLocation(job: Job) {
  return getString(
    job,
    [
      "location",
      "officeLocation",
    ],
  );
}

function getLocationType(job: Job) {
  return getString(
    job,
    [
      "locationType",
      "workStyle",
      "workMode",
    ],
  );
}

function getEmploymentType(job: Job) {
  return getString(
    job,
    [
      "employmentType",
      "type",
    ],
  );
}

function getExperienceLevel(job: Job) {
  return getString(
    job,
    [
      "experienceLevel",
      "level",
      "seniority",
    ],
  );
}

function getResponsibilities(job: Job) {
  return getStringArray(
    job,
    [
      "responsibilities",
      "whatYouWillDo",
      "duties",
    ],
  );
}

function getRequirements(job: Job) {
  return getStringArray(
    job,
    [
      "requirements",
      "qualifications",
      "requiredSkills",
    ],
  );
}

function getNiceToHave(job: Job) {
  return getStringArray(
    job,
    [
      "niceToHave",
      "preferredQualifications",
      "preferredSkills",
    ],
  );
}

function getTechnologies(job: Job) {
  return getStringArray(
    job,
    [
      "technologies",
      "skills",
      "techStack",
    ],
  );
}

function isOpen(job: Job) {
  const status = getString(
    job,
    ["status"],
  ).toLowerCase();

  if (!status) {
    return true;
  }

  return ![
    "closed",
    "inactive",
    "archived",
    "draft",
  ].includes(status);
}

function BulletList({
  items,
}: {
  items: string[];
}) {
  return (
    <ul className="mt-6 space-y-4">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-sm leading-7 text-slate-600 sm:text-base"
        >
          <span
            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500"
            aria-hidden="true"
          />

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function JobDetail({
  job,
}: JobDetailProps) {
  const title = getTitle(job);
  const slug = getSlug(job);
  const team = getTeam(job);
  const summary = getSummary(job);

  const location = getLocation(job);
  const locationType = getLocationType(job);
  const employmentType = getEmploymentType(job);
  const experienceLevel =
    getExperienceLevel(job);

  const responsibilities =
    getResponsibilities(job);

  const requirements =
    getRequirements(job);

  const niceToHave =
    getNiceToHave(job);

  const technologies =
    getTechnologies(job);

  const roleIsOpen = isOpen(job);

  const roleDetails = [
    {
      label: "Location",
      value: location,
    },
    {
      label: "Work style",
      value: locationType,
    },
    {
      label: "Employment",
      value: employmentType,
    },
    {
      label: "Experience",
      value: experienceLevel,
    },
  ].filter((item) => item.value);

  const applicationHref = slug
    ? `/application?job=${encodeURIComponent(slug)}`
    : "/application";

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl sm:h-96 sm:w-96"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
          <Link
            href="/careers/jobs"
            className="inline-flex min-h-11 items-center text-sm font-semibold text-slate-400 transition hover:text-white focus:outline-none focus:ring-4 focus:ring-white/10"
          >
            <span
              className="mr-2"
              aria-hidden="true"
            >
              ←
            </span>

            Back to open roles
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-20">
            <div className="min-w-0">
              {team && (
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300 sm:text-sm">
                  {team}
                </p>
              )}

              <h1
                className={`max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl ${
                  team ? "mt-4" : ""
                }`}
              >
                {title}
              </h1>

              {summary && (
                <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                  {summary}
                </p>
              )}
            </div>

            {roleDetails.length > 0 && (
              <div className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Role Details
                </p>

                <dl className="mt-5 divide-y divide-white/10">
                  {roleDetails.map((item) => (
                    <div
                      key={item.label}
                      className="grid grid-cols-[96px_minmax(0,1fr)] gap-4 py-4 first:pt-0 last:pb-0 sm:grid-cols-[120px_minmax(0,1fr)]"
                    >
                      <dt className="text-sm text-slate-500">
                        {item.label}
                      </dt>

                      <dd className="min-w-0 break-words text-sm font-semibold text-white">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Role content */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_360px]">
            <div className="min-w-0">
              {/* Responsibilities */}
              {responsibilities.length > 0 && (
                <section>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">
                    The Role
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                    What you&apos;ll work on
                  </h2>

                  <BulletList
                    items={responsibilities}
                  />
                </section>
              )}

              {/* Requirements */}
              {requirements.length > 0 && (
                <section
                  className={
                    responsibilities.length > 0
                      ? "mt-12 border-t border-slate-200 pt-12"
                      : ""
                  }
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">
                    Experience
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                    What we&apos;re looking for
                  </h2>

                  <BulletList
                    items={requirements}
                  />
                </section>
              )}

              {/* Nice to have */}
              {niceToHave.length > 0 && (
                <section
                  className={
                    responsibilities.length > 0 ||
                    requirements.length > 0
                      ? "mt-12 border-t border-slate-200 pt-12"
                      : ""
                  }
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">
                    Additional Experience
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                    Helpful, but not necessarily required
                  </h2>

                  <BulletList
                    items={niceToHave}
                  />
                </section>
              )}

              {/* Technologies */}
              {technologies.length > 0 && (
                <section
                  className={
                    responsibilities.length > 0 ||
                    requirements.length > 0 ||
                    niceToHave.length > 0
                      ? "mt-12 border-t border-slate-200 pt-12"
                      : ""
                  }
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">
                    Technology
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                    Technologies and areas relevant to the role
                  </h2>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-violet-100 bg-violet-50 px-3.5 py-2 text-sm font-medium text-violet-800"
                        >
                          {technology}
                        </span>
                      ),
                    )}
                  </div>
                </section>
              )}

              {/* Fallback */}
              {responsibilities.length === 0 &&
                requirements.length === 0 &&
                niceToHave.length === 0 &&
                technologies.length === 0 && (
                  <section>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">
                      About the Role
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                      Role information
                    </h2>

                    <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">
                      Review the role summary and details above.
                      Additional responsibilities and requirements
                      can be added to the job data when they are
                      available.
                    </p>
                  </section>
                )}
            </div>

            {/* Apply sidebar */}
            <aside className="min-w-0">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-7 lg:sticky lg:top-28">
                {roleIsOpen ? (
                  <>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">
                      Apply
                    </p>

                    <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
                      Interested in this role?
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Review the responsibilities and requirements,
                      then continue to the application when you are
                      ready.
                    </p>

                    <Link
                      href={applicationHref}
                      className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-violet-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-800 focus:outline-none focus:ring-4 focus:ring-violet-700/10"
                    >
                      Apply for This Role

                      <span
                        className="ml-2"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>

                    <p className="mt-4 text-xs leading-5 text-slate-500">
                      You do not need a candidate account to start
                      the application.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Applications Closed
                    </p>

                    <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
                      This role is not currently accepting applications.
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Explore the current opportunities to find another
                      role that matches your experience.
                    </p>

                    <Link
                      href="/careers/jobs"
                      className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
                    >
                      View Open Roles
                    </Link>
                  </>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Mobile sticky Apply */}
      {roleIsOpen && (
        <div className="sticky bottom-0 z-30 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur lg:hidden">
          <div className="mx-auto max-w-7xl">
            <Link
              href={applicationHref}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-violet-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10"
            >
              Apply for This Role
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}