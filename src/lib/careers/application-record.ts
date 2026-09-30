import type { JobTeam } from "@/data/jobs";

export type ApplicationStatus =
  | "submitted"
  | "reviewing"
  | "interview"
  | "offer"
  | "hired"
  | "rejected"
  | "withdrawn";

export type ApplicationRecord = {
  id: string;

  jobId: string;
  jobSlug: string;
  jobTitle: string;
  jobTeam: JobTeam;

  firstName: string;
  lastName: string;
  email: string;

  phone: string | null;
  location: string;

  linkedinUrl: string | null;
  githubUrl: string | null;
  portfolioUrl: string | null;

  interest: string | null;
  additionalInformation: string | null;

  resumeStorageKey: string;
  resumeOriginalName: string;
  resumeMimeType: string;
  resumeSizeBytes: number;

  privacyConsent: true;
  privacyConsentAt: Date;

  status: ApplicationStatus;

  createdAt: Date;
  updatedAt: Date;
};

export type CreateApplicationInput = {
  jobId: string;
  jobSlug: string;
  jobTitle: string;
  jobTeam: JobTeam;

  firstName: string;
  lastName: string;
  email: string;

  phone: string | null;
  location: string;

  linkedinUrl: string | null;
  githubUrl: string | null;
  portfolioUrl: string | null;

  interest: string | null;
  additionalInformation: string | null;

  resumeStorageKey: string;
  resumeOriginalName: string;
  resumeMimeType: string;
  resumeSizeBytes: number;

  privacyConsent: true;
  privacyConsentAt: Date;
};