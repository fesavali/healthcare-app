import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { useEffect } from "react";
import { useState } from "react";
import { auth } from "../hooks/firebase.init";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"; 
import {useNavigate } from "react-router-dom";

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

// Google sign in
const signInWithGoogle = () => {
  setIsLoading(true);
  const googleProvider = new GoogleAuthProvider();
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      setUser(result.user);
      setError("");
      // After successful sign-in, prompt user to choose role
      const selectedRole = prompt("Choose your role: patient, doctor, or admin");
      if (selectedRole) {
        // Redirect based on selected role
        navigate(`/${selectedRole}`);
      } else {
        setError("Role selection cancelled.");
      }
    })
    .catch((error) => {
      setError(error.message);
    })
    .finally(() => setIsLoading(false));
};

  // Github sign in
  const signInWithGithub = () => {
    setIsLoading(true);
    const githubProvider = new GithubAuthProvider();
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setUser(result.user);
        setError("");
        setSuccess("Login Success");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

const navigate = useNavigate;

  // Process login with email and pass
const processLogin = (email, password) => {
  setIsLoading(true);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // Get user role from Firebase
      getUserRole(email).then((role) => {
        navigate(`/${role}`); // Redirect based on user role
      });
    })
    .catch((error) => {
      setError(error.message);
    })
    .finally(() => setIsLoading(false));
};


  // Create user with EmailPassword
const createNewUser = (name, email, password, role) => {
  setIsLoading(true);
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      updateName(name);
      setUserRole(email, role); // Set user role in Firebase
      setSuccess("Registration Success");
      setError("");
    })
    .catch((error) => {
      setError(error.message);
    })
    .finally(() => setIsLoading(false));
};

// Set user role in Firebase
const setUserRole = (email, role) => {
  // You need to store the role in your database. Here I'm using Firestore as an example.
  // You might have a different database structure.
  const db = getFirestore();
  const userRef = doc(db, "users", email);
  setDoc(userRef, { role }, { merge: true }); // Store role in user document
};

// Get user role from Firebase
const getUserRole = async (email) => {
  const db = getFirestore();
  const userRef = doc(db, "users", email);
  const docSnap = await getDoc(userRef);
  if (docSnap.exists()) {
    const userData = docSnap.data();
    return userData.role || "patient"; // Default role is patient if not set
  } else {
    return "patient"; // Default role is patient if user document doesn't exist
  }
};

  // update name in firebase
  const updateName = (name) => {
    setIsLoading(true);
    updateProfile(auth.currentUser, { displayName: name })
      .then(() => {
        console.log("Name Updated");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  // Sign out
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setError("");
        setSuccess("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    error,
    success,
    isLoading,
    signInWithGoogle,
    signInWithGithub,
    createNewUser,
    processLogin,
    logOut,
  };
};

export default useFirebase;