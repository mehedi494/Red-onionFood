
import React from 'react';
import { createContext } from 'react';
import useFirebase from './../Hooks/useFirebase';

export const AuthenticationContext = createContext()
const AuthProvider = (props) => {
    const { children } = props;
    const firebaseAuth = useFirebase()

    return (
        <AuthenticationContext.Provider value={firebaseAuth}>
            {children}
        </AuthenticationContext.Provider>
    )
}

    export default AuthProvider;