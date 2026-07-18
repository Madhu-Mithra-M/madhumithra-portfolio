import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";
import { cn } from "../lib/cn";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-ink/80 py-3 backdrop-blur-md" : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <button
          onClick={() => handleClick("hero")}
          className="font-display text-lg font-semibold tracking-tight text-mist-bright"
        >
        <h1 className="font-display text-lg font-bold text-mist-bright">
  Madhumithra M
</h1>
        </button>

        <nav className={cn("hidden items-center gap-1 rounded-full px-2 py-2 md:flex", scrolled && "glass")}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={cn(
                "relative rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors",
                active === link.id ? "text-ink" : "text-mist hover:text-mist-bright"
              )}
            >
              {active === link.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-teal"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </button>
          ))}
        </nav>

        <a
          href={profile.resumeUrl}
          download
          className="hidden rounded-full border border-panel-border px-4 py-2 font-mono text-xs uppercase tracking-wider text-mist-bright transition-colors hover:border-teal hover:text-teal md:inline-block"
        >
          Resume ↓
        </a>

        <button
          className="rounded-full border border-panel-border p-2 text-mist-bright md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="glass mx-4 mt-3 rounded-2xl md:hidden"
        >
          <div className="flex flex-col gap-1 p-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={cn(
                  "rounded-xl px-4 py-3 text-left font-mono text-xs uppercase tracking-wider",
                  active === link.id ? "bg-teal/10 text-teal" : "text-mist"
                )}
              >
                {link.label}
              </button>
            ))}
            <a
              href={profile.resumeUrl}
              download
              className="mt-1 rounded-xl border border-panel-border px-4 py-3 text-center font-mono text-xs uppercase tracking-wider text-mist-bright"
            >
              Resume ↓
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
