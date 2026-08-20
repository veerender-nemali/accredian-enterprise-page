import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-[1.5fr_.7fr_1.2fr] md:py-20">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 rotate-45 place-items-center rounded-[10px] bg-lime">
                <span className="-rotate-45 font-display text-xl font-bold text-ink">A</span>
              </span>
              <span className="font-display text-xl font-bold">Accredian</span>
            </div>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/55">
              Next-gen expertise for enterprise teams. Build capabilities that create measurable business impact.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[.16em] text-white/40">Explore</p>
            <div className="grid gap-3 text-sm text-white/70">
              <a href="#solutions" className="hover:text-white">Solutions</a>
              <a href="#expertise" className="hover:text-white">Expertise</a>
              <a href="#approach" className="hover:text-white">Approach</a>
              <a href="#faqs" className="hover:text-white">FAQs</a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[.16em] text-white/40">Contact Us</p>
            <a className="text-lg font-semibold hover:text-lime" href="mailto:enterprise@accredian.com">
              enterprise@accredian.com
            </a>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/55">
              4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved.</span>
          <span>Built for enterprise learning.</span>
        </div>
      </Container>
    </footer>
  );
}
