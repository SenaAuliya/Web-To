import { Be_Vietnam_Pro } from "next/font/google";

const BeVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  display: "auto",
  weight: "600",
});

export default function Komptensi() {
  return (
    <div className="flex flex-col w-full items-center px-4 py-8 sm:px-6 lg:px-8">
      <h1 className={`${BeVietnamPro.className} text-3xl text-center mb-5`}>
        Kompetensi Pembelajaran
      </h1>
      
      <div className="flex flex-col sm:flex-row gap-7">
        <div className="flex flex-col gap-5 my-5 tracking-wide">
          <div className="border-[3px] border-primary p-5">
            <h1 className="text-xl sm:text-2xl font-semibold">Mesin</h1>
            <p className="text-md sm:text-lg font-medium">
              Mendiagnosis gangguan atau kerusakan pada Engine Sepeda Motor
              meliputi Komponen Utama Engine, Sistem Pelumasan, Sistem
              Pendinginan, Sistem Bahan Bakar, dll.
            </p>
          </div>

          <div className="border-[3px] border-primary p-5">
            <h1 className="text-xl sm:text-2xl font-semibold">Kelistrikan</h1>
            <p className="text-md sm:text-lg font-medium">
              Mendiagnosis gangguan atau kerusakan pada Sistem Kelistrikan Sepeda
              Motor diantaranya Sistem Pengapian, Sistem Pengisian, Motor Starter,
              Sistem Penerangan, Sistem Pengaman (Alarm), Sistem Instrumen dan
              Sinyal, dll.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 my-5 tracking-wide">
          <div className="border-[3px] border-primary p-5">
            <h1 className="text-xl sm:text-2xl font-semibold">Sasis</h1>
            <p className="text-md sm:text-lg font-medium">
              Mendiagnosis gangguan atau kerusakan pada Sasis Sepeda Motor beserta
              komponen-komponennya diantaranya Sistem Rem, Sistem Kemudi,
              Suspensi, Rangka, Pelek, Ban, dll.
            </p>
          </div>

          <div className="border-[3px] border-primary p-5">
            <h1 className="text-xl sm:text-2xl font-semibold">Pengelolaan Bengkel</h1>
            <p className="text-md sm:text-lg font-medium">
              Mampu menerapkan pengelolaan, pengembangan teknik dan manajemen
              perawatan Sepeda Motor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
