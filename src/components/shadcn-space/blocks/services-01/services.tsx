
"use client";


import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  LucideIcon,
  Globe2,
  Smartphone,
  PlugZap,
  SearchCheck,
  Workflow,
  Cloud,
  BrainCircuit,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { useRef } from "react";

type ServiceData = {
  service_icon: LucideIcon;
  service_title: string;
  service_description: string;
  service_image: string;
  service_bg_color: string;
  service_text_color: string;
};

const serviceData: ServiceData[] = [
  {
    service_icon: Globe2,
    service_title: "Web Development",
    service_description:
      "Fast, responsive and scalable websites that turn your digital presence into a powerful business tool.",
    service_image: "/images/services/web_development.png",
    service_bg_color: "bg-orange-500/10",
    service_text_color: "text-orange-500",
  },
  {
    service_icon: Smartphone,
    service_title: "Mobile Apps",
    service_description:
      "Modern mobile applications designed to help businesses engage customers and deliver better digital experiences.",
    service_image: "/images/services/mobile-apps.png",
    service_bg_color: "bg-purple-500/10",
    service_text_color: "text-purple-500",
  },
  {
    service_icon: PlugZap,
    service_title: "APIs & Integrations",
    service_description:
      "Connect your systems, platforms and third-party services with reliable APIs and seamless integrations.",
    service_image: "/images/services/api-integrations.png",
    service_bg_color: "bg-blue-500/10",
    service_text_color: "text-blue-500",
  },
  {
    service_icon: SearchCheck,
    service_title: "SEO & Digital Growth",
    service_description:
      "Improve your visibility, attract qualified visitors and grow your business through data-driven SEO strategies.",
    service_image: "/images/services/seo-digital-growth.png",
    service_bg_color: "bg-teal-500/10",
    service_text_color: "text-teal-500",
  },
  {
    service_icon: Workflow,
    service_title: "Business Automation",
    service_description:
      "Automate repetitive workflows and connect your business processes so your team can focus on what matters.",
    service_image: "/images/services/business-automation.png",
    service_bg_color: "bg-red-500/10",
    service_text_color: "text-red-500",
  },
  {
    service_icon: Cloud,
    service_title: "Cloud Solutions",
    service_description:
      "Secure, scalable cloud infrastructure and applications built to support growing digital businesses.",
    service_image: "/images/services/cloud-solutions.png",
    service_bg_color: "bg-sky-500/10",
    service_text_color: "text-sky-500",
  },
  {
    service_icon: BrainCircuit,
    service_title: "AI Solutions",
    service_description:
      "Practical AI solutions that help businesses automate decisions, improve customer experiences and work smarter.",
    service_image: "/images/services/ai-solutions.png",
    service_bg_color: "bg-violet-500/10",
    service_text_color: "text-violet-500",
  },
];

