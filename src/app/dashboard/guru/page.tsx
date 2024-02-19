// pages/guru.js
"use client"
import { useState, useEffect } from 'react';
import { getGuruPosts, createGuru, updateGuru, deleteGuru } from '@/app/lib/firebase/guru/api';

export default function GuruPage() {
  const [guruPosts, setGuruPosts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    file: null,
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    // Fetch initial Guru posts
    const fetchGuruPosts = async () => {
      const posts = await getGuruPosts();
      setGuruPosts(posts);
    };

    fetchGuruPosts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'file' ? files[0] : value,
    });
  };

  const handleCreateGuru = async () => {
    const newGuruData = {
      name: formData.name,
      position: formData.position,
      file: formData.file,
    };

    await createGuru(newGuruData);

    // Refresh the posts after creating a new one
    const updatedGuruPosts = await getGuruPosts();
    setGuruPosts(updatedGuruPosts);

    // Clear the form data
    setFormData({
      name: '',
      position: '',
      file: null,
    });
  };

  const handleUpdateGuru = async (id) => {
    const updatedGuruData = {
      name: formData.name,
      position: formData.position,
      file: formData.file,
    };

    await updateGuru(id, updatedGuruData);

    // Refresh the posts after updating
    const updatedGuruPosts = await getGuruPosts();
    setGuruPosts(updatedGuruPosts);

    // Clear the form data and reset editingId
    setFormData({
      name: '',
      position: '',
      file: null,
    });
    setEditingId(null);
  };

  const handleEditGuru = async (id) => {
    const guruToEdit = await getGuruById(id);
    setFormData({
      name: guruToEdit.name,
      position: guruToEdit.position,
      file: null, // Assuming you don't want to change the file when editing
    });
    setEditingId(id);
  };

  const handleDeleteGuru = async (id) => {
    await deleteGuru(id);

    // Refresh the posts after deletion
    const updatedGuruPosts = await getGuruPosts();
    setGuruPosts(updatedGuruPosts);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Guru</h1>

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
          Position:
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
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
            onClick={() => handleUpdateGuru(editingId)}
          >
            Update Guru
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleCreateGuru}
          >
            Create New Guru
          </button>
        )}
      </form>

      <div className=" flex flex-row gap-10 mt-4">
        {guruPosts.map((post) => (
          <div key={post.id} className="border p-4 mb-4">
            <h2 className="text-xl font-semibold">Nama: {post.name}</h2>
            <p>Jabatan: {post.position}</p>
            <img src={post.imageUrl} alt={post.name} className="mt-2 w-72 mb-2" />

            <div className="flex space-x-4">
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => handleDeleteGuru(post.id)}
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
