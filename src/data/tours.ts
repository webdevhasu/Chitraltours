import kalashImg from "@/assets/kalash-valley.jpg";
import shandurImg from "@/assets/shandur-pass.jpg";
import culturalImg from "@/assets/cultural.jpg";
import trekImg from "@/assets/tirich-mir-trek.jpg";
import familyImg from "@/assets/family-tour.jpg";
import honeymoonImg from "@/assets/honeymoon.jpg";

export type Tour = {
  slug: string;
  name: string;
  duration: string;
  priceFrom: string;
  image: string;
  short: string;
  highlights: string[];
  itinerary: { day: string; title: string; detail: string }[];
  badge?: string;
};

export const tours: Tour[] = [
  {
    slug: "kalash-valley-cultural-tour",
    name: "Kalash Valley Cultural Tour",
    duration: "5 Days · 4 Nights",
    priceFrom: "PKR 65,000",
    image: kalashImg,
    short:
      "Immerse yourself in the ancient Kalasha culture across Bumburet, Rumbur and Birir valleys.",
    highlights: [
      "Stay with Kalash community guesthouses",
      "Visit Bumburet, Rumbur & Birir valleys",
      "Traditional music, dance & local cuisine",
    ],
    itinerary: [
      { day: "Day 1", title: "Islamabad → Chitral", detail: "Scenic drive via Lowari Tunnel; overnight in Chitral town." },
      { day: "Day 2", title: "Chitral → Bumburet", detail: "Drive into the Kalash valley; village walk and welcome dinner." },
      { day: "Day 3", title: "Rumbur Valley", detail: "Full-day exploration of Rumbur, meet local artisans." },
      { day: "Day 4", title: "Birir & Return", detail: "Half-day Birir; return to Chitral town." },
      { day: "Day 5", title: "Chitral → Islamabad", detail: "Morning drive back to Islamabad." },
    ],
  },
  {
    slug: "shandur-pass-polo-festival",
    name: "Shandur Pass Polo Festival 2026",
    duration: "7 Days · 6 Nights",
    priceFrom: "PKR 95,000",
    image: shandurImg,
    badge: "July 7–9, 2026",
    short:
      "Witness the legendary free-style polo tournament at the world's highest polo ground (3,700m).",
    highlights: [
      "Reserved camping at Shandur Top",
      "All three festival days included",
      "Cultural night with Chitrali music",
    ],
    itinerary: [
      { day: "Day 1", title: "Islamabad → Chitral", detail: "Travel day via Lowari Tunnel." },
      { day: "Day 2", title: "Chitral → Mastuj", detail: "Drive to Mastuj, gateway to Shandur." },
      { day: "Day 3", title: "Mastuj → Shandur Top", detail: "Set up camp at Shandur for the festival." },
      { day: "Day 4", title: "Festival Day 1", detail: "Opening matches and cultural events." },
      { day: "Day 5", title: "Festival Day 2-3 & Return", detail: "Finals, then back to Chitral." },
      { day: "Day 6", title: "Garam Chashma Day Trip", detail: "Hot springs and valley sightseeing." },
      { day: "Day 7", title: "Chitral → Islamabad", detail: "Return journey." },
    ],
  },
  {
    slug: "chitral-cultural-heritage-experience",
    name: "Chitral Cultural Heritage Experience",
    duration: "4 Days · 3 Nights",
    priceFrom: "PKR 55,000",
    image: culturalImg,
    short:
      "Explore Chitral Fort, the Shahi Masjid and centuries-old traditions of the Kho people.",
    highlights: [
      "Guided tour of Chitral Fort & Shahi Masjid",
      "Meet local Chitrali artisans",
      "Traditional Chitrali dinner experience",
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Chitral", detail: "Welcome and orientation walk." },
      { day: "Day 2", title: "Heritage Day", detail: "Fort, mosque and bazaar tour." },
      { day: "Day 3", title: "Garam Chashma", detail: "Day trip to hot springs valley." },
      { day: "Day 4", title: "Departure", detail: "Return to Islamabad." },
    ],
  },
  {
    slug: "tirich-mir-base-camp-trek",
    name: "Tirich Mir Base Camp Trek",
    duration: "10 Days · 9 Nights",
    priceFrom: "PKR 145,000",
    image: trekImg,
    short:
      "Trek to the foot of Tirich Mir (7,708 m), the highest peak of the Hindu Kush range.",
    highlights: [
      "Certified mountain guides & porters",
      "Quality camping equipment included",
      "Acclimatization rest days built in",
    ],
    itinerary: [
      { day: "Day 1-2", title: "Islamabad → Chitral → Tirich Village", detail: "Drive and prep." },
      { day: "Day 3-7", title: "Trek to Base Camp", detail: "Staged ascent with rest days." },
      { day: "Day 8-9", title: "Descent", detail: "Return to Tirich Village and Chitral." },
      { day: "Day 10", title: "Return", detail: "Chitral to Islamabad." },
    ],
  },
  {
    slug: "family-chitral-tour",
    name: "Family Chitral Tour",
    duration: "6 Days · 5 Nights",
    priceFrom: "PKR 75,000 / family",
    image: familyImg,
    short:
      "A relaxed, family-friendly itinerary covering Chitral's most picturesque and safe spots.",
    highlights: [
      "Family-friendly accommodation",
      "Comfortable private 4WD transport",
      "Flexible pace for kids and elders",
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival", detail: "Drive to Chitral and rest." },
      { day: "Day 2", title: "City & Fort", detail: "Chitral Fort and bazaar." },
      { day: "Day 3", title: "Bumburet", detail: "Kalash valley day visit." },
      { day: "Day 4", title: "Garam Chashma", detail: "Hot springs day." },
      { day: "Day 5", title: "Leisure", detail: "Local picnic spot." },
      { day: "Day 6", title: "Return", detail: "Drive back to Islamabad." },
    ],
  },
  {
    slug: "chitral-honeymoon-escape",
    name: "Chitral Honeymoon Escape",
    duration: "5 Days · 4 Nights",
    priceFrom: "PKR 110,000 / couple",
    image: honeymoonImg,
    short:
      "A romantic mountain escape with boutique stays, candlelit dinners and private valley tours.",
    highlights: [
      "Boutique heritage accommodation",
      "Private guide and 4WD vehicle",
      "Candlelit riverside dinner",
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Chitral", detail: "Welcome bouquet and check-in." },
      { day: "Day 2", title: "Bumburet", detail: "Kalash valley with picnic lunch." },
      { day: "Day 3", title: "Garam Chashma", detail: "Hot springs and spa." },
      { day: "Day 4", title: "Private Valley Tour", detail: "Sunset photography spots." },
      { day: "Day 5", title: "Departure", detail: "Return with memories." },
    ],
  },
];

export const getTour = (slug: string) => tours.find((t) => t.slug === slug);