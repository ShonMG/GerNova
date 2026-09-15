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
    <section>
      <div className="w-full h-full relative">
        <div className="relative w-full pt-0 md:pt-20 pb-6 md:pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-sky-100 before:via-white before:to-amber-100 before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-slate-800 dark:before:via-black dark:before:to-stone-700 dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10">
          <div className="container mx-auto relative z-10">
            <div className="flex flex-col max-w-5xl mx-auto gap-8">
              <div className="relative flex flex-col text-center items-center sm:gap-6 gap-4">
                <motion.h1
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="lg:text-8xl md:text-7xl text-5xl font-medium leading-14 md:leading-20 lg:leading-24"
                >
                  Transform Your Business With {" "}
                  <span
                    className={`${instrumentSerif.className} tracking-tight`}
                  >
                   Smart Digital Technology
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
                  className="text-base font-normal max-w-2xl text-muted-foreground"
                >
                  Your business deserves technology that does more than look good. 
                  GerNova Digital Technologies designs and develops websites, 
                  mobile applications, APIs, automation systems, cloud solutions and
                  AI-powered digital experiences that help businesses attract customers, 
                  streamline operations and grow.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                className="flex items-center flex-col md:flex-row justify-center gap-8"
              >
                <Button
                  className="
                    group relative h-12 w-fit overflow-hidden rounded-full
                    bg-gradient-to-r from-orange-500 via-orange-500 to-purple-600
                    p-1 ps-6 pe-14
                    text-sm font-semibold text-white
                    shadow-lg shadow-orange-500/20
                    transition-all duration-500
                    hover:ps-14 hover:pe-6
                    hover:shadow-xl hover:shadow-purple-500/25
                    cursor-pointer
                  "
                >
                  {/* CTA text */}
                  <span
                    className="
                      relative z-10
                      whitespace-nowrap
                      transition-all duration-500
                    "
                  >
                    Get Your Free Digital Audit
                  </span>

                  {/* Animated arrow */}
                  <span
                    className="
                      absolute right-1
                      flex h-10 w-10
                      items-center justify-center
                      rounded-full
                      bg-white text-gray-950
                      transition-all duration-500
                      group-hover:right-[calc(100%-44px)]
                      group-hover:rotate-45
                    "
                  >
                    <ArrowUpRight size={17} strokeWidth={2.5} />
                  </span>
                </Button>
                <Button
                  className="
                    group relative h-12 w-fit overflow-hidden rounded-full
                    bg-gradient-to-r from-orange-500 via-orange-500 to-purple-600
                    p-1 ps-6 pe-14
                    text-sm font-semibold text-white
                    shadow-lg shadow-orange-500/20
                    transition-all duration-500
                    hover:ps-14 hover:pe-6
                    hover:shadow-xl hover:shadow-purple-500/25
                    cursor-pointer
                  "
                >
                  {/* CTA text */}
                  <span
                    className="
                      relative z-10
                      whitespace-nowrap
                      transition-all duration-500
                    "
                  >
                    Explore Our Services
                  </span>

                  {/* Animated arrow */}
                  <span
                    className="
                      absolute right-1
                      flex h-10 w-10
                      items-center justify-center
                      rounded-full
                      bg-white text-gray-950
                      transition-all duration-500
                      group-hover:right-[calc(100%-44px)]
                      group-hover:rotate-45
                    "
                  >
                    <ArrowUpRight size={17} strokeWidth={2.5} />
                  </span>
                </Button>
                
                {/* <div className="flex items-center sm:gap-7 gap-3">
                  <ul className="avatar flex flex-row items-center">
                    {avatarList.map((avatar, index) => (
                      <li key={index} className="-mr-2 z-1 avatar-hover:ml-2">
                        <img
                          src={avatar.image}
                          alt="Avatar"
                          width={40}
                          height={40}
                          className="rounded-full border-2 border-white"
                        />
                      </li>
                    ))}
                  </ul>
                  <div className="gap-1 flex flex-col items-start">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <img
                          key={index}
                          src="https://images.shadcnspace.com/assets/svgs/icon-star.svg"
                          alt="star"
                          className="h-4 w-4"
                        />
                      ))}
                    </div>
                    <p className="sm:text-sm text-xs font-normal text-muted-foreground">
                      Trusted by 1000+ clients
                    </p>
                  </div>
                </div> */}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
