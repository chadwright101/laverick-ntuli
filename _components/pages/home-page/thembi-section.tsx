import Heading from "@/_components/ui/headings/heading";
import Image from "next/image";

const ThembiSection = () => {
  return (
    <section className="bg-white py-15 px-5 tablet:px-10">
      <div className="max-w-[1280px] mx-auto grid gap-10 tablet:grid-cols-[1.5fr_1fr] min-[1000px]:grid-cols-[1fr_280px]">
        <div className="grid gap-10 tablet:place-content-start tablet:gap-5">
          <Heading background="transparent" textColor="black" border={false}>
            Thank you Thembi
          </Heading>
          <Image
            src="/images/IMG_9602-cropped.jpg"
            alt="Thembekile (Thembz) Ntuli"
            width={800}
            height={800}
            className="object-cover aspect-square object-top tablet:hidden"
            sizes="(max-width: 800px) 100vw, 50vw"
          />
          <div className="grid gap-4 tablet:place-content-start">
            <p>
              You were there for me from day one! And when we expanded our
              services, you coped, growing your skills and keeping step with the
              company as we developed. As the team grew, you embraced our new
              colleagues, making everyone feel welcome. You felt the loss of my
              mom as deeply as I did.
            </p>
            <p>
              You are responsible for dispatching all the press releases and
              images to the media. You also wear the accounting hat and you do
              so with aplomb. Your work ethic, dedication and commitment are
              next level. But so much more than that Thembz … you are my
              adviser, my confidant and my very dear friend. You are Gogo to my
              two grandsons so we are family. Laverick Media would not have been
              here today if it was not for you Thembz, as my valued business
              partner. For these reasons and so many more, your name deserves a
              place next to mine… Proudly Laverick Ntuli Communications!
            </p>
          </div>
        </div>
        <Image
          src="/images/IMG_9602-cropped.jpg"
          alt="Thembekile (Thembz) Ntuli"
          width={800}
          height={800}
          className="hidden object-cover h-full tablet:block"
          sizes="(max-width: 1280px) 50vw, 25vw"
        />
      </div>
    </section>
  );
};

export default ThembiSection;
