import { Sparkles } from "lucide-react";
import { buildWhatsAppUrl, tourInquiryMessage } from "@/lib/whatsapp";

export function UrgencyBanner() {
  return (
    <div className="bg-secondary text-primary-foreground">
      <a
        href={buildWhatsAppUrl(tourInquiryMessage("Shandur Pass Polo Festival 2026"))}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-xs font-medium tracking-wide sm:text-sm"
      >
        <Sparkles className="h-3.5 w-3.5 text-gold" />
        <span>
          <span className="text-gold">Shandur Polo Festival 2026</span> — July 7–9 · Limited seats ·{" "}
          <span className="underline-offset-4 hover:underline">Reserve on WhatsApp</span>
        </span>
      </a>
    </div>
  );
}