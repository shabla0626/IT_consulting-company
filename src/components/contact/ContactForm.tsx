"use client";

import {
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

const interestOptions = [
  "Software Engineering",
  "AI & Data",
  "Cloud & DevOps",
  "Cybersecurity",
  "Technology Strategy",
  "Not sure yet",
  "Other",
];

const projectStages = [
  "Exploring an idea",
  "Planning / discovery",
  "Ready to start",
  "Already in progress",
  "Modernizing an existing system",
  "Need help with a specific problem",
];

const timelines = [
  "As soon as possible",
  "Within 1–3 months",
  "Within 3–6 months",
  "6+ months",
  "Still evaluating",
];

const budgetRanges = [
  "Not decided yet",
  "Under $25,000",
  "$25,000–$75,000",
  "$75,000–$150,000",
  "$150,000–$300,000",
  "$300,000+",
  "Prefer to discuss",
];

export default function ContactForm() {
  const [validated, setValidated] =
    useState(false);

  function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setValidated(true);

    const prefersReducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

    document
      .getElementById("contact-form")
      ?.scrollIntoView({
        behavior: prefersReducedMotion
          ? "auto"
          : "smooth",
        block: "start",
      });
  }

  return (
    <section
      id="contact-form"
      aria-labelledby="contact-form-heading"
      className="scroll-mt-24 bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 xl:gap-20">
          {/* Introduction */}
          <div className="min-w-0 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 sm:text-sm">
              Start a Conversation
            </p>

            <h2
              id="contact-form-heading"
              className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
            >
              Give us enough context
              <span className="block text-slate-500">
                to understand the problem.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:mt-6">
              You do not need to arrive with a complete specification. Tell us
              what you are trying to achieve, what is getting in the way, and
              any important constraints or timing considerations.
            </p>

            <div className="mt-8 border-t border-slate-200 pt-7 sm:mt-10 sm:pt-8">
              <p className="text-sm font-semibold text-slate-950">
                Helpful context can include:
              </p>

              <ul className="mt-5 space-y-4">
                {[
                  "What problem or opportunity you are working on",
                  "What exists today",
                  "Where progress is blocked",
                  "Important technical or business constraints",
                  "When you would ideally like to begin",
                ].map((item) => (
                  <li
                    key={item}
                    className="grid grid-cols-[14px_minmax(0,1fr)] gap-3 text-sm leading-6 text-slate-600"
                  >
                    <span
                      className="mt-[9px] h-1.5 w-1.5 rounded-full bg-indigo-600"
                      aria-hidden="true"
                    />

                    <span className="min-w-0">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-3xl bg-slate-950 p-6 text-white sm:mt-10 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-300">
                No perfect brief required
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Early conversations can begin with an incomplete idea,
                architecture concern, modernization challenge, delivery issue,
                or broader technology question.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="min-w-0 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 md:p-8 lg:p-9 xl:p-10">
            {validated && (
              <div
                role="status"
                aria-live="polite"
                className="mb-7 rounded-2xl border border-indigo-200 bg-indigo-50 p-5 sm:mb-8"
              >
                <p className="font-semibold text-slate-950">
                  Inquiry details validated.
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  This contact form is currently a frontend prototype, so your
                  information has not been transmitted or stored.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Your details */}
              <FormGroup
                number="01"
                title="Your details"
                description="Tell us who we should speak with."
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <TextField
                    id="name"
                    name="name"
                    label="Your name"
                    autoComplete="name"
                    required
                  />

                  <TextField
                    id="company"
                    name="company"
                    label="Company"
                    autoComplete="organization"
                    required
                  />

                  <TextField
                    id="email"
                    name="email"
                    label="Work email"
                    type="email"
                    autoComplete="email"
                    required
                  />

                  <TextField
                    id="phone"
                    name="phone"
                    label="Phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Optional"
                  />
                </div>
              </FormGroup>

              <Divider />

              {/* Project context */}
              <FormGroup
                number="02"
                title="Project context"
                description="Help us understand where the conversation should begin."
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <SelectField
                    id="interest"
                    name="interest"
                    label="Area of interest"
                    options={interestOptions}
                    placeholder="Select an area"
                    required
                  />

                  <SelectField
                    id="projectStage"
                    name="projectStage"
                    label="Project stage"
                    options={projectStages}
                    placeholder="Select a stage"
                    required
                  />

                  <SelectField
                    id="timeline"
                    name="timeline"
                    label="Expected timeline"
                    options={timelines}
                    placeholder="Select a timeline"
                    required
                  />

                  <SelectField
                    id="budget"
                    name="budget"
                    label="Indicative budget"
                    options={budgetRanges}
                    placeholder="Optional"
                  />
                </div>
              </FormGroup>

              <Divider />

              {/* Challenge */}
              <FormGroup
                number="03"
                title="The challenge"
                description="Describe the problem, opportunity, or outcome you want to discuss."
              >
                <div className="min-w-0">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-900"
                  >
                    Tell us about your project or challenge
                    <RequiredMark />
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={8}
                    required
                    maxLength={5000}
                    placeholder="What are you trying to achieve? What exists today? Where are the main challenges or constraints?"
                    aria-describedby="message-help"
                    className="mt-3 min-h-52 w-full resize-y rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-base leading-7 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus-visible:border-indigo-500 focus-visible:ring-4 focus-visible:ring-indigo-100"
                  />

                  <p
                    id="message-help"
                    className="mt-2 text-xs leading-5 text-slate-500"
                  >
                    You do not need to include confidential or sensitive
                    information at this stage.
                  </p>
                </div>
              </FormGroup>

              <Divider />

              {/* Consent */}
              <FormGroup
                number="04"
                title="Before continuing"
                description="Confirm that we may use the information provided to respond to your inquiry."
              >
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                  <label className="flex cursor-pointer items-start gap-4">
                    <input
                      type="checkbox"
                      name="contactConsent"
                      required
                      className="mt-0.5 h-5 w-5 shrink-0 rounded border-slate-300 text-indigo-700 focus:ring-indigo-500 focus-visible:ring-4 focus-visible:ring-indigo-200"
                    />

                    <span className="min-w-0 text-sm leading-6 text-slate-600">
                      I understand that the information I provide will be used
                      to respond to this inquiry. Final privacy and data
                      retention language must be approved before this form is
                      used for real submissions.
                    </span>
                  </label>
                </div>
              </FormGroup>

              {/* Action */}
              <div className="mt-8 rounded-3xl bg-slate-950 p-6 text-white sm:mt-10 sm:p-7">
                <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-7">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-300">
                      Ready?
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      During development, this checks the form only. Nothing is
                      sent or stored yet.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30 sm:w-auto"
                  >
                    Validate Inquiry

                    <span
                      className="ml-2"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

type FormGroupProps = {
  number: string;
  title: string;
  description: string;
  children: ReactNode;
};

function FormGroup({
  number,
  title,
  description,
  children,
}: FormGroupProps) {
  return (
    <section>
      <div className="mb-6">
        <div className="grid grid-cols-[34px_minmax(0,1fr)] gap-3 sm:gap-4">
          <span
            className="pt-1 text-xs font-semibold tracking-[0.16em] text-indigo-700"
            aria-hidden="true"
          >
            {number}
          </span>

          <div className="min-w-0">
            <h3 className="text-lg font-semibold tracking-tight text-slate-950">
              {title}
            </h3>

            <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="min-w-0">
        {children}
      </div>
    </section>
  );
}

function Divider() {
  return (
    <div
      className="my-8 border-t border-slate-200 sm:my-9"
      aria-hidden="true"
    />
  );
}

function RequiredMark() {
  return (
    <>
      <span
        className="ml-1 text-indigo-700"
        aria-hidden="true"
      >
        *
      </span>

      <span className="sr-only">
        {" "}
        required
      </span>
    </>
  );
}

type TextFieldProps = {
  id: string;
  name: string;
  label: string;
  type?: "text" | "email" | "tel";
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
};

function TextField({
  id,
  name,
  label,
  type = "text",
  placeholder,
  autoComplete,
  required = false,
}: TextFieldProps) {
  return (
    <div className="min-w-0">
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-slate-900"
      >
        {label}

        {required && <RequiredMark />}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="mt-3 min-h-12 w-full min-w-0 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus-visible:border-indigo-500 focus-visible:ring-4 focus-visible:ring-indigo-100"
      />
    </div>
  );
}

type SelectFieldProps = {
  id: string;
  name: string;
  label: string;
  options: string[];
  placeholder: string;
  required?: boolean;
};

function SelectField({
  id,
  name,
  label,
  options,
  placeholder,
  required = false,
}: SelectFieldProps) {
  return (
    <div className="min-w-0">
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-slate-900"
      >
        {label}

        {required && <RequiredMark />}
      </label>

      <select
        id={id}
        name={name}
        required={required}
        defaultValue=""
        className="mt-3 min-h-12 w-full min-w-0 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus-visible:border-indigo-500 focus-visible:ring-4 focus-visible:ring-indigo-100"
      >
        <option
          value=""
          disabled={required}
        >
          {placeholder}
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}