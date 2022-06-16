import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Global } from "../../context/GlobalContext";

const Item = () => {
  const { personajes } = useContext(Global);
  const { id } = useParams();
  const [user, setUser] = useState([]);

  const obtenerDatos = async () => {
    try {
      const url = `https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=52792a442fb8021623a92f17b8b8485c&hash=3a8144df2099db6e25787ef08412f6d0`;
      const res = await fetch(url);
      const datos = await res.json();
      console.log(datos);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    obtenerDatos();
  }, []);

  console.log(personajes);
  return (
    <div>
      <h1>Item</h1>
    </div>
  );
};

export default Item;
