import React from "react";
import { Link } from "react-router-dom";
import Loading from "../loading/Loading";
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
                  <h3 className="mb-4 text-2xl text-gray-400">{personaje.name}</h3>
                  <Link to={`item/${personaje.id}`}>
                    <button className="rounded-lg p-2 text-gray-400 shadow-lg shadow-gray-600">
                      Mas detalles
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="h-screen col-start-2  col-span-4 ml-12">
          <Loading/>
        </div>
        
      )}
    </>
  );
};

export default Card;
