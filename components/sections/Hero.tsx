import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ArrowDownRight, Check, Sparkles } from "lucide-react";

const benefits = ["Tailored Solutions", "Industry Insights", "Expert Guidance", "Measurable Impact"];

export default function Hero() {
  return (
    <section className="overflow-hidden border-b border-line">
      <Container>
        <div className="grid min-h-[680px] items-center gap-14 py-16 lg:grid-cols-[1.02fr_.98fr] lg:py-24">
          <div className="reveal">
            <div className="eyebrow">Enterprise learning</div>
            <h1 className="mt-7 max-w-3xl font-display text-[clamp(3.1rem,7vw,6.6rem)] font-semibold leading-[.91] tracking-[-.065em]">
              Next-Gen Expertise <span className="text-violet">for Your Enterprise</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted md:text-xl">
              Cultivate high-performance teams through expert learning built around your people, priorities and business goals.
            </p>

            <div className="mt-8 grid max-w-xl grid-cols-2 gap-x-6 gap-y-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-sm font-semibold">
                  <span className="grid size-5 place-items-center rounded-full bg-violet/10 text-violet">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {benefit}
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="#enquire">Enquire Now</Button>
              <a href="#track-record" className="group inline-flex items-center gap-2 px-2 py-3 text-sm font-bold">
                Explore our impact
                <ArrowDownRight size={17} className="transition group-hover:translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="relative reveal lg:justify-self-end">
            <div className="relative aspect-[.86] w-full max-w-[510px] overflow-hidden rounded-[34px] bg-violet shadow-soft">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(216,242,107,.85),transparent_27%),radial-gradient(circle_at_85%_75%,rgba(255,255,255,.25),transparent_25%)]" />
              <div className="absolute -right-20 -top-20 size-72 rounded-full border-[55px] border-white/10" />
              <div className="absolute bottom-8 left-8 right-8 rounded-[24px] border border-white/20 bg-white/10 p-6 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[.16em] text-white/60">Learning intelligence</span>
                  <Sparkles className="text-lime" size={20} />
                </div>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {["People", "Skills", "Impact"].map((x, i) => (
                    <div key={x} className="rounded-2xl bg-white/10 p-4">
                      <div className="font-display text-2xl font-semibold text-white">{["10K+", "200+", "5K+"][i]}</div>
                      <div className="mt-1 text-[11px] text-white/50">{x}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute left-8 top-8 grid size-16 place-items-center rounded-2xl bg-lime text-ink shadow-lg">
                <span className="font-display text-3xl font-semibold">A</span>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-line bg-white p-4 shadow-soft sm:block">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-xl bg-ink text-lime">
                  <Sparkles size={17} />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted">Outcome-led</p>
                  <p className="text-sm font-bold">Learning that moves business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
