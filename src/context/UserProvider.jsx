import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useState, useEffect} from 'react'
import { auth } from '../componentes/service/Firebase';

export const UserContext = createContext();
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const loginWithGoogle = ()=> {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
      }
      const logout = () => signOut(auth);
      
      useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
        return () => unsuscribe();
      }, []);
  return (
   <UserContext.Provider value={{
     loginWithGoogle,
     logout,
     user,
     setUser,
   }}>
       {children}
   </UserContext.Provider>
  )
}

export default UserProvider