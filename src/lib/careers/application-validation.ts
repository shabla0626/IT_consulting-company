export type ApplicationValidationResult =
  | {
      success: true;
      data: ValidatedApplication;
    }
  | {
      success: false;
      errors: Record<string, string>;
    };

export type ValidatedApplication = {
  jobSlug: string;

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

  privacyConsent: true;

  resume: File;
};

const MAX_RESUME_SIZE_BYTES = 10 * 1024 * 1024;

const allowedResumeTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

function readString(
  formData: FormData,
  field: string,
): string {
  const value = formData.get(field);

  return typeof value === "string" ? value.trim() : "";
}

function optionalString(
  formData: FormData,
  field: string,
): string | null {
  const value = readString(formData, field);

  return value || null;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidUrl(value: string) {
  try {
    const url = new URL(value);

    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export function validateApplicationForm(
  formData: FormData,
): ApplicationValidationResult {
  const errors: Record<string, string> = {};

  const jobSlug = readString(formData, "jobSlug");

  const firstName = readString(formData, "firstName");
  const lastName = readString(formData, "lastName");

  const email = readString(formData, "email");
  const phone = optionalString(formData, "phone");
  const location = readString(formData, "location");

  const linkedinUrl = optionalString(
    formData,
    "linkedinUrl",
  );

  const githubUrl = optionalString(
    formData,
    "githubUrl",
  );

  const portfolioUrl = optionalString(
    formData,
    "portfolioUrl",
  );

  const interest = optionalString(
    formData,
    "interest",
  );

  const additionalInformation = optionalString(
    formData,
    "additionalInformation",
  );

  const privacyConsent =
    formData.get("privacyConsent") === "on";

  const resume = formData.get("resume");

  if (!jobSlug) {
    errors.jobSlug = "A job must be selected.";
  }

  if (!firstName) {
    errors.firstName = "First name is required.";
  } else if (firstName.length > 100) {
    errors.firstName = "First name is too long.";
  }

  if (!lastName) {
    errors.lastName = "Last name is required.";
  } else if (lastName.length > 100) {
    errors.lastName = "Last name is too long.";
  }

  if (!email) {
    errors.email = "Email address is required.";
  } else if (!isValidEmail(email)) {
    errors.email = "Enter a valid email address.";
  } else if (email.length > 254) {
    errors.email = "Email address is too long.";
  }

  if (phone && phone.length > 50) {
    errors.phone = "Phone number is too long.";
  }

  if (!location) {
    errors.location = "Current location is required.";
  } else if (location.length > 200) {
    errors.location = "Location is too long.";
  }

  if (linkedinUrl && !isValidUrl(linkedinUrl)) {
    errors.linkedinUrl = "Enter a valid LinkedIn URL.";
  }

  if (githubUrl && !isValidUrl(githubUrl)) {
    errors.githubUrl = "Enter a valid GitHub URL.";
  }

  if (portfolioUrl && !isValidUrl(portfolioUrl)) {
    errors.portfolioUrl =
      "Enter a valid portfolio URL.";
  }

  if (interest && interest.length > 3000) {
    errors.interest =
      "Please keep this response under 3,000 characters.";
  }

  if (
    additionalInformation &&
    additionalInformation.length > 3000
  ) {
    errors.additionalInformation =
      "Please keep this response under 3,000 characters.";
  }

  if (!privacyConsent) {
    errors.privacyConsent =
      "You must confirm the privacy acknowledgement.";
  }

  if (!(resume instanceof File) || resume.size === 0) {
    errors.resume = "A resume is required.";
  } else {
    if (resume.size > MAX_RESUME_SIZE_BYTES) {
      errors.resume =
        "Resume files must be 10 MB or smaller.";
    }

    if (
      resume.type &&
      !allowedResumeTypes.has(resume.type)
    ) {
      errors.resume =
        "Resume must be a PDF or Word document.";
    }
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      errors,
    };
  }

  return {
    success: true,
    data: {
      jobSlug,

      firstName,
      lastName,
      email,
      phone,
      location,

      linkedinUrl,
      githubUrl,
      portfolioUrl,

      interest,
      additionalInformation,

      privacyConsent: true,

      resume: resume as File,
    },
  };
}