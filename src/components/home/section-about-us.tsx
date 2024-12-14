import { Button } from "@/components/ui/button";
import Image from "next/image";
import kantorGentan from "@/assets/images/Kantor-desa-gentan-baki-sukoharjo.jpeg";
import TextTitle from "@/components/text-title";
import Link from "next/link";

const SectionAboutUs = () => {
  return (
    <section className="flex flex-col md:flex-row gap-10 md:gap-5 p-10">
      <div className="flex w-full md:w-1/2 flex-col justify-center items-center md:items-start text-justify md:text-left gap-5">
        <TextTitle>Tentang Kami</TextTitle>
        <p>
          Website ini bertujuan untuk memberikan informasi yang berkaitan untuk
          mengangkat potensi usaha bisnis yang dimiliki Desa Gentan, mengangkat
          potensi tempat wisata Kabupaten Sukoharjo, mengangkat kegiatan event
          kebudayaan Kabupaten Sukoharjo dan hal yang berkaitan dengan Desa
          Gentan
        </p>
        <Link href="/profil">
          <Button className="max-w-max">SELENGKAPNYA</Button>
        </Link>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          src={kantorGentan}
          alt="Kantor Desa Gentan"
          className="rounded-xl"
        />
      </div>
    </section>
  );
};

export default SectionAboutUs;
