"use client"
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { getKontakPosts, createKontak } from '@/app/lib/firebase/kontak/api';

interface KontakPost {
  id: string;
  name: string;
  email: string;
  message: string;
  // Add other properties as needed
}

export default function Kontak() {
  const [kontakPosts, setKontakPosts] = useState<KontakPost[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    file: null,
  });

  useEffect(() => {
    const fetchKontakPosts = async () => {
      const posts = await getKontakPosts();
      setKontakPosts(posts);
    };

    fetchKontakPosts();
  }, []);

  const handleInputChange = (e: any) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'file' ? files[0] : value,
    });
  };

  const handleCreateKontak = async () => {
    const newKontakData = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      file: formData.file,
    };

    await createKontak(newKontakData);

    const updatedKontakPosts = await getKontakPosts();
    setKontakPosts(updatedKontakPosts);

    setFormData({
      name: '',
      email: '',
      message: '',
      file: null,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Hubungi Kami</h1>

      <form className="mb-4" onSubmit={(e) => e.preventDefault()}>
        <label className="block mb-2">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </label>
        <label className="block mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </label>
        <label className="block mb-2">
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="border p-2 w-full"
            rows= {4}
            required
          ></textarea>
        </label>
        <button
          className="bg-primary text-white px-4 py-2 rounded"
          onClick={handleCreateKontak}
        >
          Submit Kontak
        </button>
      </form>
    </div>
  );
}
