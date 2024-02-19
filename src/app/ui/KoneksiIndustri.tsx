import { Be_Vietnam_Pro } from "next/font/google";
import { Card } from "flowbite-react";

const BeVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  display: "auto",
  weight: "600",
});

export default function KoneksiIndustri() {
  return (
    <div className="flex flex-col bg-secondary justify-center p-6 md:p-10 overflow-x-hiddend">
      <h1 className={`${BeVietnamPro.className} text-2xl md:text-4xl text-center mb-4 md:mb-6`}>
        Koneksi Industri
      </h1>
      <p className={`${BeVietnamPro.className} text-center text-md md:text-lg mb-4 md:mb-6`}>
        TBSM SMK Negeri 1 Bangsri Merupakan Binaan Langsung dari Astra Honda
        Motor Sejak 2019
      </p>

      <div className={`${BeVietnamPro.className} flex flex-col gap-4 md:flex-row md:gap-10 justify-center font-semibold`}>

        <Card  className="max-w-sm text-center bg-primary text-secondary mb-4 md:mb-0">
          <h5 className="text-xl md:text-2xl font-bold tracking-tight ">
            Magang (PKL).
          </h5>
          <p className="text-sm md:text-md font-normal ">
            Praktik Kerja Industri di bengkel resmi Honda (Ahass)
          </p>
        </Card>

        <Card  className="max-w-sm text-center text-black border-primary border-[3px] mb-4 md:mb-0">
          <h5 className="text-xl md:text-2xl font-bold tracking-tight text-black">
            Pelatihan Guru.
          </h5>
          <p className="text-sm md:text-md font-normal text-black">
            Setiap tahun agenda Sertifikasi Guru bertahap yang di-support langsung Astra Motor Training Center
          </p>
        </Card>

        <Card  className="max-w-sm text-center bg-primary text-secondary mb-4 md:mb-0 ">
          <h5 className="text-xl md:text-2xl font-bold tracking-tight ">
            Safety Riding.
          </h5>
          <p className="text-sm md:text-md font-normal ">
            Program meningkatkan kemampuan berkendara siswa
          </p>
        </Card>

        <Card  className="max-w-sm text-center text-black border-primary border-[3px] ">
          <h5 className="text-xl md:text-2xl font-bold text-black tracking-tight ">
            Lomba Honda.
          </h5>
          <p className="text-sm md:text-md font-normal text-black ">
            Lomba Guru dan Siswa tingkat SMK Binaan
          </p>
        </Card>
      </div>
    </div>
  );
}
