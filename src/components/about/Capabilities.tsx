"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { CAPABILITIES } from "@/lib/about";

export default function Capabilities() {
  return (
    <section id="capabilities" className="bg-muted/30 py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-foreground" />
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground sm:text-xs">
              What we do
            </span>
            <span className="h-px w-10 bg-foreground" />
          </div>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Digital capabilities for{" "}
            <span className="text-muted-foreground">modern businesses.</span>
          </h2>

          <p className="mt-5 leading-7 text-muted-foreground">
            From the first digital touchpoint to the systems behind the scenes, GerNova brings
            different technology capabilities together around your business objectives.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-background p-7 transition-colors duration-300 hover:bg-muted sm:p-8"
              >
                <div className="flex size-11 items-center justify-center rounded-xl border border-border transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-7 font-semibold">{capability.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {capability.description}
                </p>
                <div className="mt-7 flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                  Explore capability
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}