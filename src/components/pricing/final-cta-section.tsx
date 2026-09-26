"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinalCtaSection() {
  return (
    <section className="border-t">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
        <Sparkles className="mx-auto h-8 w-8 text-orange-500" />
        <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">Not sure which package fits?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Tell us what you want to build. We'll help you identify the right scope and provide a clear proposal based on your actual needs.</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button className="group text-sm font-medium text-white bg-gray-950 hover:text-white dark:hover:text-white hover:bg-gray-950/90 rounded-full border border-white/50 flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer">
            <a href="/contact" className="flex items-center gap-4">
              <span>Get a Free Digital Audit</span>
              <div className="p-3 bg-white text-black rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out"><ArrowUpRight size={16} /></div>
            </a>
          </Button>
          <Button className="group text-sm font-medium text-black bg-white hover:text-black dark:hover:text-black hover:bg-white/90 rounded-full flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer">
            <a href="/services" className="flex items-center gap-4">
              <span>Explore Our Services</span>
              <div className="p-3 bg-black text-white rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out"><ArrowUpRight size={16} /></div>
            </a>
          </Button>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">Serving businesses across Kenya and beyond.</p>
      </div>
    </section>
  );
}
