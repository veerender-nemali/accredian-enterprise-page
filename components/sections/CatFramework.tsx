import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";

const steps = [
  ["C", "Concept", "Build the mental models and foundations needed to understand the problem."],
  ["A", "Application", "Translate ideas into practical scenarios, decisions and team challenges."],
  ["T", "Tools", "Equip learners with techniques and tools they can use immediately."]
];

export default function CatFramework() {
  return (
    <section id="approach" className="section bg-violet text-white">
      <Container>
        <SectionHeading
          eyebrow="The CAT framework"
          title="Our proven approach to learning excellence"
          description="Concept. Application. Tools. A simple progression that keeps learning practical and connected to work."
        />

        <div className="mt-14 grid gap-3 md:grid-cols-3">
          {steps.map(([letter, title, text], i) => (
            <div key={letter} className="relative rounded-[30px] border border-white/15 bg-white/10 p-7 backdrop-blur-sm md:p-9">
              <div className="flex items-center justify-between">
                <span className="font-display text-7xl font-semibold leading-none text-lime">{letter}</span>
                {i < 2 && <ArrowRight className="hidden text-white/30 md:block" />}
              </div>
              <h3 className="mt-12 font-display text-3xl font-semibold capitalize tracking-[-.04em]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/60">{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
