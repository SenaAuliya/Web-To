import Image from "next/image";
import LogoTo from "../../../public/img/logo-to (2).jpeg";

export default function Pengertian() {
  return (
    <div className="w-full my-10 overflow-x-hidden">
      <Image
        src={LogoTo}
        height={400}
        width={400}
        alt="Logo Tbsm"
        className="w-64 h-64 mx-auto mb-5"
      />
      <div className="flex flex-col gap-8 items-center">
        <h5 className="text-lg text-center md:text-3xl font-semibold mb-2">
          TEKNIK DAN BISNIS SEPEDA MOTOR TO
        </h5>
        <p className="text-lg lg:text-xl max-w-xl md:max-w-2xl md:leading-10 font-medium text-center px-4">
          Jurusan yang mempelajari ilmu-ilmu yang berkaitan tentang sepeda
          motor, jurusan yang banyak diminati oleh siswa terutama siswa
          laki-laki. Mencetak siswa yang trampil di bidang teknik & bisnis
          sepeda motor. Menyiapkan lulusan yang kompetitif di industri otomotif.
          Siap membuka usaha di bidang mechanical sepeda motor.
        </p>
      </div>
    </div>
  );
}
