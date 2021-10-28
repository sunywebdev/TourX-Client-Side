import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import initializeAuth from "./firebase.init";

initializeAuth()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsloading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoogle = () => {
        setIsloading(true)
        return signInWithPopup(auth, googleProvider)
            .then((result) => {

            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            }).finally(() => setIsloading(false))
    }

    const createNewUserUsingEmailPassword = (auth, email, password) => {
        setIsloading(true)
        return createUserWithEmailAndPassword(auth, email, password)

            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            }).finally(() => setIsloading(false))
    }
    const updateProfiles = (auth, displayName, photoURL) => {
        setIsloading(true)
        return updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: photoURL
        })
            .catch((error) => {
                // An error occurred
                // ...
            }).finally(() => setIsloading(false))
    }
    const signInWithEmailPassword = (auth, email, password) => {
        setIsloading(true)
        return signInWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            }).finally(() => setIsloading(false))
    }

    const verifyEmail = () => {
        setIsloading(true)
        sendEmailVerification(auth.currentUser)
            .then(() => {
                // Email verification sent!
                // ...
            }).finally(() => setIsloading(false))
    }

    const logOut = () => {
        setIsloading(true)
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {

        }).finally(() => setIsloading(false))
    }
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setError('')
            } else {
                setUser({})
            }
            setIsloading(false)
        });
        return () => unSubscribed
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return {
        auth, user, error, signInUsingGoogle, createNewUserUsingEmailPassword, signInWithEmailPassword, logOut, verifyEmail, isLoading, updateProfiles
    }
};


export default useFirebase;