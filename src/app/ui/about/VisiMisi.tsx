import { Be_Vietnam_Pro } from "next/font/google";

const BeVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  display: "auto",
  weight: "600",
});

export default function VisiMisi() {
  return (
    <div
      className={`flex flex-col gap-5 w-full bg-background text-black py-5 mb-5 px-4 md:px-10 lg:px-20 leading-[50px] tracking-wide`}
    >
      <h1 className={`${BeVietnamPro.className} text-2xl md:text-4xl text-center mb-4 md:mb-6`}>
        Visi dan Misi
      </h1>

      <div className="flex flex-col gap-8 md:gap-14 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">Visi :</h1>
        <li className="text-xl md:text-2xl font-semibold text-center md:text-left">
          Terbentuknya SDM profesional dalam bidang Teknik Otomotif dan
          berkarakter positif.
        </li>
      </div>

      <div className="flex flex-col gap-8 md:gap-14 list-outside">
        <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">Misi :</h1>
        <li className="text-xl md:text-2xl font-semibold text-center md:text-left list-outside">
          Menyiapkan lulusan kreatif dan profesional dalam bidang Teknik
          Otomotif guna memasuki dunia kerja dan Era pasar bebas
          industrialisasi.
        </li>
        <li className="text-xl md:text-2xl font-semibold text-center md:text-left">
          Mempersiapkan lulusan dalam mengembangkan potensi menjadi peluang
          bisnis.
        </li>
        <li className="text-xl md:text-2xl font-semibold text-center md:text-left">
          Membentuk siswa berkarakter positif dan mampu berfikir kritis untuk siap bersaing di dunia kerja
        </li>
      </div>
    </div>
  );
}
