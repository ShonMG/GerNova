"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { Button } from "@/components/ui/button";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function AboutHero() {
  return (
    <section className="relative">
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8 lg:pb-32 lg:pt-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-foreground" />
              <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-muted-foreground sm:text-xs">
                About GerNova
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Technology designed to move{" "}
              <span className="text-muted-foreground">your business forward.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg"
            >
              GerNova Digital Technologies creates modern digital products and
              technology solutions that help businesses strengthen their digital
              presence, simplify operations, automate repetitive processes and
              create new opportunities for growth.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                
                className="group h-12 w-fit rounded-full border border-white/50 bg-gray-950 p-1 ps-5 text-sm font-medium text-white hover:bg-gray-950/90 hover:text-white dark:hover:text-white"
              >
                <a href="#our-story" className="flex items-center gap-4">
                  <span>Discover our story</span>
                  <span className="rounded-full bg-white p-3 text-black transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </span>
                </a>
              </Button>

              <Button
                
                className="group h-12 w-fit rounded-full bg-white p-1 ps-5 text-sm font-medium text-black hover:bg-white/90 hover:text-black dark:hover:text-black"
              >
                <a href="#capabilities" className="flex items-center gap-4">
                  <span>What we do</span>
                  <span className="rounded-full bg-black p-3 text-white transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </span>
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-muted sm:aspect-square lg:aspect-[4/5]">
              <img
                src="/images/gernova-about.png"
                alt="GerNova Digital Technologies"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

              <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-medium text-white backdrop-blur-xl">
                GerNova Digital Technologies
              </div>

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                <div className="rounded-xl border border-white/20 bg-black/35 p-5 text-white backdrop-blur-xl">
                  <p className="text-sm font-medium">Ideas → Products → Impact</p>
                  <p className="mt-1 text-xs leading-5 text-white/70">
                    Technology designed around your business goals.
                  </p>
                </div>
              </div>
            </div>

            <div aria-hidden className="absolute -bottom-5 -left-5 -z-10 size-28 rounded-full border border-border" />
            <div aria-hidden className="absolute -right-4 -top-4 -z-10 size-20 rounded-full border border-border" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}