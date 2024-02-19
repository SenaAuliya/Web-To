"use client"
import { format } from 'date-fns';
import { useState, useEffect } from 'react';
import { getBlogPosts } from '@/app/lib/firebase/blog/api';
import { Inria_Serif } from 'next/font/google';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  date: { seconds: number; nanoseconds: number };
}

interface BlogListProps {
  blogPosts: BlogPost[];
}

const inriaSerif = Inria_Serif(
  {
    subsets: ["latin-ext"],
    display: "auto",
    weight: "700",
  }
);

const itemsPerPage = 5;

const SkeletonLoading: React.FC = () => (
  <div className="flex flex-col items-center bg-secondary border-b-white border-b-[3px] p-4 sm:p-7">
    {[...Array(5)].map((_, index) => (
      <div key={index} className="animate-pulse flex flex-col sm:flex-row w-full justify-between items-center m-4 sm:m-7 p-3 sm:p-5">
        <div className="w-full sm:w-52 h-32 bg-gray-300 mb-3 sm:mr-5"></div>
        <div className="flex flex-col sm:w-2/3">
          <div className="h-5 w-3/4 bg-gray-300 mb-2 sm:mb-3"></div>
          <div className="h-4 w-1/2 bg-gray-300"></div>
        </div>
      </div>
    ))}
  </div>
);

const BlogList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    const posts = await getBlogPosts();
    setBlogPosts(posts);
  };

  const filteredBlogPosts = blogPosts.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = filteredBlogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {/* Render loading skeleton when data is still loading */}
      {!blogPosts.length ? (
        <SkeletonLoading />
      ) : (
        // Render the actual blog list when data is loaded
        <div className="flex flex-col bg-secondary items-center border-b-white border-b-[3px] p-4 sm:p-7">
          <input
            type="text"
            placeholder="Cari Dengan Mengetik Judulnya ... "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-3 sm:mb-5 mr-4 p-2 border border-gray-300 rounded w-full"
          />
          {currentPosts.map((blog) => (
            <div key={blog.id} className="flex flex-col sm:flex-row w-full justify-between items-center m-4 sm:m-7 p-3 sm:p-5">
              {blog.imageUrl && (
                <Image
                width={150}
                height={150}
                  src={blog.imageUrl}
                  alt={`Image for ${blog.title}`}
                  className="w-full sm:w-52 h-auto mb-3 sm:mr-5"
                />
              )}
              <div className="flex flex-col sm:w-2/3">
                <h3 className={`${inriaSerif.className} text-xl sm:text-3xl font-bold underline mb-2 sm:mb-3`}>{blog.title}</h3>
                {blog.date && (
                  <p className="text-sm sm:text-base">
                    {format(new Date(blog.date.seconds * 1000), 'MMMM d, yyyy HH:mm:ss')}
                  </p>
                )}
                <Link href={`/blog/${(blog.id)}`} className="text-primary underline mt-2 sm:mt-3">
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          ))}
          <div className="flex justify-center mt-3 sm:mt-5">
            {/* Generate pagination buttons */}
            {Array.from({ length: Math.ceil(filteredBlogPosts.length / itemsPerPage) }, (_, index) => (
              <Button key={index} onClick={() => paginate(index + 1)}>
                {index + 1}
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default BlogList;
