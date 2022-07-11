import React, {useContext} from 'react'
import { Link, useNavigate,  } from 'react-router-dom'
import marvel from '../../media/marvel.mov'
import  './cover.css'
import { Global } from '../../context/GlobalContext' 
const CoverVideo = () => {
const { loginWithGoogle } = useContext(Global);

const navegate = useNavigate();

const handleGoogle = async()=> {
  try {
  await loginWithGoogle();
  navegate('./app')  
  } catch (error) {
    console.log(error.message)
  }
}

  return (
    <div className='containerVideo'>
        <video className='video' src={marvel} autoPlay loop></video>
        <div className='containerTitulo'>
        <h1>Bienvenidos</h1> 
        <div className="marvel">
          <img src='https://pngimage.net/wp-content/uploads/2018/06/marvel-studios-logo-png-2.png' className='marvelStudios'/>
        </div>
       <div className='button'>
         <Link to={"./app"} >
           <button onClick={handleGoogle} className='bg-red-900 hover:bg-sky-800 p-2 btn'>
               Google register
           </button>
           </Link>
       </div>
       </div>
    </div>
  )
}

export default CoverVideo