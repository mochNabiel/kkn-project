import PageHero from "@/components/page-hero";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; // Import Card dari ShadCN

import dataJK from "@/assets/images/data-jk.svg";
import dataKK from "@/assets/images/data-kk.svg";
import dataPendidikan from "@/assets/images/data-pendidikan.svg";
import dataProfesi from "@/assets/images/data-profesi.svg";
import dataUsia from "@/assets/images/data-usia.svg";
import TextTitle from "@/components/text-title";

const datas = [
  {
    image: dataJK,
    title:
      "JUMLAH PENDUDUK DESA BERDASARKAN JENIS KELAMIN SESUAI DATA DESA YANG BARU TERITEGRASI",
  },
  {
    image: dataKK,
    title:
      "JUMLAH PENDUDUK DESA BERDASARKAN KEPEMILIKAN KK SESUAI DATA DESA YANG BARU TERINTEGRASI",
  },
  {
    image: dataPendidikan,
    title:
      "JUMLAH PENDUDUK DESA BERDASARKAN PENDIDIKAN SESUAI DATA DESA YANG BARU TERINTEGRASI",
  },
  {
    image: dataProfesi,
    title:
      "JUMLAH PENDUDUK DESA BERDASARKAN PEKERJAAN SESUAI DATA DESA YANG BARU TERINTEGRASI",
  },
  {
    image: dataUsia,
    title:
      "JUMLAH PENDUDUK DESA BERDASARKAN USIA SESUAI DATA DESA YANG BARU TERINTEGRASI",
  },
];

const DataPage = () => {
  return (
    <main>
      <PageHero text="Data Desa Gentan" />
      <TextTitle className="text-center mt-10 mb-5">Data Desa Gentan</TextTitle>
      <section className="py-10 px-5 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {datas.map((data, index) => (
            <Card
              key={index}
              className="shadow-md hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <img
                  src={data.image.src}
                  alt={data.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-center text-lg font-semibold">
                  {data.title}
                </CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default DataPage;
