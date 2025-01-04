import PageHero from "@/components/page-hero";
import TextTitle from "@/components/text-title";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";

import pemilahanSampah from "@/assets/images/pemilahan-sampah.webp";
import perdaganganSembakau from "@/assets/images/perdagangan-sembakau.jpg";

const BusinessPage = () => {
  return (
    <main>
      <PageHero text="Kegiatan Usaha BUMDesa Mangesti Sejahtera" />
      <Card className="my-10 text-center mx-5 md:mx-10">
        <CardHeader>
          <TextTitle className="text-lg md:text-xl lg:text-2xl mb-5">
            Pemilahan Sampah
          </TextTitle>
          <Image
            src={pemilahanSampah}
            className="rounded-lg object-cover w-full md:w-3/4 lg:w-2/3 mx-auto"
            alt="pemilahan sampah"
          />
        </CardHeader>
        <CardContent>
          <p className="text-justify text-sm md:text-md lg:text-lg mb-2">
            LIMBAH minyak goreng bekas termasuk minyak jelantah sering ditemui
            dalam kehidupan sehari-hari. Meski membawa dampak negatif, namun
            jika diolah menjadi sumber bahan bahan, justru menguntungkan,
            seperti yang mulai dilakukan BUMDes (Badan Usaha Milik Desa)
            Mangesti Sejatera Desa Gentan, Kecamatan Baki, Kabupaten Sukoharjo
            Provinsi Jawa Tengah, sangat dinamis.
          </p>
          <p className="text-justify text-sm md:text-md lg:text-lg mb-2">
            Ketimbang didaur ulang menjadi minyak goreng lagi, namun kurang
            bagus bagi tubuh, lebih baik limbah minyak minyak goreng tersebut
            diolah menjadi biodiesel. Melalui kerjasama BUMDes Mangesti
            Sejahtera Desa Gentan dengan Direktorat Pengabdian Masyarakat UGM,
            limbah minyak goreng bekas tersebut menjadi bahan bakar biodiesel
            dan efisien menjadi pendapatan BUMDes serta warga masyarakat di
            desanya.
          </p>
          <p className="text-justify text-sm md:text-md lg:text-lg mb-2">
            Melalui kerjasama dengan Direktorat Pengabdian Masyarakat UGM, Badan
            Usaha Milik Desa (BUMDes) Mangesti Sejahtera Desa Gentan berupaya
            mengolah limbah minyak goreng bekas ini menjadi bahan bakar
            biodiesel secara efisien untuk meningkatkan pendapatan BUMDes
            Gentan. Direktorat Jendral Energi Baru dan Terbarukan menjelaskan
            bahwa minyak goreng bekas berpotensi memiliki nilai pasar yang
            tinggi saat diolah menjadi biodiesel sebagai subtitusi minyak solar.
          </p>
          <p className="text-justify text-sm md:text-md lg:text-lg mb-2">
            Menghadapi permasalahan peningkatan limbah ini, Pemerintah Desa
            bersama dengan Badan Usaha Milik Desa (BUMDes) Mangesti Sejahtera
            Desa Gentan, yang dipimpin Didik Haryono SE telah merencanaan
            pembangunan TPS 3R dan mengimplementasikan kegiatan reduce melalui
            program “Gelimpah” atau Gentan Peduli Sampah. Dalam program
            Gelimpah, BUMDes Gentan mengumpulkan berbagai limbah termasuk minyak
            goreng dari warga untuk dikonversi menjadi tabungan emas melalui
            kerjasama dengan PT Pegadaian.
          </p>
        </CardContent>
      </Card>
      <Card className="my-10 text-center mx-5 md:mx-10">
        <CardHeader>
          <TextTitle className="text-lg md:text-xl lg:text-2xl mb-5">
            Perdagangan Sembakau
          </TextTitle>
          <Image
            src={perdaganganSembakau}
            className="rounded-lg object-cover w-full md:w-3/4 lg:w-2/3 mx-auto"
            alt="perdagangan Sembakau"
          />
        </CardHeader>
        <CardContent>
          <p className="text-justify text-sm md:text-md lg:text-lg mb-2">
            BUMDesa (Badan Usaha Milik Desa) Mangesti Sejahtera merupakan
            lembaga usaha desa yang bergerak dalam berbagai sektor ekonomi,
            termasuk perdagangan sembako (sembilan bahan pokok). BUMDesa ini
            didirikan sebagai bagian dari inisiatif pemerintah desa Gentan untuk
            meningkatkan kesejahteraan masyarakat, memperkuat ekonomi lokal, dan
            menciptakan peluang usaha di tingkat desa. Berlokasi di Kecamatan
            Baki, Kabupaten Sukoharjo, Provinsi Jawa Tengah, BUMDesa Mangesti
            Sejahtera memiliki peran strategis dalam menggerakkan perekonomian
            desa, khususnya dalam memenuhi kebutuhan sembako masyarakat.
          </p>
          <p className="text-justify text-sm md:text-md lg:text-lg mb-2">
            Tujuan utama perdagangan sembako di BUMDesa Mangesti Sejahtera
            adalah:
          </p>
          <ul className="list-decimal text-justify text-sm md:text-md lg:text-lg mb-2 ms-4">
            <li>
              <span className="font-bold">
                Menyediakan sembako dengan harga terjangkau:{" "}
              </span>
              Mengurangi beban masyarakat dalam memenuhi kebutuhan pokok
              sehari-hari.
            </li>
            <li>
              <span className="font-bold">Meningkatkan aksesibilitas: </span>
              Memastikan sembako tersedia di lokasi yang mudah dijangkau oleh
              seluruh warga desa.
            </li>
            <li>
              <span className="font-bold">
                Mendukung petani dan produsen lokal:{" "}
              </span>
              BUMDesa juga berusaha menjalin kerja sama dengan petani dan
              produsen lokal untuk memasok beberapa jenis sembako, seperti beras
              dan sayuran.
            </li>
            <li>
              <span className="font-bold">
                Menggerakkan perekonomian desa:{" "}
              </span>
              Memberikan lapangan kerja dan peluang usaha bagi warga desa.
            </li>
            <li>
              <span className="font-bold">
                Meningkatkan pendapatan asli desa (PAD):{" "}
              </span>
              Sebagai salah satu sumber pemasukan yang dapat digunakan untuk
              pembangunan desa.
            </li>
          </ul>
        </CardContent>
      </Card>
    </main>
  );
};

export default BusinessPage;
