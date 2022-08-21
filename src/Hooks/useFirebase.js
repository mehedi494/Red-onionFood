import { useState, useEffect } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

import Authentication from '../FIrebase/Firebase.init';



Authentication()
const useFirebase = () => {
    const [user, Setuser] = useState({});
    const [error, Seterror] = useState(' ');


    

    const auth = getAuth();


    const signOutHandler = () => {
        signOut(auth)
            .then(() => {
                Setuser({})

            }).catch((error) => {

                Seterror(error.message)
            });

    }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                
                Setuser(user)
            }
        })
    }, [])

    const googleHandler = () => {
        const Googleprovider = new GoogleAuthProvider();
        return signInWithPopup(auth, Googleprovider)
            .catch((error) => {

                Seterror(error.message);

            });

    }
    const RegistrationHandler = (email, password) => {
        // updateProfile(auth.currentUser, { displayName: 'name' })
        //     .then(result => { })

      return  createUserWithEmailAndPassword(auth, email, password)
           .catch((error) => {

                Seterror(error.message);

            });




    }


    const logInEmailandPass = (email, pass) => {
        signInWithEmailAndPassword(auth, email, pass)
            .then(result => {
                console.log(result.user)
            }).catch((error) => {

                Seterror(error.message);

            });

    }

    return {
        googleHandler,
        user,
        error,
        RegistrationHandler,
        logInEmailandPass,
        signOutHandler


    }

};

export default useFirebase;