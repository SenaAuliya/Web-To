"use client";
import { useState, useEffect } from "react";
import { getKontakPosts } from "@/app/lib/firebase/kontak/api";
export default function page() {
  const [kontakPosts, setKontakPosts] = useState([]);
  useEffect(() => {
    // Fetch initial Kontak posts
    const fetchKontakPosts = async () => {
      const posts = await getKontakPosts();
      setKontakPosts(posts);
    };

    fetchKontakPosts();
  }, []);
  return (
    <div>
      <div className="mt-4">
        {kontakPosts.map((post) => (
          <div key={post.id} className="border p-4 mb-4">
            <h2 className="text-xl font-semibold">Nama Pengirim: {post.name}</h2>
            <p>Email Pengirim: {post.email}</p>
            <p>Pesan Yang Dikirim: {post.message}</p>
            <p>Tanggal Dikirim: {formatDate(post.date)}</p>
          </div>
        ))}
      </div>
    </div>
  );
  function formatDate(timestamp) {
    // Convert Firestore timestamp to JavaScript Date
    const date = timestamp.toDate();

    // Format the date as needed (example: YYYY-MM-DD HH:mm:ss)
    const formattedDate = `${date.getFullYear()}-${padZero(
      date.getMonth() + 1
    )}-${padZero(date.getDate())} ${padZero(date.getHours())}:${padZero(
      date.getMinutes()
    )}:${padZero(date.getSeconds())}`;

    return formattedDate;
  }

  // Add a utility function to pad single digits with zero
  function padZero(num) {
    return num.toString().padStart(2, "0");
  }
}
