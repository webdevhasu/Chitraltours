import { Link } from "react-router-dom";
import { Clock, Check, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import type { Tour } from "@/data/tours";
import { buildWhatsAppUrl, tourInquiryMessage } from "@/lib/whatsapp";

export function TourCard({ tour, index = 0 }: { tour: Tour; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-xl hover:border-emerald/30 duration-300"
    >
      <Link to={`/tours/${tour.slug}`} className="relative block aspect-[4/3] overflow-hidden">
        <img
          src={tour.image}
          alt={tour.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {tour.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-secondary shadow-md z-10">
            {tour.badge}
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs font-medium text-emerald bg-emerald/10 w-fit px-2.5 py-1 rounded-full mb-3">
          <Clock className="h-3.5 w-3.5" /> {tour.duration}
        </div>
        <h3 className="text-xl text-secondary font-display font-medium">
          <Link to={`/tours/${tour.slug}`} className="hover:text-emerald transition-colors">
            {tour.name}
          </Link>
        </h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{tour.short}</p>
        <ul className="mt-5 space-y-2 text-sm">
          {tour.highlights.slice(0, 2).map((h) => (
            <li key={h} className="flex items-start gap-2 text-muted-foreground">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald" /> <span className="line-clamp-1">{h}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-end justify-between border-t border-border pt-5">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">From</div>
            <div className="font-display text-2xl text-secondary">{tour.priceFrom}</div>
          </div>
          <a
            href={buildWhatsAppUrl(tourInquiryMessage(tour.name))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-emerald px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-emerald/90 hover:scale-105 shadow-sm"
          >
            <MessageCircle className="h-4 w-4" /> Inquire
          </a>
        </div>
      </div>
    </motion.article>
  );
}