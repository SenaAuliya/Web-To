"use client";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Inria_Serif } from "next/font/google";
import { Button } from "@/components/ui/button";
import {
  getBlogPosts,
  deleteBlogPost,
  updateBlogPost,
} from "@/app/lib/firebase/blog/api";
import Link from "next/link";
import Image from "next/image";

// Define the interface for a blog post
interface BlogPost {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  date: { seconds: number; nanoseconds: number };
}

// Define the interface for the blog list component
interface BlogListProps {
  blogPosts: BlogPost[];
}

// Create an instance of the Inria_Serif font
const inriaSerif = Inria_Serif({
  subsets: ["latin-ext"],
  display: "auto",
  weight: "700",
});

const BlogListAdmin: React.FC<BlogListProps> = ({ blogPosts }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [blogPost, setBlogPost] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const posts = await getBlogPosts();
      setBlogPost(posts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    }
  };

  const filteredBlogPosts = blogPosts.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const itemsPerPage = 5;
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = filteredBlogPosts.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleDelete = async (id: string) => {
    await deleteBlogPost(id);
    await fetchBlogPosts();
  };

  return (
    <div className="flex flex-col bg-secondary border-b-white border-b-[3px] p-4 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-5">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-3 sm:mb-0 mr-4 p-2 border border-gray-300 rounded w-full sm:w-auto"
        />
        <Link href={"/dashboard/blog/create"} className="bg-primary py-2 px-5 rounded text-white">
          Buat Blog
        </Link>
      </div>
      {currentPosts.map((blog) => (
        <div
          key={blog.id}
          className="flex flex-col sm:flex-row w-full justify-between items-start m-4 sm:m-7 p-3 sm:p-5"
        >
          <div className="flex mb-5 sm:mb-0">
            {blog.imageUrl && (
              <Image
              priority={true}
              height={150}
              width={150}
                src={blog.imageUrl}
                alt={`Image for ${blog.title}`}
                className="w-full sm:w-52 h-auto mb-3 sm:mr-5"
              />
            )}
            <div>
              {blog.title ? (
                <h3
                  className={`${inriaSerif.className} text-xl sm:text-3xl font-bold underline mb-2 sm:mb-3`}
                >
                  {blog.title.toLowerCase()}
                </h3>
              ) : null}
              {blog.date && (
                <p className="text-sm sm:text-base">
                  {format(
                    new Date(blog.date.seconds * 1000),
                    "MMMM d, yyyy HH:mm:ss"
                  )}
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-3 sm:gap-5">
            <Link
              className="bg-primary py-2 px-5 rounded-sm text-white"
              href={`/dashboard/blog/edit/${blog.id}`}
            >
              Edit
            </Link>
            <Button onClick={() => handleDelete(blog.id)}>Delete</Button>
            <Link
              className="bg-primary py-2 px-5 rounded-sm text-white"
              href={`/blog/${blog.id}`}
            >
              Baca Selengkapnya
            </Link>
          </div>
        </div>
      ))}
      <div className="flex justify-center mt-3 sm:mt-5">
        {Array.from(
          { length: Math.ceil(filteredBlogPosts.length / itemsPerPage) },
          (_, index) => (
            <Button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </Button>
          )
        )}
      </div>
    </div>
  );
};

export default BlogListAdmin;