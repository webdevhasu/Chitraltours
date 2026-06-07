import { Link } from "react-router-dom";
import { Mountain, MessageCircle, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { WHATSAPP_DISPLAY, buildWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-secondary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent"></div>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 relative z-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Mountain className="h-6 w-6 text-gold" strokeWidth={1.5} />
              <span className="font-display text-xl">Chitral Tours</span>
            </div>
            <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">
              A local-led tour operator helping travelers discover the untouched beauty of Chitral and Northern Pakistan.
            </p>
            <div className="mt-5 flex gap-4 text-primary-foreground/70">
              <a aria-label="Facebook" href="#" className="hover:text-gold transition-colors hover:scale-110 transform"><Facebook className="h-5 w-5" /></a>
              <a aria-label="Instagram" href="#" className="hover:text-gold transition-colors hover:scale-110 transform"><Instagram className="h-5 w-5" /></a>
              <a aria-label="YouTube" href="#" className="hover:text-gold transition-colors hover:scale-110 transform"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Quick Links</h4>
            <ul className="mt-6 space-y-3 text-sm">
              <li><Link to="/tours" className="hover:text-emerald transition-colors">All Tours</Link></li>
              <li><Link to="/destinations" className="hover:text-emerald transition-colors">Destinations</Link></li>
              <li><Link to="/about" className="hover:text-emerald transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-emerald transition-colors">Travel Blog</Link></li>
              <li><Link to="/contact" className="hover:text-emerald transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Popular Tours</h4>
            <ul className="mt-6 space-y-3 text-sm">
              <li><Link to="/tours/shandur-pass-polo-festival" className="hover:text-emerald transition-colors">Shandur Polo Festival 2026</Link></li>
              <li><Link to="/tours/kalash-valley-cultural-tour" className="hover:text-emerald transition-colors">Kalash Valley Tour</Link></li>
              <li><Link to="/tours/tirich-mir-base-camp-trek" className="hover:text-emerald transition-colors">Tirich Mir Trek</Link></li>
              <li><Link to="/tours/chitral-honeymoon-escape" className="hover:text-emerald transition-colors">Honeymoon Escape</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Contact</h4>
            <ul className="mt-6 space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-gold shrink-0" /> <span>Shahi Bazaar, Chitral, KPK, Pakistan</span></li>
              <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-gold shrink-0" /> <a href="mailto:hello@chitraltours.pk" className="hover:text-emerald transition-colors">hello@chitraltours.pk</a></li>
              <li className="flex items-start gap-3"><MessageCircle className="mt-0.5 h-4 w-4 text-gold shrink-0" />
                <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-emerald transition-colors">{WHATSAPP_DISPLAY}</a>
              </li>
            </ul>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald px-5 py-2.5 text-sm font-semibold hover:bg-emerald/90 transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> Book on WhatsApp
            </a>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 text-xs text-primary-foreground/60 sm:flex-row">
          <span>© {new Date().getFullYear()} Chitral Tours. All rights reserved.</span>
          <span>
            Website by{" "}
            <a href="https://hassu.netlify.app" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors font-medium">Hassan Wali</a>
            {" "}&middot;{" "}
            <a href="mailto:webdevhasu@gmail.com" className="hover:text-gold transition-colors">webdevhasu@gmail.com</a>
          </span>
        </div>
      </div>
    </footer>
  );
}