"use client"
import { useEffect, useState } from 'react';
import { getBlogPosts } from '@/app/lib/firebase/blog/api';
import BlogListAdmin from '@/app/components/BlogPostPage';

const Home = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    const posts = await getBlogPosts();
    setBlogPosts(posts);
  };
  return (
    <div>
      <BlogListAdmin
        blogPosts={blogPosts}
      />
    </div>
  );
  }

export default Home;
