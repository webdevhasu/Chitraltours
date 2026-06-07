import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Star, Shield, Users, Wallet, Clock, Compass, Heart } from "lucide-react";
import heroImg from "@/assets/hero-tirich-mir.jpg";
import aboutImg from "@/assets/about-team.jpg";
import { tours } from "@/data/tours";
import { destinations } from "@/data/destinations";
import { TourCard } from "@/components/site/TourCard";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { PageTransition } from "@/components/site/PageTransition";
import { SEO } from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";

const whyUs = [
  { icon: Users, title: "Experienced Local Guides", body: "Born-and-raised Chitrali guides who open doors solo travelers never see." },
  { icon: Shield, title: "Safe & Reliable Transport", body: "Well-maintained 4WD Land Cruisers driven by veteran mountain drivers." },
  { icon: Compass, title: "Custom Tour Planning", body: "Every itinerary is tailored to your pace, group size and interests." },
  { icon: Wallet, title: "Affordable Pricing", body: "Transparent, all-inclusive packages with no hidden costs." },
  { icon: Clock, title: "24/7 Customer Support", body: "Real humans on WhatsApp before, during and after your trip." },
  { icon: Heart, title: "Authentic Local Experiences", body: "Community-stays, family dinners, and off-the-map valleys." },
];

const testimonials = [
  { name: "Ayesha K.", city: "Karachi", tour: "Kalash Valley Tour", stars: 5, text: "Felt like traveling with friends. Our guide Ismail knew every family in Bumburet — the homestay night was magical." },
  { name: "Daniel R.", city: "London, UK", tour: "Tirich Mir Trek", stars: 5, text: "Professionally run expedition. Equipment, food and pacing were excellent. Reached base camp safely." },
  { name: "Hassan M.", city: "Lahore", tour: "Shandur Polo Festival", stars: 5, text: "The Shandur trip exceeded every expectation. The team handled permits, camping and food flawlessly." },
  { name: "Sara T.", city: "Islamabad", tour: "Family Chitral Tour", stars: 5, text: "Booked for my parents and kids — pace was perfect, hotels comfortable, driver patient. Would book again." },
  { name: "Omar B.", city: "Dubai", tour: "Honeymoon Escape", stars: 5, text: "Romantic, thoughtful and intimate. The candlelight dinner by the river was unforgettable." },
  { name: "Fatima A.", city: "Peshawar", tour: "Cultural Heritage", stars: 5, text: "Loved the depth of storytelling at Chitral Fort. Felt like Chitral chose us, not the other way around." },
];

const faqs = [
  { q: "How much does a Chitral tour cost?", a: "Our packages start from PKR 55,000 per person for a 4-day cultural tour and go up to PKR 145,000 for a 10-day Tirich Mir base camp trek. Custom itineraries can be quoted on request." },
  { q: "What transport do you use?", a: "Comfortable, well-maintained 4WD Toyota Land Cruisers and Hiace vans driven by experienced Chitrali drivers familiar with mountain roads." },
  { q: "Where will we stay?", a: "A mix of mid-range hotels in Chitral town, boutique heritage stays where available, and community-run guesthouses in the Kalash valleys and Mastuj." },
  { q: "When is the best time to visit Chitral?", a: "May to October. July is special for the Shandur Polo Festival. Spring brings the Kalash Chilam Joshi festival, autumn brings golden landscapes." },
  { q: "Is Chitral safe for tourists and families?", a: "Yes. Chitral is one of Pakistan's safest regions with a strong hospitality culture. We travel with local guides and follow all official routes." },
  { q: "When does the Shandur Polo Festival 2026 start?", a: "Shandur Polo Festival 2026 is scheduled for July 7–9, 2026 on the Shandur Plateau. We recommend booking 2–3 months in advance." },
  { q: "How do I book?", a: "The fastest way is WhatsApp — tap any 'Book on WhatsApp' button on this site. You can also use the contact form and we'll reply within minutes during business hours." },
  { q: "Can you customize a private tour?", a: "Absolutely. Tell us your dates, group size and interests and we'll build a private itinerary just for you." },
];

function Counter({ end, suffix = "", delay = 0 }: { end: number; suffix?: string; delay?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    setTimeout(() => {
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
    }, delay);
  }, [end, delay]);

  return <span>{count}{suffix}</span>;
}

