import { useState } from "react";
import { z } from "zod";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { tours } from "@/data/tours";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
  email: z.string().trim().email("Please enter a valid email").max(120),
  date: z.string().trim().max(40).optional().or(z.literal("")),
  travelers: z.string().trim().max(10),
  tour: z.string().trim().max(80),
  message: z.string().trim().max(500).optional().or(z.literal("")),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function LeadForm({ defaultTour }: { defaultTour?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd) as Record<string, string>;
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const errs: Errors = {};
      for (const i of parsed.error.issues) errs[i.path[0] as keyof Errors] = i.message;
      setErrors(errs);
      setSubmitting(false);
      return;
    }
    setErrors({});
    const d = parsed.data;
    const msg =
      `Hello Chitral Tours, I would like to book a tour.\n\n` +
      `Name: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email}\n` +
      `Travel Date: ${d.date || "Flexible"}\nTravelers: ${d.travelers}\n` +
      `Preferred Tour: ${d.tour}\n` +
      (d.message ? `Message: ${d.message}` : "");
    window.open(buildWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
    setSubmitting(false);
  }

  const field = "w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-secondary outline-none transition focus:border-emerald focus:ring-2 focus:ring-emerald/20";

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-secondary">Full Name *</label>
          <input name="name" required className={field} placeholder="Your name" />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-secondary">Phone Number *</label>
          <input name="phone" required type="tel" className={field} placeholder="+92 3XX XXXXXXX" />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-secondary">Email *</label>
          <input name="email" required type="email" className={field} placeholder="you@example.com" />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-secondary">Travel Date</label>
          <input name="date" type="date" className={field} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-secondary">Number of Travelers</label>
          <input name="travelers" defaultValue="2" className={field} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-secondary">Preferred Tour</label>
          <select name="tour" defaultValue={defaultTour ?? tours[0].name} className={field}>
            {tours.map((t) => (
              <option key={t.slug} value={t.name}>{t.name}</option>
            ))}
            <option value="Custom / Not sure yet">Custom / Not sure yet</option>
          </select>
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-medium text-secondary">Message</label>
        <textarea name="message" rows={4} className={field} placeholder="Tell us about your trip — interests, group size, special needs…" />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01] disabled:opacity-60"
      >
        <MessageCircle className="h-4 w-4" />
        {submitting ? "Opening WhatsApp…" : "Send Inquiry via WhatsApp"}
      </button>
      <p className="text-center text-xs text-muted-foreground">We respond on WhatsApp within minutes during business hours.</p>
    </form>
  );
}