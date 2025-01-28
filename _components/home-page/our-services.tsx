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

import Heading from "@/_utils/headings/heading";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    id: "public-relations",
    number: "01",
    title: "Public Relations",
    description:
      "Excellent writing skills; all types of press releases (technical, corporate social investment, etc.)",
    icon: (
      <Megaphone
        className="h-7 w-7 text-white"
        color="#FFFFFF"
        strokeWidth={1.5}
      />
    ),
  },
  {
    id: "social-media",
    number: "02",
    title: "Social media",
    description:
      "Creation of social media content including design of online banners, etc. Posting, sharing, liking and reposting.",
    icon: (
      <Share2
        className="h-7 w-7 text-white"
        color="#FFFFFF"
        strokeWidth={1.5}
      />
    ),
  },
  {
    id: "advertising",
    number: "03",
    title: "Advertising",
    description:
      "Creation of targeted advertising schedules, end-to-end coordination from ad bookings to final material.",
    icon: (
      <Volume2
        className="h-7 w-7 text-white"
        color="#FFFFFF"
        strokeWidth={1.5}
      />
    ),
  },
  {
    id: "graphic-design",
    number: "04",
    title: "Graphic Design",
    description:
      "Digital advertisements, online banners, e-newsletters, flyers, posters, brochures, street posters, bill boards.",
    icon: (
      <Palette
        className="h-7 w-7 text-white"
        color="#FFFFFF"
        strokeWidth={1.5}
      />
    ),
  },
  {
    id: "photography",
    number: "05",
    title: "Photography & Videography",
    description: "Delivered by a professional.",
    icon: (
      <Camera
        className="h-7 w-7 text-white"
        color="#FFFFFF"
        strokeWidth={1.5}
      />
    ),
  },
  {
    id: "coordination",
    number: "06",
    title: "Coordination",
    description: "Coordination of events, press conferences, exhibitions, etc.",
    icon: (
      <Users className="h-7 w-7 text-white" color="#FFFFFF" strokeWidth={1.5} />
    ),
  },
  {
    id: "promotional-gifts",
    number: "07",
    title: "Promotional Gifts",
    description: "Sourcing to final product.",
    icon: (
      <Gift className="h-7 w-7 text-white" color="#FFFFFF" strokeWidth={1.5} />
    ),
  },
];

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
            className="object-cover aspect-[5/3] desktop:aspect-[2/1]"
            sizes="(max-width: 800px) 100vw, 50vw"
          />
          <Image
            src="/images/IMG_9580.jpg"
            alt="Team walking in hard hats"
            width={800}
            height={800}
            className="hidden tablet:block object-cover aspect-[5/3] desktop:aspect-[2/1]"
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </div>
        <Heading cssClasses="desktop:col-span-2">Our Services</Heading>
        <div>
          <ul className="grid gap-5 tablet:grid-cols-2 desktop:gap-10">
            {services.map(({ icon, title, description }, id) => (
              <li
                key={id}
                className="grid gap-5 border-b border-grey pb-5 desktop:pb-0"
              >
                <div className="flex gap-5 items-center">
                  <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center bg-purple">
                    {icon}
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
