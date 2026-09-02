# Riglia Villas

A booking-inquiry website for three vacation villas on the Mani Peninsula,
Greece — Villa Stone, Villa Olive, and Villa Elea. Built with Next.js (App
Router) and Tailwind CSS.

Guests browse each villa and submit an inquiry form (name, email, phone,
dates, guest count, message). There's no live calendar or payment
processing — every booking is confirmed manually.

## Before you launch

A few things worth doing before this goes live:

- **Verify villa copy.** Villa Stone's details came from you directly. Villa
  Olive and Villa Elea's descriptions and specs were pieced together from
  public listings for the same "Riglia Villas" complex (Airbnb blocks
  automated fetches, so I couldn't pull the live pages directly) — see
  [`lib/villas.ts`](lib/villas.ts) and check each against the real Airbnb
  listing before publishing.
- **Photos.** 12 photos per villa were pulled in from your Drive folder
  (`public/images/villa-stone`, `villa-olive`, `villa-elea`). There are more
  in the original Drive folders — drop additional files straight into the
  matching folder and they'll show up in the gallery automatically (no code
  changes needed).
- **Email delivery.** See below — inquiries just log to the console until
  you add a Resend API key.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuring inquiry emails

The inquiry form is a Next.js Server Action ([`app/actions/inquiry.ts`](app/actions/inquiry.ts))
that sends mail through [Resend](https://resend.com). Without an API key,
submissions are simply logged to the server console — the form still works
end to end for local testing.

1. Create a free Resend account and API key.
2. Copy `.env.example` to `.env.local` and fill in:

   ```bash
   RESEND_API_KEY=re_your_key_here
   OWNER_EMAIL=you@example.com
   # Optional — defaults to Resend's shared test sender. Once you verify a
   # domain in Resend, switch this to an address on that domain.
   RESEND_FROM="Riglia Villas <onboarding@resend.dev>"
   ```

3. Restart `npm run dev`. Submitted inquiries will now email `OWNER_EMAIL`.

## Deploying to Vercel

1. Push this repo to GitHub (already done if you're reading this from the
   repo).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
   Framework preset is auto-detected as Next.js — no config needed.
3. Add the same environment variables from `.env.local`
   (`RESEND_API_KEY`, `OWNER_EMAIL`, optionally `RESEND_FROM`) under
   **Project Settings → Environment Variables**.
4. Deploy. To attach your own domain, go to **Project Settings → Domains**
   and follow Vercel's instructions to point your DNS at it.

## Project structure

```
app/
  page.tsx                 Home page (villa cards)
  villas/[slug]/page.tsx   Villa detail page (gallery, amenities, inquiry form)
  actions/inquiry.ts       Server Action that validates + emails inquiries
components/                Header, Footer, VillaCard, Gallery, InquiryForm
lib/villas.ts              Villa data + reads images from public/images/<slug>/
public/images/<slug>/      Photos per villa — add more anytime, no code changes
```
