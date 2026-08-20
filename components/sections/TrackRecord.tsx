import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  ["10K+", "Professionals trained", "for exceptional career success"],
  ["200+", "Sessions delivered", "with unmatched learning excellence"],
  ["5K+", "Active learners", "engaged in dynamic courses"]
];

export default function TrackRecord() {
  return (
    <section id="track-record" className="section">
      <Container>
        <SectionHeading
          eyebrow="Our track record"
          title="The numbers behind our success"
          description="A growing learning ecosystem built around measurable outcomes, expert delivery and active learners."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] border border-line bg-line md:grid-cols-3">
          {stats.map(([number, title, detail]) => (
            <div key={number} className="bg-white p-8 md:p-10">
              <div className="font-display text-6xl font-semibold tracking-[-.06em] text-violet">{number}</div>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{detail}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
