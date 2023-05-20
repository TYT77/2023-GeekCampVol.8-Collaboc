import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8sQibSEcnQhfX63eCgmVc9Mqk5Dxb-yM",
  authDomain: "yukke-products.firebaseapp.com",
  projectId: "yukke-products",
  storageBucket: "yukke-products.appspot.com",
  messagingSenderId: "269222414859",
  appId: "1:269222414859:web:c41182f9dea5b07d1d950e"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export{
  app,
  db
}
