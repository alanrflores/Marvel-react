import React from 'react'

const Navbar = () => {
  
  return (
    <nav className="flex sm:justify-center space-x-4 px-3 py-3">
  {[
    ['Inicio', '/'],
    ['Personajes', '/app'],
    ['Sobre Nosotros', '/about'],
  ].map(([title, url]) => (
    <a key={title} href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
  ))}
</nav>

  )
}

export default Navbar