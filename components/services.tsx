"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Plus } from "lucide-react"

const services = [
  {
    id: "item-1",
    title: "Our Services",
    content:
      "Comprehensive brand strategy, visual identity design, and narrative development for lifestyle and luxury brands.",
  },
  {
    id: "item-2",
    title: "Meet the Team",
    content: "A global collective of strategists, artists, and reset specialists dedicated to creative growth.",
  },
  {
    id: "item-3",
    title: "Resort-Work™",
    content: "A proprietary methodology for pausing, resetting, and sparking high-level creative flow.",
  },
  {
    id: "item-4",
    title: "Casa Portufornia",
    content: "Our physical and digital hub where visionaries come to carve out what's next.",
  },
  {
    id: "item-5",
    title: "Feedback & Buzz",
    content: "What our partners say about the transformative power of the CPF process.",
  },
]

export function Services() {
  return (
    <section className="container mx-auto px-6 py-24 max-w-5xl">
      <div className="grid md:grid-cols-2 gap-16 mb-20">
        <h2 className="text-2xl font-serif leading-snug">
          Dedicated to Creativity,
          <br />
          Culture & Growth.
        </h2>
        <div className="space-y-6 text-black/80 leading-relaxed">
          <p>
            Casa Portufornia (CPF) is a creative hub where brands and people come to define who they are, sharpen their
            vision, and carve out what&apos;s next.
          </p>
          <p>
            We help brands find their voice through storytelling and branding. And we help creatives own theirs —
            because when life and work move in sync, the best ideas don&apos;t just happen, they flow.
          </p>
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-2">
        {services.map((service) => (
          <AccordionItem
            key={service.id}
            value={service.id}
            className="border border-black/20 rounded-full px-8 transition-colors hover:border-black"
          >
            <AccordionTrigger className="hover:no-underline py-4">
              <span className="text-lg md:text-xl font-medium">{service.title}</span>
              <Plus className="h-4 w-4 shrink-0 transition-transform duration-200" />
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-black/60 max-w-2xl">{service.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
