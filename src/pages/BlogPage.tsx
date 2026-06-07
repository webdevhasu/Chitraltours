import { Link } from "react-router-dom";
import { posts } from "@/data/blog";
import { PageTransition } from "@/components/site/PageTransition";
import { SEO } from "@/components/SEO";

export function BlogPage() {
  return (
    <PageTransition>
      <SEO 
        title="Chitral Travel Blog — Guides, Tips & Stories"
        description="Local travel guides for Chitral: Kalash Valley, Shandur Polo Festival, Tirich Mir trekking and Northern Pakistan travel tips."
        url="https://chitraltours.pk/blog"
      />
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald">Travel Blog</span>
            <h1 className="mt-2 text-4xl text-secondary sm:text-5xl font-display">Chitral travel guides & stories</h1>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {posts.map((p) => (
              <article key={p.slug} className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-xl duration-300">
                <Link to={`/blog/${p.slug}`} className="block aspect-[16/9] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </Link>
                <div className="p-6">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{p.date} · {p.readTime}</div>
                  <h2 className="mt-3 font-display text-2xl text-secondary">
                    <Link to={`/blog/${p.slug}`} className="hover:text-emerald transition-colors">{p.title}</Link>
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                  <Link to={`/blog/${p.slug}`} className="mt-5 inline-block text-sm font-semibold text-emerald hover:underline">Read article →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
