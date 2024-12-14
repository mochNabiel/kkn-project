import { Users, Calendar, Activity } from "lucide-react";

const SectionVisitors = () => {
  return (
    <section className="flex flex-col md:flex-row gap-5">
      <div className="flex flex-col items-center justify-center p-2 bg-white text-black rounded-lg shadow-md w-full text-sm">
        <Users className="w-8 h-8 text-blue-600 mb-2" />
        <h2>Total Pengunjung</h2>
        <p className="font-bold">300 Orang</p>
      </div>
      <div className="flex flex-col items-center justify-center p-2 bg-white text-black rounded-lg shadow-md w-full text-sm">
        <Calendar className="w-8 h-8 text-blue-600 mb-2" />
        <h2>Pengunjung Hari Ini</h2>
        <p className="font-bold">23 Orang</p>
      </div>
      <div className="flex flex-col items-center justify-center p-2 bg-white text-black rounded-lg shadow-md w-full text-sm">
        <Activity className="w-8 h-8 text-blue-600 mb-2" />
        <h2>Pengunjung Online</h2>
        <p className="font-bold">4 Orang</p>
      </div>
    </section>
  );
};

export default SectionVisitors;
