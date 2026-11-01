"use client";

import { useState } from "react";
import type { FormEvent } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          projectType: data.get("projectType"),
          message: data.get("message"),
        }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(payload?.error ?? "Something went wrong.");
      }

      form.reset();
      setState("success");
      setMessage("Message sent. I will get back to you soon.");
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error ? error.message : "Could not send message.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="text-muted">Name</span>
          <input
            name="name"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-foreground"
          />
        </label>
        <label className="block text-sm">
          <span className="text-muted">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-foreground"
          />
        </label>
      </div>

      <label className="block text-sm">
        <span className="text-muted">Project type</span>
        <select
          name="projectType"
          defaultValue="street-photo"
          className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-foreground"
        >
          <option value="street-photo">Street photography</option>
          <option value="videography">Videography</option>
          <option value="both">Photo + video</option>
          <option value="other">Something else</option>
        </select>
      </label>

      <label className="block text-sm">
        <span className="text-muted">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-2 w-full resize-y rounded-xl border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-foreground"
        />
      </label>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="rounded-full bg-inverse px-6 py-3 text-sm text-inverse-fg transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {state === "submitting" ? "Sending…" : "Send message"}
      </button>

      {message ? (
        <p
          role="status"
          className={`text-sm ${state === "error" ? "text-red-700" : "text-muted"}`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
