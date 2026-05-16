"use client";

import {
  BarChart3,
  Database,
  Eye,
  Gauge,
  GitBranch,
  Layers,
  Lightbulb,
  Puzzle,
  Search,
  Server,
  Target,
  Wrench,
  Zap,
} from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function SectionPill({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center rounded-full border border-[#6941c633] bg-[#6941c61a] px-3 py-1 text-xs font-medium text-[#6941c6]">
      <span className="mr-2 size-2 rounded-full bg-[#6941c6]" />
      {children}
    </div>
  );
}

const container = "mx-auto w-full max-w-[1248px] px-4 md:px-8";

const cardBase =
  "rounded-2xl border border-[#32374366] bg-[#12151b]/90 backdrop-blur-sm";

export function ModernPlatformSections() {
  return (
    <div className="border-t border-[#32374380] bg-[#08080c] text-[#f3f4f6]">
      {/* Hero */}
      <section className="scroll-mt-[72px] py-16 md:py-24">
        <div className={cn(container, "grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center")}>
          <div className="space-y-6">
            <SectionPill>The Modern Development Platform</SectionPill>
            <h2 className="text-pretty text-4xl font-bold leading-[1.05] tracking-[-0.02em] md:text-5xl lg:text-[56px] lg:leading-[1.02]">
              Fix Your Systems. Scale Your Business.
            </h2>
            <p className="max-w-[560px] text-lg leading-8 text-[#bdc1ca]">
              We build custom software to solve complex operational problems and
              help your organization scale with reliable, integrated technology.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                className="h-12 rounded-full bg-[#6941c6] px-8 text-base font-medium hover:bg-[#5c36bc]"
              >
                Schedule a Consultation
              </Button>
              <a
                href="#platform-services"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 cursor-pointer rounded-full border-[#32374399] bg-transparent px-8 text-base font-medium text-[#f3f4f6] hover:bg-white/5 hover:text-white",
                )}
              >
                View Our Work
              </a>
            </div>
            <p className="text-sm text-[#8c95a7]">
              <span className="text-[#bdc1ca]">Proven track record</span>
              {" · "}
              <span className="text-[#bdc1ca]">Expert developers</span>
              {" · "}
              <span className="text-[#bdc1ca]">Scalable solutions</span>
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              {
                icon: Server,
                title: "Efficient backend systems",
              },
              {
                icon: Gauge,
                title: "Operational efficiency",
              },
              {
                icon: Layers,
                title: "Scalable infrastructure",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={cn(
                  cardBase,
                  "flex items-center gap-4 p-5 transition-colors hover:border-[#6941c64d]",
                )}
              >
                <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#6941c633]">
                  <item.icon className="size-5 text-[#6941c6]" aria-hidden />
                </div>
                <p className="text-base font-medium text-[#f3f4f6]">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-t border-[#32374366] bg-[#050507] py-16 md:py-20">
        <div className={container}>
          <div className="max-w-[720px]">
            <SectionPill>The Problem</SectionPill>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Your Technology Is Holding You Back
            </h2>
            <p className="mt-3 text-lg text-[#bdc1ca]">
              Manual workflows and disconnected systems slow teams down and block
              the visibility you need to grow with confidence.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Database, label: "Manual and siloed data" },
              { icon: Server, label: "Outdated systems" },
              { icon: Puzzle, label: "Missing key functionality" },
              { icon: Zap, label: "Slow and inefficient processes" },
              { icon: Eye, label: "Lack of visibility and insights" },
              { icon: BarChart3, label: "Difficulty scaling and growing" },
            ].map((item) => (
              <div
                key={item.label}
                className={cn(cardBase, "flex items-center gap-3 p-4 md:p-5")}
              >
                <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#1a1d24]">
                  <item.icon className="size-4 text-[#6941c6]" aria-hidden />
                </div>
                <span className="text-sm font-medium text-[#e5e7eb] md:text-base">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="border-t border-[#32374366] bg-[#08080c] py-16 md:py-20">
        <div className={cn(container, "grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start")}>
          <div>
            <SectionPill>The Solution</SectionPill>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-[40px] md:leading-tight">
              We Build the System That Fixes Everything Else
            </h2>
          </div>
          <div className="space-y-5 text-[#bdc1ca] md:pt-10 lg:pt-12">
            <p className="text-lg leading-8">
              We design and ship custom platforms that connect your tools, automate
              repetitive work, and give every team a single source of truth.
            </p>
            <p className="text-lg leading-8">
              From discovery through launch, we align engineering decisions with
              business outcomes—so technology supports how you operate, not the
              other way around.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="platform-services"
        className="scroll-mt-[72px] border-t border-[#32374366] bg-[#050507] py-16 md:py-20"
      >
        <div className={container}>
          <div className="max-w-[720px]">
            <SectionPill>Services</SectionPill>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">What We Do</h2>
            <p className="mt-3 text-lg text-[#bdc1ca]">
              End-to-end capabilities to modernize your stack and unlock measurable
              results.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Backend platform development",
                body: "Robust, scalable server-side systems engineered for uptime, security, and long-term maintainability.",
              },
              {
                title: "Data & analytics platforms",
                body: "Pipelines, warehousing, and reporting that turn raw data into decisions your leaders can trust.",
              },
              {
                title: "AI & automation solutions",
                body: "Intelligent workflows that reduce manual effort and keep teams focused on high-impact work.",
              },
              {
                title: "Systems integration",
                body: "Connect disparate software and data sources into one coherent, event-driven architecture.",
              },
              {
                title: "Cloud architecture",
                body: "Cloud-native design patterns, infra-as-code, and resilience built in from day one.",
              },
              {
                title: "Technology strategy",
                body: "Roadmaps and technical governance that align every initiative with business priorities.",
              },
            ].map((s) => (
              <div key={s.title} className={cn(cardBase, "p-6 md:p-7")}>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#a1a1aa] md:text-[15px] md:leading-7">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-[#32374366] bg-[#08080c] py-16 md:py-20">
        <div className={container}>
          <div className="max-w-[720px]">
            <SectionPill>Our Approach</SectionPill>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              A Structured Process That Delivers Results
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Analyze",
                body: "Understand business needs, constraints, and gaps in your current systems.",
                icon: Search,
              },
              {
                step: "02",
                title: "Design",
                body: "Produce the technical blueprint, architecture, and rollout plan.",
                icon: Lightbulb,
              },
              {
                step: "03",
                title: "Build",
                body: "Agile development, testing, and deployment with continuous feedback.",
                icon: Wrench,
              },
              {
                step: "04",
                title: "Optimize",
                body: "Monitoring, support, and iteration for lasting performance.",
                icon: GitBranch,
              },
            ].map((p) => (
              <div key={p.step} className={cn(cardBase, "flex flex-col p-6")}>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-3xl font-bold text-[#6941c6]/90">{p.step}</span>
                  <div className="grid size-10 place-items-center rounded-lg bg-[#6941c633]">
                    <p.icon className="size-4 text-[#6941c6]" aria-hidden />
                  </div>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#a1a1aa]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className="border-t border-[#32374366] bg-[#050507] py-16 md:py-20">
        <div className={cn(container, "grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start")}>
          <div>
            <SectionPill>Why It Works</SectionPill>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-[36px] md:leading-tight">
              Technology That Supports the Business, Not Just the Stack
            </h2>
          </div>
          <ul className="flex flex-col gap-3 md:pt-2">
            {[
              "Increase operational efficiency and reduce manual work.",
              "Improve customer experience with seamless digital interactions.",
              "Enable data-driven decision making across the organization.",
              "Build a foundation for sustainable and scalable growth.",
            ].map((line) => (
              <li
                key={line}
                className={cn(
                  "rounded-xl border border-[#32374366] bg-[#12151bcc] px-5 py-4 text-[15px] font-medium leading-snug text-[#e5e7eb] md:text-base",
                )}
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Outcomes */}
      <section className="border-t border-[#32374366] bg-[#08080c] py-16 md:py-20">
        <div className={container}>
          <div className="max-w-[720px]">
            <SectionPill>Outcomes</SectionPill>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">What You Gain</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Lower operating expenses",
              "Increased productivity",
              "Better customer experience",
              "Improved data visibility",
              "Faster time-to-market",
              "Scalable growth",
            ].map((label) => (
              <div
                key={label}
                className={cn(
                  cardBase,
                  "flex items-center gap-3 p-4 text-center sm:text-left md:p-5",
                )}
              >
                <Target className="mx-auto size-4 shrink-0 text-[#6941c6] sm:mx-0" aria-hidden />
                <span className="flex-1 text-sm font-medium text-[#e5e7eb] md:text-base">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA + slim footer row */}
      <section className="border-t border-[#32374366] bg-[#050507] py-16 md:py-20">
        <div className={container}>
          <div className="max-w-[880px]">
            <SectionPill>Get Started</SectionPill>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Let&apos;s Build the Right Foundation
            </h2>
            <p className="mt-3 text-lg text-[#bdc1ca]">
              Tell us about your goals—we&apos;ll map a practical path from today&apos;s
              constraints to a platform your teams can depend on.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="h-12 rounded-full bg-[#6941c6] px-8 text-base font-medium hover:bg-[#5c36bc]"
              >
                Contact Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-[#32374399] bg-transparent px-8 text-base font-medium text-[#f3f4f6] hover:bg-white/5 hover:text-white"
              >
                Book a Discovery Call
              </Button>
            </div>
          </div>
          <div className="mt-16 flex flex-col gap-4 border-t border-[#32374366] pt-8 text-sm text-[#8c95a7] md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Cody Dynamics. All rights reserved.</p>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="transition-colors hover:text-[#e5e7eb]">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-[#e5e7eb]">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
