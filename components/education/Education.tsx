"use client";

import { GraduationCap } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { EDUCATION } from "@/lib/constants";

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="Education" subtitle="Graduated 2026 with a 9.4 CGPA" />

        <GlassCard className="p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <GraduationCap size={28} className="text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight">{EDUCATION.degree}</h3>
              <p className="mb-1 text-sm font-semibold text-primary-cyan">{EDUCATION.institution}</p>
              <p className="mb-3 text-sm text-muted">
                {EDUCATION.university} · {EDUCATION.location}
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="rounded-full bg-indigo-50/70 border border-indigo-200/50 px-3 py-1 text-muted">
                  {EDUCATION.period}
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-primary">
                  CGPA: {EDUCATION.cgpa}
                </span>
                <span className="rounded-full bg-green-50 border border-green-300/50 px-3 py-1 text-sm font-medium text-green-700">
                  Graduated
                </span>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
