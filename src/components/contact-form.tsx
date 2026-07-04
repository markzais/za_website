"use client";

import { useState, type FormEvent } from "react";
import { capabilities } from "@/data/capabilities";
import { IconCheck } from "@/components/icons";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClasses =
  "w-full border border-ink-600 bg-ink-900/60 px-4 py-3 text-sm text-paper-50 placeholder:text-paper-600 transition-colors focus:border-gold-400 focus:outline-none";

const labelClasses = "mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-paper-400";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("company_website")) {
      // Honeypot field: bots tend to fill every input. If it has a value, silently drop.
      setStatus("success");
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          organization: String(data.get("organization") ?? "").trim(),
          topic: String(data.get("topic") ?? "").trim(),
          message,
        }),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong sending your message. Please email us directly instead.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 border border-gold-600 bg-ink-900/60 p-10">
        <span className="flex h-11 w-11 items-center justify-center border border-gold-500 text-gold-400">
          <IconCheck className="h-5 w-5" />
        </span>
        <h3 className="font-display text-xl font-medium text-paper-50">Message received.</h3>
        <p className="text-sm leading-relaxed text-paper-400">
          Thank you for reaching out. We respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
      <div
        aria-hidden="true"
        className="absolute h-0 w-0 overflow-hidden opacity-0"
      >
        <label htmlFor="company_website">Leave this field empty</label>
        <input type="text" id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={fieldClasses} />
        </div>
        <div>
          <label htmlFor="organization" className={labelClasses}>
            Organization
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            autoComplete="organization"
            className={fieldClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          Email
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={fieldClasses} />
      </div>

      <div>
        <label htmlFor="topic" className={labelClasses}>
          Capability of interest
        </label>
        <select id="topic" name="topic" defaultValue="" className={`${fieldClasses} appearance-none`}>
          <option value="" disabled>
            Select a capability
          </option>
          {capabilities.map((c) => (
            <option key={c.slug} value={c.name}>
              {c.name}
            </option>
          ))}
          <option value="General inquiry">General inquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea id="message" name="message" required rows={5} className={fieldClasses} />
      </div>

      {error && <p className="text-sm text-gold-200">{error}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center bg-gold-300 px-6 py-3.5 text-sm font-medium tracking-wide text-ink-950 transition-colors hover:bg-gold-200 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
