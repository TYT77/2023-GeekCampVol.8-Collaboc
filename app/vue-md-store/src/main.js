import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4mLSC3hCAhIyVR43KSEGREJwRWFA3WCg",
  authDomain: "vue-md-store.firebaseapp.com",
  projectId: "vue-md-store",
  storageBucket: "vue-md-store.appspot.com",
  messagingSenderId: "326602806464",
  appId: "1:326602806464:web:24cf6db94246670a1e8925",
  measurementId: "G-GG21GPLL7G"
};

// Initialize Firebase
const analytics = getAnalytics(initializeApp(firebaseConfig));

const app = createApp(App)

app.use(router)

app.mount('#app')
