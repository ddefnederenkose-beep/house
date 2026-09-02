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

// The three villas share a floor plan and are marketed together as
// Riglia Villas / Riglia Private Residences in Rigklia, Mani. Specifics
// below are drawn from the public listings; double-check exact numbers
// against the live Airbnb pages before publishing (see README).
export const villas: Villa[] = [
  {
    slug: "villa-stone",
    name: "Villa Stone",
    collection: "Riglia Villas",
    tagline: "Stone-built calm above the Messinian Gulf",
    location: "Agios Nikolaos, Mani Peninsula, Messinia, Greece",
    region: "Mani Peninsula",
    guests: 8,
    bedrooms: 3,
    beds: 5,
    baths: 3.5,
    sizeSqm: 190,
    description: [
      "Villa Stone sits within a small, privately built complex of three sister villas on the edge of Agios Nikolaos, a stone-built village on the Mani Peninsula where the Taygetos mountains meet the Messinian Gulf.",
      "Inside, a large open-plan living and dining room opens onto a fully equipped kitchen, framed by the same rough stone and timber the region is known for. Two master bedrooms come with their own en-suite bathrooms; a third bedroom sleeps two more across twin beds and a double sofa bed.",
      "Outside, a shared pool and lounge area looks out over the gulf, with a traditional wood-fired BBQ for evenings in. The three villas are arranged so that no terrace looks directly into another — private even as part of a complex.",
    ],
    bedroomBreakdown: [
      { title: "Master bedroom 1", detail: "En-suite bathroom" },
      { title: "Master bedroom 2", detail: "En-suite bathroom" },
      { title: "Bedroom 3", detail: "Twin beds + double sofa bed" },
    ],
    amenities: [
      "Shared outdoor pool (seasonal)",
      "Traditional wood-fired BBQ",
      "Sea view",
      "Free WiFi",
      "Free parking on premises",
      "Fully equipped kitchen",
      "Open-plan living & dining room",
      "Third bathroom + WC",
      "No direct sightlines to neighbouring villas",
    ],
    area:
      "Agios Nikolaos is a small seaside village on the western coast of the Mani Peninsula, with stone streets, tavernas by the water, and the Taygetos mountains rising behind. Stoupa and Kardamyli are a short drive along the coast. Kalamata International Airport (KLX) is about an hour away; Athens is roughly 3.5 hours by car.",
    airbnbUrl: "https://www.airbnb.com/rooms/884512839195153681",
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
    area:
      "Riglia Villas sits just outside Agios Nikolaos, a fishing village on the Messinian Mani where the Taygetos mountains meet the Messinian Gulf. Stroll the harbour past colourful boats, eat at tavernas serving the day's catch, and watch the sunset over stone streets and bougainvillea. Stoupa's beaches and the Byzantine villages of Kardamyli are a short drive on, with hiking trails through olive groves nearby. By car it's about an hour from Kalamata International Airport (KLX) and roughly 3.5 hours from Athens; a private transfer from Kalamata can be arranged on request.",
    airbnbUrl: "https://www.airbnb.com/rooms/882239988103666149",
    registrationNumber: "1249K91000335701",
  },
  {
    slug: "villa-elea",
    name: "Villa Elea",
    collection: "Riglia Villas",
    tagline: "Traditional Mani stonework, five hundred metres from the beach",
    location: "Rigklia, Mani Peninsula, Messinia, Greece",
    region: "Mani Peninsula",
    guests: 8,
    bedrooms: 3,
    beds: 5,
    baths: 3.5,
    sizeSqm: 190,
    description: [
      "Villa Elea completes the trio of Riglia Villas, built in the traditional stone style of the Mani and set among olive trees roughly 500 metres from the sandy beach at Pantazi.",
      "The ground floor centres on a large living room around the fireplace and a fully equipped kitchen. Two master bedrooms have their own en-suite bathrooms, and a third bedroom sleeps two more across twin beds and a double sofa bed.",
      "Like its sister villas, Elea shares the complex's pool and lounge area, with a traditional BBQ and private terrace looking out over the gulf.",
    ],
    bedroomBreakdown: [
      { title: "Master bedroom 1", detail: "En-suite bathroom" },
      { title: "Master bedroom 2", detail: "En-suite bathroom" },
      { title: "Bedroom 3", detail: "Twin beds + double sofa bed" },
    ],
    amenities: [
      "Shared outdoor pool (seasonal)",
      "Traditional wood-fired BBQ",
      "~500m to Pantazi beach",
      "Free WiFi",
      "Free parking on premises",
      "Fully equipped kitchen",
      "Living room with fireplace",
      "Third bathroom + WC",
    ],
    area:
      "Rigklia sits just inland from Agios Nikolaos on the western Mani coast, among olive groves with the Taygetos mountains behind and the Messinian Gulf ahead. The sandy beach at Pantazi is about 500m away; Stoupa and Kardamyli are a short drive further. Kalamata International Airport (KLX) is about an hour away; Athens is roughly 3.5 hours by car.",
    airbnbUrl: "https://www.airbnb.com/rooms/884535499524393516",
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
