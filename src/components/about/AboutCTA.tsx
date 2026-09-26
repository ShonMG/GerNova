import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Faq from "@/components/shadcn-space/blocks/faq-01/faq";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border opacity-20"
      />

      <Faq />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-foreground" />
          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground sm:text-xs">
            Start a conversation
          </span>
          <span className="h-px w-10 bg-foreground" />
        </div>

        <h2 className="mt-7 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
          Have an idea?
          <br />
          <span className="text-muted-foreground">Let&apos;s build what&apos;s next.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          Whether you are starting something new, improving an existing digital experience or
          looking for better ways to use technology, GerNova can help turn the opportunity into a
          practical digital direction.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            
            className="group h-12 w-fit rounded-full border border-white/50 bg-gray-950 p-1 ps-5 text-sm font-medium text-white hover:bg-gray-950/90 hover:text-white dark:hover:text-white"
          >
            <a href="/contact" className="flex items-center gap-4">
              <span>Get a Free Digital Audit</span>
              <span className="rounded-full bg-white p-3 text-black transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </span>
            </a>
          </Button>

          <Button
            
            className="group h-12 w-fit rounded-full bg-white p-1 ps-5 text-sm font-medium text-black hover:bg-white/90 hover:text-black dark:hover:text-black"
          >
            <a href="/services" className="flex items-center gap-4">
              <span>Explore Our Services</span>
              <span className="rounded-full bg-black p-3 text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}