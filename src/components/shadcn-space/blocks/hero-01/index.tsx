import HeroSection from "@/components/shadcn-space/blocks/hero-01/hero";
import TechnologySlider from "@/components/shadcn-space/blocks/hero-01/technology-slider";
import type { AvatarList } from "@/components/shadcn-space/blocks/hero-01/hero";
import { technologies } from "@/lib/technologies";

export default function AgencyHeroSection() {
  const avatarList: AvatarList[] = [
    {
      image: "https://images.shadcnspace.com/assets/profiles/user-1.jpg",
    },
    {
      image: "https://images.shadcnspace.com/assets/profiles/user-2.jpg",
    },
    {
      image: "https://images.shadcnspace.com/assets/profiles/user-3.jpg",
    },
    {
      image: "https://images.shadcnspace.com/assets/profiles/user-5.jpg",
    },
  ];

  

  return (
    <div className="relative">
      
      <main>
        <HeroSection avatarList={avatarList} />
        {/* <TechnologySlider technologies={technologies} /> */}
      </main>
    </div>
  );
}
