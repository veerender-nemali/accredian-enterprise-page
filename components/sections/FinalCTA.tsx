"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setDone(false);

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong.");
      setDone(true);
      e.currentTarget.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to submit.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="enquire" className="section pt-20">
      <Container>
        <div className="overflow-hidden rounded-[36px] bg-violet p-7 text-white md:p-12 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Want to learn more?"
                title="Let's build the right learning solution for your team."
                description="Speak with our advisor about your goals, capability gaps and the outcomes you want to create."
              />
              <div className="mt-9">
                <Button href="mailto:enterprise@accredian.com" variant="lime">Contact Us</Button>
              </div>
            </div>

            <div className="rounded-[28px] bg-white p-6 text-ink md:p-8">
              {done ? (
                <div className="grid min-h-[360px] place-items-center text-center">
                  <div>
                    <div className="mx-auto grid size-16 place-items-center rounded-full bg-violet/10 text-violet">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="mt-6 font-display text-3xl font-semibold tracking-[-.04em]">Enquiry received</h3>
                    <p className="mt-3 max-w-sm text-sm leading-7 text-muted">
                      Thanks for reaching out. Our advisor will get back to you shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={submit} className="grid gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-[-.04em]">Speak with our advisor</h3>
                    <p className="mt-2 text-sm text-muted">Tell us a little about your requirement.</p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field name="name" label="Full name" required />
                    <Field name="email" label="Work email" type="email" required />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field name="company" label="Company" required />
                    <Field name="phone" label="Phone number" />
                  </div>
                  <label className="grid gap-2 text-sm font-semibold">
                    Company size
                    <select name="companySize" className="rounded-2xl border border-line bg-paper px-4 py-3.5 outline-none focus:border-violet">
                      <option value="">Select</option>
                      <option>1–50</option>
                      <option>51–200</option>
                      <option>201–500</option>
                      <option>501–1000</option>
                      <option>1000+</option>
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm font-semibold">
                    What are you looking for?
                    <textarea name="message" rows={4} className="resize-none rounded-2xl border border-line bg-paper px-4 py-3.5 outline-none focus:border-violet" placeholder="Tell us about your team's learning goals..." />
                  </label>

                  {error && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p>}

                  <button
                    disabled={loading}
                    className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-4 text-sm font-bold text-white transition hover:bg-violet disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading && <Loader2 size={17} className="animate-spin" />}
                    {loading ? "Submitting..." : "Submit Enquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({ name, label, type = "text", required = false }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-semibold">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-2xl border border-line bg-paper px-4 py-3.5 outline-none transition focus:border-violet"
      />
    </label>
  );
}
