import { createContext } from "react";

export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
  const user="this is practices for auth";
  const authInfo={user}
  console.log(authInfo)
  
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;