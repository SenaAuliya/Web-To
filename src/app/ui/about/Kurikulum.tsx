import { Be_Vietnam_Pro } from "next/font/google";

const BeVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  display: "auto",
  weight: "700",
});

export default function Kurikulum() {
  return (
    <div className="flex flex-col items-center bg-background p-5">
      <h1 className={`${BeVietnamPro.className} text-3xl text-center mb-5`}>
        STRUKTUR KURIKULUM
      </h1>

      <div className="flex flex-col sm:flex-row gap-5 justify-center my-5">

        <div className="flex flex-col bg-primary gap-3 p-5 items-center rounded-lg">
          <h1 className="text-xl sm:text-2xl text-center font-semibold bg-background w-full rounded-lg p-3">Kelas X</h1>
          <p className="text-lg sm:text-xl text-white font-medium">• Gambar Teknik Otomotif</p>
          <p className="text-lg sm:text-xl text-white font-medium">• Teknologi Dasar Otomotif</p>
          <p className="text-lg sm:text-xl text-white font-medium">• Peralatan Dasar Otomotif</p>
        </div>

        <div className="flex flex-col bg-primary gap-3 p-5  items-center rounded-lg">
          <h1 className="text-xl sm:text-2xl text-center font-semibold bg-background w-full rounded-lg p-3">Kelas XI</h1>
          <p className="text-lg sm:text-xl text-white font-medium">• Sasis Sepeda Motor</p>
          <p className="text-lg sm:text-xl text-white font-medium">• Kelistrikan Sepeda Motor</p>
          <p className="text-lg sm:text-xl text-white font-medium">• Mesin Sepeda Motor</p>
          <p className="text-lg sm:text-xl text-white font-medium">• Produk Kreatif Kewirausahaan</p>
        </div>

        <div className="flex flex-col bg-primary gap-3 p-5 items-center rounded-lg">
          <h1 className="text-xl sm:text-2xl text-center font-semibold bg-background w-full rounded-lg p-3">Kelas XII</h1>
          <p className="text-lg sm:text-xl text-white font-medium">• Mata Pelajaran Pilihan</p>
          <p className="text-lg sm:text-xl text-white font-medium">• Pengelolaan Bengkel</p>
          <p className="text-lg sm:text-xl text-white font-medium">• Praktik Kerja Industri</p>
        </div>

      </div>
    </div>
  );
}
