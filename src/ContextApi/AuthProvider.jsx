import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";



export const AuthContext=createContext(null)
const provider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null)
  const [loading,setLoading]=useState(true)
  
// -------------------- Log in -----------------

  const handleLogIn=(email,password)=>{
    setLoading(true)
   return signInWithEmailAndPassword(auth,email,password)
  
  }
// ------------- google log in -----------------------

  const handleGoogleLogIn=()=>{
    setLoading(true)
    signInWithPopup(auth,provider)
      .then(result=>{
        console.log(result.user)
        
      })
      .catch(error=>{
        console.log(error.message)
      })
  }

// ----------------- registration log in -------------------

const handleRegistration=(email,password)=>{
  setLoading(true)
   return createUserWithEmailAndPassword(auth,email,password)
   
}
// ----------------log out ----------------------
const handleLogOut=()=>{
  setLoading(true)
  return signOut(auth)
}
// ----------------update user profile------------------
const UpdateUserprofile=(name,photoUrl)=>{
  setLoading(false)
 updateProfile(auth.currentUser ,{
  displayName : name,
  photoURL :  photoUrl
})
}

// ---------------------manage current sign in user -----------

 useEffect(()=>{
  const unSubscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        // console.log('this is currentUser name',currentUser)
  })
  return ()=>{
    unSubscribe()
  }
 },[])




  const authInfo={user,handleRegistration,handleLogIn,handleGoogleLogIn,handleLogOut,UpdateUserprofile,loading}

  // console.log(authInfo)
  
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;