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
  
  export const getKontakPosts = async () => {
    const KontakCollection = collection(firestore, 'Kontak');
    const querySnapshot = await getDocs(KontakCollection);
  
    const Kontak = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      Kontak.push({
        id: doc.id,
        name: data.name,
        email: data.email,
        message: data.message,
        date: data.date, // Add the date property
      });
    });
  
    return Kontak;
  };
  
  export const getKontakById = async (id) => {
    const KontakDoc = doc(firestore, 'Kontak', id);
    const docSnapshot = await getDoc(KontakDoc);
  
    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      return {
        id: docSnapshot.id,
        name: data.name,
        email: data.email,
        message: data.message,
        date: data.date,
      };
    } else {
      return null; // Return null if the document doesn't exist
    }
  };
  
  // Function to add a new blog post
  export const createKontak = async (blogData) => {
    try {
      // If there is a file, upload it to Firebase Storage
      if (blogData.file) {
        blogData.imageUrl = await uploadFile(blogData.file, `Kontak/${new Date().toISOString()}`);
      }
  
      // Add the current date
      blogData.date = serverTimestamp();
  
      const KontakCollection = collection(firestore, 'Kontak');
      
      // Remove the 'file' field before adding to Firestore
      const { file, ...dataWithoutFile } = blogData;
      
      await addDoc(KontakCollection, dataWithoutFile);
    } catch (error) {
      console.error("Error creating blog post:", error);
    }
  };