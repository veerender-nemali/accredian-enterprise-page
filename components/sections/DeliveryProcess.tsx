import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  ["01", "Skill Gap Analysis", "Understand current capabilities, business priorities and the gaps that matter."],
  ["02", "Customized Training Plan", "Create a tailored roadmap addressing organizational goals."],
  ["03", "Flexible Program Delivery", "Deliver adaptable programs aligned with industry and organizational needs."]
];

export default function DeliveryProcess() {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="How we deliver results that matter"
          title="A structured three-step approach to skill development"
        />
        <div className="mt-16 grid gap-0 lg:grid-cols-3">
          {steps.map(([n, title, text], i) => (
            <div key={n} className="relative border-l border-line py-2 pl-7 pr-6 lg:min-h-[270px] lg:pl-9">
              <div className="absolute -left-[9px] top-0 grid size-[17px] place-items-center rounded-full bg-violet ring-8 ring-paper" />
              <span className="font-display text-sm font-bold text-violet">{n}</span>
              <h3 className="mt-16 font-display text-2xl font-semibold tracking-[-.04em]">{title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-7 text-muted">{text}</p>
              {i < 2 && <div className="absolute right-5 top-8 hidden h-px w-10 bg-line lg:block" />}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
