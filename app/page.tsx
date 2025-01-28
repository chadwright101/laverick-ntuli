import FlexibleDynamicSection from "@/_components/home-page/flexible-dynamic-section";
import HeroComponent from "@/_components/home-page/hero/hero-component";
import OurHistory from "@/_components/home-page/our-history";
import OurServices from "@/_components/home-page/our-services";

export default function Home() {
  return (
    <div>
      <HeroComponent />
      <FlexibleDynamicSection />
      <OurServices />
      <OurHistory />
    </div>
  );
}
