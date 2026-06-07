import { Link } from "react-router-dom";
import { PageTransition } from "@/components/site/PageTransition";
import { SEO } from "@/components/SEO";

export function NotFoundPage() {
  return (
    <PageTransition>
      <SEO title="Page Not Found" description="The page you are looking for does not exist." />
      <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="font-display text-8xl font-bold text-emerald">404</h1>
          <h2 className="mt-4 text-2xl font-semibold text-secondary font-display">Page not found</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track to exploring Chitral.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-emerald px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-emerald/90 hover:scale-105 shadow-md"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
