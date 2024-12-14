import { HeroCarousel } from "@/components/home/hero-carousel";
import SectionAboutUs from "@/components/home/section-about-us";
import SectionReport from "@/components/home/section-report";
import SectionService from "@/components/home/section-service";


export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <SectionAboutUs />
      <SectionService />
      <SectionReport />
    </main>
  );
}
