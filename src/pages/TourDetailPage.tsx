import { Link, useParams, Navigate } from "react-router-dom";
import { Clock, Check, MessageCircle, ArrowLeft } from "lucide-react";
import { getTour } from "@/data/tours";
import { buildWhatsAppUrl, tourInquiryMessage } from "@/lib/whatsapp";
import { LeadForm } from "@/components/site/LeadForm";
import { PageTransition } from "@/components/site/PageTransition";
import { SEO } from "@/components/SEO";

export function TourDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const tour = getTour(slug || "");

  if (!tour) return <Navigate to="/404" />;

  const tourSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.name,
    description: tour.short,
    image: tour.image,
    offers: { "@type": "Offer", price: tour.priceFrom, priceCurrency: "PKR" },
    provider: { "@type": "TravelAgency", name: "Chitral Tours" },
  };

  return (
    <PageTransition>
      <SEO 
        title={tour.name}
        description={`${tour.short} ${tour.duration}. From ${tour.priceFrom}. Book on WhatsApp.`}
        url={`https://chitraltours.pk/tours/${tour.slug}`}
        image={tour.image}
        type="product"
        structuredData={tourSchema}
      />
      <article>
        <section className="relative isolate flex min-h-[60vh] items-end overflow-hidden">
          <img src={tour.image} alt={tour.name} className="absolute inset-0 -z-10 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-secondary via-secondary/60 to-secondary/20" />
          <div className="mx-auto w-full max-w-7xl px-4 pb-12 pt-32 text-primary-foreground sm:px-6">
            <Link to="/tours" className="inline-flex items-center gap-1 text-sm text-primary-foreground/80 hover:text-gold transition-colors">
              <ArrowLeft className="h-4 w-4" /> All tours
            </Link>
            {tour.badge && (
              <span className="mt-3 inline-block rounded-full bg-gold px-3 py-1 text-xs font-semibold text-secondary">
                {tour.badge}
              </span>
            )}
            <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl md:text-6xl font-display">{tour.name}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-primary-foreground/80">
              <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {tour.duration}</span>
              <span>From <span className="text-gold font-semibold">{tour.priceFrom}</span></span>
            </div>
          </div>
        </section>

        <section className="bg-background py-16">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-lg text-muted-foreground leading-relaxed">{tour.short}</p>

              <h2 className="mt-10 text-3xl text-secondary font-display">Highlights</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {tour.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 rounded-xl bg-muted/50 p-4 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-12 text-3xl text-secondary font-display">Itinerary</h2>
              <ol className="mt-6 space-y-4">
                {tour.itinerary.map((step) => (
                  <li key={step.day} className="grid gap-2 rounded-2xl border border-border bg-card p-5 sm:grid-cols-[120px_1fr] hover:shadow-md transition-shadow">
                    <div className="font-display text-lg text-emerald">{step.day}</div>
                    <div>
                      <div className="font-semibold text-secondary">{step.title}</div>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Starting from</div>
                <div className="mt-1 font-display text-4xl text-secondary">{tour.priceFrom}</div>
                <p className="mt-2 text-xs text-muted-foreground">per person · subject to group size and season</p>
                <a
                  href={buildWhatsAppUrl(tourInquiryMessage(tour.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-emerald/90 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" /> Inquire on WhatsApp
                </a>
                <p className="mt-3 text-center text-xs text-muted-foreground">Or fill the form below ↓</p>
              </div>
            </aside>
          </div>

          <div className="mx-auto mt-16 max-w-3xl px-4 sm:px-6">
            <h2 className="text-3xl text-secondary font-display">Request a quote</h2>
            <p className="mt-2 text-sm text-muted-foreground">We'll get back to you on WhatsApp within minutes during business hours.</p>
            <div className="mt-6">
              <LeadForm defaultTour={tour.name} />
            </div>
          </div>
        </section>
      </article>
    </PageTransition>
  );
}
