import kalash from "@/assets/kalash-valley.jpg";
import shandur from "@/assets/shandur-pass.jpg";
import fort from "@/assets/chitral-fort.jpg";
import hero from "@/assets/hero-tirich-mir.jpg";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "best-places-to-visit-in-chitral",
    title: "Best Places to Visit in Chitral — A 2026 Travel Guide",
    excerpt:
      "From the Kalash valleys to Shandur Pass and Tirich Mir, the definitive list of must-see Chitral destinations.",
    date: "May 12, 2026",
    readTime: "8 min read",
    image: hero,
    body: [
      "Chitral, tucked into the far north of Khyber Pakhtunkhwa, is one of Pakistan's most rewarding travel destinations. Surrounded by the Hindu Kush range and crowned by Tirich Mir (7,708 m), it offers a rare blend of dramatic mountain scenery, ancient cultures, and welcoming people.",
      "Top spots include the three Kalash valleys (Bumburet, Rumbur and Birir), Shandur Pass, Garam Chashma's hot springs, the historic Chitral Fort, and the trekking trails toward Tirich Mir base camp.",
      "The best season to visit is May through October. July is special — the legendary Shandur Polo Festival fills the high plateau with horsemen, music and color.",
      "Plan with a local operator who knows the routes, the weather, and the families along the way. A custom itinerary turns a trip into an experience.",
    ],
  },
  {
    slug: "complete-kalash-valley-guide",
    title: "Complete Kalash Valley Guide: Culture, Festivals & Etiquette",
    excerpt:
      "Everything you need to know about visiting Bumburet, Rumbur and Birir respectfully and safely.",
    date: "April 28, 2026",
    readTime: "10 min read",
    image: kalash,
    body: [
      "The Kalash people are an indigenous community of roughly 4,000 living in three remote valleys near Chitral. Their language, religion and dress make them unlike any other group in Pakistan.",
      "Three festivals shape the Kalash calendar: Chilam Joshi (May), Uchau (August) and Choimus (December). Each features dance, music and centuries-old rituals.",
      "Always ask before photographing people, dress modestly, and stay in community-run guesthouses to ensure your visit benefits local families directly.",
      "Our Kalash Valley Cultural Tour includes hosted stays, a translator-guide, and meaningful interactions with elders, artisans and musicians.",
    ],
  },
  {
    slug: "shandur-pass-travel-guide",
    title: "Shandur Pass Travel Guide: Polo Festival 2026",
    excerpt:
      "Dates, logistics, packing and how to secure a spot at the world's highest polo ground.",
    date: "April 14, 2026",
    readTime: "7 min read",
    image: shandur,
    body: [
      "The Shandur Polo Festival 2026 runs July 7–9 on the Shandur Plateau (3,700 m), where teams from Chitral and Gilgit have competed in free-style polo for over a century.",
      "Reaching Shandur takes a full day of mountain driving from Chitral via Mastuj. We recommend 4WD vehicles and an acclimatization stop.",
      "Nights are cold even in July — pack down jackets, thermal layers, sunglasses and high-SPF sunscreen. Tented accommodation with all meals is the standard.",
      "Seats are limited and the festival is a long-standing favorite. Book early — we open Shandur 2026 bookings in early spring.",
    ],
  },
  {
    slug: "chitral-travel-tips",
    title: "Chitral Travel Tips: Safety, Money, Connectivity",
    excerpt:
      "Practical advice from a local operator: what to expect on the road, in markets and at hotels.",
    date: "March 30, 2026",
    readTime: "6 min read",
    image: fort,
    body: [
      "Chitral is one of the safest regions in Pakistan to visit. The Lowari Tunnel keeps the route open year-round and local hospitality is legendary.",
      "Carry cash — ATMs are limited outside Chitral town. Mobile signal is good in town but patchy in the valleys; download offline maps before you go.",
      "Mid-range hotels in Chitral are clean and comfortable. In the Kalash valleys and Mastuj, expect simpler guesthouses with shared facilities.",
      "Travelling with a local operator unlocks doors that solo travelers often miss — village dinners, festival access, and quiet viewpoints away from the crowd.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);