import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import PropTypes from "prop-types";
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const authInfo = {
        user,
        setUser,
        createUser,
        loading,
        setLoading,
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
