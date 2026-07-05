"use client";

import Link from "next/link";
import TechIcon from "./Tech-Icon";
import { useState, FormEvent } from "react";
 
type Status =
  | "idle"
  | "submitting"
  | "success"
  | "error";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  if (!name.trim() || !email.trim() || !message.trim()) {
    return;
  }

  try {
    setStatus("submitting");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send message.");
    }

    setStatus("success");

    setName("");
    setEmail("");
    setMessage("");
  } catch (error) {
    console.error(error);

    setStatus("error");
  }
};

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/Snowwolf21?tab=repositories",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/engakinkunmi/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: "Email",
      href: "mailto:snowwolf0231@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const builtWith = [
  {
    name: "Next.js",
    href: "https://nextjs.org",
  },
  {
    name: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
] as const;

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10 flex flex-col min-h-60 justify-between">
        
        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Write-up & Social Links Column */}
          <div className="lg:col-span-5 flex flex-col items-start scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Let&apos;s Talk
            </h2>
            <div className="h-1.5 w-16 bg-accent rounded-full mb-6" />
            <p className="text-secondary leading-relaxed mb-8 max-w-sm">
              Looking for a frontend developer who cares about the details? I&apos;m open to full-time roles, contract work, and interesting side projects. Drop me a message.
            </p>

            <div className="flex flex-col gap-4 text-sm text-secondary mb-8">
              <div className="flex items-center gap-3">
                <span className="text-accent text-lg">📍</span>
                <span>San Francisco Bay Area / Remote</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent text-lg">📧</span>
                <Link href="mailto:snowwolf0231@gmail.com" className="hover:text-accent transition-colors duration-300">snowwolf0231@gmail.com</Link>
              </div>
              <div>
                <span>Call Me :</span>
                <a href="tel:+2347060580058" className="hover:text-accent transition-colors duration-300"> +2347060580058</a>
              </div>
            </div> 

            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-card-border hover:border-accent hover:text-accent text-secondary hover:bg-accent/5 transition-all duration-300 cursor-pointer"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 scroll-reveal" style={{ animationDelay: "150ms" }}>
            <div className="glass-panel border border-card-border rounded-3xl p-6 md:p-8 shadow-xl relative min-h-[380px] flex flex-col justify-center">
              
              {status === "success" ? (
                <div className="text-center py-8 animate-fade-in">
                  <div className="h-16 w-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center text-3xl mx-auto mb-6 animate-bounce">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-sm text-secondary max-w-sm mx-auto leading-relaxed mb-6">
                    Thanks for reaching out! I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 rounded-xl border border-card-border hover:border-accent hover:text-accent font-semibold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Name Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-secondary uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        aria-label="Name"
                        aria-required
                        value={name}
                        disabled={status === "submitting"}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="px-4 py-3 rounded-xl border border-card-border bg-background/50 focus:bg-background text-foreground text-sm focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 disabled:opacity-50"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-secondary uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        aria-label="Email"
                        aria-required
                        value={email}
                        disabled={status === "submitting"}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="px-4 py-3 rounded-xl border border-card-border bg-background/50 focus:bg-background text-foreground text-sm focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 disabled:opacity-50"
                      />
                    </div>

                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-secondary uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      id="message"
                      aria-label="Message"
                      aria-required
                      rows={5}
                      value={message}
                      disabled={status === "submitting"}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Enter your message"
                      className="px-4 py-3 rounded-xl border border-card-border bg-background/50 focus:bg-background text-foreground text-sm focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 resize-none disabled:opacity-50"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    aria-label="Submit message"
                    aria-disabled={status === "submitting"}
                    disabled={status === "submitting"}
                    className="w-full py-4 rounded-xl bg-accent hover:bg-accent-hover text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {status === "submitting" ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
  
        {/* Footer */}
        <div className="border-t border-card-border/80 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between text-md text-secondary gap-4">
          <p>© {new Date().getFullYear()} Snowwolf. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
  <span>Built with</span>

  {builtWith.map((tech) => (
    <Link
      key={tech.name}
      href={tech.href}
      target="_blank"
      aria-label={tech.name}
      rel="noopener noreferrer"
      className="hover:scale-105 transition-transform"
    >
      <TechIcon
        name={tech.name}
        showLabel
        className="w-4 h-4"
      />
    </Link>
  ))}
</div>
        </div>

      </div>
    </section>
  );
}
