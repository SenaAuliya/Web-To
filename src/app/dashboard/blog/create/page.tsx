"use client";
import { useState, useEffect } from 'react';
import BlogForm from "@/app/ui/blog/AddPost";
import { getBlogPosts, createBlogPost } from "@/app/lib/firebase/blog/api";
import { useRouter } from 'next/router'; // Import from 'next/router' instead of 'next/navigation'

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
            // Implement the logic to add a new blog post
            await createBlogPost(blogData);
            // Update the list of blog posts after adding a new blog
            fetchBlogPosts();
            // Redirect to the blog dashboard
            router.push('/dashboard/blog');
        } catch (error) {
            // Handle errors gracefully and provide feedback to the user
            console.error('Error adding blog:', error);
            // Optionally, display an error message to the user
            // alert('Failed to add blog. Please try again later.');
        }
    };
    
    return(
        <div>
            <BlogForm onAddBlog={handleAddBlog}/>
        </div>
    )
}
