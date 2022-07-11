import React, { useState, useEffect, useContext } from "react";
import Card from "./componentes/card/Card";
import Pagination from "./componentes/pagination/Pagination";

import { Global } from "./context/GlobalContext";

const App = () => {
  const { personajes, setPersonajes, pagina, setPagina, offsetOne, setOffsetOne } = useContext(Global);
  const [buscar, setBuscar] = useState("");
  

  const fetchHeroes = async (limit = 30, offset = offsetOne) => {
    try {
      let url = `https://gateway.marvel.com:443/v1/public/characters?limit=${limit}&offset=${offset}&ts=1&apikey=52792a442fb8021623a92f17b8b8485c&hash=3a8144df2099db6e25787ef08412f6d0`;
      const res = await fetch(url);
      const datos = await res.json();
      setPersonajes(datos.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  const handleChange = (e) => {
    setBuscar(e.target.value);
  };

  const res = !buscar
    ? personajes
    : personajes.filter((item) =>
        item.name.toLowerCase().includes(buscar.toLowerCase())
      );

  return (
    <>
      <div className="container max-h-full py-4">
        <div className="flex justify-center py-4 h-48 fondo">
          <div className="w-96 pt-4">
            <input
              type="search"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Buscar..."
              onChange={handleChange}
              value={buscar}
            />
          </div>
        </div>
        <div className="px-4 py-4 rounded-lg shadow-lg">
          <Pagination
            pagina={pagina}
            setPagina={setPagina}
            fetch={fetchHeroes}
          />
          <div className="divCard grid grid-cols-3 gap-4 shadow-lg px-6 py-6 rounded-lg">
            <Card personajes={res} />
          </div>
        </div>
      </div>
    </>
  );
};

// export const getHeroes = async(limit= 30, offset = 0 )=>{
// try {
//   let url = `https://gateway.marvel.com:443/v1/public/characters?limit=${limit}&offset=${offset}&ts=1&apikey=52792a442fb8021623a92f17b8b8485c&hash=3a8144df2099db6e25787ef08412f6d0`;
//   const response = await fetch(url)
//   const data = await response.json()
//   return data;
// } catch (error) {};
// }
export default App;
