import { initializeApp } from "firebase/app";
import {
  getAnalytics,
  logEvent,
} from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAkfkF79ZkgZSAh2vvF-Y1vh5Um5ZYMUWY",
  authDomain: "burgeon-adaire.firebaseapp.com",
  projectId: "burgeon-adaire",
  storageBucket: "burgeon-adaire.appspot.com",
  messagingSenderId: "764018528295",
  appId: "1:764018528295:web:2ae25591e22d167e1efe02",
  measurementId: "G-VBWQHXE96E"
};

const app = initializeApp(firebaseConfig);
// Analytics
const analytics = getAnalytics(app);
logEvent(analytics, 'notification_received');
