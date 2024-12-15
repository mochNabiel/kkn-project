import React from "react";
import Image, { StaticImageData } from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {FullscreenIcon} from "lucide-react"

const GalleryCard = ({
  image,
  title,
  date,
}: {
  image: StaticImageData;
  title: string;
  date: Date;
}) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="group relative overflow-hidden">
          <Image
            src={image}
            alt="gallery image"
            className="w-full h- rounded-lg transition-transform duration-300 group-hover:scale-110 overflow-hidden"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FullscreenIcon className="w-8 h-8 text-white" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-transparent sm:max-w-[425px] md:max-w-[600px] lg:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>
            <Image src={image} className="rounded-lg" alt="gallery image" />
          </DialogTitle>
          <DialogDescription className="text-gray-100">
            {title}
            {" - "}
            {date?.toLocaleString("id-ID", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            }) || ""}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryCard;
