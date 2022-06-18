import React, {createContext, useState} from 'react'

export const Global = createContext("");
const GlobalContext = ({ children }) => {
const [personajes, setPersonajes] = useState([])
const [comics, setComics] = useState([]);

  return (
   <Global.Provider
   value={{
       personajes,
       setPersonajes,
       comics,
       setComics
   }}
   >
       {children}
   </Global.Provider>
  )
}

export default GlobalContext