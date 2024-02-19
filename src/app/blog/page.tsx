import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata ={
  title: "Blog",
  description: "Halaman Blog dari Web jurusan To Smk N 1 Bangsri"
}
import BlogList from '../ui/blog/BlogList';
const Home = () => {
  return (
    <div>
      <BlogList />
    </div>
  );
  }

export default Home;
