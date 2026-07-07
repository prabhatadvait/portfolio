"use client";

import { Quote } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="section-padding bg-amber-50/30">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Testimonials"
          subtitle="What people say about working with me"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((testimonial) => (
            <GlassCard key={testimonial.author} className="p-6">
              <Quote className="mb-4 text-primary opacity-50" size={32} />
              <p className="mb-6 italic leading-relaxed text-muted">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted">{testimonial.role}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
