"use client";
import React, { useEffect, useState } from "react";
import { getBlogPostById } from "@/app/lib/firebase/blog/api";
import { Inria_Serif } from "next/font/google";
import { Jomolhari } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

// Define an interface for the blog post
interface BlogPost {
  id: string;
  title: any;
  content: any;
  imageUrl: any;
  date: any;
}

const inriaSerif = Inria_Serif({
  subsets: ["latin-ext"],
  weight: "700",
  display: "auto",
});

const jomolhari = Jomolhari({
  subsets: ["latin"],
  display: "auto",
  weight: "400",
});

export default function Page({ params }: { params: { id: string } }) {
  // Use the BlogPost interface for the state variable
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPostByID = async () => {
      try {
        const postById = await getBlogPostById(params.id);
        setBlogPost(postById);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setLoading(false);
      }
    };
  
    fetchBlogPostByID(); // Panggil fungsi fetchBlogPostByID di dalam useEffect
  
  }, [params.id])

  return (
    <div className="flex flex-col items-center w-full p-6 md:p-10 lg:p-16">
      {loading ? (
        <p className="text-lg text-center md:text-4xl md:font-bold">Loading ...</p>
      ) : (
         <>
      <Link href="/blog" className="text-secondary self-start mb-4 bg-primary p-2 rounded-md">
         Kembali
      </Link>
          {blogPost && (
            <>
              <Image height={150} width={150} className="w-full md:w-[700px] mb-8 md:mb-10" src={blogPost.imageUrl} alt="halo" />
              <h1
                className={`${inriaSerif.className} text-2xl md:text-3xl lg:text-4xl underline text-center mb-8 md:mb-10`}
              >
                {blogPost.title}
              </h1>
              <p
                className={`${jomolhari.className} text-lg md:text-xl lg:text-2xl text-justify tracking-wide leading-[1.8em]`}
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
            </>
          )}
        </>
      )}
    </div>
  );
} 