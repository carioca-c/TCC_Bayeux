import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEJ4zYOejZ_1acWWWlNSpUxU-MoyQ4Tsg",
  authDomain: "vinculum-14c6a.firebaseapp.com",
  projectId: "vinculum-14c6a",
  storageBucket: "vinculum-14c6a.firebasestorage.app",
  messagingSenderId: "104434750406",
  appId: "1:104434750406:web:0a0a3ffd5c8b7934f0d8c7"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };