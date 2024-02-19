// Import the uploadFile function previously created
import {
    addDoc,
    updateDoc,
    deleteDoc,
    collection,
    getFirestore,
    getDocs,
    getDoc,
    doc,
    serverTimestamp,
  } from 'firebase/firestore';
  import uploadFile from '../storage'; // Replace with the correct path
  import firebaseApp from '../firebase';
  
  // Function to get a list of blog posts
  const firestore = getFirestore(firebaseApp);
  
  export const getGaleriPosts = async () => {
    const galeriCollection = collection(firestore, 'galeri');
    const querySnapshot = await getDocs(galeriCollection);
  
    const galeri = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      galeri.push({
        id: doc.id,
        title: data.title,
        imageUrl: data.imageUrl,
        date: data.date, // Add the date property
      });
    });
  
    return galeri;
  };
  
  export const getGaleriById = async (id) => {
    const galeriDoc = doc(firestore, 'galeri', id);
    const docSnapshot = await getDoc(galeriDoc);
  
    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      return {
        id: docSnapshot.id,
        title: data.title,
        imageUrl: data.imageUrl,
        date: data.date,
      };
    } else {
      return null; // Return null if the document doesn't exist
    }
  };
  
  // Function to add a new blog post
  export const createGaleri = async (blogData) => {
    try {
      // If there is a file, upload it to Firebase Storage
      if (blogData.file) {
        blogData.imageUrl = await uploadFile(blogData.file, `galeri/${new Date().toISOString()}`);
      }
  
      // Add the current date
      blogData.date = serverTimestamp();
  
      const galeriCollection = collection(firestore, 'galeri');
      
      // Remove the 'file' field before adding to Firestore
      const { file, ...dataWithoutFile } = blogData;
      
      await addDoc(galeriCollection, dataWithoutFile);
    } catch (error) {
      console.error("Error creating blog post:", error);
    }
  };
  
  // Function to update a blog post
  export const updateGaleri = async (id, updatedBlogData) => {
    try {
      // Check if updatedBlogData.file exists and is truthy
      if (updatedBlogData.file) {
        updatedBlogData.imageUrl = await uploadFile(updatedBlogData.file, `galeri/${new Date().toISOString()}`);
      }
  
      // Update the current date
      updatedBlogData.date = serverTimestamp();
  
      const galeriDoc = doc(firestore, 'galeri', id);
      await updateDoc(galeriDoc, updatedBlogData);
    } catch (error) {
      console.error("Error updating blog post:", error);
    }
  };
  
  // Function to delete a blog post
  export const deleteGaleri = async (id) => {
    const galeriDoc = doc(firestore, 'galeri', id);
    await deleteDoc(galeriDoc);
  };
  