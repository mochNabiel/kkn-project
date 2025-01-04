"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import kantorGentan from "@/assets/images/Kantor-desa-gentan-baki-sukoharjo.jpeg";
import luwesGentan from "@/assets/images/luwes-gentan.jpg";
import patungJamu from "@/assets/images/patung-jamu-gendong-3350169538.webp";
import kantorSukoharjo from "@/assets/images/kantor-sukoharjo.jpeg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const carouselImages = [kantorGentan, luwesGentan, patungJamu, kantorSukoharjo];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-[70vh] md:h-[85vh] relative"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="h-[70vh] md:h-[85vh]">
        {carouselImages.map((image, index) => (
          <CarouselItem className="h-full" key={index}>
            <Image
              src={image}
              className="w-full h-full object-cover brightness-50"
              alt="hero image"
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Carousel Text */}
      <div className="absolute z-100 w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[50vw] px-8 md:px-10 lg:px-12 py-12 md:py-14 lg:py-16 h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-self-blue/50 to-self-green/50 backdrop-blur-sm shadow-lg rounded-3xl flex flex-col justify-center items-center">
        <h1 className="font-semibold tracking-wider text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center text-background">
          Selamat Datang di Website Mangesti Sejahtera
        </h1>
      </div>

      {/* Tombol Previous dan Next */}
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
