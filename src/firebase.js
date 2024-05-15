import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAQftlEnjFKGpZk53deXjZ3P9UlhBr5YEo",
    authDomain: "tryon-efa87.firebaseapp.com",
    projectId: "tryon-efa87",
    storageBucket: "tryon-efa87.appspot.com",
    messagingSenderId: "336082813814",
    appId: "1:336082813814:web:8a87751e12eadfe029f057"
  };

  const app = initializeApp(firebaseConfig);
  export default app;