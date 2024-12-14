import Image from "next/image";

import TextTitle from "@/components/text-title";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

import kantorDesaGentan from "@/assets/images/Kantor-desa-gentan-baki-sukoharjo.jpeg";

const SectionSejarahDesa = () => {
  return (
    <section className="my-20 px-10">
      <TextTitle className="text-center mb-10">SEJARAH DESA GENTAN</TextTitle>
      <Card className="flex flex-col items-start justify-center">
        <CardHeader className="mx-auto">
          <Image
            src={kantorDesaGentan}
            alt="Kantor Desa Gentan"
            className="rounded-lg"
          />
        </CardHeader>
        <CardContent>
          <p className="text-justify columns-1 md:columns-2 gap-x-10">
            Desa Gentan, terletak di lereng utara Gunung Gedhe Gajah Mungkur,
            memiliki sejarah panjang yang dimulai dari era kepemimpinan tokoh
            sakti Kyai Bas di Dukuh Baseng. Kisah ini bermula dengan adanya
            konflik antara Kyai Bas dan Kyai Kerto, seorang pemilik tanah subur
            di Bumi Kerten. Kyai Kerto menawarkan sayembara mencabut pohon
            kelapa di Bumi Migit, yang kemudian diselesaikan oleh Kyai Bas
            dengan kesaktiannya. Sebagai konsekuensi, Kyai Kerto menyerahkan
            Bumi Kerten beserta isinya kepada Kyai Bas, menjadikannya Bumi
            Perdikan atau tanah kemengan. Tanah ini kemudian menjadi simbol
            kedaulatan Desa Gentan dan digunakan sebagai tanah bengkok, sumber
            penghasilan perangkat desa. Wilayah ini terus berkembang menjadi
            pusat kemakmuran dan diperkaya oleh keberadaan beberapa mata air
            seperti Sendang Kyai Bas, Pancuran Lele, dan Sendang Songo yang
            menghidupi masyarakat setempat. Dalam kesepakatan antara Kyai Bas
            dan Kyai Kerto, ditetapkan bahwa keturunan mereka tidak boleh
            menikah, menjaga keberlangsungan harmoni antara kedua pihak. Hingga
            kini, kearifan lokal yang diwariskan oleh Kyai Bas tetap menjadi
            pedoman warga dalam menjaga kelestarian adat dan alam. Sebagai
            bagian dari perkembangan, Desa Gentan juga mencakup beberapa dukuh
            penting seperti Dukuh Baseng, Dukuh Payaman, Dukuh Garutan, Dukuh
            Tanjung, dan Dukuh Pacinan, masing-masing dengan cerita dan keunikan
            tersendiri. Tempat-tempat seperti Gunung Sepikul, Sendang Kelor, dan
            Embung Gentan kini menjadi ikon wisata desa. Dalam catatan sejarah,
            Desa Gentan pada masa kolonial dipimpin oleh Demang Drono
            (1928-1937) dan KRT Sastro Raharjo (1937-1946) yang turut mengawal
            masa transisi menuju kemerdekaan. Hingga saat ini, Desa Gentan
            dikenal sebagai wilayah subur, makmur, dan penuh kearifan lokal yang
            diwariskan oleh para tokoh pendahulu.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default SectionSejarahDesa;
