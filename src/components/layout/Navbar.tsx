import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Calendar, ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/logo.png" alt="Raptron Logo" className="h-40 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <NavItem to="/" label="Home" />
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/services"
              className="px-4 h-10 inline-flex items-center gap-1 text-sm font-medium text-ink/80 hover:text-ink rounded-full transition"
            >
              Services <ChevronDown size={14} className={`transition ${servicesOpen ? "rotate-180" : ""}`} />
            </Link>
            <div
              className={`absolute left-1/2 -translate-x-[40%] top-[calc(100%+1rem)] w-[900px] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top-left ${
                servicesOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
              }`}
            >
              <div className="rounded-[2.5rem] bg-white border border-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden flex">
                <div className="flex-1 p-8">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40 font-semibold mb-6 px-3">Our Capabilities</div>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                    {SERVICES.map((s) => {
                      const Icon = s.icon;
                      return (
                        <Link
                          key={s.slug}
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          className="flex items-start gap-4 p-3 rounded-2xl hover:bg-surface-tinted transition-colors group"
                        >
                          <div className="size-10 rounded-xl bg-white border border-hairline flex items-center justify-center text-ink/60 group-hover:text-brand group-hover:border-brand/20 group-hover:shadow-sm transition-all shrink-0">
                            <Icon size={18} />
                          </div>
                          <div>
                            <div className="font-display font-semibold text-ink text-sm group-hover:text-brand transition-colors">{s.shortTitle}</div>
                            <div className="text-[13px] text-ink/60 mt-0.5 line-clamp-1">{s.tagline}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="w-[320px] bg-ink relative overflow-hidden p-8 flex flex-col justify-between group">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />
                  <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand/30 blur-[60px] rounded-full group-hover:scale-150 transition-transform duration-700" />
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-white mb-6">
                      <Sparkles size={12} className="text-brand-2" /> Transformation
                    </div>
                    <h4 className="font-display text-2xl font-bold text-white leading-snug mb-3">
                      Ready to scale your operations?
                    </h4>
                    <p className="text-white/60 text-sm leading-relaxed mb-8">
                      Book a discovery call to map out your digital infrastructure roadmap.
                    </p>
                  </div>
                  
                  <Link to="/book-consultation" className="relative z-10 w-full flex items-center justify-between p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition-colors group/btn">
                    <span className="font-semibold text-white text-sm">Book Consultation</span>
                    <div className="size-8 rounded-full bg-white text-ink flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                      <ArrowRight size={14} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <NavItem to="/about" label="About" />
          <NavItem to="/contact" label="Contact" />
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/request-demo"
            className="px-4 h-10 inline-flex items-center gap-1.5 text-sm font-medium text-ink rounded-full border border-brand/40 bg-surface-tinted transition shadow-sm"
          >
            Request Demo <ArrowRight size={14} />
          </Link>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="lg:hidden size-10 rounded-full border border-hairline flex items-center justify-center text-ink"
          aria-label="Open menu"
        >
          <Menu size={18} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-white transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-16 px-6 flex items-center justify-between border-b border-hairline">
          <img src="/logo.png" alt="Raptron Logo" className="h-40 w-auto" />
          <button onClick={() => setOpen(false)} className="size-10 rounded-full border border-hairline flex items-center justify-center" aria-label="Close menu">
            <X size={18} />
          </button>
        </div>
        <div className="p-6 space-y-1">
          <MobileLink to="/" label="Home" onClick={() => setOpen(false)} />
          <MobileLink to="/services" label="Services" onClick={() => setOpen(false)} />
          <div className="pl-4 space-y-1 mb-2">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-ink/70"
              >
                {s.shortTitle}
              </Link>
            ))}
          </div>
          <MobileLink to="/about" label="About" onClick={() => setOpen(false)} />
          <MobileLink to="/contact" label="Contact" onClick={() => setOpen(false)} />
          <div className="pt-6 space-y-3">
            <Link to="/request-demo" onClick={() => setOpen(false)} className="block text-center px-5 h-12 leading-[3rem] rounded-full border border-brand/40 bg-surface-tinted font-medium">
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      activeOptions={{ exact: to === "/" }}
      className="px-4 h-10 inline-flex items-center text-sm font-medium text-ink/80 hover:text-ink rounded-full transition data-[status=active]:text-brand"
    >
      {label}
    </Link>
  );
}

function MobileLink({ to, label, onClick }: { to: string; label: string; onClick: () => void }) {
  return (
    <Link to={to} onClick={onClick} className="block py-3 text-lg font-display font-semibold text-ink">
      {label}
    </Link>
  );
}
