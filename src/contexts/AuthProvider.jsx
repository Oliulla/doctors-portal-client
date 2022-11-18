import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signin user
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // update user
    const updateUser = (name) => {
        const {displayName} = name;
        return updateProfile(auth.currentUser, {
            displayName
        })
    }

    // signin with google
    const googleSignIn = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    }

    // user signout
    const logOut = () => {
      setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        setLoading(false)
      } )
    
      return () => unsubscribe();
    }, [])
    

    const authInfo = {user, createUser, signIn, logOut, updateUser, googleSignIn, loading, setLoading};
  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>
};

export default AuthProvider;
