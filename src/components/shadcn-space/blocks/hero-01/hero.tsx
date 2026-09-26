"use client";

import { Instrument_Serif } from "next/font/google";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

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
      {/* =========================================================
          FULL HERO BACKGROUND IMAGE
      ========================================================== */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/gernova-about-hero-bg.png')",
        }}
      />

      {/* Background overlay */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-background/80
          dark:bg-background/70
        "
      />

      {/* Orange / Purple GerNova glow */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_15%_20%,rgba(249,115,22,0.18),transparent_30%),radial-gradient(circle_at_85%_30%,rgba(168,85,247,0.16),transparent_30%)]
        "
      />

      {/* Subtle bottom fade */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-x-0
          bottom-0
          h-40
          bg-gradient-to-t
          from-background
          to-transparent
        "
      />

      <div className="relative z-10 w-full">
        <div className="container relative z-10 mx-auto">
          <div
            className="
              grid
              min-h-[720px]
              grid-cols-1
              items-center
              gap-12
              py-16
              md:py-24
              lg:grid-cols-2
              lg:gap-16
            "
          >
            {/* =====================================
                LEFT SIDE — HERO CONTENT
            ====================================== */}

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
                  items-start
                  gap-5
                  text-left
                "
              >
                <h1
                  className="
                    text-5xl
                    font-medium
                    leading-tight
                    md:text-6xl
                    lg:text-7xl
                    xl:text-8xl
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
                    max-w-xl
                    text-base
                    !font-medium
                    leading-relaxed
                    text-muted-foreground
                    md:text-lg
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

              {/* =====================================
                  CTA BUTTONS — PRESERVED
              ====================================== */}

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
                  flex-col
                  items-center
                  justify-start
                  gap-4
                  sm:flex-row
                "
              >
                {/* Digital Audit */}
                <Button
                  className="
                    group
                    relative
                    h-12
                    w-fit
                    cursor-pointer
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
                  "
                >
                  <a
                    href="/contact"
                    className="flex items-center gap-4"
                  >
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
                      <ArrowUpRight
                        size={17}
                        strokeWidth={2.5}
                      />
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
                    cursor-pointer
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
                  "
                >
                  <a
                    href="/services"
                    className="flex items-center gap-4"
                  >
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
                      <ArrowUpRight
                        size={17}
                        strokeWidth={2.5}
                      />
                    </span>
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* =====================================
                RIGHT SIDE — EXISTING IMAGE CARD
            ====================================== */}

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
                aria-hidden="true"
                className="
                  absolute
                  -inset-4
                  -z-10
                  rounded-[2rem]
                  bg-gradient-to-r
                  from-orange-500/20
                  to-purple-600/20
                  blur-2xl
                "
              />

              {/* Existing Image Card */}
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
                <Image
                  src="/images/gernova-hero-bg.png"
                  alt="GerNova Digital Technologies"
                  width={1200}
                  height={800}
                  priority
                  className="
                    h-[420px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                    md:h-[500px]
                    lg:h-[580px]
                  "
                />

                {/* Image Gradient */}
                <div
                  aria-hidden="true"
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
                aria-hidden="true"
                className="
                  absolute
                  -right-6
                  -top-6
                  h-20
                  w-20
                  rounded-full
                  bg-orange-500/20
                  blur-xl
                "
              />

              {/* Decorative Purple Circle */}
              <div
                aria-hidden="true"
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