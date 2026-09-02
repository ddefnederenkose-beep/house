# Prompt for Claude Code

Copy everything below into Claude Code to kick off the project.

---

Build me a real, deployable website for renting out 3 vacation villas in Greece. Guests should be able to browse each villa and submit a **booking inquiry form** (not live payment/instant booking) — I'll confirm bookings manually by contacting them.

## Tech stack
Use Next.js (App Router) + Tailwind CSS, set up so it can be deployed straight to Vercel with my own domain. Keep it a single clean repo, no unnecessary backend complexity — a simple API route (or a form service like Formspree/Resend) is enough to handle inquiry submissions and email them to me.

## Pages needed
1. **Home page** — hero section, short intro, a card for each of the 3 villas (photo, name, location, key stats, "View & Inquire" link)
2. **Villa detail page** (one per villa) — photo gallery, description, amenities list, bedroom/bathroom breakdown, location/area description, and an inquiry form (name, email, phone, check-in date, check-out date, number of guests, message)
3. **Simple confirmation state** after form submission ("Thanks, I'll get back to you within 24 hours" or similar)

## The 3 villas — data to use

### Villa Stone (Riglia Villas)
Source: https://www.airbnb.com/rooms/884512839195153681
- Entire villa in Rigklia, Greece (Mani Peninsula, near Agios Nikolaos, Messinia)
- 8 guests · 3 bedrooms · 5 beds · 3.5 baths, ~190 m²
- Two master bedrooms with en-suite bathrooms, third bedroom with twin beds + double sofa bed, third bathroom + WC
- Large open-plan living/dining room + fully equipped kitchen
- Shared outdoor pool (seasonal) with lounge area and traditional BBQ, part of a 3-villa complex built for privacy (no direct sightlines between villas)
- Sea view, wifi, free parking on premises
- ~1 hour drive from Kalamata International Airport (KLX), ~3.5 hours from Athens
- Area: charming seaside village of Agios Nikolaos, Mani Peninsula — Taygetos mountains, Messinian Gulf, stone streets, tavernas, nearby Stoupa beaches and Kardamyli

### Villa Olive
Source: https://www.airbnb.com/rooms/882239988103666149
**Fetch this URL yourself to pull the current title, description, bedroom/bathroom count, guest capacity, amenities, and location details** — I wasn't able to retrieve it due to a URL length issue on my end.

### Villa Elea
Source: https://www.airbnb.com/rooms/884535499524393516
**Fetch this URL yourself too**, same as above — pull title, description, capacity, amenities, and location.

## Photos
All three villas' photos are in my Google Drive under a folder called "house", with a subfolder per villa: "Villa Stone", "Villa Olive", "Villa Elea" (roughly 10 photos each). If you have Google Drive access configured, pull them from there. Otherwise, I'll download the folders locally and place them in `/public/images/villa-stone/`, `/public/images/villa-olive/`, `/public/images/villa-elea/` — build the gallery components to read from those folders.

## Design direction
Warm, minimal, editorial feel — like a boutique villa rental site, not a generic template. Neutral tones (stone, olive, cream) with the villa photos doing the visual work. Good typography, generous whitespace, mobile-responsive.

## Booking flow
- No payment processing, no live calendar/availability sync
- Form submission should email me the inquiry details (ask me for my email if you need it, or use a placeholder I can swap in)
- Basic client + server-side validation on the form

## Deployment
Set the project up so I can deploy it to Vercel and attach a custom domain. Include a short README with deployment steps.

---

Start by fetching the two remaining Airbnb listings, then scaffold the project.
