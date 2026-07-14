"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "../ui";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  honey: string; // Honeypot bot detector field
};

type FormErrors = Partial<Record<keyof Omit<FormData, "honey">, string>>;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required.";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}

function FieldError({ message, id }: { message?: string; id: string }) {
  if (!message) return null;

  return (
    <p
      id={id}
      aria-live="polite"
      className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400 animate-in fade-in slide-in-from-top-1 duration-200"
    >
      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
      {message}
    </p>
  );
}

const baseInput =
  "w-full rounded-xl border bg-white/5 dark:bg-zinc-900/40 px-4 py-3 text-foreground placeholder-muted-foreground transition-all duration-300 focus:outline-2 focus:ring-2";

const validInput =
  "border-accent-hover/20 focus:border-accent focus:ring-accent/50";

const invalidInput =
  "border-red-500/60 bg-red-500/5 focus:border-red-500/60 focus:ring-red-500/30";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    honey: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const [touched, setTouched] = useState<
    Partial<Record<keyof FormData, boolean>>
  >({});

  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const key = name as keyof FormData;

    const updatedData = {
      ...formData,
      [key]: value,
    };

    setFormData(updatedData);

    if (submitted || touched[key]) {
      const validation = validate(updatedData);
      const k = key as keyof Omit<FormData, "honey">;

      setErrors((prev) => ({
        ...prev,
        [k]: validation[k],
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const key = e.target.name as keyof FormData;
    const k = key as keyof Omit<FormData, "honey">;

    setTouched((prev) => ({
      ...prev,
      [key]: true,
    }));

    const validation = validate(formData);

    setErrors((prev) => ({
      ...prev,
      [k]: validation[k],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitted(true);
    setServerError(null);

    // 1. Client-side Honeypot Check
    if (formData.honey) {
      // Deceive the bot by simulating instant success
      setStatus("sending");
      setTimeout(() => {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          honey: "",
        });
        setErrors({});
        setTouched({});
        setSubmitted(false);
      }, 1000);
      return;
    }

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

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        honey: "",
      });

      setErrors({});
      setTouched({});
      setSubmitted(false);
    } catch (err) {
      setStatus("error");
      setServerError(
        err instanceof Error
          ? err.message
          : "Failed to deliver your message."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="flex min-h-[350px] flex-col items-center justify-center space-y-4 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center">
        <CheckCircle2 className="h-16 w-16 animate-bounce text-emerald-500" />

        <h3 className="text-2xl font-bold">
          Message Sent!
        </h3>

        <p className="max-w-sm text-muted-foreground">
          Thank you for reaching out. I&apos;ll get back to you as soon as possible.
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
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6"
    >
      {status === "error" && (
        <div role="alert" className="flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
          <AlertCircle className="h-5 w-5 shrink-0" />
          {serverError}
        </div>
      )}

      {/* Disabling all inputs using fieldset while email is in transit */}
      <fieldset disabled={isSending} className="space-y-6 border-0 p-0 m-0">
        
        {/* Spam Honeypot Field (hidden from screen readers and visual viewport) */}
        <div className="absolute overflow-hidden opacity-0 w-0 h-0 -z-50 pointer-events-none" aria-hidden="true">
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
              placeholder="Enter your name"
              aria-invalid={!!((submitted || touched.name) && errors.name)}
              aria-describedby={((submitted || touched.name) && errors.name) ? "name-error" : undefined}
              className={`${baseInput} ${
                (submitted || touched.name) && errors.name
                  ? invalidInput
                  : validInput
              }`}
            />

            <FieldError
              id="name-error"
              message={
                submitted || touched.name
                  ? errors.name
                  : undefined
              }
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
              placeholder="Enter your email"
              aria-invalid={!!((submitted || touched.email) && errors.email)}
              aria-describedby={((submitted || touched.email) && errors.email) ? "email-error" : undefined}
              className={`${baseInput} ${
                (submitted || touched.email) && errors.email
                  ? invalidInput
                  : validInput
              }`}
            />

            <FieldError
              id="email-error"
              message={
                submitted || touched.email
                  ? errors.email
                  : undefined
              }
            />
          </div>
        </div>

        {/* Subject */}
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
            placeholder="Collaboration Inquiry"
            className={`${baseInput} ${validInput}`}
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
            placeholder="Hi, I'd love to work together..."
            aria-invalid={!!((submitted || touched.message) && errors.message)}
            aria-describedby={((submitted || touched.message) && errors.message) ? "message-error" : undefined}
            className={`${baseInput} resize-none ${
              (submitted || touched.message) && errors.message
                ? invalidInput
                : validInput
            }`}
          />

          <FieldError
            id="message-error"
            message={
              submitted || touched.message
                ? errors.message
                : undefined
            }
          />
        </div>
      </fieldset>

      <Button
        type="submit"
        disabled={isSending}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-accent/40 to-accent px-8 py-6 font-bold
         text-white text-base shadow-md transition-all 
        duration-300 hover:scale-[1.02] hover:from-accent-hover/80 hover:to-accent-hover/80 disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
      >
        <span>
          {isSending ? "Sending..." : "Send Message"}
        </span>

        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}