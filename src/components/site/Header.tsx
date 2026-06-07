import { NavLink, Link } from "react-router-dom";
import { Menu, X, Mountain, MessageCircle, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { to: "/", label: "Home" },
  { to: "/tours", label: "Tours" },
  { to: "/destinations", label: "Destinations" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Check initial dark mode
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? "bg-background/80 backdrop-blur-xl border-border/50 shadow-sm" 
          : "bg-background/95 backdrop-blur-md border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link to="/" className="group flex items-center gap-2 text-secondary">
          <Mountain className="h-6 w-6 text-emerald transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
          <span className="font-display text-xl tracking-tight">Chitral Tours</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-emerald ${
                  isActive ? "text-emerald" : "text-muted-foreground"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 text-muted-foreground hover:text-secondary transition-colors rounded-full hover:bg-muted"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-emerald/90 hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
        
        <div className="flex items-center gap-3 md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 text-muted-foreground hover:text-secondary transition-colors"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="rounded-md p-2 text-secondary"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden absolute w-full"
          >
            <nav className="flex flex-col px-4 py-3">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => 
                    `border-b border-border/50 py-3 text-base font-medium ${
                      isActive ? "text-emerald" : "text-secondary"
                    }`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 mb-4 inline-flex items-center justify-center gap-2 rounded-full bg-emerald px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}