/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const registrations = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const data = { registrations };
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
        
    );
};

export default AuthProvider;