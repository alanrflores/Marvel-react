import React, {createContext, useState} from 'react'

export const Global = createContext("");
const GlobalContext = ({ children }) => {
const [personajes, setPersonajes] = useState([])

  return (
   <Global.Provider
   value={{
       personajes,
       setPersonajes,
   }}
   >
       {children}
   </Global.Provider>
  )
}

export default GlobalContext