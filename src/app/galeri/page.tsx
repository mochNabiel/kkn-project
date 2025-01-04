import GalleryCard from "@/components/galeri/gallery-card";
import PageHero from "@/components/page-hero";

import gallery1 from "@/assets/images/gallery1.jpeg";
import gallery2 from "@/assets/images/gallery2.jpg";
import gallery3 from "@/assets/images/gallery3.jpg";
import gallery4 from "@/assets/images/gallery4.jpg";
import gallery5 from "@/assets/images/gallery5.jpg";
import gallery6 from "@/assets/images/gallery6.jpg";
import gallery7 from "@/assets/images/gallery7.jpg";
import gallery8 from "@/assets/images/gallery8.jpg";
import gallery9 from "@/assets/images/gallery9.jpg";
import gallery10 from "@/assets/images/gallery10.jpg";
import TextTitle from "@/components/text-title";

const GalleryPage = () => {
  const galleryImages = [
    {
      title: "Rapat dengan Mahasiswa UNS",
      image: gallery1,
      date: new Date(2022, 1, 21),
    },
    {
      title: "Bank sampah Gelipah... Pilah sampah jadi Emas",
      image: gallery2,
      date: new Date(2022, 1, 8),
    },
    {
      title:
        "Giat hari ini tanggal 8 Januari 2022 operasional bank sampah Gelipah...Tetap SEMANGAT..MEMILAH SAMPAH MENABUNG EMAS",
      image: gallery3,
      date: new Date(2024, 1, 8),
    },
    {
      title:
        "Launching Desa mandiri sampah dan Penandatangan Kerjasama/PKS BUM Desa dg mitra bisnis ( Pegadaian, Pusat Inovasi Agronomi UGM, Fak MIPA UGM, Fak Ekonomi & Bisnis UGM, PT. Intraco Kimia, PT. Air mineral Wahana).",
      image: gallery4,
      date: new Date(2021, 12, 22),
    },
    {
      title:
        "Kerjasama bahan pembersih dan pewangi Bumdes Mangesti Sejahtera PT. Intraco Kimia.",
      image: gallery5,
      date: new Date(2021, 12, 21),
    },
    {
      title: "Kerjasama Air Minum Bumdes Mangesti Sejahtera dengan SpringAsli",
      image: gallery6,
      date: new Date(2021, 12, 21),
    },
    {
      title: `Persiapan acara Silaturahmi BUMDesa Mintra Strategis "Menuju Kebangkitan Ekonomi Desa Mandiri Sampah"`,
      image: gallery7,
      date: new Date(2021, 12, 21),
    },
    {
      title:
        "Persiapan Workshop dan Penandatanganan Kerjasama (Bumdes, Pegadaian, FIAT UGM, DLH)",
      image: gallery8,
      date: new Date(2021, 12, 15),
    },
    {
      title: `Kunjungan Studi Banding dari Bumdes se Kecamatan Ulu Jami Kabupaten Pemalang dengan Semangat "GILA" Gali Ide Langsung Aksi.`,
      image: gallery9,
      date: new Date(2021, 12, 4),
    },
    {
      title:
        "Penandatanganan Perjanjian Kerjasama Antara PT Pegadaian (Persero) Area Surakarta dengan BUMDesa Mangesti Sejahtera",
      image: gallery10,
      date: new Date(2021, 10, 12),
    },
  ];

  return (
    <main>
      <PageHero text="Galeri BUMDes Mangesti Sejahtera" />
      <TextTitle className="text-center mt-10 mb-5">Galeri BUMDesa</TextTitle>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 p-5 md:p-10">
        {galleryImages.map((gallery, index) => (
          <GalleryCard
            image={gallery.image}
            title={gallery.title}
            date={gallery.date}
            key={index}
          />
        ))}
      </section>
    </main>
  );
};

export default GalleryPage;
