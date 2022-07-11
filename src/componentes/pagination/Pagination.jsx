import React, { useState, useEffect , useContext} from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { Global } from '../../context/GlobalContext';

const Pagination = ({pagina, setPagina, fetch}) => {
const {offsetOne, setOffsetOne} = useContext(Global)

const previouPage = ()=>{
    const lastP = Math.max(pagina - 1)
    setPagina(lastP)
    if(offsetOne > 0) {
        setOffsetOne(offsetOne - 30)
    }
    fetch(30, offsetOne - 30)
}

const nextPage = ()=>{
    const nextP = Math.min(pagina + 1)
    setPagina(nextP)
    setOffsetOne(offsetOne + 30)
    fetch(30, offsetOne + 30)
}



  return (
    <div className='container w-full'>
    <div className='flex justify-between'>
        <button className='m-2 p-1 border-b-4 border-red-800' onClick={previouPage} >
        <FaArrowAltCircleLeft className=''/>
        </button>
        <button className='m-2 p-1 border-b-4 border-red-800' onClick={nextPage} >
        <FaArrowAltCircleRight className='' />
        </button>
    </div>
    </div>
  )
}

export default Pagination