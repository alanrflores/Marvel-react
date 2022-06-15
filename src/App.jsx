import React, { useState, useEffect } from "react";
import Card from "./componentes/card/Card";
import Layout from "./componentes/layout/Layout";

const App = () => {
  const [personajes, setPersonajes] = useState([]);

  const cargarDatos = async () => {
    try {
      const url =
        "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=52792a442fb8021623a92f17b8b8485c&hash=3a8144df2099db6e25787ef08412f6d0";
      const res = await fetch(url);
      const datos = await res.json();
      console.log(datos.data.results);
      setPersonajes(datos.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  return (
    <>
      <Layout />
      <div className="container max-h-full">
        <div className="flex justify-center py-3">
          <h1 className="text-2xl font-bold ">Hola Mundo!</h1>
        </div>
        <div className="px-4 py-4 rounded-lg shadow-lg">
          <div className="grid grid-cols-3 gap-4 bg-gradient-to-r from-red-900 shadow-lg px-6 py-6 rounded-lg">
            {personajes.length === 0 ? (
                
              <h2>Cargando.....</h2>
             
            ) : (
              personajes.map((personaje, index) => (
                <Card
                  key={index}
                  id={personaje.id}
                  nombre={personaje.name}
                  imagen={personaje.thumbnail.path}
                  jpg={personaje.thumbnail.extension}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
