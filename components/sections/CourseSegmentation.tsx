"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = {
  "Program Specific": ["Certificate", "Executive", "Post Graduate Certificate"],
  "Industry Specific": ["IT", "Healthcare", "Retail", "Finance", "Education", "Manufacturing"],
  "Topic Specific": ["Machine Learning", "Design", "Analytics", "Cybersecurity", "Cloud"],
  "Level Specific": ["Senior Leadership", "Mid-Career Professionals", "Emerging Professionals"]
};

export default function CourseSegmentation() {
  const [active, setActive] = useState<keyof typeof categories>("Program Specific");

  return (
    <section className="section bg-white">
      <Container>
        <SectionHeading
          eyebrow="Tailored course segmentation"
          title="Explore custom-fit courses designed to address every professional focus"
        />

        <div className="mt-12 overflow-hidden rounded-[30px] border border-line">
          <div className="flex overflow-x-auto border-b border-line bg-paper p-2">
            {(Object.keys(categories) as Array<keyof typeof categories>).map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`shrink-0 rounded-2xl px-5 py-3 text-sm font-bold transition ${
                  active === key ? "bg-ink text-white" : "text-muted hover:text-ink"
                }`}
              >
                {key.replace(" Specific", "")}
              </button>
            ))}
          </div>

          <div className="grid gap-8 p-8 md:grid-cols-[.8fr_1.2fr] md:p-12">
            <div>
              <span className="font-display text-7xl font-semibold tracking-[-.08em] text-violet/20">
                0{Object.keys(categories).indexOf(active) + 1}
              </span>
              <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-.045em]">{active}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">
                Choose a learning lens and explore focused options that can be adapted to your organization.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {categories[active].map((item) => (
                <div key={item} className="group flex min-h-20 items-center justify-between rounded-2xl border border-line bg-paper px-5 transition hover:border-violet/30 hover:bg-violet/5">
                  <span className="font-semibold">{item}</span>
                  <span className="grid size-8 place-items-center rounded-full bg-white text-violet transition group-hover:rotate-45">↗</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
