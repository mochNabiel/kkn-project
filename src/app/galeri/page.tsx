import GalleryCard from "@/components/galeri/gallery-card";
import PageHero from "@/components/page-hero";

import gallery1 from "@/assets/images/gallery1.jpeg";

const GalleryPage = () => {
  const galleryImages = [
    {
      title: "Rapat Proda di Omah Lowo",
      image: gallery1,
      date: new Date(2024, 9, 22),
    },
    {
      title: "Rapat Proda di Omah Lowo",
      image: gallery1,
      date: new Date(2024, 9, 22),
    },
    {
      title: "Rapat Proda di Omah Lowo",
      image: gallery1,
      date: new Date(2024, 9, 22),
    },
    {
      title: "Rapat Proda di Omah Lowo",
      image: gallery1,
      date: new Date(2024, 9, 22),
    },
    {
      title: "Rapat Proda di Omah Lowo",
      image: gallery1,
      date: new Date(2024, 9, 22),
    },
  ];

  return (
    <main>
      <PageHero text="Galeri BUMDes Mangesti Sejahtera" />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 p-10">
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
