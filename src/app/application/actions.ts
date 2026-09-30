"use server";

import { getJobBySlug } from "@/data/jobs";
import type { ApplicationActionState } from "@/lib/careers/application-state";
import {
  validateApplicationForm,
  type ApplicationValidationResult,
} from "@/lib/careers/application-validation";

export async function submitApplication(
  previousState: ApplicationActionState,
  formData: FormData,
): Promise<ApplicationActionState> {
  void previousState;

  try {
    const validationResult = validateApplicationForm(formData);

    if (!validationResult.success) {
      return {
        status: "error",
        fieldErrors: validationResult.errors,
        formError:
          "Please review the highlighted fields and correct the information before continuing.",
      };
    }

    const jobValidation = validateSelectedJob(validationResult);

    if (!jobValidation.success) {
      return {
        status: "error",
        fieldErrors: {
          jobSlug: jobValidation.message,
        },
        formError: jobValidation.message,
      };
    }

    /*
     * The application is valid at this point.
     *
     * We deliberately do NOT persist anything yet.
     *
     * Future flow:
     *
     * 1. Store resume securely
     * 2. Create application database record
     * 3. Associate resume with application
     * 4. Trigger recruiting workflow
     * 5. Redirect only after persistence succeeds
     */

    return {
      status: "validated",
      fieldErrors: {},
    };
  } catch (error) {
    console.error("Application validation failed:", error);

    return {
      status: "error",
      fieldErrors: {},
      formError:
        "We could not process the application. Please review your information and try again.",
    };
  }
}

function validateSelectedJob(
  validationResult: Extract<
    ApplicationValidationResult,
    { success: true }
  >,
):
  | {
      success: true;
    }
  | {
      success: false;
      message: string;
    } {
  const job = getJobBySlug(validationResult.data.jobSlug);

  if (!job) {
    return {
      success: false,
      message:
        "The selected opportunity could not be found. Please return to Open Roles and choose an available position.",
    };
  }

  if (job.status !== "open") {
    return {
      success: false,
      message:
        "This opportunity is no longer accepting applications. Please explore the currently available roles.",
    };
  }

  return {
    success: true,
  };
}