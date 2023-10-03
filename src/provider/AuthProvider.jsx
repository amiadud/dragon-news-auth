import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
  
    const [user, setUser] = useState(null)


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userLogout = () =>{
       return signOut(auth);
    }
    
    const authInfo = {
        user,
        createUser,
        userLogin,
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