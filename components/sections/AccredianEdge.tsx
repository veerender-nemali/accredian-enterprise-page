import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowUpRight, BrainCircuit, Compass, Gauge, Layers3, UsersRound } from "lucide-react";

const items = [
  { n: "01", title: "Tailored solutions", text: "Learning journeys shaped around your organization's actual goals and capability gaps.", icon: Compass },
  { n: "02", title: "Industry insights", text: "Practical perspective from experienced practitioners who understand changing business realities.", icon: BrainCircuit },
  { n: "03", title: "Expert guidance", text: "Structured support that helps teams move from understanding concepts to applying them.", icon: UsersRound },
  { n: "04", title: "Measurable impact", text: "Programs designed to connect learning activity with meaningful organizational outcomes.", icon: Gauge },
  { n: "05", title: "Flexible delivery", text: "A delivery model that can adapt to your people, schedules and operating environment.", icon: Layers3 }
];

export default function AccredianEdge() {
  return (
    <section id="solutions" className="section bg-ink text-white">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="The Accredian edge"
              title="Key aspects of our strategic training"
              description="A practical learning system that brings business context, expert knowledge and measurable progress together."
            />
            <div className="mt-10 rounded-[28px] bg-white/5 p-6">
              <div className="flex items-end justify-between">
                <span className="text-xs font-bold uppercase tracking-[.16em] text-white/40">Enterprise capability</span>
                <span className="font-display text-5xl text-lime">01—05</span>
              </div>
              <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[82%] rounded-full bg-lime" />
              </div>
              <p className="mt-4 text-sm leading-6 text-white/50">From capability diagnosis to applied learning and outcomes.</p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {items.map(({ n, title, text, icon: Icon }, index) => (
              <div key={n} className={`group rounded-[24px] border border-white/10 bg-white/[.045] p-6 transition hover:-translate-y-1 hover:bg-white/[.08] ${index === 4 ? "sm:col-span-2" : ""}`}>
                <div className="flex items-start justify-between">
                  <span className="font-display text-sm text-lime">{n}</span>
                  <Icon size={20} className="text-white/40 transition group-hover:text-lime" />
                </div>
                <h3 className="mt-12 font-display text-2xl font-semibold tracking-[-.035em]">{title}</h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-white/50">{text}</p>
                <ArrowUpRight size={17} className="mt-7 text-white/20 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-lime" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
