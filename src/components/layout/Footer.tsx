import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { SERVICES, COMPANY, INDUSTRIES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative bg-ink text-white overflow-hidden border-t border-white/5">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-brand-2/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-2/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4 lg:pr-8">
            <div className="-mt-4 mb-6">
              <img
                src="/logo.png"
                alt="Raptron Logo"
                className="h-16 w-auto scale-[1.4] origin-left brightness-0 invert opacity-90 object-contain"
              />
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              {COMPANY.shortDescription}
            </p>
            <div className="mt-8 flex items-center gap-3">
              {[
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Facebook, label: "Facebook" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={`Follow us on ${label}`}
                  className="group size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-brand-2 hover:border-brand-2 hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon
                    size={18}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-6">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6 font-semibold">
              Services
            </h4>
            <ul className="space-y-4">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-brand-2 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-2/0 group-hover:bg-brand-2 transition-colors"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {s.shortTitle}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6 font-semibold">
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-brand-2 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-2/0 group-hover:bg-brand-2 transition-colors"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-brand-2 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-2/0 group-hover:bg-brand-2 transition-colors"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Contact
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-brand-2 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-2/0 group-hover:bg-brand-2 transition-colors"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Careers
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-brand-2 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-2/0 group-hover:bg-brand-2 transition-colors"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Insights
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6 font-semibold">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3 group cursor-pointer hover:text-white transition-colors">
                <div className="mt-0.5 p-1.5 rounded-md bg-white/5 group-hover:bg-brand-2/20 transition-colors">
                  <Mail size={14} className="text-brand-2" />
                </div>
                <span className="leading-tight pt-0.5 break-all">
                  {COMPANY.email}
                </span>
              </li>
              <li className="flex items-start gap-3 group cursor-pointer hover:text-white transition-colors">
                <div className="mt-0.5 p-1.5 rounded-md bg-white/5 group-hover:bg-brand-2/20 transition-colors">
                  <Phone size={14} className="text-brand-2" />
                </div>
                <span className="leading-tight pt-0.5">{COMPANY.phone}</span>
              </li>
              <li className="flex items-start gap-3 group cursor-pointer hover:text-white transition-colors">
                <div className="mt-0.5 p-1.5 rounded-md bg-white/5 group-hover:bg-brand-2/20 transition-colors">
                  <MapPin size={14} className="text-brand-2 shrink-0" />
                </div>
                <span className="leading-tight pt-0.5">{COMPANY.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 shrink-0 font-semibold">
              Industries We Serve
            </h4>
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-6 gap-y-4">
              {INDUSTRIES.map((ind) => (
                <div key={ind.name} className="flex items-center gap-2 group">
                  <ind.icon
                    size={14}
                    className="text-white/30 group-hover:text-brand-2 transition-colors"
                  />
                  <span className="text-sm font-medium text-white/50 group-hover:text-white transition-colors">
                    {ind.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 font-medium">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/40 font-medium">
            <a
              href="#"
              className="hover:text-white hover:underline underline-offset-4 transition-all"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline underline-offset-4 transition-all"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
