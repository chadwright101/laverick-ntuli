import { Metadata } from "next";

import ValuedClientsSection from "@/_components/pages/home-page/clients/valued-clients-section";
import FlexibleDynamicSection from "@/_components/pages/home-page/flexible-dynamic-section";
import HeroComponent from "@/_components/pages/home-page/hero/hero-component";
import OurHistory from "@/_components/pages/home-page/our-history";
import OurServices from "@/_components/pages/home-page/our-services";
import ThembiSection from "@/_components/pages/home-page/thembi-section";

export const metadata: Metadata = {
  title: "Laverick Ntuli Communications",
};

export default function Home() {
  return (
    <div>
      <HeroComponent />
      <FlexibleDynamicSection />
      <OurServices />
      <OurHistory />
      <ValuedClientsSection />
      <ThembiSection />
    </div>
  );
}
