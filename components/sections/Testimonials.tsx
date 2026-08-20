"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    company: "ADP",
    quote: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."
  },
  {
    company: "BAYER",
    quote: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."
  },
  {
    company: "RELIANCE",
    quote: "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees."
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  return (
    <section className="section">
      <Container>
        <SectionHeading
          center
          eyebrow="Testimonials from our partners"
          title="What our clients are saying"
        />

        <div className="mx-auto mt-12 max-w-5xl rounded-[34px] bg-ink p-7 text-white md:p-12">
          <div className="flex items-start justify-between">
            <div className="grid size-12 place-items-center rounded-2xl bg-lime text-ink">
              <Quote size={22} />
            </div>
            <span className="font-display text-4xl font-semibold text-white/15">
              {String(index + 1).padStart(2, "0")} / 03
            </span>
          </div>
          <blockquote className="mt-14 max-w-4xl font-display text-2xl font-medium leading-[1.35] tracking-[-.025em] md:text-4xl">
            “{item.quote}”
          </blockquote>
          <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-7">
            <span className="text-sm font-bold uppercase tracking-[.16em] text-lime">{item.company}</span>
            <div className="flex gap-2">
              <button
                aria-label="Previous testimonial"
                onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}
                className="grid size-10 place-items-center rounded-full border border-white/15 hover:bg-white/10"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                aria-label="Next testimonial"
                onClick={() => setIndex((index + 1) % testimonials.length)}
                className="grid size-10 place-items-center rounded-full border border-white/15 hover:bg-white/10"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
