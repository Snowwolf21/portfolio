"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

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
    <p className="flex items-center gap-1.5 text-xs text-red-400 mt-1.5 animate-in fade-in slide-in-from-top-1 duration-200">
      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
      {message}
    </p>
  );
}

const baseInput =
  "w-full px-4 py-3 rounded-xl border bg-white/5 dark:bg-zinc-900/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 transition-all duration-300";
const validInput = "border-white/10 focus:ring-accent/50 focus:border-accent";
const invalidInput =
  "border-red-500/60 bg-red-500/5 focus:ring-red-500/30 focus:border-red-500/60";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const key = name as keyof FormData;
    setFormData((prev) => ({ ...prev, [key]: value }));
    // Clear the error for this field as the user types
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const key = e.target.name as keyof FormData;
    setTouched((prev) => ({ ...prev, [key]: true }));
    // Validate just this field on blur
    const fieldErrors = validate(formData);
    setErrors((prev) => ({ ...prev, [key]: fieldErrors[key] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fieldErrors = validate(formData);

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      // Mark all required fields as touched so errors are visible
      setTouched({ name: true, email: true, message: true });
      return;
    }

    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      setTouched({});
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8 border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-950/10 rounded-3xl h-full min-h-[350px] space-y-4">
        <CheckCircle2 className="w-16 h-16 text-emerald-500 animate-bounce" />
        <h4 className="text-2xl font-bold text-foreground">Message Sent!</h4>
        <p className="text-muted-foreground max-w-sm">
          Thank you for reaching out. I will get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 px-6 py-2 bg-accent hover:bg-accent-hover text-white rounded-full font-bold transition-all cursor-pointer"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Your Name <span className="text-red-400">*</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="John Doe"
            className={`${baseInput} ${touched.name && errors.name ? invalidInput : validInput}`}
          />
          <FieldError message={touched.name ? errors.name : undefined} />
        </div>

        {/* Email */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Your Email <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="johndoe@example.com"
            className={`${baseInput} ${touched.email && errors.email ? invalidInput : validInput}`}
          />
          <FieldError message={touched.email ? errors.email : undefined} />
        </div>
      </div>

      {/* Subject */}
      <div className="flex flex-col space-y-1">
        <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Collaboration Inquiry"
          className={`${baseInput} ${validInput}`}
        />
      </div>

      {/* Message */}
      <div className="flex flex-col space-y-1">
        <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Your Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Hi, I'd love to work together on..."
          className={`${baseInput} ${touched.message && errors.message ? invalidInput : validInput} resize-none`}
        />
        <FieldError message={touched.message ? errors.message : undefined} />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-accent to-indigo-600 hover:from-accent-hover hover:to-indigo-700 text-white font-bold rounded-xl transition-all duration-300 shadow-md shadow-accent-glow hover:shadow-lg hover:shadow-accent-glow/50 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
      >
        <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
}
