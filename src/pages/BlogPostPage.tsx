import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { getPost } from "@/data/blog";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { PageTransition } from "@/components/site/PageTransition";
import { SEO } from "@/components/SEO";

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPost(slug || "");

  if (!post) return <Navigate to="/404" />;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: post.image,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Chitral Tours" },
  };

  return (
    <PageTransition>
      <SEO 
        title={post.title}
        description={post.excerpt}
        url={`https://chitraltours.pk/blog/${post.slug}`}
        image={post.image}
        type="article"
        structuredData={articleSchema}
      />
      <article className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-emerald transition-colors">
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>
          <div className="mt-6 text-xs text-muted-foreground uppercase tracking-wider">{post.date} · {post.readTime}</div>
          <h1 className="mt-3 text-4xl text-secondary sm:text-5xl font-display leading-[1.1]">{post.title}</h1>
          <div className="mt-8 aspect-[16/9] overflow-hidden rounded-2xl shadow-lg">
            <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
          </div>
          <div className="prose prose-lg mt-12 max-w-none text-muted-foreground prose-headings:font-display prose-headings:text-secondary prose-a:text-emerald">
            {post.body.map((para, i) => (
              <p key={i} className="mb-6 text-base leading-relaxed">{para}</p>
            ))}
          </div>
          <div className="mt-16 rounded-3xl bg-secondary p-10 text-center text-primary-foreground shadow-xl">
            <h2 className="text-3xl font-display">Ready to plan your trip?</h2>
            <p className="mt-3 text-sm text-primary-foreground/80">Get a custom Chitral itinerary on WhatsApp in minutes.</p>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald px-8 py-4 text-sm font-semibold hover:bg-emerald/90 transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> Book on WhatsApp
            </a>
          </div>
        </div>
      </article>
    </PageTransition>
  );
}
