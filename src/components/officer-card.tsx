import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { BiLogoGmail } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp, IoLogoFacebook } from "react-icons/io";

const OfficerCard = ({
  image,
  officerName,
  officerTitle,
  instagramLink,
  whatsappLink,
  facebookLink,
  gmailLink,
}: {
  image: StaticImageData;
  officerName: string;
  officerTitle: string;
  instagramLink?: string;
  whatsappLink?: string;
  facebookLink?: string;
  gmailLink?: string;
}) => {
  const socialOfficers = [
    { name: "facebook", icon: IoLogoFacebook, link: facebookLink },
    { name: "instagram", icon: AiFillInstagram, link: instagramLink },
    { name: "whatsapp", icon: IoLogoWhatsapp, link: whatsappLink },
    { name: "gmail", icon: BiLogoGmail, link: gmailLink },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <Image
        src={image}
        alt="officer image"
        className="w-full h-full rounded-lg mb-3"
      />
      <h1 className="font-bold text-lg">{officerName}</h1>
      <p className="text-base mb-3">{officerTitle}</p>
      <div className="flex gap-1">
        {socialOfficers.map((social) => {
          return (
            <Link
              href={social.link || "#"}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full border-[1px] border-self-blue/30 hover:bg-gradient-to-r from-self-blue to-self-green p-2">
                <social.icon className="w-4 h-4" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default OfficerCard;
