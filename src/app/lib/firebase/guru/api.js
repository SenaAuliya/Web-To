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
    orderBy
  } from 'firebase/firestore';
  import uploadFile from '../storage'; // Replace with the correct path
  import firebaseApp from '../firebase';
  
  // Function to get a list of blog posts
  const firestore = getFirestore(firebaseApp);
  
  export const getGuruPosts = async () => {
    const GuruCollection = collection(firestore, 'Guru');
    const querySnapshot = await getDocs(GuruCollection);
  
    const Guru = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      Guru.push({
        id: doc.id,
        name: data.name,
        position: data.position,
        imageUrl: data.imageUrl,
        date: data.date, // Add the date property
      });
    });
  
    return Guru;
  };
  
  export const getGuruById = async (id) => {
    const GuruDoc = doc(firestore, 'Guru', id);
    const docSnapshot = await getDoc(GuruDoc);
  
    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      return {
        id: docSnapshot.id,
        name: data.name,
        position: data.position,
        imageUrl: data.imageUrl,
        date: data.date,
      };
    } else {
      return null; // Return null if the document doesn't exist
    }
  };
  
  // Function to add a new blog post
  export const createGuru = async (blogData) => {
    try {
      // If there is a file, upload it to Firebase Storage
      if (blogData.file) {
        blogData.imageUrl = await uploadFile(blogData.file, `Guru/${new Date().toISOString()}`);
      }
  
      // Add the current date
      blogData.date = serverTimestamp();
  
      const GuruCollection = collection(firestore, 'Guru');
      
      // Remove the 'file' field before adding to Firestore
      const { file, ...dataWithoutFile } = blogData;
      
      await addDoc(GuruCollection, dataWithoutFile);
    } catch (error) {
      console.error("Error creating blog post:", error);
    }
  };
  
  // Function to update a blog post
  export const updateGuru = async (id, updatedBlogData) => {
    try {
      // Check if updatedBlogData.file exists and is truthy
      if (updatedBlogData.file) {
        updatedBlogData.imageUrl = await uploadFile(updatedBlogData.file, `Guru/${new Date().toISOString()}`);
      }
  
      // Update the current date
      updatedBlogData.date = serverTimestamp();
  
      const GuruDoc = doc(firestore, 'Guru', id);
      await updateDoc(GuruDoc, updatedBlogData);
    } catch (error) {
      console.error("Error updating blog post:", error);
    }
  };
  
  // Function to delete a blog post
  export const deleteGuru = async (id) => {
    const GuruDoc = doc(firestore, 'Guru', id);
    await deleteDoc(GuruDoc);
  };
  