const Services = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const scrollAmount = sliderRef.current.clientWidth * 0.8;

    sliderRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.08,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
        <div className="flex flex-col gap-10 sm:gap-14 w-full">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-border sm:w-12" />

            <span
              className="
                rounded-full
                border
                border-border
                bg-background
                px-4
                py-1.5
                text-[10px]
                font-medium
                uppercase
                tracking-[0.22em]
                text-muted-foreground
                sm:text-xs
              "
            >
              Our Services
            </span>

            <span className="h-px w-8 bg-border sm:w-12" />
          </div>
          {/* Heading */}
          <div className="flex flex-col gap-5">

            <div className="flex flex-col gap-8">

              <div className="flex flex-col text-center mx-auto gap-4">
              

                <div className="max-w-2xl text-center mx-auto">
                  <h2
                    className="
                      text-2xl
                      font-semibold
                      leading-tight
                      tracking-tight
                      text-foreground
                      md:text-3xl
                      lg:text-4xl
                    "
                  >
                    Digital solutions built to move your business forward
                  </h2>
                </div>

                <p
                  className="
                    text-center
                    mx-auto
                    max-w-3xl
                    text-xl
                    leading-relaxed
                    text-muted-foreground
                  "
                >
                  From websites and mobile apps to AI, automation and cloud
                  solutions, GerNova helps businesses build, connect and grow
                  through technology.
                </p>

              </div>

              {/* Slider controls */}
              <div className="flex items-center gap-3 justify-center lg:justify-end">

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => scrollSlider("left")}
                  aria-label="Previous services"
                  className="rounded-full h-12 w-12 cursor-pointer"
                >
                  <ArrowLeft size={18} />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => scrollSlider("right")}
                  aria-label="Next services"
                  className="rounded-full h-12 w-12 cursor-pointer"
                >
                  <ArrowRight size={18} />
                </Button>

              </div>

            </div>
          </div>

          {/* Services Slider */}
          <div
            ref={sliderRef}
            className={cn(
              "flex gap-6 overflow-x-auto snap-x snap-mandatory",
              "scroll-smooth pb-5",
              "[scrollbar-none]",
              "[-ms-overflow-style:none]",
              "[&::-webkit-scrollbar]:hidden"
            )}
          >
            {serviceData.map((service, index) => {
              const Icon = service.service_icon;

              return (
                <motion.div
                  key={service.service_title}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={index}
                  className="shrink-0 snap-start w-[85%] sm:w-[48%] lg:w-[31.5%]"
                >
                  <Card
                    className={cn(
                      "group relative overflow-hidden ring-0 border-0 p-0",
                      "h-full min-h-[440px]",
                      "transition-all duration-500",
                      "hover:-translate-y-1 hover:shadow-xl",
                      service.service_bg_color
                    )}
                  >
                    {/* Image */}
                    <div className="relative h-[230px] w-full overflow-hidden">

                      <img
                        src={service.service_image}
                        alt={service.service_title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />

                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Icon */}
                      <div
                        className={cn(
                          "absolute top-5 left-5",
                          "flex h-12 w-12 items-center justify-center",
                          "rounded-full bg-white/95 shadow-lg backdrop-blur-sm",
                          "transition-transform duration-300",
                          "group-hover:scale-110",
                          service.service_text_color
                        )}
                      >
                        <Icon size={24} strokeWidth={1.8} />
                      </div>

                      {/* Number */}
                      <span className="absolute bottom-5 left-5 text-sm font-medium text-white/80">
                        0{index + 1}
                      </span>

                      {/* Arrow */}
                      <div
                        className={cn(
                          "absolute top-5 right-5",
                          "flex h-10 w-10 items-center justify-center",
                          "rounded-full bg-black/40 text-white",
                          "backdrop-blur-md",
                          "transition-all duration-300",
                          "group-hover:bg-white",
                          "group-hover:text-black",
                          "group-hover:rotate-45"
                        )}
                      >
                        <ArrowUpRight size={18} />
                      </div>

                    </div>

                    {/* Content */}
                    <CardContent className="p-6 flex flex-col justify-between gap-6 min-h-[210px]">

                      <div>
                        <h3
                          className={cn(
                            "text-2xl font-medium tracking-tight",
                            service.service_text_color
                          )}
                        >
                          {service.service_title}
                        </h3>

                        <p className="text-sm text-muted-foreground leading-6 mt-3">
                          {service.service_description}
                        </p>
                      </div>

                      {/* Explore */}
                      <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                        <span>
                          Explore service
                        </span>

                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </div>

                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Slider hint */}
          <div className="flex items-center justify-between -mt-5">
            <p className="text-sm text-muted-foreground">
              Explore our technology services
            </p>

            <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
              <ArrowLeft size={15} />
              <span>Drag to explore</span>
              <ArrowRight size={15} />
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gray-950 border rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-10 w-full">

            <div className="text-center md:text-start">

              <p className="text-2xl sm:text-3xl font-medium text-white">
                Have a digital idea?
              </p>

              <p className="text-2xl sm:text-3xl font-medium text-white">
                Let&apos;s turn it into reality.
              </p>

              <p className="text-sm text-white/60 mt-3 max-w-xl">
                Tell us what you want to build, improve or automate and
                GerNova will help you find the right technology solution.
              </p>

            </div>

            <div className="flex md:flex-row flex-col items-center gap-4 shrink-0">

              <Button 
                className="group text-sm font-medium text-black bg-white hover:text-black dark:hover:text-black hover:bg-white/90 rounded-full flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer"> 
                <a href="#contact" className="flex items-center gap-4"> 
                  <span>Let’s Collaborate</span> 
                  <div className="p-3 bg-black text-white rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out"> 
                    <ArrowUpRight size={16} /> 
                  </div> 
                </a> 
              </Button>

              <Button className="group text-sm font-medium text-white bg-gray-950 hover:text-white dark:hover:text-white hover:bg-gray-950/90 rounded-full border border-white/50 flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer">
               <a href="#portfolio" className="flex items-center gap-4"> 
                <span>View Portfolio</span>
                 <div className="p-3 bg-white text-black rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out">
                   <ArrowUpRight size={16} /> 
                 </div>
               </a> 
              </Button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;

