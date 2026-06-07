import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Layout components
import { Header } from "./components/site/Header";
import { Footer } from "./components/site/Footer";
import { WhatsAppFloat } from "./components/site/WhatsAppFloat";
import { UrgencyBanner } from "./components/site/UrgencyBanner";
import { ScrollToTop } from "./components/site/ScrollToTop";

// Pages
import { HomePage } from "./pages/HomePage";
import { ToursPage } from "./pages/ToursPage";
import { TourDetailPage } from "./pages/TourDetailPage";
import { AboutPage } from "./pages/AboutPage";
import { DestinationsPage } from "./pages/DestinationsPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      <ScrollToTop />
      <UrgencyBanner />
      <Header />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/tours" element={<ToursPage />} />
            <Route path="/tours/:slug" element={<TourDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
