"use client";

import {
  startTransition,
  useActionState,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

import { submitApplication } from "@/app/application/actions";
import type { Job } from "@/data/jobs";
import { initialApplicationState } from "@/lib/careers/application-state";

type ApplicationFormProps = {
  job: Job;
};

export default function ApplicationForm({
  job,
}: ApplicationFormProps) {
  const [state, formAction, isPending] = useActionState(
    submitApplication,
    initialApplicationState,
  );

  const [resumeName, setResumeName] = useState("");

  function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const formData = new FormData(
      event.currentTarget,
    );

    startTransition(() => {
      formAction(formData);
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 sm:space-y-8"
    >
      <input
        type="hidden"
        name="jobSlug"
        value={job.slug}
      />

      {/* Global form error */}
      {state.status === "error" &&
        state.formError && (
          <div
            role="alert"
            className="rounded-2xl border border-red-200 bg-red-50 p-5 sm:p-6"
          >
            <div className="flex gap-4">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-700"
                aria-hidden="true"
              >
                !
              </span>

              <div className="min-w-0">
                <p className="font-semibold text-red-950">
                  Please check your application.
                </p>

                <p className="mt-2 text-sm leading-6 text-red-800">
                  {state.formError}
                </p>
              </div>
            </div>
          </div>
        )}

      {/* Successful validation */}
      {state.status === "validated" && (
        <div
          role="status"
          className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 sm:p-6"
        >
          <div className="flex gap-4">
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700"
              aria-hidden="true"
            >
              ✓
            </span>

            <div className="min-w-0">
              <p className="font-semibold text-emerald-950">
                Application details validated successfully.
              </p>

              <p className="mt-2 text-sm leading-6 text-emerald-800">
                Your information passed server-side validation.
                Nothing has been stored or submitted yet because
                persistence and secure resume storage have not been
                connected.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Hidden job field error */}
      {state.fieldErrors.jobSlug && (
        <div
          role="alert"
          className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm leading-6 text-red-800"
        >
          {state.fieldErrors.jobSlug}
        </div>
      )}

      {/* 01 — Personal information */}
      <FormSection
        number="01"
        title="Personal information"
        description="Tell us how we can identify and contact you."
      >
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          <TextField
            id="firstName"
            name="firstName"
            label="First name"
            autoComplete="given-name"
            required
            error={
              state.fieldErrors.firstName
            }
          />

          <TextField
            id="lastName"
            name="lastName"
            label="Last name"
            autoComplete="family-name"
            required
            error={
              state.fieldErrors.lastName
            }
          />

          <TextField
            id="email"
            name="email"
            label="Email address"
            type="email"
            autoComplete="email"
            required
            error={state.fieldErrors.email}
          />

          <TextField
            id="phone"
            name="phone"
            label="Phone number"
            type="tel"
            autoComplete="tel"
            error={state.fieldErrors.phone}
          />

          <div className="sm:col-span-2">
            <TextField
              id="location"
              name="location"
              label="Current location"
              placeholder="City, state / region, country"
              autoComplete="address-level2"
              required
              error={
                state.fieldErrors.location
              }
            />
          </div>
        </div>
      </FormSection>

      {/* 02 — Professional profiles */}
      <FormSection
        number="02"
        title="Professional profiles"
        description="Share relevant professional links that help us understand your work."
      >
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          <TextField
            id="linkedinUrl"
            name="linkedinUrl"
            label="LinkedIn"
            type="url"
            placeholder="https://linkedin.com/in/..."
            inputMode="url"
            error={
              state.fieldErrors.linkedinUrl
            }
          />

          <TextField
            id="githubUrl"
            name="githubUrl"
            label="GitHub"
            type="url"
            placeholder="https://github.com/..."
            inputMode="url"
            error={
              state.fieldErrors.githubUrl
            }
          />

          <div className="sm:col-span-2">
            <TextField
              id="portfolioUrl"
              name="portfolioUrl"
              label="Portfolio or personal website"
              type="url"
              placeholder="https://..."
              inputMode="url"
              error={
                state.fieldErrors.portfolioUrl
              }
            />
          </div>
        </div>
      </FormSection>

      {/* 03 — Resume */}
      <FormSection
        number="03"
        title="Resume"
        description="Upload a current resume or CV relevant to this opportunity."
      >
        <div
          className={`rounded-2xl border border-dashed p-5 transition sm:p-7 ${
            state.fieldErrors.resume
              ? "border-red-300 bg-red-50/50"
              : "border-slate-300 bg-slate-50"
          }`}
        >
          <label
            htmlFor="resume"
            className="block cursor-pointer rounded-xl focus-within:outline-none focus-within:ring-4 focus-within:ring-violet-500/10"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="break-words font-semibold text-slate-950">
                  {resumeName ||
                    "Choose your resume"}
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  PDF or Word document, up to
                  10 MB.
                </p>
              </div>

              <span className="inline-flex min-h-11 w-full shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-violet-300 hover:text-violet-700 sm:w-auto">
                Select file
              </span>
            </div>
          </label>

          <input
            id="resume"
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            required
            aria-invalid={Boolean(
              state.fieldErrors.resume,
            )}
            aria-describedby={
              state.fieldErrors.resume
                ? "resume-error"
                : "resume-help"
            }
            className="sr-only"
            onChange={(event) => {
              const file =
                event.target.files?.[0];

              setResumeName(
                file?.name ?? "",
              );
            }}
          />

          <p
            id="resume-help"
            className="sr-only"
          >
            Upload a PDF or Word document up
            to 10 megabytes.
          </p>

          <FieldError
            id="resume-error"
            error={
              state.fieldErrors.resume
            }
          />
        </div>
      </FormSection>

      {/* 04 — Interest */}
      <FormSection
        number="04"
        title="Your interest"
        description="Give us a little context about why this opportunity interests you."
      >
        <div>
          <label
            htmlFor="interest"
            className="block text-sm font-semibold text-slate-900"
          >
            Why are you interested in this role?
          </label>

          <textarea
            id="interest"
            name="interest"
            rows={7}
            maxLength={3000}
            placeholder="Tell us what interests you about the role, the work, or the type of problems you would like to solve."
            aria-invalid={Boolean(
              state.fieldErrors.interest,
            )}
            aria-describedby={
              state.fieldErrors.interest
                ? "interest-error"
                : "interest-help"
            }
            className={`mt-3 min-h-44 w-full resize-y rounded-2xl border bg-white px-4 py-3.5 text-base leading-7 text-slate-950 outline-none transition placeholder:text-slate-400 focus:ring-4 ${
              state.fieldErrors.interest
                ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                : "border-slate-300 focus:border-violet-500 focus:ring-violet-100"
            }`}
          />

          <p
            id="interest-help"
            className="mt-2 text-xs leading-5 text-slate-500"
          >
            Optional. A traditional cover
            letter is not required.
          </p>

          <FieldError
            id="interest-error"
            error={
              state.fieldErrors.interest
            }
          />
        </div>

        <div className="mt-7 border-t border-slate-200 pt-7">
          <label
            htmlFor="additionalInformation"
            className="block text-sm font-semibold text-slate-900"
          >
            Anything else you would like us to
            know?
          </label>

          <textarea
            id="additionalInformation"
            name="additionalInformation"
            rows={5}
            maxLength={3000}
            placeholder="Optional additional information"
            aria-invalid={Boolean(
              state.fieldErrors
                .additionalInformation,
            )}
            aria-describedby={
              state.fieldErrors
                .additionalInformation
                ? "additionalInformation-error"
                : undefined
            }
            className={`mt-3 min-h-36 w-full resize-y rounded-2xl border bg-white px-4 py-3.5 text-base leading-7 text-slate-950 outline-none transition placeholder:text-slate-400 focus:ring-4 ${
              state.fieldErrors
                .additionalInformation
                ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                : "border-slate-300 focus:border-violet-500 focus:ring-violet-100"
            }`}
          />

          <FieldError
            id="additionalInformation-error"
            error={
              state.fieldErrors
                .additionalInformation
            }
          />
        </div>
      </FormSection>

      {/* 05 — Privacy */}
      <FormSection
        number="05"
        title="Privacy & consent"
        description="Review how your application information will be handled before continuing."
      >
        <div
          className={`rounded-2xl border p-5 sm:p-6 ${
            state.fieldErrors
              .privacyConsent
              ? "border-red-300 bg-red-50/50"
              : "border-slate-200 bg-slate-50"
          }`}
        >
          <label className="flex cursor-pointer items-start gap-4">
            <input
              type="checkbox"
              name="privacyConsent"
              required
              aria-invalid={Boolean(
                state.fieldErrors
                  .privacyConsent,
              )}
              aria-describedby={
                state.fieldErrors
                  .privacyConsent
                  ? "privacyConsent-error"
                  : undefined
              }
              className="mt-0.5 h-5 w-5 shrink-0 rounded border-slate-300 text-violet-700 focus:ring-violet-500"
            />

            <span className="text-sm leading-6 text-slate-600">
              I confirm that the information I
              provide is accurate and that I
              have reviewed the applicable
              candidate privacy information. I
              understand that final privacy
              language and data-retention terms
              must be approved before real
              applications are collected.
            </span>
          </label>

          <FieldError
            id="privacyConsent-error"
            error={
              state.fieldErrors
                .privacyConsent
            }
          />
        </div>
      </FormSection>

      {/* Final validation action */}
      <div className="overflow-hidden rounded-3xl bg-slate-950 text-white">
        <div className="p-6 sm:p-8">
          <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
                Ready to validate
              </p>

              <h2 className="mt-3 break-words text-xl font-semibold tracking-tight sm:text-2xl">
                Application for {job.title}
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                Your application will be
                validated on the server.
                Candidate information and the
                resume are not persisted at
                this stage.
              </p>
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-white/20 disabled:cursor-not-allowed disabled:opacity-60 lg:w-auto"
            >
              {isPending
                ? "Validating application..."
                : "Validate application"}

              {!isPending && (
                <span
                  className="ml-2"
                  aria-hidden="true"
                >
                  →
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="border-t border-white/10 bg-white/[0.03] px-6 py-4 sm:px-8">
          <p className="text-xs leading-5 text-slate-400">
            Required fields are marked with an
            asterisk. Review your information
            before continuing.
          </p>
        </div>
      </div>
    </form>
  );
}

type FormSectionProps = {
  number: string;
  title: string;
  description: string;
  children: ReactNode;
};

function FormSection({
  number,
  title,
  description,
  children,
}: FormSectionProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8">
      <div className="grid gap-7 xl:grid-cols-[180px_minmax(0,1fr)] xl:gap-10">
        <div>
          <span className="text-xs font-semibold tracking-[0.18em] text-violet-700">
            {number}
          </span>

          <h2 className="mt-3 text-lg font-semibold tracking-tight text-slate-950">
            {title}
          </h2>

          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
            {description}
          </p>
        </div>

        <div className="min-w-0">
          {children}
        </div>
      </div>
    </section>
  );
}

type TextFieldProps = {
  id: string;
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "url";
  placeholder?: string;
  autoComplete?: string;
  inputMode?:
    | "text"
    | "email"
    | "tel"
    | "url";
  required?: boolean;
  error?: string;
};

function TextField({
  id,
  name,
  label,
  type = "text",
  placeholder,
  autoComplete,
  inputMode,
  required = false,
  error,
}: TextFieldProps) {
  const errorId = `${id}-error`;

  return (
    <div className="min-w-0">
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-slate-900"
      >
        {label}

        {required && (
          <>
            <span
              className="ml-1 text-violet-700"
              aria-hidden="true"
            >
              *
            </span>

            <span className="sr-only">
              {" "}
              required
            </span>
          </>
        )}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? errorId : undefined
        }
        className={`mt-3 min-h-12 w-full min-w-0 rounded-2xl border bg-white px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:ring-4 ${
          error
            ? "border-red-300 focus:border-red-500 focus:ring-red-100"
            : "border-slate-300 focus:border-violet-500 focus:ring-violet-100"
        }`}
      />

      <FieldError
        id={errorId}
        error={error}
      />
    </div>
  );
}

type FieldErrorProps = {
  id: string;
  error?: string;
};

function FieldError({
  id,
  error,
}: FieldErrorProps) {
  if (!error) {
    return null;
  }

  return (
    <p
      id={id}
      role="alert"
      className="mt-2 text-sm font-medium leading-5 text-red-700"
    >
      {error}
    </p>
  );
}