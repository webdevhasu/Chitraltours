import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import { WHATSAPP_DISPLAY, buildWhatsAppUrl } from "@/lib/whatsapp";
import { LeadForm } from "@/components/site/LeadForm";
import { PageTransition } from "@/components/site/PageTransition";
import { SEO } from "@/components/SEO";

export function ContactPage() {
  return (
    <PageTransition>
      <SEO 
        title="Contact Chitral Tours — Book Your Trip on WhatsApp"
        description="Contact Chitral Tours via WhatsApp, phone or email. Quick responses, custom itineraries, transparent pricing."
        url="https://chitraltours.pk/contact"
      />
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald">Contact</span>
            <h1 className="mt-2 text-4xl text-secondary sm:text-5xl font-display">Plan your Chitral trip</h1>
            <p className="mt-3 text-muted-foreground">
              The fastest way to reach us is WhatsApp — we usually respond within minutes during business hours.
            </p>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
            <aside className="space-y-4">
              <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:shadow-md hover:border-emerald/30">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald/10 text-emerald group-hover:bg-emerald group-hover:text-primary-foreground transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp (fastest)</div>
                  <div className="font-semibold text-secondary">{WHATSAPP_DISPLAY}</div>
                </div>
              </a>
              <a href={`tel:+923474054450`} className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:shadow-md hover:border-gold/30">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold group-hover:bg-gold group-hover:text-secondary transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Call</div>
                  <div className="font-semibold text-secondary">{WHATSAPP_DISPLAY}</div>
                </div>
              </a>
              <a href="mailto:hello@chitraltours.pk" className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-primary-foreground transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                  <div className="font-semibold text-secondary">hello@chitraltours.pk</div>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Office</div>
                  <div className="font-semibold text-secondary">Shahi Bazaar, Chitral, KPK, Pakistan</div>
                </div>
              </div>
              
              {/* Google Maps Embed for Chitral */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-sm h-48 w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102613.5658605545!2d71.71383791054363!3d35.85108253164104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dca08f0a71676f%3A0xc3f8e53001dd1eb1!2sChitral%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1714571988998!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chitral Tours Location"
                ></iframe>
              </div>
            </aside>

            <LeadForm />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
