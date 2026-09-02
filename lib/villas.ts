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
    tagline: "Hidden in the olive grove, steps from the pool",
    location: "Rigklia, Mani Peninsula, Messinia, Greece",
    region: "Mani Peninsula",
    guests: 8,
    bedrooms: 3,
    beds: 5,
    baths: 3.5,
    sizeSqm: 190,
    description: [
      "Villa Olive is the second of the three Riglia Villas, tucked into the same olive grove above Rigklia on the Mani Peninsula, and built to the same warm, stone-and-timber character as its sister villas.",
      "A bright open-plan living and dining space runs into a fully equipped kitchen, with two en-suite master bedrooms and a third bedroom set up for family or friends travelling together.",
      "The complex's shared pool and lounge sit just outside, with private terraces and gulf views, and the same quiet, low-key privacy the whole property is designed around.",
    ],
    bedroomBreakdown: [
      { title: "Master bedroom 1", detail: "En-suite bathroom" },
      { title: "Master bedroom 2", detail: "En-suite bathroom" },
      { title: "Bedroom 3", detail: "Twin beds + double sofa bed" },
    ],
    amenities: [
      "Shared outdoor pool (seasonal)",
      "Traditional wood-fired BBQ",
      "Olive grove setting",
      "Free WiFi",
      "Free parking on premises",
      "Fully equipped kitchen",
      "Private terrace with gulf views",
      "Third bathroom + WC",
    ],
    area:
      "Rigklia sits just inland from Agios Nikolaos on the western Mani coast, among olive groves with the Taygetos mountains behind and the Messinian Gulf ahead. Stoupa and Kardamyli are a short drive away. Kalamata International Airport (KLX) is about an hour away; Athens is roughly 3.5 hours by car.",
    airbnbUrl: "https://www.airbnb.com/rooms/882239988103666149",
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
