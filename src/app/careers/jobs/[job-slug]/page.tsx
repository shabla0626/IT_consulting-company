import type { Metadata } from "next";
import { notFound } from "next/navigation";

import JobDetail from "@/components/careers/jobs/JobDetail";

import { jobs } from "@/data/jobs";
import { siteConfig } from "@/lib/site";

type JobPageProps = {
  params: Promise<{
    "job-slug": string;
  }>;
};

function findJob(jobSlug: string) {
  return jobs.find((item) => {
    const record =
      item as unknown as Record<
        string,
        unknown
      >;

    return (
      record.slug === jobSlug ||
      record.id === jobSlug
    );
  });
}

function getStringValue(
  record: Record<string, unknown>,
  keys: string[],
) {
  for (const key of keys) {
    const value = record[key];

    if (
      typeof value === "string" &&
      value.trim()
    ) {
      return value.trim();
    }
  }

  return undefined;
}

function createMetaDescription(
  value: string,
) {
  const normalized = value
    .replace(/\s+/g, " ")
    .trim();

  if (normalized.length <= 160) {
    return normalized;
  }

  return `${normalized
    .slice(0, 157)
    .trimEnd()}...`;
}

export async function generateMetadata({
  params,
}: JobPageProps): Promise<Metadata> {
  const { "job-slug": jobSlug } =
    await params;

  const job = findJob(jobSlug);

  if (!job) {
    return {
      title: "Job Not Found",

      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const record =
    job as unknown as Record<
      string,
      unknown
    >;

  const jobTitle =
    getStringValue(record, [
      "title",
      "name",
      "role",
    ]) ?? "Job Opportunity";

  const sourceDescription =
    getStringValue(record, [
      "seoDescription",
      "shortDescription",
      "summary",
      "description",
    ]);

  const pageDescription =
    sourceDescription
      ? createMetaDescription(
          sourceDescription,
        )
      : `Explore the ${jobTitle} opportunity at ${siteConfig.name} and learn about the role, responsibilities, and application process.`;

  const canonicalPath =
    `/careers/jobs/${encodeURIComponent(
      jobSlug,
    )}`;

  return {
    title: jobTitle,

    description: pageDescription,

    alternates: {
      canonical: canonicalPath,
    },

    openGraph: {
      type: "website",
      url: canonicalPath,
      siteName: siteConfig.name,
      title: jobTitle,
      description: pageDescription,
    },

    twitter: {
      card: "summary_large_image",
      title: jobTitle,
      description: pageDescription,
    },
  };
}

export default async function JobPage({
  params,
}: JobPageProps) {
  const { "job-slug": jobSlug } =
    await params;

  const job = findJob(jobSlug);

  if (!job) {
    notFound();
  }

  return <JobDetail job={job} />;
}