"use client";

import { FormEvent, useState } from "react";
import { company, enquiryTopics } from "@/lib/site";

type FormState = {
  kind: "idle" | "success" | "error";
  message: string;
};

const fieldStyles =
  "mt-2 block w-full border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-base text-ink placeholder:text-mist transition-colors focus:border-brand focus:ring-0 focus:outline-none";

export default function EnquiryForm() {
  const [state, setState] = useState<FormState>({ kind: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setState({ kind: "idle", message: "" });

    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result: { message?: string; error?: string } = await response.json();

      if (!response.ok) {
        setState({ kind: "error", message: result.error ?? "Your message could not be sent. Please try again." });
        return;
      }

      form.reset();
      setState({ kind: "success", message: result.message ?? "Thank you. Your message has been sent." });
    } catch {
      setState({
        kind: "error",
        message: `We could not send your message right now. Please try again or email ${company.email}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
      <div>
        <label htmlFor="enquiry-name" className="label text-stone">Full name</label>
        <input id="enquiry-name" name="name" type="text" autoComplete="name" maxLength={160} required className={fieldStyles} />
      </div>
      <div>
        <label htmlFor="enquiry-phone" className="label text-stone">Phone number</label>
        <input id="enquiry-phone" name="phone" type="tel" autoComplete="tel" maxLength={50} required className={fieldStyles} />
      </div>
      <div>
        <label htmlFor="enquiry-email" className="label text-stone">Email address</label>
        <input id="enquiry-email" name="email" type="email" autoComplete="email" maxLength={320} required className={fieldStyles} />
      </div>
      <div>
        <label htmlFor="enquiry-interest" className="label text-stone">
          Area of interest <span className="font-normal tracking-normal normal-case">(optional)</span>
        </label>
        <select id="enquiry-interest" name="interest" defaultValue="" className={`${fieldStyles} cursor-pointer`}>
          <option value="">Choose a service</option>
          {enquiryTopics.map((topic) => (
            <option key={topic} value={topic}>{topic}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="enquiry-message" className="label text-stone">How can we help?</label>
        <textarea
          id="enquiry-message"
          name="message"
          rows={4}
          maxLength={5000}
          placeholder="Tell us about your property, project or question"
          className={`${fieldStyles} resize-y`}
        />
      </div>
      <label className="absolute -left-[10000px] size-px overflow-hidden" aria-hidden="true">
        Leave this field empty
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-stone">Name, phone and email are required. We’ll reply by email or phone.</p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-12 shrink-0 items-center justify-center bg-brand px-8 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-brand-deep disabled:cursor-wait disabled:opacity-70"
        >
          {isSubmitting ? "Sending…" : "Send enquiry"}
        </button>
      </div>
      <p
        role="status"
        aria-live="polite"
        className={`min-h-6 text-sm sm:col-span-2 ${state.kind === "success" ? "text-[#1f6b3a]" : "text-brand-deep"}`}
      >
        {state.message}
      </p>
    </form>
  );
}
