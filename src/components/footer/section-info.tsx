import Image from "next/image";
import Link from "next/link";

import LogoWithText from "@/components/logo-with-text";
import Facebook from "@/assets/icons/facebook.png";
import Tiktok from "@/assets/icons/tiktok.png";
import Instagram from "@/assets/icons/instagram.png";
import Whatsapp from "@/assets/icons/whatsapp.png";
import Youtube from "@/assets/icons/youtube.png";

const SectionInfo = () => {
  const socials = [
    {
      name: "tiktok",
      icon: Tiktok,
      link: "https://www.tiktok.com/@bumdes.mangesti.s",
    },
    {
      name: "instagram",
      icon: Instagram,
      link: "https://Instagram.com/bumdesmangestisejahtera",
    },
    {
      name: "whatsapp",
      icon: Whatsapp,
      link: "https://wa.me/6282136461270",
    },
    {
      name: "youtube",
      icon: Youtube,
      link: "https://m.youtube.com/@pemerintahdesagentanbakisu4086",
    },
    {
      name: "facebook",
      icon: Facebook,
      link: "https://www.facebook.com/profile.php?id=100073393885549",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row gap-5 tracking-wide text-gray-100">
      <div className="flex flex-col w-full md:w-1/4 gap-3">
        <LogoWithText />
        <p className="text-[14px]">
          Jl. Raya Songgo Langit No. 4 Desa Gentan, Kecamatan Baki, Kabupaten
          Sukoharjo, Jawa Tengah 57556
        </p>
        <div className="flex gap-3">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={32}
                height={32}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/4 gap-3">
        <h1 className="font-bold text-base">LINK TERKAIT</h1>
        <div className="flex flex-col text-sm gap-2">
          <Link
            className="hover:text-gray-900"
            href="https://cctv-dishub.sukoharjokab.go.id/cctv-detail/23"
          >
            CCTV Gentan
          </Link>
          <Link
            className="hover:text-gray-900"
            href="https://ppid.sukoharjokab.go.id/"
          >
            PPID
          </Link>
          <Link
            className="hover:text-gray-900"
            href="https://portal.sukoharjokab.go.id/"
          >
            Pemkab Sukoharjo
          </Link>
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/4 gap-3">
        <h1 className="font-bold text-base">JADWAL PELAYANAN</h1>
        <div className="flex flex-col text-sm gap-2">
          <p>Senin s&#x2F;d Kamis : 08.00 - 15.00 WIB</p>
          <p>Jum&apos;at : 08.00 - 11.00 WIB</p>
          <p>Sabtu : Libur</p>
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/4 gap-3">
        <h1 className="font-bold text-base">UNDUHAN</h1>
        <div className="flex flex-col text-sm gap-2">
          <Link className="hover:text-gray-900" href="#">
            Formulir Pengajuan KTP
          </Link>
          <Link className="hover:text-gray-900" href="#">
            Formulir Pembuatan Akte
          </Link>
          <Link className="hover:text-gray-900" href="#">
            Formulir Pembuatan KK
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionInfo;
