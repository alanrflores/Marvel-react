import React from "react";
import Slide from "../slide/Slide";

const CardDetail = ({ userId }) => {
//   console.log(userId);
  const logo = "https://w7.pngwing.com/pngs/419/220/png-transparent-logo-marvel-comics-marvel-entertainment-marvel-studios-others-comics-avengers-text.png"
  return (
    <>
      {userId ? (
        userId.map((user, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-lg text-center hover:shadow-lg align-center"
            >
              <a href="" />
              <div className="flex justify-center">
                <img
                  src={`${user.thumbnail.path}.${user.thumbnail.extension}`}
                  className="rounded-t-lg object-cover"
                />
              </div>
              <a href="" />

              <div className="flex justify-center">
                <img
                  src={logo}
                  className="rounded-full object-center border-4 border-white -mt-6 shadow-lg align-center w-20"
                />
              </div>

              <p className="font-bold pt-3 pb-2"> {user.name} </p>

              <p className="font-semibold p-2 text-sm text-gray-500">
                {" "}
                ID :{" "}
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  {" "}
                  {user.id}{" "}
                </a>{" "}
              </p>

              <p className="px-10 py-2 mb-5 text-gray-500">
                {user.description ? user.description : "Not available"}
              </p>

            <Slide user={user}/>
            </div>
          
        ))
      ) : (
        <h2>Cargando.....</h2>
      )}
    </>


  );
};

export default CardDetail;
