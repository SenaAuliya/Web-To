"use client";
import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import uploadFile from "../../lib/firebase/storage";

const BlogForm = ({ onAddBlog, onUpdateBlog, initialBlog = null }: any) => {
  const [title, setTitle] = useState(initialBlog?.title || "");
  const [content, setContent] = useState(initialBlog?.content || "");
  const [file, setFile] = useState(null);

  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let fileURL = null;
    if (file) {
      fileURL = await uploadFile(file, `blogPosts/${new Date().toISOString()}`);
    }

    const cleanedContent = content
      .split(/<\/?p>/)
      .filter(Boolean)
      .map((paragraph) => `<p>${paragraph}</p>`)
      .join('\n');

    const blogData = { title, content: cleanedContent, fileURL };

    if (initialBlog) {
      onUpdateBlog({ id: initialBlog.id, updatedBlog: blogData });
    } else {
      onAddBlog(blogData);
    }

    setTitle("");
    setContent("");
    setFile(null);
  };

  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-8">
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
      <div className="mb-4">
        <label htmlFor="content" className="block text-lg font-semibold text-gray-800 mb-1">
          Content:
        </label>
        <CKEditor
          editor={ClassicEditor}
          data={content}
          onChange={(event, editor) => setContent(editor.getData())}
          className="w-full h-[50px] border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </div>
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
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
      >
        {initialBlog ? "Update Blog" : "Add Blog"}
      </button>
    </form>
  );
};

export default BlogForm;
