import React, { createContext, useContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from './firebase.congfig';

export const AuthContex = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [load, setLoad] = useState(true)
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    const google = () => {
        setLoad(true)
        return signInWithPopup(auth, provider)
    }
    const signin = (e, p) => {
        setLoad(true)
        return signInWithEmailAndPassword(auth, e, p)
    }
    const signup = (e, p) => {
        setLoad(true)
        return createUserWithEmailAndPassword(auth, e, p)
    }
    const updt = (u, nam, pic) => {
        setLoad(true)
        return updateProfile(u, {
            displayName: nam, photoURL: pic
        })
    }
    const out = () => {
        setLoad(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoad(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const info = {
        google,
        signin,
        signup,
        out,
        updt,
        user
    }

    return (
        <AuthContex.Provider value={info}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;