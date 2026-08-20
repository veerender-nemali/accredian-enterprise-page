"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const groups = [
  {
    title: "About the Course",
    items: [
      ["What types of corporate training programs does Accredian offer?", "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech."],
      ["What domain specializations are available?", "We offer expertise across Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI."]
    ]
  },
  {
    title: "About the Delivery",
    items: [
      ["Can programs be customized for our organization?", "Yes. Programs can be adapted around business goals, participant profiles, capability gaps and delivery requirements."],
      ["How are the programs delivered?", "Programs can be structured around flexible delivery formats that fit organizational schedules and learner needs."]
    ]
  },
  {
    title: "Miscellaneous",
    items: [
      ["How do we discuss our learning requirements?", "Use the Enquire Now form and an advisor can help map your requirements to the appropriate learning solution."],
      ["Can we train different professional levels together?", "Yes. Learning journeys can be designed around distinct audiences and capability levels where appropriate."]
    ]
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="faqs" className="section bg-white">
      <Container>
        <SectionHeading eyebrow="Frequently asked questions" title="Answers before you get started" />
        <div className="mt-12 grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm leading-7 text-muted">
              Have another question? Reach out through the enquiry form and our team can help you understand the right learning path.
            </p>
            <a href="#enquire" className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-bold text-white hover:bg-violet">
              Speak with an advisor
            </a>
          </div>

          <div>
            {groups.map((group) => (
              <div key={group.title} className="mb-10">
                <h3 className="mb-3 text-xs font-bold uppercase tracking-[.16em] text-violet">{group.title}</h3>
                <div className="divide-y divide-line border-y border-line">
                  {group.items.map(([question, answer]) => {
                    const id = `${group.title}-${question}`;
                    const active = open === id;
                    return (
                      <div key={id}>
                        <button
                          aria-expanded={active}
                          onClick={() => setOpen(active ? null : id)}
                          className="flex w-full items-center justify-between gap-5 py-5 text-left"
                        >
                          <span className="font-semibold">{question}</span>
                          <span className={`grid size-8 shrink-0 place-items-center rounded-full bg-paper transition ${active ? "rotate-180 bg-violet text-white" : ""}`}>
                            <ChevronDown size={16} />
                          </span>
                        </button>
                        <div className={`grid transition-[grid-template-rows] duration-300 ${active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                          <div className="overflow-hidden">
                            <p className="max-w-2xl pb-6 pr-12 text-sm leading-7 text-muted">{answer}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
