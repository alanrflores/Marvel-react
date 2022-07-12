import React, {useContext} from 'react'
import { UserContext } from '../../context/UserProvider'
import './navbar.css'

const Navbar = () => {
  const {user, logout} = useContext(UserContext);

  const handleLogout = async() => {
 try {
   await logout()
 } catch (error) {
   console.log(error)
 }
  }
  
  return (
    <>
    {
      user && (
        <nav className="navbar grid grid-cols-3 gap-4 space-x-3 px-2 py-2">
          <div className="divImagen"><img src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg' className='logoMarvel' /></div>
          <div className="col-span-2">
         
      {[
        ['Inicio', '/'],
        ['Personajes', '/app'],
        ['Sobre Nosotros', '/about'],
      ].map(([title, url]) => (
        <a key={title} href={url} className="ml-4 px-3 py-2 rounded-lg text-slate-400 font-medium hover:bg-red-800 hover:text-slate-900">{title}</a>
      ))}
      
       <button className='ml-16 px-3 py-2  rounded-lg text-slate-600  hover:bg-yellow-600 hover:text-slate-900' onClick={handleLogout}>
          Cerrar sesion
        </button>
      
      </div>
      <div>
      </div>
    </nav>

      ) 
    }
  </>
  )
}

export default Navbar