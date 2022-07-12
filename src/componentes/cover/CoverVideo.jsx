import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import marvel from "../../media/marvel.mov";
import "./cover.css";
import { UserContext } from "../../context/UserProvider";

const CoverVideo = () => {
  const { loginWithGoogle, user } = useContext(UserContext);

  const navegate = useNavigate();

  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
      navegate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="containerVideo">
      <video className="video" src={marvel} autoPlay loop></video>
      <div className="containerTitulo">
        {user ? (
          <>
            <h1>Bienvenidos</h1>
            <hr />
            <span className="text-white"> {user.email}</span>
          </>
        ) : (
          " "
        )}
        <div className="marvel">
          <img
            src="https://pngimage.net/wp-content/uploads/2018/06/marvel-studios-logo-png-2.png"
            className="marvelStudios"
          />
        </div>
        <div className="button">
          {user ? (
            " "
          ) : (
            <div className="googleDiv">
              <img src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png" />
            <button
              onClick={handleGoogle}
              className="bg-sky-600 hover:bg-sky-800 btn "
            >
             Sign in Google
            </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoverVideo;
