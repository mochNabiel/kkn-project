"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import stadionManahan from "@/assets/images/hero-stadion.jpg";
import keratonSolo from "@/assets/images/keraton-solo.jpeg";
import soloSafari from "@/assets/images/solo-safari.jpg";

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

  const carouselImages = [stadionManahan, keratonSolo, soloSafari];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-full relative"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="h-screen">
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
      <div className="absolute z-100 w-[40vw] h-[40vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-self-blue/50 to-self-green/50 backdrop-blur-sm shadow-lg rounded-3xl flex flex-col justify-center items-center px-5 md:px-10">
        <h1 className="font-semibold tracking-wider text-lg md:text-2xl text-center text-background">Selamat Datang di Website Mangesti Sejahtera</h1>
      </div>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
