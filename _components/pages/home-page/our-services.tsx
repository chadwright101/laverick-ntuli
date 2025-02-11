import Image from "next/image";
import {
  Megaphone,
  Share2,
  Volume2,
  Palette,
  Camera,
  Users,
  Gift,
} from "lucide-react";
import Heading from "@/_components/ui/headings/heading";
import generalData from "@/_data/general-data.json";

const iconMapping = {
  megaphone: (
    <Megaphone
      className="h-7 w-7 text-white"
      color="#FFFFFF"
      strokeWidth={1.5}
    />
  ),
  share: (
    <Share2 className="h-7 w-7 text-white" color="#FFFFFF" strokeWidth={1.5} />
  ),
  volume: (
    <Volume2 className="h-7 w-7 text-white" color="#FFFFFF" strokeWidth={1.5} />
  ),
  palette: (
    <Palette className="h-7 w-7 text-white" color="#FFFFFF" strokeWidth={1.5} />
  ),
  camera: (
    <Camera className="h-7 w-7 text-white" color="#FFFFFF" strokeWidth={1.5} />
  ),
  users: (
    <Users className="h-7 w-7 text-white" color="#FFFFFF" strokeWidth={1.5} />
  ),
  gift: (
    <Gift className="h-7 w-7 text-white" color="#FFFFFF" strokeWidth={1.5} />
  ),
};
export default function OurServices() {
  return (
    <section
      className="w-full py-15 px-5 bg-white tablet:px-10"
      id="our-services"
    >
      <div className="grid gap-10 max-w-[1280px] mx-auto desktop:gap-y-15">
        <div className="grid gap-x-5 gap-y-10 tablet:grid-cols-2 desktop:order-1 desktop:grid-cols-1">
          <Image
            src="/images/IMG_9574-2.jpg"
            alt="Team photo with purple balloons"
            width={800}
            height={800}
            className="object-cover aspect-[5/3] desktop:aspect-[1.85/1]"
            sizes="(max-width: 800px) 100vw, 50vw"
          />
          <Image
            src="/images/IMG_9580.jpg"
            alt="Team walking in hard hats"
            width={800}
            height={800}
            className="hidden tablet:block object-cover aspect-[5/3] desktop:aspect-[1.85/1]"
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </div>
        <Heading cssClasses="desktop:col-span-2">Our Services</Heading>
        <div>
          <ul className="grid gap-5 tablet:grid-cols-2 desktop:gap-10">
            {generalData.services.map(({ iconKey, title, description }, id) => (
              <li key={id} className="grid gap-5 border-b border-grey pb-5">
                <div className="flex gap-5 items-center">
                  <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center bg-purple">
                    {iconMapping[iconKey as keyof typeof iconMapping]}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-normal">0{id + 1}</span>
                    <h3 className="text-subheadingSmall -mt-1">{title}</h3>
                  </div>
                </div>
                <p className="text-paragraph text-darkGrey">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
