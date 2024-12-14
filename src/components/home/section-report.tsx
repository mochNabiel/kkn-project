import TextTitle from "@/components/text-title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartPie } from "lucide-react";

import chartImage from "@/assets/images/Presentation-cuate.svg";
import Image from "next/image";

const SectionReport = () => {
  return (
    <section className="flex flex-col gap-7 p-10">
      <TextTitle className="text-center">
        Grafik Laporan Pertanggungjawaban Tahun 2024
      </TextTitle>
      <div className="flex flex-col md:flex-row gap-10">
        <Card className="w-full md:w-1/2">
          <CardHeader className="flex flex-row items-center justify-center gap-3">
            <ChartPie />
            <CardTitle className="font-bold text-xl">
              Jumlah Pendapatan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              width={400}
              src={chartImage}
              alt="chart image"
              className="mx-auto"
            />
          </CardContent>
        </Card>
        <Card className="w-full md:w-1/2">
          <CardHeader className="flex flex-row items-center justify-center gap-3">
            <ChartPie />
            <CardTitle className="font-bold text-xl">Jumlah Belanja</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              width={400}
              src={chartImage}
              alt="chart image"
              className="mx-auto"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SectionReport;
