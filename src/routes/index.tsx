import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calendar,
  ArrowRight,
  Sparkles,
  Workflow,
  BrainCircuit,
  Quote,
  Star,
  ArrowUpRight,
  Zap,
  Database,
  Terminal,
} from "lucide-react";
import { SERVICES, INDUSTRIES, STATS, TESTIMONIALS, PROCESS_STEPS } from "@/lib/constants";
import { CTABanner } from "@/components/layout/PageHero";
import { Reveal } from "@/components/Reveal";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RAPTRON Digital Solutions — ERP, AI & Custom Software" },
      {
        name: "description",
        content:
          "Transform your business operations with precision technology — ERP consulting, AI, and custom software from RAPTRON Digital Solutions LLC.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main className="w-full bg-white overflow-x-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `,
        }}
      />
      <Hero />
      <IndustriesTicker />
      <TechEcosystem />
      <ValueBento />
      <ServicesShowcase />
      <ProcessTimeline />
      <StatsSection />
      <TestimonialMarquee />
      <CTABanner />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-mist">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50 mix-blend-multiply" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[400px] bg-brand/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-10" />

      <div className="relative z-20 w-full max-w-7xl px-6 lg:px-10 text-center flex flex-col items-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-hairline shadow-sm mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand"></span>
            </span>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-ink font-semibold">
              The Future of Enterprise Tech
            </span>
          </div>

          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-[5.5rem] leading-[1.05] text-ink max-w-5xl mx-auto">
            Architecting <span className="text-brand">Intelligent</span>{" "}
            <br className="hidden sm:block" /> Business Systems.
          </h1>

          <p className="mt-6 text-xl sm:text-2xl text-ink/70 max-w-3xl mx-auto leading-relaxed">
            We merge ERP consulting, AI automation, and custom software to build the operational
            backbone of tomorrow's industry leaders.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book-consultation"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-gradient-brand text-white font-semibold text-lg shadow-card hover:shadow-glow transition-all hover:scale-105"
            >
              <Calendar size={20} /> Book Free Consultation
            </Link>
            <Link
              to="/request-demo"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full border border-hairline text-ink font-semibold text-lg hover:border-brand/40 hover:bg-surface-tinted transition-colors"
            >
              Request Demo <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>

        {/* Hero Visual Bento */}
        <Reveal>
          <div className="mt-20 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-[2rem] bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] text-left">
            <div className="col-span-1 md:col-span-2 bg-ink rounded-2xl p-8 lg:p-10 relative overflow-hidden group">
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand/30 blur-[80px] rounded-full group-hover:scale-150 group-hover:bg-brand-2/40 transition-all duration-700" />
              <div className="relative z-10">
                <Workflow className="text-brand-2 mb-8" size={40} />
                <h3 className="text-white font-display text-3xl font-bold mb-3">
                  ERP Architecture
                </h3>
                <p className="text-white/60 text-base max-w-sm">
                  Orchestrating complex enterprise resource planning deployments with zero downtime
                  and total strategic alignment.
                </p>
              </div>
            </div>
            <div className="col-span-1 bg-gradient-brand rounded-2xl p-8 lg:p-10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
              <div className="relative z-10">
                <BrainCircuit className="text-white mb-8" size={40} />
                <h3 className="text-white font-display text-3xl font-bold mb-3">AI Agents</h3>
                <p className="text-white/80 text-base">
                  Deploying autonomous intelligence into your core operational workflows.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function IndustriesTicker() {
  return (
    <div className="w-full border-b border-hairline bg-white py-8 overflow-hidden flex items-center relative z-20">
      {/* Left side overlay */}
      <div className="absolute left-0 top-0 bottom-0 z-20 flex items-center bg-white pl-6 lg:pl-10 pr-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">
          Trusted Across Sectors
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-32 translate-x-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex gap-16 px-6 whitespace-nowrap">
        {[...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES].map(({ name, icon: Icon }, i) => (
          <div
            key={`${name}-${i}`}
            className="flex items-center gap-3 text-ink/60 font-semibold text-lg hover:text-brand transition-colors cursor-default"
          >
            <Icon size={24} className="text-brand/50" />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TechEcosystem() {
  return (
    <section className="py-12 bg-mist border-b border-hairline relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-ink/40 font-semibold whitespace-nowrap">
          Core Technologies
        </h3>
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-10 lg:gap-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default">
          {/* Odoo */}
          <div className="text-4xl font-display font-bold tracking-tighter text-[#714B67] select-none">
            odoo
          </div>
          {/* SAP */}
          <div className="text-4xl font-display font-extrabold tracking-wide text-[#008FD3] select-none italic">
            SAP
          </div>
          {/* ZOHO */}
          <div className="flex items-center gap-1 select-none shadow-sm">
            <div className="size-8 rounded-sm bg-[#E42528] flex items-center justify-center text-white font-bold text-xl">
              Z
            </div>
            <div className="size-8 rounded-sm bg-[#41B649] flex items-center justify-center text-white font-bold text-xl">
              O
            </div>
            <div className="size-8 rounded-sm bg-[#F89C1E] flex items-center justify-center text-white font-bold text-xl">
              H
            </div>
            <div className="size-8 rounded-sm bg-[#00A1E0] flex items-center justify-center text-white font-bold text-xl">
              O
            </div>
          </div>
          {/* ERP Next */}
          <div className="text-4xl font-display font-bold text-[#006aff] select-none tracking-tight">
            ERP<span className="font-light">Next</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueBento() {
  return (
    <section className="py-28 lg:py-36 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="font-display font-extrabold text-5xl sm:text-6xl tracking-tight text-ink">
              Beyond Implementation.
            </h2>
            <p className="mt-6 text-xl text-ink/60">We engineer unfair competitive advantages.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 auto-rows-[320px]">
            {/* Box 1 */}
            <div className="md:col-span-2 rounded-[2rem] border border-hairline bg-surface-tinted p-12 relative overflow-hidden group hover:shadow-card transition-all duration-500 hover:-translate-y-1">
              <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700">
                <Database size={300} />
              </div>
              <div className="relative z-10">
                <h3 className="font-display text-4xl font-bold text-ink">Data Supremacy</h3>
                <p className="mt-4 text-ink/65 max-w-md text-lg leading-relaxed">
                  We don't just migrate data; we structure it to feed predictive AI models, automate
                  reporting, and power real-time executive dashboards.
                </p>
              </div>
            </div>
            {/* Box 2 */}
            <div className="md:col-span-1 rounded-[2rem] border border-hairline bg-ink p-12 relative overflow-hidden group hover:shadow-glow transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
              <div className="relative z-10">
                <Zap className="text-brand-2 mb-8" size={40} />
                <h3 className="font-display text-3xl font-bold text-white">Velocity</h3>
                <p className="mt-4 text-white/60 text-lg leading-relaxed">
                  Shipping custom modules 4x faster with our proprietary enterprise frameworks.
                </p>
              </div>
            </div>
            {/* Box 3 */}
            <div className="md:col-span-1 rounded-[2rem] border border-hairline bg-gradient-brand p-12 text-white hover:scale-[1.02] transition-transform duration-500 group">
              <Terminal
                className="mb-8 opacity-80 group-hover:opacity-100 transition-opacity"
                size={40}
              />
              <h3 className="font-display text-3xl font-bold">Code Quality</h3>
              <p className="mt-4 text-white/90 text-lg leading-relaxed">
                Enterprise-grade architecture built to scale securely and continuously.
              </p>
            </div>
            {/* Box 4 */}
            <div className="md:col-span-2 rounded-[2rem] border border-hairline bg-white shadow-sm p-12 relative overflow-hidden group hover:shadow-card transition-all duration-500 hover:-translate-y-1">
              <div className="flex flex-col justify-center h-full max-w-xl relative z-10">
                <h3 className="font-display text-4xl font-bold text-ink">Total Ownership</h3>
                <p className="mt-4 text-ink/65 text-lg leading-relaxed">
                  From initial process audit to post-go-live optimization. One accountable team,
                  zero handoffs, absolute transparency.
                </p>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-dot-grid opacity-30 [mask-image:linear-gradient(to_left,black,transparent)] group-hover:opacity-50 transition-opacity duration-700" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServicesShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-32 bg-ink text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="font-mono text-sm uppercase tracking-widest text-brand-2 mb-6">
                Core Disciplines
              </div>
              <h2 className="font-display font-extrabold text-5xl lg:text-6xl tracking-tight mb-12">
                Precision <br /> capabilities.
              </h2>
              <div className="space-y-2">
                {SERVICES.map((s, i) => (
                  <div
                    key={s.slug}
                    className={`group cursor-pointer border-l-4 pl-6 py-4 transition-all duration-300 ${activeIdx === i ? "border-brand-2 bg-white/5 rounded-r-2xl" : "border-white/10 hover:border-white/30 hover:bg-white/5 rounded-r-2xl"}`}
                    onClick={() => setActiveIdx(i)}
                  >
                    <h3
                      className={`font-display text-2xl font-bold transition-colors ${activeIdx === i ? "text-white" : "text-white/40 group-hover:text-white/70"}`}
                    >
                      {s.title}
                    </h3>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIdx === i ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
                    >
                      <p className="text-white/60 mb-5 leading-relaxed">{s.tagline}</p>
                      <Link
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        className="inline-flex items-center gap-2 text-brand-2 text-sm font-semibold hover:text-white transition-colors"
                      >
                        Learn More <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative h-[650px] rounded-[2.5rem] border border-white/10 bg-white/5 overflow-hidden flex items-center justify-center p-12 shadow-2xl backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-mesh opacity-20 mix-blend-screen" />
                {SERVICES.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.slug}
                      className={`absolute inset-0 flex flex-col items-center justify-center p-12 text-center transition-all duration-700 transform ${activeIdx === i ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95 pointer-events-none"}`}
                    >
                      <div className="size-40 rounded-full bg-brand/20 flex items-center justify-center mb-10 border border-brand/30 shadow-[0_0_80px_rgba(85,9,217,0.5)] backdrop-blur-md">
                        <Icon
                          size={72}
                          className="text-brand-2 drop-shadow-[0_0_15px_rgba(163,54,255,0.8)]"
                        />
                      </div>
                      <h4 className="font-display text-4xl font-bold text-white mb-6 tracking-tight">
                        {s.shortTitle}
                      </h4>
                      <ul className="space-y-4 text-left inline-block">
                        {s.bullets.map((b) => (
                          <li key={b} className="text-white/80 flex items-center gap-3 text-lg">
                            <Sparkles size={16} className="text-brand-2 shrink-0" /> {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProcessTimeline() {
  return (
    <section className="py-32 bg-mist overflow-hidden relative">
      <div className="absolute top-0 right-0 w-full h-full bg-dot-grid opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <Reveal>
          <div className="text-center mb-28">
            <h2 className="font-display font-extrabold text-5xl lg:text-6xl text-ink">
              Engineering Success
            </h2>
            <p className="mt-6 text-xl text-ink/60">
              A deterministic methodology for digital transformation.
            </p>
          </div>

          <div className="relative mt-20">
            {/* Horizontal Line */}
            <div className="absolute top-0 left-[5%] right-[5%] h-1 bg-gradient-to-r from-transparent via-brand/40 to-transparent hidden md:block" />

            <div className="grid md:grid-cols-5 gap-10 md:gap-4 relative z-10">
              {PROCESS_STEPS.map((step, i) => (
                <div key={step.title} className="relative group flex flex-col md:items-center">
                  {/* Glowing Node */}
                  <div className="absolute -top-3 md:-top-4 left-0 md:left-1/2 md:-translate-x-1/2 size-8 rounded-full bg-white border-4 border-mist flex items-center justify-center group-hover:border-brand transition-colors duration-300 shadow-sm z-20">
                    <div className="size-2.5 rounded-full bg-brand group-hover:scale-150 transition-transform duration-300 group-hover:shadow-[0_0_10px_#5509D9]" />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`mt-8 md:mt-0 md:pt-12 transition-all duration-500 md:group-hover:-translate-y-2 w-full ${i % 2 !== 0 ? "md:pt-32" : ""}`}
                  >
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-hairline group-hover:shadow-card transition-all relative overflow-hidden text-left md:text-center h-full">
                      <div className="font-mono text-5xl font-bold text-ink/5 absolute -top-2 -right-2 group-hover:text-brand/10 transition-colors pointer-events-none select-none">
                        0{i + 1}
                      </div>
                      <h4 className="font-display font-bold text-2xl mb-3 text-ink relative z-10">
                        {step.title}
                      </h4>
                      <p className="text-base text-ink/65 relative z-10 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-28 bg-brand-deep text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-40 mix-blend-screen" />
      <div className="absolute inset-0 bg-dot-grid opacity-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8 divide-x-0 md:divide-x divide-white/10 text-center md:text-left">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="md:pl-8 first:pl-0 flex flex-col items-center md:items-start"
              >
                <Counter value={s.value} suffix={s.suffix} label={s.label} delay={i * 100} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Counter({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            io.disconnect();
            const start = performance.now();
            const duration = 2000;
            const step = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 4); // Quartic ease out
              setCount(Math.round(value * eased));
              if (t < 1) requestAnimationFrame(step);
            };
            setTimeout(() => requestAnimationFrame(step), delay);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, delay]);

  return (
    <div ref={ref}>
      <div className="font-display font-extrabold text-6xl lg:text-7xl tracking-tighter text-white drop-shadow-md">
        {count}
        <span className="text-brand-2">{suffix}</span>
      </div>
      <div className="mt-4 text-base lg:text-lg font-medium text-white/70">{label}</div>
    </div>
  );
}

function TestimonialMarquee() {
  return (
    <section className="py-32 bg-white overflow-hidden relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-hairline to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center mb-20">
        <Reveal>
          <div className="font-mono text-sm uppercase tracking-widest text-brand mb-4">
            Client Voices
          </div>
          <h2 className="font-display font-extrabold text-5xl lg:text-6xl text-ink">
            Trusted by Visionaries
          </h2>
        </Reveal>
      </div>

      {/* CSS Marquee animation */}
      <div className="relative w-full flex overflow-x-hidden">
        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-8 px-4 whitespace-nowrap py-4">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="w-[450px] shrink-0 whitespace-normal rounded-[2rem] bg-surface-tinted p-10 border border-hairline hover:border-brand/40 transition-colors hover:shadow-card group"
            >
              <div className="flex gap-1.5 text-brand mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-xl text-ink/80 font-medium mb-10 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-5">
                <div className="size-14 rounded-full bg-gradient-brand text-white flex items-center justify-center font-display font-bold text-2xl shadow-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-display font-bold text-xl text-ink">{t.name}</div>
                  <div className="text-base text-ink/60 mt-1">
                    {t.title}, {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
