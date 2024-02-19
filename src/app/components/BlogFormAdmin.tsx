// Import necessary dependencies
import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import uploadFile from "../lib/firebase/storage";
import { updateBlogPost } from "../lib/firebase/blog/api"; // Import the updateBlogPost function

// Define the BlogForm component
const BlogForm = ({ onAddBlog, onUpdateBlog, initialBlog = null }: any) => {
  // State variables for title, content, and file
  const [title, setTitle] = useState(initialBlog?.title || "");
  const [content, setContent] = useState(initialBlog?.content || "");
  const [file, setFile] = useState<File | null>(null); // Update file state type

  // Function to strip HTML tags
  const stripHtmlTags = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { // Update handleSubmit function parameter type
    e.preventDefault();

    // Check if there's a selected file
    let fileURL = null;
    if (file) {
      fileURL = await uploadFile(file, `blogPosts/${new Date().toISOString()}`);
    }

    // Clean the content by splitting paragraphs and joining with HTML tags
    const cleanedContent = content
      .split(/<\/?p>/)
      .filter(Boolean)
      .map((paragraph: string) => `<p>${paragraph}</p>`)
      .join('\n');

    // Create an object with blog data
    const blogData = { title, content: cleanedContent, fileURL };

    // If there's an initialBlog, update the blog post; otherwise, add a new blog
    if (initialBlog) {
      onUpdateBlog(initialBlog.id, blogData);
    } else {
      onAddBlog(blogData);
    }

    // Reset form fields
    setTitle("");
    setContent("");
    setFile(null);
  };

  // Function to handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => { // Update handleFileChange function parameter type
    const selectedFile = e.target.files?.[0]; // Update to handle potentially undefined value
    setFile(selectedFile || null); // Set file to null if no file is selected
  };

  return (
    // Form structure
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-8">
      {/* Title input */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-lg font-semibold text-gray-800 mb-1">
          Title:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      {/* Content editor */}
      <div className="mb-4">
        <label htmlFor="content" className="block text-lg font-semibold text-gray-800 mb-1">
          Content:
        </label>
        <CKEditor
          editor={ClassicEditor}
          data={content}
          onChange={(event, editor) => setContent(editor.getData())}
        />
      </div>
      {/* File input */}
      <div className="mb-4">
        <label htmlFor="file" className="block text-lg font-semibold text-gray-800 mb-1">
          File:
        </label>
        <input
          type="file"
          id="file"
          onChange={handleFileChange}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      {/* Submit button */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
      >
        {initialBlog ? "Update Blog" : "Add Blog"}
      </button>
    </form>
  );
};

// Export the BlogForm component
export default BlogForm;
