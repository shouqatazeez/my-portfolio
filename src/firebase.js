
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyD2SD3K2_ffCEAaJaxFLwnNl1VgVzVWtZ0",
//   authDomain: "my-portfolio-contact-b0ca8.firebaseapp.com",
//   projectId: "my-portfolio-contact-b0ca8",
//   storageBucket: "my-portfolio-contact-b0ca8.firebasestorage.app",
//   messagingSenderId: "226772195041",
//   appId: "1:226772195041:web:677beed6369dd85d2d89a0",
// };

// const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);

// export default db;

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
