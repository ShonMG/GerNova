"use client";

import { Sparkles, Target } from "lucide-react";
import { motion } from "motion/react";

export default function MissionVision() {
  return (
    <section className="bg-muted/30 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-foreground" />
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground sm:text-xs">
              What drives us
            </span>
          </div>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
            A clear direction.{" "}
            <span className="text-muted-foreground">Practical technology.</span>
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border border-border bg-background p-8 sm:p-10 lg:p-12"
          >
            <div className="flex size-12 items-center justify-center rounded-full border border-border">
              <Target className="size-5" />
            </div>
            <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Our mission
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              Make modern technology more useful to businesses.
            </h3>
            <p className="mt-5 leading-7 text-muted-foreground">
              We aim to create accessible, thoughtful and practical digital solutions that help
              businesses improve how they present themselves, operate, connect with customers and
              pursue growth.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border border-border bg-foreground p-8 text-background sm:p-10 lg:p-12"
          >
            <div className="flex size-12 items-center justify-center rounded-full border border-background/20">
              <Sparkles className="size-5" />
            </div>
            <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-background/60">
              Our vision
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              A future where every business can use technology to create more possibilities.
            </h3>
            <p className="mt-5 leading-7 text-background/65">
              We envision a digital landscape where technology is not simply an expense or a
              technical requirement, but a strategic foundation for innovation, efficiency and
              sustainable growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}