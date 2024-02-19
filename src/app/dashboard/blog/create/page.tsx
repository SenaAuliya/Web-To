"use client"
import { useState, useEffect } from 'react';
import BlogForm from "@/app/ui/blog/AddPost"
import {
  getBlogPosts,
  createBlogPost,
} from "@/app/lib/firebase/blog/api"
import { useRouter } from 'next/navigation';

export default function CreatePage({blogPosts}){
    const router = useRouter()
    interface BlogPost {    
        id: string;
        title: string;
        content: string;
        imageUrl: string;
        date: { seconds: number; nanoseconds: number };
      }
    const [blogPost, setBlogPost] = useState<BlogPost[]>([]); // Add this line

    // State to hold the form data for creating/editing a blog post
    const [formData, setFormData] = useState({
      id: '',
      title: '',
      content: '',
      imageUrl: '',
    });
  
    useEffect(() => {
      fetchBlogPosts();
    }, []);
  
    const fetchBlogPosts = async () => {
      const posts = await getBlogPosts();
      // Update the state with the fetched blog posts
      setBlogPost(posts);
    };
  
    const handleAddBlog = async (blogData) => {
        // Implement the logic to add a new blog post
        await createBlogPost(blogData);
        // Fetch the updated list of blog posts
        fetchBlogPosts();
        return router.push('/dashboard/blog')
      };
    return(
        <div>
<BlogForm onAddBlog={handleAddBlog}/>
        </div>
    )
}