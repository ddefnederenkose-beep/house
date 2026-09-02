import fs from "fs";
import path from "path";

export type Villa = {
  slug: string;
  name: string;
  collection: string;
  tagline: string;
  location: string;
  region: string;
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
  sizeSqm: number;
  description: string[];
  bedroomBreakdown: { title: string; detail: string }[];
  amenities: string[];
  area: string;
  airbnbUrl: string;
  /** Greek short-term rental registry number — legally required wherever
   * the property is advertised, including this site, not just Airbnb. */
  registrationNumber?: string;
};

// All three villas sit in the same complex outside Agios Nikolaos, so the
// area/guest-access copy on their real Airbnb listings is identical.
const RIGLIA_AREA =
  "Riglia Villas sits just outside Agios Nikolaos, a fishing village on the Messinian Mani where the Taygetos mountains meet the Messinian Gulf. Stroll the harbour past colourful boats, eat at tavernas serving the day's catch, and watch the sunset over stone streets and bougainvillea. Stoupa's beaches and the Byzantine villages of Kardamyli are a short drive on, with hiking trails through olive groves nearby. By car it's about an hour from Kalamata International Airport (KLX) and roughly 3.5 hours from Athens; a private transfer from Kalamata can be arranged on request.";

// Sourced directly from each villa's real Airbnb listing.
export const villas: Villa[] = [
  {
    slug: "villa-stone",
    name: "Villa Stone",
    collection: "Riglia Villas",
    tagline: "Hidden in the olive grove, with a shared pool",
    location: "Rigklia, Mani Peninsula, Messinia, Greece",
    region: "Mani Peninsula",
    guests: 8,
    bedrooms: 3,
    beds: 5,
    baths: 3.5,
    sizeSqm: 190,
    description: [
      "Villa Stone is hidden in the heart of the olive grove, part of the same three-villa complex as Villa Olive and Villa Elea just outside Agios Nikolaos — private and secluded, away from the busier parts of the Mani.",
      "Two master bedrooms with en-suite bathrooms and a third bedroom with twin beds and a double sofa bed sleep up to 8 guests. The ground floor opens into one large living, dining, and fully equipped kitchen area.",
      "There's a shared pool with a lounge area for relaxing and dining al fresco, and a traditional BBQ. Like its sister villas, it's built so no resident looks directly onto another.",
    ],
    bedroomBreakdown: [
      { title: "Master bedroom 1", detail: "En-suite bathroom" },
      { title: "Master bedroom 2", detail: "En-suite bathroom" },
      { title: "Bedroom 3", detail: "Twin beds + double sofa bed" },
    ],
    amenities: [
      "Shared outdoor pool (seasonal, open 24 hours)",
      "Traditional BBQ",
      "Sea view",
      "Fully equipped kitchen",
      "Free WiFi",
      "Free parking on premises",
      "Pets allowed",
      "TV",
      "Washer",
      "Air conditioning",
      "Private patio or balcony",
      "Third bathroom + WC",
      "No direct sightlines to neighbouring villas",
    ],
    area: RIGLIA_AREA,
    airbnbUrl: "https://www.airbnb.com/rooms/884512839195153681",
    registrationNumber: "1249K91000335801",
  },
  {
    slug: "villa-olive",
    name: "Villa Olive",
    collection: "Riglia Villas",
    tagline: "Hidden in the olive grove, with a private pool of its own",
    location: "Rigklia, Mani Peninsula, Messinia, Greece",
    region: "Mani Peninsula",
    guests: 8,
    bedrooms: 3,
    beds: 4,
    baths: 3.5,
    sizeSqm: 190,
    description: [
      "Villa Olive is hidden in the heart of the olive grove, part of the same three-villa complex as Villa Stone and Villa Elea just outside Agios Nikolaos — private and secluded, away from the busier parts of the Mani.",
      "Two master bedrooms with en-suite bathrooms and a third bedroom with twin beds and a double sofa bed sleep up to 8 guests. The ground floor opens into one large living, dining, and fully equipped kitchen area.",
      "Villa Olive has its own private pool, with a lounge area around it for relaxing and dining al fresco, and a modern BBQ. Like its sister villas, it's built so no resident looks directly onto another.",
    ],
    bedroomBreakdown: [
      { title: "Master bedroom 1", detail: "En-suite bathroom" },
      { title: "Master bedroom 2", detail: "En-suite bathroom" },
      { title: "Bedroom 3", detail: "Twin beds + double sofa bed" },
    ],
    amenities: [
      "Private pool",
      "Modern BBQ",
      "Sea view",
      "Fully equipped kitchen",
      "Free WiFi",
      "Dedicated workspace",
      "Free parking on premises",
      "Pets allowed",
      "TV",
      "Washer",
      "Air conditioning",
      "Third bathroom + WC",
      "No direct sightlines to neighbouring villas",
    ],
    area: RIGLIA_AREA,
    airbnbUrl: "https://www.airbnb.com/rooms/882239988103666149",
    registrationNumber: "1249K91000335701",
  },
  {
    slug: "villa-elea",
    name: "Villa Elea",
    collection: "Riglia Villas",
    tagline: "Hidden in the olive grove, with a shared pool",
    location: "Rigklia, Mani Peninsula, Messinia, Greece",
    region: "Mani Peninsula",
    guests: 8,
    bedrooms: 3,
    beds: 5,
    baths: 3.5,
    sizeSqm: 190,
    description: [
      "Villa Elea is hidden in the heart of the olive grove, part of the same three-villa complex as Villa Stone and Villa Olive just outside Agios Nikolaos — private and secluded, away from the busier parts of the Mani.",
      "Two master bedrooms with en-suite bathrooms and a third bedroom with twin beds and a double sofa bed sleep up to 8 guests. The ground floor opens into one large living, dining, and fully equipped kitchen area.",
      "There's a shared pool with a lounge area for relaxing and dining al fresco, and a traditional BBQ. Like its sister villas, it's built so no resident looks directly onto another.",
    ],
    bedroomBreakdown: [
      { title: "Master bedroom 1", detail: "En-suite bathroom" },
      { title: "Master bedroom 2", detail: "En-suite bathroom" },
      { title: "Bedroom 3", detail: "Twin beds + double sofa bed" },
    ],
    amenities: [
      "Shared outdoor pool",
      "Traditional BBQ",
      "Sea view",
      "Fully equipped kitchen",
      "Free WiFi",
      "Free parking on premises",
      "Pets allowed",
      "TV",
      "Washer",
      "Air conditioning",
      "Exterior security cameras on property",
      "Third bathroom + WC",
      "No direct sightlines to neighbouring villas",
    ],
    area: RIGLIA_AREA,
    airbnbUrl: "https://www.airbnb.com/rooms/884535499524393516",
    // NOTE: the Airbnb listing you pasted shows this as 1249K91000335801 —
    // identical to Villa Stone's number. Registration numbers should be
    // unique per property under Greek short-term rental law, so this is
    // almost certainly a copy-paste slip on the listing itself. Worth
    // double-checking Elea's actual number before this goes live.
    registrationNumber: "1249K91000335801",
  },
];

export function getVilla(slug: string): Villa | undefined {
  return villas.find((v) => v.slug === slug);
}

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

export function getVillaImages(slug: string): string[] {
  const dir = path.join(process.cwd(), "public", "images", slug);
  try {
    return fs
      .readdirSync(dir)
      .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
      .sort()
      .map((file) => `/images/${slug}/${file}`);
  } catch {
    return [];
  }
}
