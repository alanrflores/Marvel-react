import React from 'react'
import './navbar.css'

const Navbar = () => {
  
  return (
    <nav className="navbar grid grid-cols-3 gap-4 space-x-3 px-2 py-2">
      <div class="divImagen"><img src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg' className='logoMarvel' /></div>
      <div class="col-span-2">
     
  {[
    ['Inicio', '/'],
    ['Personajes', '/app'],
    ['Sobre Nosotros', '/about'],
  ].map(([title, url]) => (
    <a key={title} href={url} className="ml-10 px-3 py-2 rounded-lg text-slate-400 font-medium hover:bg-red-800 hover:text-slate-900">{title}</a>
  ))}
  </div>
</nav>

  )
}

export default Navbar