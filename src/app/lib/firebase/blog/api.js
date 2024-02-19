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

export const getBlogPosts = async () => {
  const blogPostsCollection = collection(firestore, 'blogPosts');
  const querySnapshot = await getDocs(blogPostsCollection);

  const blogPosts = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    blogPosts.push({
      id: doc.id,
      title: data.title,
      content: data.content,
      imageUrl: data.fileURL,
      date: data.date, // Add the date property
    });
  });

  return blogPosts;
};

export const getBlogPostById = async (id) => {
  const blogPostDoc = doc(firestore, 'blogPosts', id);
  const docSnapshot = await getDoc(blogPostDoc);

  if (docSnapshot.exists()) {
    const data = docSnapshot.data();
    return {
      id: docSnapshot.id,
      title: data.title,
      content: data.content,
      imageUrl: data.fileURL,
      date: data.date,
    };
  } else {
    return null; // Return null if the document doesn't exist
  }
};

// Function to add a new blog post
export const createBlogPost = async (blogData) => {
  // If there is a file, upload it to Firebase Storage
  if (blogData.file) {
    blogData.imageUrl = await uploadFile(blogData.file, `blogPosts/${new Date().toISOString()}`);
  }

  // Add the current date
  blogData.date = serverTimestamp();

  const blogPostsCollection = collection(firestore, 'blogPosts');
  await addDoc(blogPostsCollection, blogData);
};

// Function to update a blog post
export const updateBlogPost = async (id, updatedBlogData) => {
  try {
    // Check if updatedBlogData.file exists and is truthy
    if (updatedBlogData.file) {
      updatedBlogData.imageUrl = await uploadFile(updatedBlogData.file, `blogPosts/${new Date().toISOString()}`);
    }

    // Update the current date
    updatedBlogData.date = serverTimestamp();

    const blogPostDoc = doc(firestore, 'blogPosts', id);
    await updateDoc(blogPostDoc, updatedBlogData);
  } catch (error) {
    console.error("Error updating blog post:", error);
  }
};

// Function to delete a blog post
export const deleteBlogPost = async (id) => {
  const blogPostDoc = doc(firestore, 'blogPosts', id);
  await deleteDoc(blogPostDoc);
};
