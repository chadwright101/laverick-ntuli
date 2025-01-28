import HeroSlider from "@/_components/home-page/hero/hero-slider";

import data from "@/_data/general-data.json";

const { heroSlider } = data;

const HeroComponent = () => {
  return (
    <section className="max-w-[1280px] mx-auto -z-10">
      <div className="overflow-hidden">
        <HeroSlider
          data={heroSlider}
          cssClasses="h-[320px] phone:h-[380px] min-[550px]:h-[450px] tablet:h-[600px]"
        />
      </div>
    </section>
  );
};

export default HeroComponent;
