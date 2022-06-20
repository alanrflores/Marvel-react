import React from 'react'
import marvel from '../../media/marvel.mov'
import  './cover.css'
const CoverVideo = () => {
  return (
    <div className='containerVideo'>
        <video className='video' src={marvel} autoPlay loop></video>
        <div className='containerTitulo'>
        <h1>Bienvenidos</h1>
       <p>| Marvel studios |</p>
       <div>
           <button>
               Mas Detalles
           </button>
       </div>
       </div>
    </div>
  )
}

export default CoverVideo