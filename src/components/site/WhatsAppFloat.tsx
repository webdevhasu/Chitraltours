import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald text-primary-foreground shadow-lg shadow-emerald/30 transition-transform hover:scale-110"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald/40" />
      <MessageCircle className="relative h-7 w-7" />
    </a>
  );
}