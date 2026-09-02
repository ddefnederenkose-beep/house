"use server";

import { getVilla } from "@/lib/villas";

export type InquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitInquiry(
  _prevState: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  const villaSlug = String(formData.get("villaSlug") ?? "");
  const villa = getVilla(villaSlug);

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const checkIn = String(formData.get("checkIn") ?? "").trim();
  const checkOut = String(formData.get("checkOut") ?? "").trim();
  const guests = String(formData.get("guests") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!villa) {
    return { status: "error", message: "Unknown villa. Please try again." };
  }
  if (!name || !email || !checkIn || !checkOut) {
    return {
      status: "error",
      message: "Please fill in your name, email, and dates.",
    };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  if (new Date(checkOut) <= new Date(checkIn)) {
    return {
      status: "error",
      message: "Check-out date must be after check-in date.",
    };
  }

  const subject = `Booking inquiry — ${villa.name} (${checkIn} to ${checkOut})`;
  const body = [
    `Villa: ${villa.name}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    `Check-in: ${checkIn}`,
    `Check-out: ${checkOut}`,
    `Guests: ${guests || "—"}`,
    "",
    "Message:",
    message || "—",
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const ownerEmail = process.env.OWNER_EMAIL ?? "you@example.com";

  if (!apiKey) {
    // No email provider configured yet — log so local/dev testing still
    // works. Set RESEND_API_KEY and OWNER_EMAIL to send real emails
    // (see README).
    console.log("[inquiry] RESEND_API_KEY not set, logging instead:\n", body);
    return {
      status: "success",
      message: "Thanks! I'll get back to you within 24 hours.",
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM ?? "Riglia Villas <onboarding@resend.dev>",
        to: [ownerEmail],
        reply_to: email,
        subject,
        text: body,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[inquiry] Resend error:", res.status, detail);
      return {
        status: "error",
        message: "Something went wrong sending your inquiry. Please try again.",
      };
    }
  } catch (err) {
    console.error("[inquiry] Failed to send email:", err);
    return {
      status: "error",
      message: "Something went wrong sending your inquiry. Please try again.",
    };
  }

  return {
    status: "success",
    message: "Thanks! I'll get back to you within 24 hours.",
  };
}
