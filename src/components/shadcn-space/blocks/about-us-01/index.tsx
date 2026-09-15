
"use client";

import AboutUs from "@/components/shadcn-space/blocks/about-us-01/about-us";
import { Target, WandSparkles, Zap } from "lucide-react";

const aboutusData = [
  {
    icon: WandSparkles,
    title: "Digital Innovation",
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    icon: Zap,
    title: "Smart Automation",
    color: "bg-purple-500/10 text-purple-400",
  },
  {
    icon: Target,
    title: "Business Growth",
    color: "bg-orange-400/10 text-orange-400",
  },
];

const statisticsCounter = [
  {
    title: "Digital Solutions Delivered",
    count: 40,
  },
  {
    title: "Years of Technology Experience",
    count: 15,
  },
  {
    title: "Digital Capabilities",
    count: 7,
  },
];

const AboutAndStats01 = () => {
  return (
    <>
      <AboutUs
        aboutusData={aboutusData}
        statisticsCounter={statisticsCounter}
      />
    </>
  );
};

export default AboutAndStats01;

