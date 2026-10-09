"use client";

import { FormEvent, useState } from "react";

type FormState = {
  kind: "idle" | "success" | "error";
  message: string;
};

export default function ContactForm() {
  const [state, setState] = useState<FormState>({ kind: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setState({ kind: "idle", message: "" });

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

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

      event.currentTarget.reset();
      setState({ kind: "success", message: result.message ?? "Thank you. Your message has been sent." });
    } catch {
      setState({
        kind: "error",
        message: "We could not send your message right now. Please try again or email info@juvosaltd.com.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label className="visually-hidden" htmlFor="contact-name">Name</label>
        <input id="contact-name" name="name" type="text" placeholder="Name" autoComplete="name" maxLength={160} required />
        <label className="visually-hidden" htmlFor="contact-email">E-Mail</label>
        <input id="contact-email" name="email" type="email" placeholder="E-Mail" autoComplete="email" maxLength={320} required />
        <label className="visually-hidden" htmlFor="contact-phone">Phone Number</label>
        <input id="contact-phone" name="phone" type="tel" placeholder="Phone Number" autoComplete="tel" maxLength={50} required />
        <label className="visually-hidden" htmlFor="contact-message">Your Message Here</label>
        <textarea id="contact-message" name="message" placeholder="Your Message Here" maxLength={5000} rows={5} />
        <label className="form-honeypot" aria-hidden="true">
          Leave this field empty
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button className="button button-red" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit Now"}
      </button>
      <p className={`form-feedback ${state.kind}`} role="status" aria-live="polite">
        {state.message}
      </p>
    </form>
  );
}
