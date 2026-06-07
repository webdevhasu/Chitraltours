import { motion } from "framer-motion";
import { destinations } from "@/data/destinations";
import { PageTransition } from "@/components/site/PageTransition";
import { SEO } from "@/components/SEO";

export function DestinationsPage() {
  return (
    <PageTransition>
      <SEO 
        title="Chitral Destinations — Kalash, Shandur, Tirich Mir"
        description="Explore Chitral's must-see destinations: Kalash Valley, Shandur Pass, Tirich Mir, Garam Chashma, Chitral Fort, Bumburet and Rumbur."
        url="https://chitraltours.pk/destinations"
      />
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald">Destinations</span>
            <h1 className="mt-2 text-4xl text-secondary sm:text-5xl font-display">Where you'll go in Chitral</h1>
            <p className="mt-3 text-muted-foreground">
              Seven essential places that define the magic of Chitral — from ancient valleys to towering Hindu Kush peaks.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d, i) => (
              <motion.article
                key={d.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group overflow-hidden rounded-2xl bg-card shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={d.image} alt={d.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h2 className="font-display text-2xl text-secondary group-hover:text-emerald transition-colors">{d.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.blurb}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