export function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <PageTransition>
      <SEO 
        title="Chitral Tours — Discover the Untouched Beauty of Chitral, Pakistan"
        description="Premium personalized Chitral tours: Kalash Valley, Shandur Polo Festival 2026, Tirich Mir trek and more. Local experts. Book on WhatsApp."
        structuredData={faqSchema}
      />
      {/* HERO */}
      <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden">
        <motion.img
          src={heroImg}
          alt="Tirich Mir peak at golden hour, Chitral, Pakistan"
          width={1920}
          height={1280}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/70 via-secondary/40 to-secondary/90" />
        <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl text-primary-foreground"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-medium tracking-wide text-gold">
              <Star className="h-3 w-3 fill-gold" /> Trusted local operator since 2015
            </span>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
              Discover the <em className="text-gold not-italic">Untouched Beauty</em> of Chitral
            </h1>
            <p className="mt-5 max-w-xl text-lg text-primary-foreground/85">
              Personalized Tours · Local Experts · Unforgettable Experiences
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-emerald/30 transition-transform hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" /> Book on WhatsApp
              </a>
              <Link
                to="/tours"
                className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-transparent px-7 py-3.5 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-secondary"
              >
                Explore Tour Packages <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-6 border-t border-primary-foreground/20 pt-6 text-sm sm:grid-cols-4">
              <div>
                <dt className="font-display text-3xl text-gold"><Counter end={500} suffix="+" delay={500} /></dt>
                <dd className="text-primary-foreground/70">Happy travelers</dd>
              </div>
              <div>
                <dt className="font-display text-3xl text-gold">4.9★</dt>
                <dd className="text-primary-foreground/70">Average rating</dd>
              </div>
              <div>
                <dt className="font-display text-3xl text-gold"><Counter end={10} suffix="+" delay={500} /> yrs</dt>
                <dd className="text-primary-foreground/70">Local expertise</dd>
              </div>
              <div>
                <dt className="font-display text-3xl text-gold">24/7</dt>
                <dd className="text-primary-foreground/70">WhatsApp support</dd>
              </div>
            </dl>
          </motion.div>
        </div>
      </section>

      {/* TOURS */}
      <section id="tours" className="bg-background py-20 sm:py-28 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald">Tour Packages</span>
              <h2 className="mt-2 max-w-2xl text-4xl text-secondary sm:text-5xl font-display">Featured Chitral Tours</h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Hand-crafted itineraries led by Chitrali locals. Inquire on WhatsApp for live availability and custom dates.
              </p>
            </div>
            <Link to="/tours" className="inline-flex items-center gap-1 text-sm font-semibold text-emerald hover:underline">
              View all tours <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tours.map((t, i) => <TourCard key={t.slug} tour={t} index={i} />)}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald">Why Choose Us</span>
            <h2 className="mt-2 text-4xl text-secondary sm:text-5xl font-display">Built by Chitralis, for travelers</h2>
            <p className="mt-3 text-muted-foreground">
              We're a small, family-run team that treats every trip like our own.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold group-hover:bg-gold group-hover:text-secondary transition-colors">
                  <w.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl text-secondary font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald">Destinations</span>
              <h2 className="mt-2 text-4xl text-secondary sm:text-5xl font-display">Where you'll go</h2>
            </div>
            <Link to="/destinations" className="text-sm font-semibold text-emerald hover:underline">View gallery →</Link>
          </div>
          <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
            {destinations.slice(0, 6).map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`group relative overflow-hidden rounded-2xl ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              >
                <img src={d.image} alt={d.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
                <div className="absolute bottom-0 p-4 text-primary-foreground">
                  <h3 className="font-display text-xl">{d.name}</h3>
                  <p className="text-xs text-primary-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">{d.blurb}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary py-20 text-primary-foreground sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/40 via-secondary to-secondary"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">Testimonials</span>
            <h2 className="mt-2 text-4xl sm:text-5xl font-display">Loved by travelers</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur hover:bg-primary-foreground/10 transition-colors duration-300"
              >
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: t.stars }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-gold" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-primary-foreground/90">"{t.text}"</blockquote>
                <figcaption className="mt-5 border-t border-primary-foreground/10 pt-4 text-sm">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-primary-foreground/60">{t.city} · {t.tour}</div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald">About Chitral Tours</span>
            <h2 className="mt-2 text-4xl text-secondary sm:text-5xl font-display">Local stories. Honest travel.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Chitral Tours was founded by Chitrali locals who grew up between the Hindu Kush peaks and the Kalash valleys. Over a decade later, we still pour the same care into every itinerary — from a couple's first weekend in Bumburet to a 10-day Tirich Mir expedition.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We hire from our community, partner with local guesthouses, and donate a share of every tour to schools across Chitral district.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-emerald hover:underline group">
              Read our full story <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl"
          >
            <img src={aboutImg} alt="Chitral Tours local founder" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute -bottom-px left-0 right-0 bg-gradient-to-t from-background to-transparent p-12" />
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald">FAQ</span>
            <h2 className="mt-2 text-4xl text-secondary sm:text-5xl font-display">Common questions</h2>
          </div>
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-b border-border">
                <AccordionTrigger className="text-left text-base font-semibold text-secondary hover:no-underline hover:text-emerald transition-colors">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden bg-secondary py-20 text-primary-foreground sm:py-28">
        <div className="absolute inset-0 -z-10 opacity-20">
          <img src={heroImg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-secondary/80 backdrop-blur-sm -z-10" />
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-4xl sm:text-5xl font-display">Ready to see Chitral your way?</h2>
          <p className="mt-4 text-primary-foreground/80">
            Tell us your dates and we'll build a private itinerary within hours. Limited seats remain for Shandur 2026.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald px-7 py-3.5 text-sm font-semibold shadow-lg shadow-emerald/30 transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" /> Book on WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-7 py-3.5 text-sm font-semibold text-gold hover:bg-gold hover:text-secondary transition-colors"
            >
              Get a custom quote
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
