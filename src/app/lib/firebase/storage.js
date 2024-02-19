// lib/firebase/storage.js
import { getDownloadURL } from 'firebase/storage';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import firebaseApp from './firebase';

const storage = getStorage(firebaseApp);

const uploadFile = async (file, path) => {
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
};

export default uploadFile;
