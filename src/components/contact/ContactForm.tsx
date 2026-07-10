"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "../ui";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

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

function FieldError({ message }: { message?: string }) {
  if (!message) return null;

  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400 animate-in fade-in slide-in-from-top-1 duration-200">
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

      setErrors((prev) => ({
        ...prev,
        [key]: validation[key],
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const key = e.target.name as keyof FormData;

    setTouched((prev) => ({
      ...prev,
      [key]: true,
    }));

    const validation = validate(formData);

    setErrors((prev) => ({
      ...prev,
      [key]: validation[key],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitted(true);
    setServerError(null);

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

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6"
    >
      {status === "error" && (
        <div className="flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
          <AlertCircle className="h-5 w-5 shrink-0" />
          {serverError}
        </div>
      )}

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
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your name"
            className={`${baseInput} ${
              (submitted || touched.name) && errors.name
                ? invalidInput
                : validInput
            }`}
          />

          <FieldError
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
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your email"
            className={`${baseInput} ${
              (submitted || touched.email) && errors.email
                ? invalidInput
                : validInput
            }`}
          />

          <FieldError
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
          className={`${baseInput} resize-none ${
            (submitted || touched.message) && errors.message
              ? invalidInput
              : validInput
          }`}
        />

        <FieldError
          message={
            submitted || touched.message
              ? errors.message
              : undefined
          }
        />
      </div>

      <Button
        type="submit"
        disabled={status === "sending"}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-accent/40 to-accent px-8 py-6 font-bold
         text-white  text-base shadow-md transition-all 
        duration-300 hover:scale-[1.02] hover:from-accent-hover/80 hover:to-accent-hover/80 disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
      >
        <span>
          {status === "sending"
            ? "Sending..."
            : "Send Message"}
        </span>

        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}