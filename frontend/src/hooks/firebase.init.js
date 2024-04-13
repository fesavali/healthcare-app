import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import other Firebase services if needed
import firebaseConfig from "./firebase.config";
import { getAnalytics } from "firebase/analytics";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase services
const auth = getAuth(app);

// Initialize other Firebase services if needed

export { auth }; // Export the service(s) you want to use in your app