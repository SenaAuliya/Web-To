"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getBlogPostById, updateBlogPost } from '@/app/lib/firebase/blog/api';
import BlogForm from '@/app/components/BlogFormAdmin';
const EditBlogPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { id } = params;
  const [blog, setBlog] = useState(null);

  const fetchBlogPost = async () => {
    const fetchedBlog = await getBlogPostById(id);
    setBlog(fetchedBlog);
  };

  useEffect(() => {
    const fetchBlogPost = async () => {
      const fetchedBlog = await getBlogPostById(id);
      setBlog(fetchedBlog);
    };

    if (id) {
      fetchBlogPost();
    }
  }, [id]);

  const handleUpdateBlog = async (id: string, updatedBlogData: any) => {
    await updateBlogPost(id, updatedBlogData);

    // Fetch the updated data after the update is successful
    await fetchBlogPost();
  };

  return (
    <div>
      <h1>Edit Blog Post</h1>
      {blog ? (
        <BlogForm  onUpdateBlog={handleUpdateBlog} initialBlog={blog} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditBlogPage;
