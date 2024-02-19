"use client"
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Artikel() {
  const router = useRouter()
  return (
    <div className="bg-primary w-full min-h-screen flex flex-col justify-center items-center gap-5 p-5 overflow-x-hidden">
      <h1
        className="text-3xl text-center lg:text-5xl font-medium text-secondary mb-5 lg:mb-10"
        style={{ fontFamily: "Inria-Serif, Poppins" }}
      >
        Artikel
      </h1>
      <div className="flex flex-col md:flex-row md:space-x-4 md:flex-wrap">
  <div className="flex flex-col w-full md:w-[400px] h-[450px] items-center gap-3 bg-secondary rounded-lg my-5">
    <div className="w-full h-52">
      <Image
      height={250}
      width={250}
        className="w-full h-full object-cover rounded-t-lg"
        src="/img/artikel1.jpg"
        alt="artikel 1"
      />
    </div>
    <h5 className="text-lg md:text-xl font-bold tracking-tight text-center text-gray-900 align-baseline">
      (Roif Nur H dan Hani Faturohmah Ikuti Training Basic Skill Safety Riding Astra Motor)
    </h5>
  </div>

  <div className="flex flex-col w-full md:w-[400px] h-[450px] items-center gap-3 bg-secondary rounded-lg my-5">
    <div className="w-full h-52">
      <Image
      height={250}
      width={250}
        className="w-full h-full object-cover rounded-t-lg"
        src="/img/artikel3.jpg"
        alt="artikel 1"
      />
    </div>
    <h5 className="text-lg md:text-xl font-bold tracking-tight text-center text-gray-900 align-baseline">
      (Siswa TBSM SMK Negeri 1 Bangsri jura 1 olimpiade satu hati tingkat jawa tengah)
    </h5>
  </div>

  <div className="flex flex-col w-full md:w-[400px] h-[450px] items-center gap-3 bg-secondary rounded-lg my-5">
    <div className="w-full h-52">
      <Image
      height={250}
      width={250}
        className="w-full h-full object-cover rounded-t-lg"
        src="/img/artikel2.jpg"
        alt="artikel 1"
      />
    </div>
    <h5 className="text-lg md:text-xl font-bold tracking-tight text-center text-gray-900 align-baseline">
      (SMK Negeri 1 Bangsri Juarai Kontes Kreativitas Pembelajaran Guru 2022)
    </h5>
  </div>
</div>

      <Button
        onClick={() => router.push('/blog')}
        className="mt-5 lg:mt-10 text-xl lg:text-3xl h-12 lg:h-16 w-full lg:w-72 underline rounded-full"
        variant={"secondary"}
        style={{ fontFamily: "Inria-Serif, Poppins" }}
      >
        VIEW MORE
      </Button>
    </div>
  );
}
