import React from "react";
import { Link } from "react-router-dom";
import Loading from "../loading/Loading";
import Slide from "../slide/Slide";


const CardDetail = ({ userId }) => {
//   console.log(userId);
  const logo = "https://w7.pngwing.com/pngs/419/220/png-transparent-logo-marvel-comics-marvel-entertainment-marvel-studios-others-comics-avengers-text.png"
  return (
    
     <main className="mainContainer">
      { userId.length === 0 ?  
      (<div className="mt-12">
           <Loading />
      </div>)
     :  ( userId.map((user, i) => (
            <div
              key={i}
              className="divContainer text-center hover:shadow-lg align-center"
            >
              <a href="" />
              <div className="flex justify-center shadow-lg px-20 py-20 rounded-lg">
                <img
                  src={`${user && user.thumbnail.path}.${user.thumbnail.extension}`}
                  className="imgMain"
                />
              </div>
              <a href="" />

              <div className="flex justify-center">
                <img
                  src={logo}
                  className="rounded-full border-4 mt-4 shadow-lg align-center w-20"
                />
              </div>

              <p className="font-bold pt-3 pb-2 text-xl text-gray-400 "> {user.name} </p>

              <p className="font-semibold p-2 text-sm text-gray-400">
                {" "}
                ID :{" "}
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  {" "}
                  {user.id}{" "}
                </a>{" "}
              </p>

              <p className="text-lg px-10 py-2 mb-5 text-gray-400">
                {user.description ? user.description : "Not available"}
              </p>
            <Slide user={user}/>
            <Link to='/app'>
            <button className="text-white rounded">
              Atras
            </button>
            </Link>
            </div>
           
        )))
        }
        </main>
   
  );
  };

export default CardDetail;
