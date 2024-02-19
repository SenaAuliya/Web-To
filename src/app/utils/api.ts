// utils/api.ts

interface BlogPostType {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    date: { seconds: number; nanoseconds: number };
  }
  export default BlogPostType
  
  // Placeholder for fetching a blog post by title
  export const fetchBlogPostByTitle = async (title: string): Promise<BlogPostType | null> => {
    // Replace this with your actual API or database call to fetch the blog post
    // For example, you might use fetch, axios, or any other library to make an HTTP request
    try {
      const response = await fetch(`/api/blog/${encodeURIComponent(title)}`);
      if (response.ok) {
        const blogPost = await response.json();
        return blogPost;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error fetching blog post:', error);
      return null;
    }
  };
  
  // Placeholder for fetching all blog posts
  export const fetchAllBlogPosts = async (): Promise<BlogPostType[]> => {
    // Replace this with your actual API or database call to fetch all blog posts
    // For example, you might use fetch, axios, or any other library to make an HTTP request
    try {
      const response = await fetch('/api/blog');
      if (response.ok) {
        const blogPosts = await response.json();
        return blogPosts;
      } else {
        return [];
      }
    } catch (error) {
      console.error('Error fetching all blog posts:', error);
      return [];
    }
  };
  