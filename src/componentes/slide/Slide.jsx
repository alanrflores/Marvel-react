import React, { useEffect, useContext, useState } from "react";
import Swal from "sweetalert2";
import { Global } from "../../context/GlobalContext";

const Slide = ({ user }) => {
  const { comics, setComics } = useContext(Global);
  const [openModal, setOpenModal] = useState(false);
  // const {id} = useParams;
  // console.log(user.id)
  const obtenerComics = async () => {
    try {
      let url = `https://gateway.marvel.com:443/v1/public/characters/${user.id}/comics?ts=1&apikey=52792a442fb8021623a92f17b8b8485c&hash=3a8144df2099db6e25787ef08412f6d0`;
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data.data.results)
      setComics(data.data.results);
    } catch (error) {}
  };
  useEffect(() => {
    obtenerComics();
  }, []);

  const handleClick = () => {
    setOpenModal(true);
    return;
    //  console.log("true")
  };

  console.log(comics);
  return (
    <>
      {comics.length > 0 ? (
        //<!-- comics -->

        <div className="h-screen  flex items-center justify-center">
          <div className="grid grid-cols-6 gap-2 px-16">
            {/* 
        <!-- Item 1 --> */}
            <div className="flex flex-col gap-1">
              {/* <!-- imagen */}
              <div className="bg-red-500">
                <img
                  src={
                    comics[0]
                      ? `${comics[0].images[0].path}.${comics[0].images[0].extension}`
                      : " "
                  }
                  className="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100"
                />
              </div>

              {/* <!-- titulo--> */}
              <h5 className="hover:text-red-500 text-gray-200 font-semibold">
                {comics[0] ? comics[0].title : ""}
              </h5>

              {/* <!-- precio --> */}
              <p className="hover:text-red-500 text-sm text-gray-400 -mt-1">
                $ {comics[0] ? comics[0].prices[0].price : ""}
              </p>

              {/* <!-- formato --> */}
              <div className="flex flex-row flex-wrap gap-2">
                <p className="hover:bg-red-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full">
                  {comics[0] ? comics[0].format : ""}
                </p>
                <button
                  onClick={() =>
                    handleClick`${Swal.fire({
                      title: `${comics[0].title}`,
                      text: `${comics[0].description}`,
                      imageUrl: `${comics[0].images[0].path}.${comics[0].images[0].extension}`,
                      imageWidth: 600,
                      imageHeight: 400,
                      imageAlt: "Custom image",
                    })}`
                  }
                  className="hover:bg-red-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"
                >
                  description
                </button>
              </div>
            </div>
            {/* <!-- Item 2 --> */}
            <div className="flex flex-col gap-1">
              {/* <!-- imagen --> */}
              <div className="bg-red-500">
                <img
                  src={
                    comics[1]
                      ? `${comics[1].images[0].path}.${comics[1].images[0].extension}`
                      : " "
                  }
                  className="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100"
                />
              </div>
              s{/* <!-- titulo --> */}
              <h5 className="hover:text-red-500 text-gray-200 font-semibold">
                {comics[1] ? comics[1].title : ""}
              </h5>
              {/* <!-- precio --> */}
              <p className="hover:text-red-500 text-sm text-gray-400 -mt-1">
                $ {comics[1] ? comics[1].prices[0].price : ""}
              </p>
              {/* <!-- formato --> */}
              <div className="flex flex-row flex-wrap gap-2">
                <p className="hover:bg-red-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full">
                  {comics[1] ? comics[1].format : ""}
                </p>
                <button
                  onClick={() =>
                    handleClick`${Swal.fire({
                      title: `${comics[1].title}`,
                      text: `${comics[1].description}`,
                      imageUrl: `${comics[1].images[0].path}.${comics[1].images[0].extension}`,
                      imageWidth: 600,
                      imageHeight: 400,
                      imageAlt: "Custom image",
                    })}`
                  }
                  className="hover:bg-red-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"
                >
                  description
                </button>
              </div>
            </div>

            {/* <!-- Item 3 --> */}
            <div className="flex flex-col gap-1">
              {/* <!-- imagen --> */}
              <div className="bg-red-500">
                <img
                  src={
                    comics[2]
                      ? `${comics[2].images[0].path}.${comics[2].images[0].extension}`
                      : " "
                  }
                  className="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100"
                />
              </div>

              {/* <!-- titulo --> */}
              <h5 className="hover:text-red-500 text-gray-200 font-semibold">
                {comics[2] ? comics[2].title : ""}
              </h5>

              {/* <!-- precio--> */}
              <p className="hover:text-red-500 text-sm text-gray-400 -mt-1">
                {comics[2] ? comics[2].prices[0].price : ""}
              </p>

              {/* <!-- formato--> */}
              <div className="flex flex-row flex-wrap gap-2">
                <p className="hover:bg-red-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full">
                  {comics[2] ? comics[2].format : ""}
                </p>
                <button
                  onClick={() =>
                    handleClick`${Swal.fire({
                      title: `${comics[2].title}`,
                      text: `${comics[2].description}`,
                      imageUrl: `${comics[2].images[0].path}.${comics[2].images[0].extension}`,
                      imageWidth: 600,
                      imageHeight: 400,
                      imageAlt: "Custom image",
                    })}`
                  }
                  className="hover:bg-red-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"
                >
                  description
                </button>
              </div>
            </div>

            {/* <!-- Item 4 --> */}
            <div className="flex flex-col gap-1">
              {/* <!-- imagen--> */}
              <div className="bg-red-500">
                <img
                  src={
                    comics[3]
                      ? `${comics[3].images[0].path}.${comics[3].images[0].extension}`
                      : " "
                  }
                  className="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100"
                />
              </div>

              {/* <!-- titulo --> */}
              <h5 className="hover:text-red-500 text-gray-200 font-semibold">
                {comics[3] ? comics[3].title : ""}
              </h5>

              {/* <!-- precio --> */}
              <p className="hover:text-red-500 text-sm text-gray-400 -mt-1">
                {comics[3] ? comics[3].prices[0].price : ""}
              </p>

              {/* <!-- formato --> */}
              <div className="flex flex-row flex-wrap gap-2">
                <p className="hover:bg-red-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full">
                  {comics[3] ? comics[3].format : ""}
                </p>
                <button
                  onClick={() =>
                    handleClick`${Swal.fire({
                      title: `${comics[3].title}`,
                      text: `${comics[3].description}`,
                      imageUrl: `${comics[3].images[0].path}.${comics[3].images[0].extension}`,
                      imageWidth: 600,
                      imageHeight: 400,
                      imageAlt: "Custom image",
                    })}`
                  }
                  className="hover:bg-red-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"
                >
                  description
                </button>
              </div>
            </div>

            {/* <!-- Item 5 --> */}
            <div className="flex flex-col gap-1">
              {/* <!-- imagen--> */}
              <div className="bg-red-500">
                <img
                  src={
                    comics[4]
                      ? `${comics[4].images[0].path}.${comics[4].images[0].extension}`
                      : " "
                  }
                  className="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100"
                />
              </div>

              {/* <!-- titulo --> */}
              <h5 className="hover:text-red-500 text-gray-200 font-semibold">
                {comics[4] ? comics[4].title : ""}
              </h5>

              {/* <!-- precio --> */}
              <p className="hover:text-red-500 text-sm text-gray-400 -mt-1">
                {comics[4] ? comics[4].prices[0].price : ""}
              </p>

              {/* <!-- formato --> */}
              <div className="flex flex-row flex-wrap gap-2">
                <p className="hover:bg-red-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full">
                  {comics[4] ? comics[4].format : ""}
                </p>
                <button
                  onClick={() =>
                    handleClick`${Swal.fire({
                      title: `${comics[4].title}`,
                      text: `${comics[4].description}`,
                      imageUrl: `${comics[4].images[0].path}.${comics[4].images[0].extension}`,
                      imageWidth: 600,
                      imageHeight: 400,
                      imageAlt: "Custom image",
                    })}`
                  }
                  className="hover:bg-red-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"
                >
                  description
                </button>
              </div>
            </div>

            {/* <!-- Item 6 --> */}
            <div className="flex flex-col gap-1">
              {/* <!-- imagen --> */}
              <div className="bg-red-500">
                <img
                  src={
                    comics[5]
                      ? `${comics[5].images[0].path}.${comics[5].images[0].extension}`
                      : " "
                  }
                  className="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100"
                />
              </div>

              {/* <!--titulo --> */}
              <h5 className="hover:text-red-500 text-gray-200 font-semibold">
                {comics[5] ? comics[5].title : ""}
              </h5>

              {/* <!-- precio --> */}
              <p className="hover:text-red-500 text-sm text-gray-400 -mt-1">
                {comics[5] ? comics[5].prices[0].price : ""}
              </p>

              {/* <!-- formato --> */}
              <div className="flex flex-row flex-wrap gap-2">
                <p className="hover:bg-red-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full">
                  {comics[5] ? comics[5].format : ""}
                </p>
                <button
                  onClick={() =>
                    handleClick`${Swal.fire({
                      title: `${comics[5].title}`,
                      text: `${comics[5].description}`,
                      imageUrl: `${comics[5].images[0].path}.${comics[5].images[0].extension}`,
                      imageWidth: 600,
                      imageHeight: 400,
                      imageAlt: "Custom image",
                    })}`
                  }
                  className="hover:bg-red-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"
                >
                  description
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2>Cargando....</h2>
      )}
    </>
  );
};

export default Slide;
