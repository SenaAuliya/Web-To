// pages/index.js
"use client"
import { useState, useEffect } from 'react';
import {
  getGaleriPosts,
  createGaleri,
  updateGaleri,
  deleteGaleri,
} from '@/app/lib/firebase/galeri/api';
import Image from 'next/image';
interface GaleriPost {    
  id: string;
  title: string;
  imageUrl: string;
  date: { seconds: number; nanoseconds: number };
}

export default function Home() {
  const [galeriPosts, setGaleriPosts] = useState<GaleriPost[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    file: null,
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    // Fetch initial blog posts
    const fetchGaleriPosts = async () => {
      const posts = await getGaleriPosts();
      setGaleriPosts(posts);
    };

    fetchGaleriPosts();
  }, []);

  const handleInputChange = (e :any) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'file' ? files[0] : value,
    });
  };

  const handleCreateGaleri = async () => {
    const newGaleriData = {
      title: formData.title,
      file: formData.file,
    };

    await createGaleri(newGaleriData);

    // Refresh the posts after creating a new one
    const updatedGaleriPosts = await getGaleriPosts();
    setGaleriPosts(updatedGaleriPosts);

    // Clear the form data
    setFormData({
      title: '',
      file: null,
    });
  };

  const handleUpdateGaleri = async (id: string) => {
    const updatedGaleriData = {
      title: formData.title,
      file: formData.file,
    };

    await updateGaleri(id, updatedGaleriData);

    // Refresh the posts after updating
    const updatedGaleriPosts = await getGaleriPosts();
    setGaleriPosts(updatedGaleriPosts);

    // Clear the form data and reset editingId
    setFormData({
      title: '',
      file: null,
    });
    setEditingId(null);
  };

  const handleDeleteGaleri = async (id: string) => {
    await deleteGaleri(id);

    // Refresh the posts after deletion
    const updatedGaleriPosts = await getGaleriPosts();
    setGaleriPosts(updatedGaleriPosts);
  };

  return (
    <div className="flex flex-col mx-auto p-4 h-full">
      <h1 className="text-3xl font-bold mb-4">Galeri Posts</h1>

      <form className="mb-4" onSubmit={(e) => e.preventDefault()}>
        <label className="block mb-2">
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </label>
        <label className="block mb-2">
          File:
          <input
            type="file"
            name="file"
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </label>
        {editingId ? (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => handleUpdateGaleri(editingId)}
          >
            Update Galeri
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleCreateGaleri}
          >
            Create New Galeri
          </button>
        )}
      </form>
<div className=" flex flex-row gap-10 mt-4">
        {galeriPosts.map((post) => (
          <div key={post.id} className="border p-4 mb-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <Image height={150} width={150} src={post.imageUrl} alt={post.title} className="mt-2 w-72 mb-2" />

            <div className="flex space-x-4">
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => handleDeleteGaleri(post.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
          </div>
  );
}
