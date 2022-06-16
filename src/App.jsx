import React, { useState, useEffect, useContext } from "react";
import Card from "./componentes/card/Card";


import { Global } from "./context/GlobalContext";

const App = () => {
  const { personajes, setPersonajes } = useContext(Global);
  const [buscar, setBuscar] = useState("")
 

  const cargarDatos = async () => {
    try {
      const url =
        "https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=1&apikey=52792a442fb8021623a92f17b8b8485c&hash=3a8144df2099db6e25787ef08412f6d0";
      const res = await fetch(url);
      const datos = await res.json();
      setPersonajes(datos.data);
      console.log(datos.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  const handleChange = (e)=> {
    setBuscar(e.target.value)
  }

  const res = !buscar
  ? personajes
  : personajes.filter((item)=> item.name.toLowerCase().includes(buscar.toLowerCase()));

  return (
    <>
      <div className="container max-h-full">
        <div className="flex justify-center py-3">
        <input
          type="search"
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Buscar..."
          onChange={handleChange}
          value={buscar}
        />
        </div>
        <div className="px-4 py-4 rounded-lg shadow-lg">
          <div className="grid grid-cols-3 gap-4 bg-gradient-to-r from-red-900 shadow-lg px-6 py-6 rounded-lg">
            <Card personajes={res.results} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
