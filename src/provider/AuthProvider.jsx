import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';


export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
  
    const [user, setUser] = useState(null)

    // create new user with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    
    // login user with email and password
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // login with google account
    const userLoginWithGoogle = ( ) => {
        return signInWithPopup(auth, googleProvider)
    }

    // login with google account
    const userLoginWithGithub = ( ) => {
        return signInWithPopup(auth, githubProvider)
    }

    const userLogout = () =>{
       return signOut(auth);
    }
    
    const authInfo = {
        user,
        createUser,
        userLogin,
        userLoginWithGoogle,
        userLoginWithGithub,
        userLogout
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged( auth, currentUser =>{
            setUser(currentUser)
        })

        return () =>{
            unSubscribe();
        }
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.PropTypes = {
    children: PropTypes.node
}