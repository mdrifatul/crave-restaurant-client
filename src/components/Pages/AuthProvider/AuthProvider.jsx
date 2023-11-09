// import axios from "axios";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxiosSecure";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider() 

const AuthProvider = ({children}) => {
  const axios = useAxios();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const login = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email, password)
  }

  const signInWithGoogle = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  const logOut = () =>{
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);  
            const userEmail = currentUser?.email || user?.email
            const loggedEmail = {email: userEmail};
            console.log('current user', currentUser);
            if(currentUser){
                axios.post('/jwt',loggedEmail)
                .then(res => {
                    console.log('token response',res.data);
                })
            }else{
                // delete cookie
                axios.post('/logout', loggedEmail)
            }
      setLoading(false);
    })
    return () =>{
      unSubscribe();
    }
  },[user,axios])

  const userInfo = {
    user,
    createUser,
    login,
    logOut,
    loading,
    signInWithGoogle
  }

  return (
    <div>
      <AuthContext.Provider value={userInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;