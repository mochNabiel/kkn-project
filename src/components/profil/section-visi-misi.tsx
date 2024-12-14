import TextTitle from "@/components/text-title";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SectionVisiMisi = () => {
  return (
    <section className="mt-10 mb-20 px-10">
      <TextTitle className="text-center mb-10">VISI MISI</TextTitle>
      <div className="flex flex-col md:flex-row gap-10">
        <Card className="w-full md:w-1/2">
          <CardHeader>
            <CardTitle className="text-2xl bg-gradient-to-r from-self-blue to-self-green bg-clip-text text-transparent">Visi</CardTitle>
            <CardDescription className="text-lg font-semibold text-gray-900">
              MENUJU DESA KEMAKMURAN MODERN DAN BERBUDAYA
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-full md:w-1/2">
          <CardHeader>
            <CardTitle className="text-2xl text-self-blue">Misi</CardTitle>
            <CardDescription className="text-lg font-semibold text-gray-900">
              <ol className="list-decimal list-inside">
                <li>Menciptakan iklim kehidupan masyarakat yang kondusif, aman dan damai.</li>
                <li>Mewujudkan pembangunan yang adil, merata dan demokratis.</li>
                <li>Meningkatkan kesejahteraan masyarakat.</li>
              </ol>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
};

export default SectionVisiMisi;
