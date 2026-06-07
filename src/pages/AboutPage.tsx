import { Link } from "react-router-dom";
import aboutImg from "@/assets/about-team.jpg";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { PageTransition } from "@/components/site/PageTransition";
import { SEO } from "@/components/SEO";

export function AboutPage() {
  return (
    <PageTransition>
      <SEO 
        title="About Chitral Tours — Local Tour Operator"
        description="A Chitrali-founded tour operator with 10+ years of guiding travelers through Kalash, Shandur and Tirich Mir. Local people, honest pricing, real experiences."
        url="https://chitraltours.pk/about"
      />
      <section className="bg-secondary py-20 text-primary-foreground sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/20 via-secondary to-secondary opacity-50"></div>
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 relative z-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">About Us</span>
          <h1 className="mt-2 text-5xl sm:text-6xl font-display">A local story, told in mountains</h1>
          <p className="mt-5 text-primary-foreground/80 leading-relaxed text-lg">
            We're Chitralis. We were raised between the Hindu Kush peaks and the Kalash valleys — and we built Chitral Tours to share that home with travelers who care.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
            <img src={aboutImg} alt="Chitral Tours founder" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="space-y-6 text-muted-foreground">
            <h2 className="text-3xl text-secondary sm:text-4xl font-display">Founded in Chitral, run from Chitral</h2>
            <p className="leading-relaxed">
              Chitral Tours started in 2015 when our founder, a guide in the Kalash valleys, kept hearing the same thing from visitors: <em className="text-secondary font-medium">"This is the most beautiful place I've ever been — why doesn't anyone know about it?"</em>
            </p>
            <p className="leading-relaxed">
              Ten years later we operate hundreds of trips a year, from a single couple's honeymoon to international trekking expeditions to Tirich Mir. We've stayed small on purpose: every traveler gets a real human, every itinerary is built by hand, and every guide is Chitrali.
            </p>
            <p className="leading-relaxed">
              We partner with community guesthouses, hire from our valleys, and donate a share of every tour to two schools in Chitral district. Tourism here works best when it gives back.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border mt-6">
              <div><div className="font-display text-4xl text-emerald">500+</div><div className="text-xs uppercase tracking-wider mt-1 text-muted-foreground">Happy travelers</div></div>
              <div><div className="font-display text-4xl text-emerald">4.9★</div><div className="text-xs uppercase tracking-wider mt-1 text-muted-foreground">Average rating</div></div>
              <div><div className="font-display text-4xl text-emerald">10+</div><div className="text-xs uppercase tracking-wider mt-1 text-muted-foreground">Years guiding</div></div>
            </div>
            <div className="flex gap-3 pt-6">
              <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-emerald/90 transition-colors">
                <MessageCircle className="h-4 w-4" /> Talk to us
              </a>
              <Link to="/tours" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-secondary hover:bg-accent transition-colors">
                Browse tours
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
