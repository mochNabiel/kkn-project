import Image from "next/image";

import sukoharjoHero from "@/assets/images/sukoharjo-hero.jpg";

const PageHero = ({ text }: { text: string }) => {
  return (
    <section>
      <div className="relative w-full h-[60vh] bg-self-blue">
        <Image
          src={sukoharjoHero}
          alt="sukoharjo hero image"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex items-center justify-center"></div>
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold tracking-wider text-white">
          {text}
        </h1>
      </div>
    </section>
  );
};

export default PageHero;
