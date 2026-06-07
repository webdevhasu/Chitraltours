import { Link } from "react-router-dom";
import { tours } from "@/data/tours";
import { TourCard } from "@/components/site/TourCard";
import { PageTransition } from "@/components/site/PageTransition";
import { SEO } from "@/components/SEO";

export function ToursPage() {
  return (
    <PageTransition>
      <SEO 
        title="Chitral Travel Packages — All Tours"
        description="Browse all Chitral tour packages: Kalash Valley, Shandur Polo Festival 2026, Tirich Mir trek, family and honeymoon tours. Inquire on WhatsApp."
        url="https://chitraltours.pk/tours"
      />
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald">Tour Packages</span>
            <h1 className="mt-2 text-4xl text-secondary sm:text-5xl font-display">Chitral Tour Packages</h1>
            <p className="mt-3 text-muted-foreground">
              From cultural immersion in the Kalash valleys to high-altitude adventures at Shandur and Tirich Mir — every itinerary is crafted by Chitralis who know these mountains best.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tours.map((t, i) => <TourCard key={t.slug} tour={t} index={i} />)}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
