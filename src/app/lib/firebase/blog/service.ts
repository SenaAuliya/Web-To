// lib/firebase/blogService.js
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';
import firebaseApp from '../firebase';

const firestore = getFirestore(firebaseApp);

export const getBlogPosts = async () => {
  const blogPostsCollection = collection(firestore, 'blogPosts');
  const querySnapshot = await getDocs(blogPostsCollection);

  const blogPosts = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    blogPosts.push({
      id: doc.id,
      ...data,
    });
  });

  return blogPosts;
};

export const getBlogPost = async (id) => {
  const blogPostDoc = doc(firestore, 'blogPosts', id);
  const blogPostSnapshot = await getDoc(blogPostDoc);

  if (blogPostSnapshot.exists()) {
    const blogPostData = blogPostSnapshot.data();
    return {
      id: blogPostSnapshot.id,
      ...blogPostData,
    };
  }

  return null;
};
