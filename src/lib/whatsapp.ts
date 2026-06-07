export const WHATSAPP_NUMBER = "923474054450";
export const WHATSAPP_DISPLAY = "+92 347 4054450";

const DEFAULT_MESSAGE =
  "Hello Chitral Tours, I am interested in booking a tour package. Please share details.";

export function buildWhatsAppUrl(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function tourInquiryMessage(tourName: string): string {
  return `Hello Chitral Tours, I am interested in the "${tourName}" package. Please share details, pricing and available dates.`;
}