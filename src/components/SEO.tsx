import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  type?: "website" | "article" | "product";
  locale?: string;
  structuredData?: Record<string, any>;
}

export function SEO({
  title = "Chitral Tours — Premium Travel & Tour Operator in Chitral, Pakistan",
  description = "Personalized Chitral tours, Kalash Valley, Shandur Polo Festival 2026 & Tirich Mir treks. Trusted local operator. Book on WhatsApp.",
  url = "https://chitraltours.pk",
  image = "https://chitraltours.pk/assets/hero-tirich-mir.jpg",
  type = "website",
  locale = "en_PK",
  structuredData,
}: SEOProps) {
  const finalTitle = title.includes("Chitral Tours") ? title : `${title} | Chitral Tours`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{finalTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Geo / Regional tags for Pakistan & Chitral */}
      <meta name="geo.region" content="PK-KP" />
      <meta name="geo.placename" content="Chitral" />
      <meta name="geo.position" content="35.8510;71.7864" />
      <meta name="ICBM" content="35.8510, 71.7864" />
      <link rel="alternate" href={url} hrefLang="en-PK" />
      <link rel="alternate" href={url} hrefLang="en" />
      <link rel="alternate" href={url} hrefLang="x-default" />

      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="Chitral Tours" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@chitraltours" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Optional Structured Data (JSON-LD) passed from page */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
