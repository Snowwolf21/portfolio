"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "../ui";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  honey: string;
};

type FormErrors = Partial<Record<keyof Omit<FormData, "honey">, string>>;

const emptyForm: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
  honey: "",
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  // Name validation
  if (!data.name.trim()) {
    errors.name = "Name is required.";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  // Email validation
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  // Message validation
  if (!data.message.trim()) {
    errors.message = "Message is required.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}

// Reusable field error component
function FieldError({ message, id }: { message?: string; id: string }) {
  if (!message) return null;

  return (
    <p
      id={id}
      aria-live="polite"
      className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400 animate-in fade-in slide-in-from-top-1 duration-200"
    >
      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
      {message}
    </p>
  );
}

// `outline-none` removes the browser's default focus outline.
// Background colours live in the state classes (not here) so they never
// fight each other in the generated CSS.
const baseInput =
  "w-full rounded-xl border px-4 py-3 text-foreground placeholder:text-muted-foreground transition-colors duration-200 outline-none focus:outline-none focus-visible:outline-none focus:ring-0";

const neutralBg = "bg-white/5 dark:bg-zinc-900/40";

const validInput = `border-green-500 ${neutralBg}`;
const invalidInput = "border-red-500 bg-red-500/5";
const defaultInput = `border-border ${neutralBg}`;

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(emptyForm);

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});

  // touched = the field has been left (blurred); dirty = the user has typed in it
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormData, boolean>>
  >({});
  const [dirty, setDirty] = useState<Partial<Record<keyof FormData, boolean>>>(
    {}
  );

  const [submitted, setSubmitted] = useState(false);

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [serverError, setServerError] = useState<string | null>(null);

  // A field has "been interacted with" once the user typed in it, left it,
  // or tried to submit. Before that, it is still in its first state.
  const hasInteracted = (field: keyof FormData) =>
    submitted || Boolean(touched[field]) || Boolean(dirty[field]);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const key = name as keyof FormData;

    const updatedData = { ...formData, [key]: value };

    setFormData(updatedData);
    setDirty((prev) => ({ ...prev, [key]: true }));

    // Typing counts as interaction, so always revalidate this field
    const validation = validate(updatedData);
    const field = key as keyof FormErrors;

    setErrors((prev) => ({
      ...prev,
      [field]: validation[field],
    }));
  };

  // Handle input blur
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const key = e.target.name as keyof FormData;
    const field = key as keyof FormErrors;

    setFocusedField(null);

    setTouched((prev) => ({ ...prev, [key]: true }));

    const validation = validate(formData);

    setErrors((prev) => ({
      ...prev,
      [field]: validation[field],
    }));
  };

  /*
   * Border rules:
   *  - First time the field is focused (nothing typed yet)  -> green
   *  - After the user interacts and the value is INVALID    -> red (even while focused)
   *  - After the user interacts and the value is VALID      -> green
   *  - Untouched and not focused                            -> default
   */
  const getInputClass = (field: keyof FormErrors, isTextarea = false) => {
    const isFocused = focusedField === field;
    const resize = isTextarea ? "resize-none" : "";

    // Subject is optional, so it has no red state: green only while focused
    if (field === "subject") {
      return `${baseInput} ${isFocused ? validInput : defaultInput} ${resize}`;
    }

    const fieldError = validate(formData)[field];

    let stateClass = defaultInput;

    if (hasInteracted(field)) {
      stateClass = fieldError ? invalidInput : validInput;
    } else if (isFocused) {
      stateClass = validInput;
    }

    return `${baseInput} ${stateClass} ${resize}`;
  };

  const resetForm = () => {
    setFormData(emptyForm);
    setErrors({});
    setTouched({});
    setDirty({});
    setSubmitted(false);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);
    setServerError(null);

    // Honeypot spam protection
    if (formData.honey) {
      setStatus("sending");

      setTimeout(() => {
        setStatus("success");
        resetForm();
      }, 1000);

      return;
    }

    // Validate all fields
    const validation = validate(formData);

    setErrors(validation);

    if (Object.keys(validation).length > 0) {
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setStatus("success");
      resetForm();
    } catch (err) {
      setStatus("error");

      setServerError(
        err instanceof Error ? err.message : "Failed to deliver your message."
      );
    }
  };

  // Success state
  if (status === "success") {
    return (
      <div className="flex min-h-87.5 flex-col items-center justify-center space-y-4 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center">
        <CheckCircle2 className="h-16 w-16 animate-bounce text-emerald-500" />

        <h3 className="text-2xl font-bold">Message Sent!</h3>

        <p className="max-w-sm text-muted-foreground">
          Thank you for reaching out. I'll get back to you as soon as possible.
        </p>

        <Button
          onClick={() => {
            setStatus("idle");
            setSubmitted(false);
          }}
          className="mt-4 rounded-full bg-accent px-6 py-2 font-semibold text-white transition hover:bg-accent-hover"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  const isSending = status === "sending";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Server error */}
      {status === "error" && (
        <div
          role="alert"
          className="flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400"
        >
          <AlertCircle className="h-5 w-5 shrink-0" />
          {serverError}
        </div>
      )}

      <fieldset disabled={isSending} className="m-0 space-y-6 border-0 p-0">
        {/* Honeypot field */}
        <div
          className="absolute -z-50 h-0 w-0 overflow-hidden opacity-0 pointer-events-none"
          aria-hidden="true"
        >
          <label htmlFor="honey">Do not fill this field if you are human</label>

          <input
            id="honey"
            name="honey"
            type="text"
            value={formData.honey}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Name and Email */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground"
            >
              Your Name <span className="text-red-400">*</span>
            </label>

            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={() => setFocusedField("name")}
              placeholder="Enter your name"
              aria-invalid={Boolean(hasInteracted("name") && errors.name)}
              aria-describedby={
                hasInteracted("name") && errors.name ? "name-error" : undefined
              }
              className={getInputClass("name")}
            />

            <FieldError
              id="name-error"
              message={hasInteracted("name") ? errors.name : undefined}
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground"
            >
              Your Email <span className="text-red-400">*</span>
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={() => setFocusedField("email")}
              placeholder="Enter your email"
              aria-invalid={Boolean(hasInteracted("email") && errors.email)}
              aria-describedby={
                hasInteracted("email") && errors.email
                  ? "email-error"
                  : undefined
              }
              className={getInputClass("email")}
            />

            <FieldError
              id="email-error"
              message={hasInteracted("email") ? errors.email : undefined}
            />
          </div>
        </div>

        {/* Subject (optional) */}
        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground"
          >
            Subject
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            autoComplete="off"
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={() => setFocusedField("subject")}
            placeholder="Collaboration Inquiry"
            className={getInputClass("subject")}
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground"
          >
            Your Message <span className="text-red-400">*</span>
          </label>

          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={() => setFocusedField("message")}
            placeholder="Hi, I'd love to work together..."
            aria-invalid={Boolean(hasInteracted("message") && errors.message)}
            aria-describedby={
              hasInteracted("message") && errors.message
                ? "message-error"
                : undefined
            }
            className={getInputClass("message", true)}
          />

          <FieldError
            id="message-error"
            message={hasInteracted("message") ? errors.message : undefined}
          />
        </div>
      </fieldset>

      {/* Submit button */}
      <Button
        type="submit"
        disabled={isSending}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-accent/80 to-accent px-8 py-6 text-base font-bold text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:from-accent-hover/80 hover:to-accent-hover/80 disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
      >
        <span>{isSending ? "Sending..." : "Send Message"}</span>

        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}