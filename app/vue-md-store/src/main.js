import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC4mLSC3hCAhIyVR43KSEGREJwRWFA3WCg",
  authDomain: "vue-md-store.firebaseapp.com",
  projectId: "vue-md-store",
  storageBucket: "vue-md-store.appspot.com",
  messagingSenderId: "326602806464",
  appId: "1:326602806464:web:24cf6db94246670a1e8925",
  measurementId: "G-GG21GPLL7G"
};

const analytics = getAnalytics(initializeApp(firebaseConfig));

const app = createApp(App)
  .use(router)
  .mount('#app')
