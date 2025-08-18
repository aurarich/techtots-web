"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// (You can remove the imports below if you’re not using the shadcn inputs yet)
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

export default function WeekendBookingPage() {
  // Refs for DOM fields we need to tweak imperatively
  const dateRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  // Simple toast state
  const [toast, setToast] = useState<{ type: "error" | "success"; msg: string } | null>(null);

  // Session enable/disable state (driven by chosen date)
  const [sessionDay, setSessionDay] = useState<null | "sat" | "sun">(null);

  // Init min/max on date and set weekend-only guard
  useEffect(() => {
    const el = dateRef.current;
    if (!el) return;

    // Limit to tomorrow → 90 days ahead
    const today = new Date();
    const min = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    const max = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 90);
    el.min = min.toISOString().slice(0, 10);
    el.max = max.toISOString().slice(0, 10);
  }, []);

  const isWeekend = (value: string) => {
    if (!value) return false;
    const d = new Date(value).getDay();
    return d === 6 || d === 0; // Sat=6, Sun=0
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value) return;

    if (!isWeekend(value)) {
      // Show error toast, clear invalid date
      setToast({ type: "error", msg: "Please select a Saturday or Sunday only." });
      e.target.value = "";
      setSessionDay(null);
      // auto-hide toast
      setTimeout(() => setToast(null), 6000);
      return;
    }

    // Valid weekend: choose which session options to enable
    const day = new Date(value).getDay();
    if (day === 6) setSessionDay("sat");
    else if (day === 0) setSessionDay("sun");
    else setSessionDay(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    // Demo: minimal validation hook (you may already rely on browser validity)
    if (!form.reportValidity()) return;

    // Show success toast (replace with real submit)
    setToast({ type: "success", msg: "Booking received! We’ll be in touch shortly." });
    setTimeout(() => setToast(null), 3500);

    form.reset();
    setSessionDay(null);
  };

  // Helpers to style/disable session radios
  const disabledOnSun = (value: string) => sessionDay === "sun" && (value === "sat-am" || value === "sat-pm");
  const disabledOnSat = (value: string) => sessionDay === "sat" && value === "sun-pm";
  const disabledIfNoDay = sessionDay === null;

  const radioDisabled = (value: string) =>
      disabledIfNoDay || disabledOnSun(value) || disabledOnSat(value);

  const radioLabelDim = (value: string) =>
      radioDisabled(value) ? "opacity-50 cursor-not-allowed" : "";

  return (
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-100 flex items-center justify-center py-16 px-4 relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

        <Card className="relative w-full max-w-4xl z-10 shadow-xl bg-white/90 backdrop-blur-xl py-5 space-y-8">
          <CardHeader className="text-center space-y-5">
            <CardTitle className="text-4xl font-extrabold text-primary">
              TechTots WonderLab – Weekend Booking
            </CardTitle>
            <p className="text-lg text-gray-700 leading-relaxed bg-white p-6">
              At <span className="font-bold text-blue-700">TechTots WonderLab</span>, every weekend is a world of discovery, creativity, and joy.
              We believe your child deserves the chance to explore new skills, make friends, and build confidence in a safe, inspiring space.
              From STEM adventures to arts, sports, and nature play, there’s something magical for every curious mind.
              Our passionate facilitators are ready to guide your ward through unforgettable learning experiences.
              <span className="font-semibold text-blue-700">
              We would be delighted to welcome your child — book their weekend session today and let the wonder begin!
            </span>
            </p>
          </CardHeader>

          <CardContent className="space-y-8">
            <form ref={formRef} onSubmit={handleSubmit} id="bookingForm" className="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-8">
              {/* Parent / Guardian Details */}
              <section>
                <h2 className="text-lg font-semibold text-[#0ea5e9]">Parent / Guardian Information</h2>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="parentName" className="block text-sm text-gray-700 mb-1 after:content-['*'] after:ml-1 after:text-red-500">
                      Full Name
                    </label>
                    <input
                        id="parentName"
                        name="parentName"
                        type="text"
                        required
                        placeholder="e.g., Ama Mensah"
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="parentPhone" className="block text-sm text-gray-700 mb-1 after:content-['*'] after:ml-1 after:text-red-500">
                      Phone (WhatsApp)
                    </label>
                    <input
                        id="parentPhone"
                        name="parentPhone"
                        type="tel"
                        inputMode="tel"
                        required
                        placeholder="e.g., +233 25 612 4133"
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="parentEmail" className="block text-sm text-gray-700 mb-1 after:content-['*'] after:ml-1 after:text-red-500">
                      Email
                    </label>
                    <input
                        id="parentEmail"
                        name="parentEmail"
                        type="email"
                        required
                        placeholder="e.g., techtots@vpwa.org"
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="howHeard" className="block text-sm text-gray-700 mb-1">
                      How did you hear about WonderLab?
                    </label>
                    <select
                        id="howHeard"
                        name="howHeard"
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    >
                      <option value="">Select…</option>
                      <option>Instagram</option>
                      <option>Facebook</option>
                      <option>TikTok</option>
                      <option>Friend / Family</option>
                      <option>Billboard</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* Child Details */}
              <section>
                <h2 className="text-lg font-semibold text-[#0ea5e9]">Child Information</h2>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="childName" className="block text-sm text-gray-700 mb-1 after:content-['*'] after:ml-1 after:text-red-500">
                      Child’s Full Name
                    </label>
                    <input
                        id="childName"
                        name="childName"
                        type="text"
                        required
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="childAge" className="block text-sm text-gray-700 mb-1 after:content-['*'] after:ml-1 after:text-red-500">
                      Age
                    </label>
                    <input
                        id="childAge"
                        name="childAge"
                        type="number"
                        min={2}
                        max={12}
                        required
                        placeholder="e.g., 6"
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="childNotes" className="block text-sm text-gray-700 mb-1">
                      Medical / Allergies / Special Notes
                    </label>
                    <textarea
                        id="childNotes"
                        name="childNotes"
                        rows={3}
                        placeholder="Optional"
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>
              </section>

              {/* Booking Details */}
              <section>
                <h2 className="text-lg font-semibold text-[#0ea5e9]">Booking Details</h2>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="sessionDate" className="block text-sm text-gray-700 mb-1 after:content-['*'] after:ml-1 after:text-red-500">
                      Preferred Date
                    </label>
                    <input
                        ref={dateRef}
                        onChange={handleDateChange}
                        id="sessionDate"
                        name="sessionDate"
                        type="date"
                        required
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                    <p className="text-xs text-gray-500 mt-1">Only Saturdays and Sundays are available.</p>
                  </div>

                  <div>
                  <span className="block text-sm text-gray-700 mb-2 after:content-['*'] after:ml-1 after:text-red-500">
                    Session
                  </span>

                    <div className="space-y-2" id="sessionGroup">
                      <label className={`flex items-center gap-3 ${radioLabelDim("sat-am")}`}>
                        <input
                            type="radio"
                            name="session"
                            value="sat-am"
                            disabled={radioDisabled("sat-am")}
                            className="accent-primary"
                        />
                        <span>Saturday Morning — 09:00–13:00</span>
                      </label>

                      <label className={`flex items-center gap-3 ${radioLabelDim("sat-pm")}`}>
                        <input
                            type="radio"
                            name="session"
                            value="sat-pm"
                            disabled={radioDisabled("sat-pm")}
                            className="accent-primary"
                        />
                        <span>Saturday Afternoon — 13:00–17:00</span>
                      </label>

                      <label className={`flex items-center gap-3 ${radioLabelDim("sun-pm")}`} id="sunPmRow">
                        <input
                            type="radio"
                            name="session"
                            value="sun-pm"
                            disabled={radioDisabled("sun-pm")}
                            className="accent-primary"
                        />
                        <span>Sunday Afternoon — 13:00–17:00</span>
                      </label>
                    </div>

                    <p id="sessionHint" className="text-xs text-gray-500 mt-2">
                      Sunday offers <span className="font-medium">Afternoon</span> sessions only.
                    </p>
                  </div>

                  <div>
                    <label htmlFor="numChildren" className="block text-sm text-gray-700 mb-1">
                      Number of Children
                    </label>
                    <input
                        id="numChildren"
                        name="numChildren"
                        type="number"
                        min={1}
                        max={3}
                        defaultValue={1}
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-1" htmlFor="addons">
                      Add-ons (optional)
                    </label>
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <label className="inline-flex items-center gap-2">
                        <input type="checkbox" name="addons" value="lunch" className="accent-primary" /> Lunch
                      </label>
                      <label className="inline-flex items-center gap-2">
                        <input type="checkbox" name="addons" value="early-drop" className="accent-primary" /> Early Drop-off (from 08:30)
                      </label>
                    </div>
                  </div>
                </div>
              </section>

              {/* Payment & Consent */}
              <section>
                <h2 className="text-lg font-semibold text-[#0ea5e9]">Payment & Consent</h2>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-700 mb-1 after:content-['*'] after:ml-1 after:text-red-500">
                      Payment Method
                    </label>
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <label className="inline-flex items-center gap-2">
                        <input type="radio" name="payment" value="momo" required className="accent-primary" /> Mobile Money
                      </label>
                      <label className="inline-flex items-center gap-2">
                        <input type="radio" name="payment" value="card" className="accent-primary" /> Card
                      </label>
                      <label className="inline-flex items-center gap-2">
                        <input type="radio" name="payment" value="arrival" className="accent-primary" /> Pay on Arrival
                      </label>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm text-gray-700 mb-1">
                      Additional Notes (optional)
                    </label>
                    <textarea
                        id="notes"
                        name="notes"
                        rows={3}
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="inline-flex items-start gap-3">
                      <input id="consent" type="checkbox" required className="mt-1 accent-primary" />
                      <span className="text-sm text-gray-700">
                      I confirm that the information provided is accurate and I consent to TechTots International School contacting me
                      regarding this booking. I agree to the WonderLab participation guidelines and safety rules.
                    </span>
                    </label>
                  </div>
                </div>
              </section>

              {/* Submit */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white font-semibold bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Book Session
                </button>
                <p className="text-xs text-gray-500">
                  We’ll confirm by email/WhatsApp within 24 hours. For queries: +233 25 612 4133 • techtots@vpwa.org • @techtotsgh
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Toast (custom, Tailwind) */}
        <div
            aria-live="polite"
            className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
                toast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
            }`}
        >
          {toast && (
              <div
                  className={`flex items-start gap-3 rounded-xl border p-4 shadow-xl bg-white ${
                      toast.type === "error" ? "border-rose-200" : "border-emerald-200"
                  }`}
              >
                <div
                    className={`mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full ${
                        toast.type === "error" ? "bg-rose-100 text-rose-600" : "bg-emerald-100 text-emerald-600"
                    }`}
                >
                  {toast.type === "error" ? "!" : "✓"}
                </div>
                <div className="text-sm text-gray-800">
                  <p className={`font-medium ${toast.type === "error" ? "text-rose-700" : "text-emerald-700"}`}>
                    {toast.type === "error" ? "Invalid date" : "Success"}
                  </p>
                  <p>{toast.msg}</p>
                </div>
                <button
                    type="button"
                    onClick={() => setToast(null)}
                    className="ml-2 rounded-md p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                    aria-label="Dismiss"
                >
                  ✕
                </button>
              </div>
          )}
        </div>
      </main>
  );
}
