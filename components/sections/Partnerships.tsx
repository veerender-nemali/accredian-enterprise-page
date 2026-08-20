import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const logos = ["RELIANCE", "HCL", "IBM", "CRIF", "ADP", "BAYER", "MAHINDRA", "TATA"];

export default function Partnerships() {
  const repeated = [...logos, ...logos];
  return (
    <section className="overflow-hidden border-y border-line bg-white py-16">
      <Container>
        <SectionHeading
          center
          eyebrow="Our proven partnerships"
          title="Successful collaborations with the industry's best"
        />
      </Container>
      <div className="mt-12 overflow-hidden border-y border-line bg-paper py-7">
        <div className="marquee">
          {repeated.map((logo, i) => (
            <div key={`${logo}-${i}`} className="mx-8 flex min-w-[120px] items-center justify-center font-display text-xl font-bold tracking-[-.04em] text-ink/35 md:mx-12 md:text-2xl">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
