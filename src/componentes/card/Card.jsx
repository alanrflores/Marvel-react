import React from "react";
import "./card.css";

const Card = ({ id, nombre, imagen, jpg }) => {
  return (
    <div className="flex flex-wrap m-3">
      <div className="w-full flex flex-col p-3">
        <div className="shadow-lg overflow-hidden flex-1 flex flex-col">
          <div className="card">
            <img src={`${imagen}.${jpg}`} className="imagen" />
          </div>
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="mb-4 text-2xl">{nombre}</h3>
            <div className="mb-4 text-grey-darker text-sm flex-1">
              <p>ID: {id} </p>
            </div>
            <a
              href="#"
              className="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
