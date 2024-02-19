"use client"
import { useEffect, useState } from "react";
import { getGaleriPosts } from "@/app/lib/firebase/galeri/api";

interface GaleriPost {
  id: string;
  title: string;
  imageUrl: string;
  // Add other properties as needed
}

// Skeleton Loading Component
const SkeletonLoading: React.FC = () => (
  <div className="p-4 mb-4 animate-pulse">
    <div className="w-72 h-52 bg-gray-300 mb-2"></div>
    <div className="h-8 bg-gray-300"></div>
  </div>
);

export default function GalleriList() {
  const [galeriPosts, setGaleriPosts] = useState<GaleriPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGaleriPosts = async () => {
      try {
        const posts = await getGaleriPosts();
        setGaleriPosts(posts);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching galeri posts:", error);
        setLoading(false); // Set loading to false on error as well
      }
    };

    fetchGaleriPosts();
  }, []);

  return (
    <div className="flex flex-col items-center gap-10 p-5">
      <h1 className="text-2xl text-primary font-bold border-primary border-2 p-3 px-7 rounded-full lg:text-3xl">Galeri Jurusan TBSM</h1>
      <div className="flex flex-row flex-wrap gap-10 mt-4">
        {loading ? (
          // Render skeleton loading when data is still loading
          Array.from({ length: 4 }).map((_, index) => <SkeletonLoading key={index} />)
        ) : (
          // Render actual gallery posts when data is loaded
          galeriPosts.map((post) => (
            <div key={post.id} className="p-4 mb-4">
              <div className="w-72 h-52">
                <img src={post.imageUrl} alt={post.title} className="mt-2 w-full h-full object-cover mb-2" />
              </div>
              <h2 className="text-xl text-secondary text-center p-2 mt-2 font-semibold bg-primary">{post.title}</h2>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
