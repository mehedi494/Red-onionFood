import  { useContext } from 'react';
import { AuthenticationContext } from './../Context/AuthProvider';

const useAuth = () => {
    return useContext(AuthenticationContext)
};

export default useAuth;