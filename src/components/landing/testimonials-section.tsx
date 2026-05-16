"use client";

import { Quote } from "lucide-react";

import { testimonials } from "@/components/landing/testimonials-data";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-[72px] border-y border-[#32374380] bg-[#0a0b0f]"
    >
      <div className="mx-auto w-full max-w-[1248px] px-4 py-14 md:px-8 md:py-16">
        <div className="max-w-[720px]">
          <div className="inline-flex items-center rounded-full border border-[#6941c633] bg-[#6941c61a] px-3 py-1 text-xs font-medium text-[#6941c6]">
            <span className="mr-2 size-2 rounded-full bg-[#6941c6]" />
            Testimonials
          </div>
          <h2 className="mt-4 text-2xl font-bold text-[#f3f4f6] md:text-3xl">
            Trusted by revenue-cycle leaders
          </h2>
          <p className="mt-3 text-[#bdc1ca]">
            Teams across hospitals and clinics use Cody Dynamics to recover revenue and
            lighten administrative load.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={`${t.author}-${t.org}`}
              className="flex h-full flex-col rounded-2xl border border-[#32374366] bg-[#12151b]/90 p-6 backdrop-blur-sm"
            >
              <Quote className="size-5 text-[#6941c6]" aria-hidden />
              <p className="mt-4 flex-1 text-[15px] leading-7 text-[#e5e7eb]">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6 border-t border-[#32374366] pt-4 text-sm">
                <p className="font-semibold text-white">{t.author}</p>
                <p className="mt-0.5 text-[#a1a1aa]">
                  {t.role}, {t.org}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
