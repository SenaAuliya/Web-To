import { Card } from "flowbite-react";

export default function PilihanKarir() {
  return (
    <div className="flex flex-col gap-8 py-10 px-5 bg-primary justify-center overflow-x-hidden">
      <h1 className="text-center text-secondary text-4xl font-bold mb-8">
        Pilihan Karir
      </h1>

      <div className="flex flex-col gap-8 md:flex-row md:justify-center">
        <Card
          className="max-w-sm mx-auto md:mx-0"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="/img/pilihan1.JPG"
        >
          <h5 className="text-lg md:text-xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
            1. Menjadi Teknisi yang handal dalam servis sepeda motor
          </h5>
        </Card>

        <Card
          className="max-w-sm mx-auto md:mx-0"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="/img/pilihan.jpeg"
        >
          <h5 className="text-lg md:text-xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
            2. Bekerja di bidang perakitan sepeda motor atau produk sejenisnya
          </h5>
        </Card>

        <Card
          className="max-w-sm mx-auto md:mx-0"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="/img/pilihan1.JPG"
        >
          <h5 className="text-lg md:text-xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
            3. Menjadi Wirausaha bengkel perbaikan sepeda motor atau bidang sejenisnya
          </h5>
        </Card>
      </div>
    </div>
  );
}
