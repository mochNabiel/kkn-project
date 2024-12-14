import TextTitle from "@/components/text-title";
import OfficerCard from "@/components/officer-card";

import { officers } from "@/constant/officers";

const SectionPerangkatDesa = () => {
  return (
    <section className="my-20 px-10">
      <TextTitle className="text-center mb-10">
        DAFTAR KEPALA DESA, PERANGKAT DESA DAN STAFF
      </TextTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {officers.map((officer, index) => (
          <OfficerCard
            officerName={officer.name}
            officerTitle={officer.title}
            key={index}
            image={officer.image}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionPerangkatDesa;
