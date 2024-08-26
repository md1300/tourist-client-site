import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
  const user="this is practices for auth";


const handleRegistration=(email,password)=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then(registared=>{
        const registar=registared.user;
        console.log(registar)
    })
    .catch(error=>{
        console.log(error.message)
    })
}




  const authInfo={user,handleRegistration}
  console.log(authInfo)
  
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;