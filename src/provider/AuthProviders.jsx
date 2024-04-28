import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import PropTypes from "prop-types";



export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();


const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login with email and password
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Login with Google
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // Login with GitHub
    const gitHubLogin = () => {
        return signInWithPopup(auth, gitHubProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('currentUser', currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleLogin,
        gitHubLogin,
        logOut,
    };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

AuthProviders.propTypes = {
    children: PropTypes.node,
};

export default AuthProviders;
