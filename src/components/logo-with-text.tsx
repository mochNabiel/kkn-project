import Image from "next/image";
import logo from "@/assets/icons/kabupaten-sukoharjo.png";

const LogoWithText = () => {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={logo}
        alt="Logo Mangesti"
        width={50}
        className="p-2"
      />
      <div className="flex flex-col font-bold text-xs">
        <h1>MANGESTI SEJAHTERA</h1>
        <p>KABUPATEN SUKOHARJO</p>
      </div>
    </div>
  );
};

export default LogoWithText;
