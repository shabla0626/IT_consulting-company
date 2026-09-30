"use client";

import {
  startTransition,
  useActionState,
  useState,
  type FormEvent,
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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    startTransition(() => {
      formAction(formData);
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-10"
    >
      <input
        type="hidden"
        name="jobSlug"
        value={job.slug}
      />

      {/* Global validation result */}
      {state.status === "error" && state.formError && (
        <div
          role="alert"
          className="rounded-2xl border border-red-200 bg-red-50 p-5"
        >
          <p className="font-semibold text-red-950">
            Please check your application.
          </p>

          <p className="mt-2 text-sm leading-6 text-red-800">
            {state.formError}
          </p>
        </div>
      )}

      {state.status === "validated" && (
        <div
          role="status"
          className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5"
        >
          <p className="font-semibold text-emerald-950">
            Application details validated successfully.
          </p>

          <p className="mt-2 text-sm leading-6 text-emerald-800">
            Your information passed server-side validation. Nothing has been
            stored or submitted yet because persistence and secure resume
            storage have not been connected.
          </p>
        </div>
      )}

      {state.fieldErrors.jobSlug && (
        <div
          role="alert"
          className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm leading-6 text-red-800"
        >
          {state.fieldErrors.jobSlug}
        </div>
      )}

      {/* Personal information */}
      <FormSection
        number="01"
        title="Personal information"
        description="Tell us how we can identify and contact you."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <TextField
            id="firstName"
            name="firstName"
            label="First name"
            autoComplete="given-name"
            required
            error={state.fieldErrors.firstName}
          />

          <TextField
            id="lastName"
            name="lastName"
            label="Last name"
            autoComplete="family-name"
            required
            error={state.fieldErrors.lastName}
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
              error={state.fieldErrors.location}
            />
          </div>
        </div>
      </FormSection>

      {/* Professional profiles */}
      <FormSection
        number="02"
        title="Professional profiles"
        description="Share any relevant professional links that help us understand your work."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <TextField
            id="linkedinUrl"
            name="linkedinUrl"
            label="LinkedIn"
            type="url"
            placeholder="https://linkedin.com/in/..."
            error={state.fieldErrors.linkedinUrl}
          />

          <TextField
            id="githubUrl"
            name="githubUrl"
            label="GitHub"
            type="url"
            placeholder="https://github.com/..."
            error={state.fieldErrors.githubUrl}
          />

          <div className="sm:col-span-2">
            <TextField
              id="portfolioUrl"
              name="portfolioUrl"
              label="Portfolio or personal website"
              type="url"
              placeholder="https://..."
              error={state.fieldErrors.portfolioUrl}
            />
          </div>
        </div>
      </FormSection>

      {/* Resume */}
      <FormSection
        number="03"
        title="Resume"
        description="Upload a current resume or CV relevant to this opportunity."
      >
        <div
          className={`rounded-3xl border border-dashed p-7 sm:p-8 ${
            state.fieldErrors.resume
              ? "border-red-300 bg-red-50/50"
              : "border-slate-300 bg-slate-50"
          }`}
        >
          <label
            htmlFor="resume"
            className="block cursor-pointer"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold text-slate-950">
                  {resumeName || "Choose your resume"}
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  PDF or Word document, up to 10 MB.
                </p>
              </div>

              <span className="inline-flex w-fit items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400">
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
            aria-invalid={Boolean(state.fieldErrors.resume)}
            aria-describedby={
              state.fieldErrors.resume ? "resume-error" : undefined
            }
            className="sr-only"
            onChange={(event) => {
              const file = event.target.files?.[0];

              setResumeName(file?.name ?? "");
            }}
          />

          <FieldError
            id="resume-error"
            error={state.fieldErrors.resume}
          />
        </div>
      </FormSection>

      {/* Interest */}
      <FormSection
        number="04"
        title="Your interest"
        description="Give us a little context about why this opportunity interests you."
      >
        <div>
          <label
            htmlFor="interest"
            className="text-sm font-semibold text-slate-900"
          >
            Why are you interested in this role?
          </label>

          <textarea
            id="interest"
            name="interest"
            rows={7}
            maxLength={3000}
            placeholder="Tell us what interests you about the role, the work, or the type of problems you would like to solve."
            aria-invalid={Boolean(state.fieldErrors.interest)}
            aria-describedby={
              state.fieldErrors.interest
                ? "interest-error"
                : "interest-help"
            }
            className={`mt-3 w-full resize-y rounded-2xl border bg-white px-4 py-3.5 text-sm leading-6 text-slate-950 outline-none transition placeholder:text-slate-400 focus:ring-4 ${
              state.fieldErrors.interest
                ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                : "border-slate-300 focus:border-violet-500 focus:ring-violet-100"
            }`}
          />

          <p
            id="interest-help"
            className="mt-2 text-xs leading-5 text-slate-500"
          >
            Optional. A traditional cover letter is not required.
          </p>

          <FieldError
            id="interest-error"
            error={state.fieldErrors.interest}
          />
        </div>

        <div className="mt-6">
          <label
            htmlFor="additionalInformation"
            className="text-sm font-semibold text-slate-900"
          >
            Anything else you would like us to know?
          </label>

          <textarea
            id="additionalInformation"
            name="additionalInformation"
            rows={5}
            maxLength={3000}
            placeholder="Optional additional information"
            aria-invalid={Boolean(
              state.fieldErrors.additionalInformation,
            )}
            aria-describedby={
              state.fieldErrors.additionalInformation
                ? "additionalInformation-error"
                : undefined
            }
            className={`mt-3 w-full resize-y rounded-2xl border bg-white px-4 py-3.5 text-sm leading-6 text-slate-950 outline-none transition placeholder:text-slate-400 focus:ring-4 ${
              state.fieldErrors.additionalInformation
                ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                : "border-slate-300 focus:border-violet-500 focus:ring-violet-100"
            }`}
          />

          <FieldError
            id="additionalInformation-error"
            error={state.fieldErrors.additionalInformation}
          />
        </div>
      </FormSection>

      {/* Consent */}
      <FormSection
        number="05"
        title="Privacy & consent"
        description="Review how your application information will be handled before submitting."
      >
        <div
          className={`rounded-2xl border p-6 ${
            state.fieldErrors.privacyConsent
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
                state.fieldErrors.privacyConsent,
              )}
              aria-describedby={
                state.fieldErrors.privacyConsent
                  ? "privacyConsent-error"
                  : undefined
              }
              className="mt-1 h-4 w-4 rounded border-slate-300 text-violet-700 focus:ring-violet-500"
            />

            <span className="text-sm leading-6 text-slate-600">
              I confirm that the information I provide is accurate and that I
              have reviewed the applicable candidate privacy information. I
              understand that final privacy language and data-retention terms
              must be approved before real applications are collected.
            </span>
          </label>

          <FieldError
            id="privacyConsent-error"
            error={state.fieldErrors.privacyConsent}
          />
        </div>
      </FormSection>

      {/* Final action */}
      <div className="rounded-3xl bg-slate-950 p-7 text-white sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
              Ready to validate
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              Application for {job.title}
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
              Your application will now be validated on the server. Candidate
              information and the resume are still not persisted at this
              stage.
            </p>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60 lg:w-auto"
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
    </form>
  );
}

type FormSectionProps = {
  number: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

function FormSection({
  number,
  title,
  description,
  children,
}: FormSectionProps) {
  return (
    <section className="border-b border-slate-200 pb-10">
      <div className="grid gap-8 lg:grid-cols-[200px_1fr] lg:gap-12">
        <div>
          <span className="text-sm font-semibold tracking-[0.18em] text-violet-700">
            {number}
          </span>

          <h2 className="mt-3 text-lg font-semibold tracking-tight text-slate-950">
            {title}
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            {description}
          </p>
        </div>

        <div>{children}</div>
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
  required = false,
  error,
}: TextFieldProps) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label
        htmlFor={id}
        className="text-sm font-semibold text-slate-900"
      >
        {label}

        {required && (
          <span
            className="ml-1 text-violet-700"
            aria-hidden="true"
          >
            *
          </span>
        )}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`mt-3 w-full rounded-2xl border bg-white px-4 py-3.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:ring-4 ${
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