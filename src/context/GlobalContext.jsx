import React, { createContext, useState } from "react";

export const Global = createContext("");
const GlobalContext = ({ children }) => {
  const [personajes, setPersonajes] = useState([]);
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagina, setPagina] = useState(0);
  const [offsetOne, setOffsetOne] = useState(0);

  return (
    <Global.Provider
      value={{
        offsetOne,
        setOffsetOne,
        pagina,
        setPagina,
        personajes,
        setPersonajes,
        comics,
        setComics,
        loading,
        setLoading,
      }}
    >
      {children}
    </Global.Provider>
  );
};

export default GlobalContext;
