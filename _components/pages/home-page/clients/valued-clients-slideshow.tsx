"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import data from "@/_data/general-data.json";

import "swiper/css";
import "swiper/css/pagination";

const { ourClients } = data;

interface Props {
  cssClasses?: string;
}

const ValuedClientsSlideshow = ({ cssClasses }: Props) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        350: {
          slidesPerView: 2,
        },
        500: {
          slidesPerView: 3,
        },
        800: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
        1100: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
        },
      }}
      loop={true}
      speed={1000}
      autoplay={{
        disableOnInteraction: true,
        delay: 1500,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      modules={[Autoplay, Pagination]}
      className={`max-w-[1280px] h-full desktop:our-clients-gradient ${cssClasses}`}
      style={
        {
          "--swiper-pagination-color": "#FFFFFF",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-inactive-color": "#FFFFFF",
        } as React.CSSProperties
      }
    >
      {ourClients.map(({ src, alt }, index) => (
        <SwiperSlide key={`${src}-${index}`} className="pb-12 desktop:h-28">
          <div className="grid w-full h-full place-items-center">
            <Image
              src={src}
              alt={alt}
              width={200}
              height={80}
              className="object-contain m-auto max-h-20 max-w-48 min-[350px]:max-h-14 min-[350px]:max-w-36 min-[500px]:max-h-12 min-[500px]:max-w-32 [800px]:max-h-14 min-[800px]:max-w-36 [1000px]:max-h-16 min-[1000px]:max-w-40 [1280px]:max-h-14 min-[1280px]:max-w-36"
              sizes="(max-width: 425px) 50vw, (max-width:900px) 25vw, 10vw"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ValuedClientsSlideshow;
