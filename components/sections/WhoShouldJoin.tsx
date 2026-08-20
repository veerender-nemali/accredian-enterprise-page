import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const audiences = [
  ["01", "Tech Professionals", "Enhance expertise, embrace tech, drive innovation."],
  ["02", "Non-Tech Professionals", "Adapt digitally, collaborate in tech environments."],
  ["03", "Emerging Professionals", "Develop powerful skills for rapid career growth."],
  ["04", "Senior Professionals", "Strengthen leadership, enhance strategic decisions."]
];

export default function WhoShouldJoin() {
  return (
    <section className="section">
      <Container>
        <SectionHeading eyebrow="Who should join?" title="Strategic skill enhancement" />
        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {audiences.map(([n, title, text]) => (
            <article key={n} className="group rounded-[28px] border border-line bg-white p-7 transition hover:-translate-y-1 hover:shadow-soft md:p-9">
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-bold text-violet">{n}</span>
                <span className="h-px w-20 bg-line transition group-hover:w-28 group-hover:bg-violet" />
              </div>
              <h3 className="mt-14 font-display text-3xl font-semibold tracking-[-.045em]">{title}</h3>
              <p className="mt-3 max-w-md text-base leading-7 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
