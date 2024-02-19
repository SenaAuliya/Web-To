"use client";
import { useEffect, useState } from 'react';
import { getGuruPosts } from '@/app/lib/firebase/guru/api';
import Image from 'next/image';

interface GuruData {
  imageUrl: string;
  name: string;
  position: string;
  // Add other properties if needed
}
export default function StrukturGuru() {
  const [struktur, setStruktur] = useState<GuruData[]>([]);

  useEffect(() => {
    const fetchStruktur = async () => {
      const guruPosts = await getGuruPosts();
      setStruktur(guruPosts);
    };

    fetchStruktur();
  }, []);

  return (
    <div className="flex flex-col bg-primary py-5">
      <h1 className="text-2xl lg:text-4xl text-center font-semibold pb-4 border-b-2 p-3">
        Struktur Organisasi Guru TO
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-4">
        {struktur.map((guru, index) => (
          <div key={index} className="flex flex-col gap-3 justify-center items-center p-5 sm:p-10">
            <div className='w-52 h-52'>
              <Image
              height={150}
              width={150}
                src={guru.imageUrl} // Assuming imageUrl is the field name for the image in your data
                alt="gambar"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col w-full bg-secondary text-primary px-5">
              <h1 className="text-center font-medium text-lg border-b-2 border-b-primary">
                {guru.name}
              </h1>
              <p className='text-center'>{guru.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
