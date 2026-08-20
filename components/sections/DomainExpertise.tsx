import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowUpRight, Cpu, Database, Lightbulb, LineChart, Settings2, Sparkles, WalletCards } from "lucide-react";

const domains = [
  { title: "Product & Innovation Hub", text: "Build stronger product thinking, innovation habits and customer-led decision making.", icon: Lightbulb, span: "lg:col-span-7" },
  { title: "Gen-AI Mastery", text: "Turn generative AI from a buzzword into an applied capability across teams.", icon: Sparkles, span: "lg:col-span-5" },
  { title: "Leadership Elevation", text: "Develop leaders who can navigate change, align teams and make sharper decisions.", icon: LineChart, span: "lg:col-span-4" },
  { title: "Tech & Data Insights", text: "Strengthen technical fluency, data thinking and digital decision making.", icon: Database, span: "lg:col-span-4" },
  { title: "Operations Excellence", text: "Improve processes, operating discipline and execution at scale.", icon: Settings2, span: "lg:col-span-4" },
  { title: "Digital Enterprise", text: "Build the digital capabilities required for modern enterprise transformation.", icon: Cpu, span: "lg:col-span-5" },
  { title: "Fintech Innovation Lab", text: "Explore financial technology, innovation and the systems reshaping finance.", icon: WalletCards, span: "lg:col-span-7" }
];

export default function DomainExpertise() {
  return (
    <section id="expertise" className="section">
      <Container>
        <SectionHeading
          eyebrow="Our domain expertise"
          title="Specialized programs designed to fuel innovation"
          description="Focused learning tracks across the capability areas modern enterprises need most."
        />

        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-12">
          {domains.map(({ title, text, icon: Icon, span }) => (
            <div key={title} className={`group relative min-h-[245px] overflow-hidden rounded-[28px] border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-soft ${span}`}>
              <div className="absolute right-0 top-0 size-36 rounded-full bg-violet/5 transition group-hover:scale-125" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="grid size-11 place-items-center rounded-2xl bg-violet/10 text-violet">
                    <Icon size={20} />
                  </div>
                  <ArrowUpRight className="text-muted/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet" size={20} />
                </div>
                <h3 className="mt-16 max-w-md font-display text-2xl font-semibold tracking-[-.04em]">{title}</h3>
                <p className="mt-3 max-w-lg text-sm leading-6 text-muted">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
