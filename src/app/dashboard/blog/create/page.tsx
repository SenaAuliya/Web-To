"use client";
import { useState, useEffect } from 'react';
import BlogForm from "@/app/ui/blog/AddPost";
import { getBlogPosts, createBlogPost } from "@/app/lib/firebase/blog/api";
import { useRouter } from 'next/navigation'; // Import from 'next/router' instead of 'next/navigation'

interface BlogPost {    
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  date: { seconds: number; nanoseconds: number };
}

export default function CreatePage(){
    const router = useRouter();
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  
    useEffect(() => {
      fetchBlogPosts();
    }, []);
  
    const fetchBlogPosts = async () => {
      const posts = await getBlogPosts();
      // Update the state with the fetched blog posts
      setBlogPosts(posts);
    };
  
    const handleAddBlog = async (blogData: BlogPost) => {
        try {
            await createBlogPost(blogData);
            fetchBlogPosts();
        } catch (error) {
            console.error('Error adding blog:', error);
        }
    };
    
    return(
        <div>
            <BlogForm onAddBlog={handleAddBlog}/>
        </div>
    )
}
