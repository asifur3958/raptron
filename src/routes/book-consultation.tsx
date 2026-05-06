import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Check,
  Clock,
} from "lucide-react";
import { z } from "zod";
import { Field, SuccessState } from "./contact";

export const Route = createFileRoute("/book-consultation")({
  head: () => ({
    meta: [
      { title: "Book Consultation — RAPTRON" },
      {
        name: "description",
        content:
          "Book a free 45-minute strategy session with RAPTRON Digital Solutions.",
      },
    ],
  }),
  component: BookConsultationPage,
});

const TIME_SLOTS = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  company: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(5).max(40),
  message: z.string().trim().max(2000).optional(),
});

function BookConsultationPage() {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);
  const [viewMonth, setViewMonth] = useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1),
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [step, setStep] = useState<"pick" | "form" | "done">("pick");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const days = useMemo(() => buildMonthGrid(viewMonth), [viewMonth]);

  const onConfirm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((iss) => {
        errs[String(iss.path[0])] = iss.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    // TODO: Integrate with Calendly API or Odoo Calendar module
    setStep("done");
  };

  return (
    <section className="pt-24 pb-12 min-h-screen bg-mist">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-lift bg-white border border-hairline min-h-[640px]">
          {/* Left panel */}
          <div className="relative bg-gradient-brand text-white p-10 lg:p-12 overflow-hidden">
            <div className="absolute inset-0 bg-dot-grid opacity-20 animate-drift" />
            <div className="absolute -top-20 -right-20 size-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-brand-deep/40 blur-3xl" />
            <div className="relative">
              <div className="flex items-baseline gap-2">
                <span className="font-display font-extrabold text-2xl">
                  RAPTRON
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/70">
                  Digital Solutions
                </span>
              </div>
              <h1 className="mt-12 font-display font-bold text-4xl lg:text-5xl leading-tight">
                Book your free strategy session.
              </h1>
              <ul className="mt-10 space-y-4">
                {[
                  "45-minute focused consultation",
                  "Understand your current tech challenges",
                  "Get a preliminary digital transformation roadmap",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="size-6 rounded-md bg-white/15 backdrop-blur flex items-center justify-center mt-0.5">
                      <Check size={14} />
                    </span>
                    <span className="text-white/90">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12 pt-6 border-t border-white/20 font-mono text-xs uppercase tracking-[0.18em] text-white/70">
                No commitment. Just clarity.
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="p-8 lg:p-12">
            {step === "pick" && (
              <>
                {/* Calendar */}
                <div className="flex items-center justify-between">
                  <h2 className="font-display font-bold text-2xl flex items-center gap-2">
                    <Calendar size={20} className="text-brand" /> Pick a date
                  </h2>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() =>
                        setViewMonth(
                          new Date(
                            viewMonth.getFullYear(),
                            viewMonth.getMonth() - 1,
                            1,
                          ),
                        )
                      }
                      className="size-9 rounded-full border border-hairline flex items-center justify-center hover:border-brand/40 transition"
                      aria-label="Previous month"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <div className="text-sm font-semibold w-32 text-center">
                      {viewMonth.toLocaleString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                    <button
                      onClick={() =>
                        setViewMonth(
                          new Date(
                            viewMonth.getFullYear(),
                            viewMonth.getMonth() + 1,
                            1,
                          ),
                        )
                      }
                      className="size-9 rounded-full border border-hairline flex items-center justify-center hover:border-brand/40 transition"
                      aria-label="Next month"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-7 gap-1 text-center">
                  {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                    <div
                      key={i}
                      className="font-mono text-[10px] uppercase tracking-widest text-ink/40 py-2"
                    >
                      {d}
                    </div>
                  ))}
                  {days.map(({ date, currentMonth }, i) => {
                    const disabled =
                      !currentMonth ||
                      date < today ||
                      date.getDay() === 0 ||
                      date.getDay() === 6;
                    const isSelected =
                      selectedDate &&
                      date.toDateString() === selectedDate.toDateString();
                    return (
                      <button
                        key={i}
                        disabled={disabled}
                        onClick={() => {
                          setSelectedDate(date);
                          setSelectedSlot(null);
                        }}
                        className={`aspect-square rounded-lg text-sm font-medium transition ${
                          isSelected
                            ? "bg-gradient-brand text-white shadow-card"
                            : disabled
                              ? "text-ink/20 cursor-not-allowed"
                              : "text-ink hover:bg-surface-tinted"
                        }`}
                      >
                        {date.getDate()}
                      </button>
                    );
                  })}
                </div>

                {/* Time slots */}
                <div
                  className={`mt-8 transition-opacity ${selectedDate ? "opacity-100" : "opacity-50 pointer-events-none"}`}
                >
                  <h3 className="font-display font-bold text-lg flex items-center gap-2">
                    <Clock size={18} className="text-brand" /> Select a time
                  </h3>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`h-11 rounded-full text-sm font-medium border transition ${
                          selectedSlot === slot
                            ? "bg-gradient-brand text-white border-transparent shadow-card"
                            : "border-hairline hover:border-brand/40 hover:bg-surface-tinted"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  disabled={!selectedDate || !selectedSlot}
                  onClick={() => setStep("form")}
                  className="mt-8 w-full h-12 rounded-full bg-gradient-brand text-white font-semibold shadow-card hover:shadow-glow transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </>
            )}

            {step === "form" && selectedDate && selectedSlot && (
              <form onSubmit={onConfirm} className="space-y-4">
                <button
                  type="button"
                  onClick={() => setStep("pick")}
                  className="text-sm font-medium text-ink/60 hover:text-brand inline-flex items-center gap-1"
                >
                  <ChevronLeft size={14} /> Back
                </button>
                <div className="rounded-2xl bg-surface-tinted border border-hairline p-5">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand">
                    Selected slot
                  </div>
                  <div className="mt-2 font-display font-bold text-xl text-ink">
                    {selectedDate.toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                    <span className="text-brand"> · {selectedSlot}</span>
                  </div>
                </div>
                <Field name="name" label="Full Name" error={errors.name} />
                <Field
                  name="company"
                  label="Company Name"
                  error={errors.company}
                />
                <Field
                  name="email"
                  label="Work Email"
                  type="email"
                  error={errors.email}
                />
                <Field
                  name="phone"
                  label="Phone"
                  type="tel"
                  error={errors.phone}
                />
                <Field
                  name="message"
                  label="Brief requirement (optional)"
                  textarea
                  error={errors.message}
                />
                <button
                  type="submit"
                  className="w-full h-12 rounded-full bg-gradient-brand text-white font-semibold shadow-card hover:shadow-glow transition"
                >
                  Confirm Booking
                </button>
              </form>
            )}

            {step === "done" && (
              <SuccessState
                title="You're booked."
                text={`We've reserved ${selectedDate?.toLocaleDateString("en-US", { month: "long", day: "numeric" })} at ${selectedSlot}. A confirmation email is on its way.`}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function buildMonthGrid(month: Date) {
  const first = new Date(month.getFullYear(), month.getMonth(), 1);
  const startDow = first.getDay();
  const start = new Date(first);
  start.setDate(first.getDate() - startDow);
  const out: { date: Date; currentMonth: boolean }[] = [];
  for (let i = 0; i < 42; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    d.setHours(0, 0, 0, 0);
    out.push({ date: d, currentMonth: d.getMonth() === month.getMonth() });
  }
  return out;
}
