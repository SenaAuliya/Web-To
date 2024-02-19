import { Be_Vietnam_Pro } from 'next/font/google';

const BeVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  display: 'auto',
  weight: '600',
});

export default function Prestasi() {
  return (
    <div className="bg-secondary text-secondary gap-5 w-full min-h-screen flex flex-col justify-center items-center p-5">
      <h1
        className="text-3xl lg:text-5xl text-black font-medium mb-5 lg:mb-10"
        style={{ fontFamily: "Inria-Serif, Poppins" }}
      >
        Prestasi Jurusan
      </h1>

      <div className="flex flex-col">
        <div className="text-center mb-4 flex flex-col lg:flex-row">
          <div
            className={`${BeVietnamPro.className} text-md bg-primary lg:w-[500px] lg:text-lg h-16 lg:h-20 rounded-full mb-4 p-3 lg:mr-4 break-word`}
          >
            Juara 1 LKS Kab. Jepara Th. 2019 dan 2020
          </div>
          <div
            className={`${BeVietnamPro.className} text-md bg-primary lg:w-[500px] lg:text-lg h-16 lg:h-20 rounded-full mb-4 p-3 break-word`}
          >
            Juara 5 Kontes Guru Tingkat Nasional Th. 2021
          </div>
        </div>

        <div className="text-center mb-4 flex flex-col lg:flex-row">
          <div
            className={`${BeVietnamPro.className} text-md bg-primary lg:w-[500px] lg:text-lg h-16 lg:h-20 rounded-full mb-4 p-3 lg:mr-4 break-word`}
          >
            Juara 1 Safety Riding Explorer Jambore Safety Riding Kares Pati Th. 2020
          </div>
          <div
            className={`${BeVietnamPro.className} text-md bg-primary lg:w-[500px] lg:text-lg h-16 lg:h-20 rounded-full mb-4 p-3 break-word`}
          >
            Juara 1 LKS Jawa Tengah dan 1 Jepara Th. 2022
          </div>
        </div>

        <div className="text-center mb-4 flex flex-col lg:flex-row ">
          <div
            className={`${BeVietnamPro.className} text-md bg-primary lg:w-[500px] lg:text-lg h-16 lg:h-20 rounded-full mb-4 p-3 lg:mr-4 break-word`}
          >
            Juara 1 Cerdas Cermat Safety Riding Kares Pati Th. 2020
          </div>
          <div
            className={`${BeVietnamPro.className} text-md bg-primary lg:w-[500px] lg:text-lg h-16 lg:h-20 rounded-full mb-4 p-3 lg:mr-4 break-word`}
          >
            Juara 8 LKS Tingkat Nasional Th. 2022
          </div>
        </div>

        <div className="text-center flex flex-col lg:flex-row">
          <div
            className={`${BeVietnamPro.className} text-md bg-primary lg:w-[500px] lg:text-lg h-16 lg:h-20 rounded-full mb-4 p-3 lg:mr-4 break-word`}
          >
            Juara Video Pembelajaran Astra Motor Jateng Th. 2021
          </div>
          <div
            className={`${BeVietnamPro.className} text-md bg-primary lg:w-[500px] lg:text-lg h-16 lg:h-20 rounded-full mb-4 p-3 break-word`}
          >
            Juara 5 Kontes Guru Tingkat Nasional Th. 2021
          </div>
        </div>
      </div>
    </div>
  );
}
