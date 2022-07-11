import React, {createContext, useState} from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../componentes/service/Firebase'

export const Global = createContext("");
const GlobalContext = ({ children }) => {
const [personajes, setPersonajes] = useState([])
const [comics, setComics] = useState([]);
const [loading, setLoading] = useState(true);
const [pagina, setPagina] = useState(0);
const [offsetOne, setOffsetOne] = useState(0);

const loginWithGoogle = ()=> {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}

  return (
   <Global.Provider
   value={{
     loginWithGoogle,
     offsetOne,
     setOffsetOne,
       pagina,
       setPagina,
       personajes,
       setPersonajes,
       comics,
       setComics,
       loading,
       setLoading
   }}
   >
       {children}
   </Global.Provider>
  )
}

export default GlobalContext