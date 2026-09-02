"use client";

import { useActionState } from "react";
import { submitInquiry, type InquiryState } from "@/app/actions/inquiry";

const initialState: InquiryState = { status: "idle" };

const inputClasses =
  "w-full rounded-lg border border-stone bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-stone-dark/70 focus:border-olive focus:outline-none focus:ring-1 focus:ring-olive";
const labelClasses = "mb-1.5 block text-sm font-medium text-ink-soft";

export default function InquiryForm({ villaSlug }: { villaSlug: string }) {
  const [state, formAction, pending] = useActionState(
    submitInquiry,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-olive/30 bg-olive/5 p-8 text-center">
        <p className="font-display text-2xl text-ink">Inquiry sent</p>
        <p className="mt-2 text-sm text-ink-soft">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="villaSlug" value={villaSlug} />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Full name
          </label>
          <input
            id="name"
            name="name"
            required
            className={inputClasses}
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClasses}
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone <span className="text-stone-dark">(optional)</span>
          </label>
          <input id="phone" name="phone" className={inputClasses} placeholder="+1 555 123 4567" />
        </div>
        <div>
          <label htmlFor="guests" className={labelClasses}>
            Number of guests
          </label>
          <input
            id="guests"
            name="guests"
            type="number"
            min={1}
            className={inputClasses}
            placeholder="4"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="checkIn" className={labelClasses}>
            Check-in
          </label>
          <input
            id="checkIn"
            name="checkIn"
            type="date"
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="checkOut" className={labelClasses}>
            Check-out
          </label>
          <input
            id="checkOut"
            name="checkOut"
            type="date"
            required
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message <span className="text-stone-dark">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={inputClasses}
          placeholder="Anything else we should know?"
        />
      </div>

      {state.status === "error" ? (
        <p className="text-sm text-red-700">{state.message}</p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-lg bg-olive-dark px-6 py-3 text-sm font-medium text-cream transition hover:bg-olive disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Sending…" : "Send inquiry"}
      </button>
    </form>
  );
}
