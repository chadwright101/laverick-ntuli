import Heading from "@/_utils/headings/heading";
import ValuedClientsSlideshow from "./valued-clients-slideshow";
import ButtonLink from "@/_utils/buttons/button-link";

const ValuedClientsSection = () => {
  return (
    <section className="bg-black py-10 px-5 grid gap-10 max-w-[1280px] mx-auto tablet:px-10 tablet:grid-cols-[2fr_1fr] min-[1000px]:grid-cols-[3.5fr_1fr]">
      <div className="grid gap-10">
        <div className="grid gap-10">
          <h3 className="text-white border-b-2 border-purple place-self-start">
            Our Valued Clients
          </h3>
          <p className="text-white">
            We are proud to work with our incredible clients, some of whom have
            been with us for almost 20 years.
          </p>
        </div>
        <div className="overflow-hidden">
          <ValuedClientsSlideshow />
        </div>
      </div>
      <hr className="text-grey/25 tablet:hidden" />
      <div className="flex flex-col items-center justify-center gap-5 tablet:-mt-8">
        <h3 className="text-white text-subheadingLarge font-normal">
          Get In Touch
        </h3>
        <ButtonLink href="/contact" cssClasses="w-full">
          Contact Us
        </ButtonLink>
      </div>
    </section>
  );
};

export default ValuedClientsSection;
