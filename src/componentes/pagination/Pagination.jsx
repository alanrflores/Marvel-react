import React, { useState } from 'react'

const Pagination = ({pagina, setPagina, fetch}) => {
const [offset, setOffset] = useState(0);

const lastPage = ()=>{
    const lastP = Math.max(pagina - 1)
    setPagina(lastP)
    if(offset > 0) {
        setOffset(offset - 30)
    }
    fetch(30, offset)
}

const nextPage = ()=>{
    const nextP = Math.min(pagina + 1)
    setPagina(nextP)
    setOffset(offset + 30)
    fetch(30, offset + 30)
}
  return (
    <div className='container w-full'>
    <div className='flex justify-center'>
        <button className='mx-4 w-24' onClick={lastPage} >
        👈 
        </button>
        <button className='mx-4 w-24' onClick={nextPage} >
        👉 
        </button>
    </div>
    </div>
  )
}

export default Pagination