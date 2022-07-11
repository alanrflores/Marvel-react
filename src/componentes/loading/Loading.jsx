import { React, useContext } from "react";
import loadingGif from "../assets/doctor.gif";
import { Global } from "../../context/GlobalContext";
import './loading.css'
const Loading = () => {
  const { loading, setLoading } = useContext(Global);

  return <>{loading 
    ? <img src={loadingGif} className="gifLoading" /> : ""}</>;
};

export default Loading;
