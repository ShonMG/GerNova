"use client";

import { Instrument_Serif } from "next/font/google";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export type AvatarList = {
  image: string;
};

type HeroSectionProps = {
  avatarList: AvatarList[];
};

function HeroSection({ avatarList }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="w-full relative">
        {/* Background Glow */}
        <div
          className="
            absolute
            top-20
            left-1/2
            -translate-x-1/2
            w-[700px]
            h-[500px]
            rounded-full
            bg-gradient-to-r
            from-orange-100
            via-white
            to-purple-100
            blur-3xl
            opacity-70
            -z-10
            dark:from-orange-950/30
            dark:via-black
            dark:to-purple-950/30
          "
        />

        <div className="container mx-auto relative z-10">
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-12
              lg:gap-16
              items-center
              min-h-[720px]
              py-16
              md:py-24
            "
          >
            {/* ===================================== */}
            {/* LEFT SIDE — HERO CONTENT */}
            {/* ===================================== */}

            <div className="flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                className="
                  flex
                  flex-col
                  text-left
                  items-start
                  gap-5
                "
              >
                <h1
                  className="
                    lg:text-7xl
                    xl:text-8xl
                    md:text-6xl
                    text-5xl
                    font-medium
                    leading-tight
                  "
                >
                  Transform Your Business With{" "}
                  <span
                    className={`${instrumentSerif.className} tracking-tight`}
                  >
                    Smart Digital Technology
                  </span>
                </h1>

                <p
                  className="
                    text-base
                    md:text-lg
                    !font-medium
                    max-w-xl
                    text-muted-foreground
                    leading-relaxed
                  "
                >
                  Your business deserves technology that does more than look
                  good. GerNova Digital Technologies designs and develops
                  websites, mobile applications, APIs, automation systems,
                  cloud solutions and AI-powered digital experiences that help
                  businesses attract customers, streamline operations and
                  grow.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: "easeInOut",
                }}
                className="
                  flex
                  items-center
                  flex-col
                  sm:flex-row
                  justify-start
                  gap-4
                "
              >
                {/* Digital Audit */}
                <Button
                  className="
                    group
                    relative
                    h-12
                    w-fit
                    overflow-hidden
                    rounded-full
                    bg-gradient-to-r
                    from-orange-500
                    via-orange-500
                    to-purple-600
                    p-1
                    ps-6
                    pe-14
                    text-sm
                    font-semibold
                    text-white
                    shadow-lg
                    shadow-orange-500/20
                    transition-all
                    duration-500
                    hover:ps-14
                    hover:pe-6
                    hover:shadow-xl
                    hover:shadow-purple-500/25
                    cursor-pointer
                  "
                >
                  <a href="/contact" className="flex items-center gap-4">
                  <span
                    className="
                      relative
                      z-10
                      whitespace-nowrap
                    "
                  >
                    Get Your Free Digital Audit
                  </span>

                  <span
                    className="
                      absolute
                      right-1
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-gray-950
                      transition-all
                      duration-500
                      group-hover:right-[calc(100%-44px)]
                      group-hover:rotate-45
                    "
                  >
                    <ArrowUpRight size={17} strokeWidth={2.5} />
                  </span>
                  </a>
                </Button>

                {/* Services */}
                <Button
                  className="
                    group
                    relative
                    h-12
                    w-fit
                    overflow-hidden
                    rounded-full
                    bg-gradient-to-r
                    from-orange-500
                    via-orange-500
                    to-purple-600
                    p-1
                    ps-6
                    pe-14
                    text-sm
                    font-semibold
                    text-white
                    shadow-lg
                    shadow-orange-500/20
                    transition-all
                    duration-500
                    hover:ps-14
                    hover:pe-6
                    hover:shadow-xl
                    hover:shadow-purple-500/25
                    cursor-pointer
                  "
                >
                  <a href="/services" className="flex items-center gap-4">
                  <span
                    className="
                      relative
                      z-10
                      whitespace-nowrap
                    "
                  >
                    Explore Our Services
                  </span>

                  <span
                    className="
                      absolute
                      right-1
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-gray-950
                      transition-all
                      duration-500
                      group-hover:right-[calc(100%-44px)]
                      group-hover:rotate-45
                    "
                  >
                    <ArrowUpRight size={17} strokeWidth={2.5} />
                  </span>
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* ===================================== */}
            {/* RIGHT SIDE — IMAGE CARD */}
            {/* ===================================== */}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: "easeOut",
              }}
              className="relative"
            >
              {/* Glow behind card */}
              <div
                className="
                  absolute
                  -inset-4
                  rounded-[2rem]
                  bg-gradient-to-r
                  from-orange-500/20
                  to-purple-600/20
                  blur-2xl
                  -z-10
                "
              />

              {/* Image Card */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/40
                  bg-white/20
                  shadow-2xl
                  backdrop-blur-sm
                  dark:border-white/10
                  dark:bg-white/5
                "
              >
                <img
                  src="/images/gernova-hero-bg.png"
                  alt="GerNova Digital Technologies"
                  className="
                    w-full
                    h-[420px]
                    md:h-[500px]
                    lg:h-[580px]
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />

                {/* Image Gradient */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/40
                    via-transparent
                    to-transparent
                  "
                />

                {/* Floating Card */}
                <div
                  className="
                    absolute
                    bottom-6
                    left-6
                    right-6
                    rounded-2xl
                    border
                    border-white/20
                    bg-black/40
                    p-5
                    text-white
                    backdrop-blur-xl
                  "
                >
                  <p className="text-sm font-medium text-white/70">
                    GerNova Digital Technologies
                  </p>

                  <p className="mt-1 text-lg font-semibold">
                    Technology that moves your business forward.
                  </p>
                </div>
              </div>

              {/* Decorative Orange Circle */}
              <div
                className="
                  absolute
                  -top-6
                  -right-6
                  h-20
                  w-20
                  rounded-full
                  bg-orange-500/20
                  blur-xl
                "
              />

              {/* Decorative Purple Circle */}
              <div
                className="
                  absolute
                  -bottom-6
                  -left-6
                  h-24
                  w-24
                  rounded-full
                  bg-purple-600/20
                  blur-xl
                "
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;