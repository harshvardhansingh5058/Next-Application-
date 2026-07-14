"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import hero1 from "../assets/images/Hero-1.webp";
import hero2 from "../assets/images/Hero-2.webp";
import hero3 from "../assets/images/Hero-3.jpg";
import hero4 from "../assets/images/Hero-4.jpg";
import hero5 from "../assets/images/Hero-5.webp";

const slides = [
  { image: hero1, alt: "Hero banner 1" },
  { image: hero2, alt: "Hero banner 2" },
  { image: hero3, alt: "Hero banner 3" },
  { image: hero4, alt: "Hero banner 4" },
  { image: hero5, alt: "Hero banner 5" },
];

export default function HeroBanner() {
  return (
    <div className="relative h-[70vh] min-h-[420px] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <Image
                src={slide.image}
                alt={slide.alt}
                priority={index === 0}
                sizes="100vw"    
                className="object-cover object-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}