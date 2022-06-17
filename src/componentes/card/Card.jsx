import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ personajes }) => {
  //console.log(personajes)
  return (
    <>
      {personajes?.length > 0 ? (
        personajes.map((personaje, index) => (
          <div key={index} className="flex flex-wrap m-3">
            <div className="w-full flex flex-col p-3">
              <div className="shadow-lg overflow-hidden flex-1 flex flex-col">
                <div className="card">
                  <img
                    src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}
                    className="imagen"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="mb-4 text-2xl">{personaje.name}</h3>
                  <Link to={`item/${personaje.id}`}>
                    <button className="rounded-lg p-2 shadow-lg shadow-red-100">
                      Mas detalles
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h2>Cargando.....</h2>
      )}
    </>
  );
};

export default Card;
