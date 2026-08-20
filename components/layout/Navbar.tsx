"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const links = [
  ["Solutions", "#solutions"],
  ["Expertise", "#expertise"],
  ["Approach", "#approach"],
  ["FAQs", "#faqs"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur-xl">
      <Container>
        <div className="flex h-[74px] items-center justify-between">
          <a href="#" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <span className="grid size-9 rotate-45 place-items-center rounded-[10px] bg-violet">
              <span className="-rotate-45 font-display text-xl font-bold text-white">A</span>
            </span>
            <span className="font-display text-xl font-bold tracking-[-.04em]">Accredian</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map(([label, href]) => (
              <a key={href} href={href} className="text-sm font-semibold text-muted transition hover:text-ink">
                {label}
              </a>
            ))}
            <Button href="#enquire" variant="dark">Enquire Now</Button>
          </nav>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className="grid size-11 place-items-center rounded-full border border-line md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-line py-5 md:hidden">
            <nav className="grid gap-2">
              {links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-semibold hover:bg-white"
                >
                  {label}
                </a>
              ))}
              <div className="pt-2" onClick={() => setOpen(false)}>
                <Button href="#enquire">Enquire Now</Button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
