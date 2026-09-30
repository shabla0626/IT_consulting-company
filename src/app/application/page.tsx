import ApplicationForm from "@/components/careers/application/ApplicationForm";
import ApplicationShell from "@/components/careers/application/ApplicationShell";
import InvalidApplicationState from "@/components/careers/application/InvalidApplicationState";

import { jobs } from "@/data/jobs";
import type { Job } from "@/data/jobs";

type ApplicationPageProps = {
  searchParams: Promise<{
    job?: string;
  }>;
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

function getJobSlug(job: Job) {
  return getString(job, ["slug", "id"]);
}

function isOpenJob(job: Job) {
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

export default async function ApplicationPage({
  searchParams,
}: ApplicationPageProps) {
  const { job: requestedJob } =
    await searchParams;

  /*
   * No role was supplied.
   *
   * Example:
   * /application
   */
  if (!requestedJob) {
    return (
      <InvalidApplicationState type="missing" />
    );
  }

  /*
   * Find the selected role using the existing
   * Job data contract.
   */
  const job = jobs.find(
    (item) =>
      getJobSlug(item) === requestedJob,
  );

  /*
   * Invalid or deleted role.
   *
   * Example:
   * /application?job=not-a-real-role
   */
  if (!job) {
    return (
      <InvalidApplicationState type="unknown" />
    );
  }

  /*
   * Existing role, but applications are closed.
   */
  if (!isOpenJob(job)) {
    return (
      <InvalidApplicationState type="closed" />
    );
  }

  const jobTitle = getString(
    job,
    ["title", "name", "role"],
    "Selected role",
  );

  const team = getString(
    job,
    [
      "department",
      "team",
      "discipline",
      "category",
    ],
  );

  const location = getString(
    job,
    [
      "location",
      "officeLocation",
    ],
  );

  const locationType = getString(
    job,
    [
      "locationType",
      "workStyle",
      "workMode",
    ],
  );

  const employmentType = getString(
    job,
    [
      "employmentType",
      "type",
    ],
  );

  return (
    <ApplicationShell
      jobTitle={jobTitle}
      team={team}
      location={location}
      locationType={locationType}
      employmentType={employmentType}
    >
      {/*
        IMPORTANT:

        Replace ONLY the next line with the
        ApplicationForm invocation that was already
        working in your project.

        For example, if yours was:

        <ApplicationForm job={job} />

        keep that.

        If yours was:

        <ApplicationForm
          jobSlug={requestedJob}
          jobTitle={jobTitle}
        />

        keep that instead.

        Do not modify the form/server contract yet.
      */}

      <ApplicationForm job = {job} />
    </ApplicationShell>
  );
}