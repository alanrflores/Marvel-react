import React, {useContext} from 'react'
import { Navigate } from 'react-router-dom';
import { Global } from '../../context/GlobalContext'
import Loading from '../loading/Loading'

const RequireAuth = ({children}) => {
    const {personajes, loading} = useContext(Global);

    if(loading) {
        return <Loading/>
    }
    if(!personajes) {
        return <Navigate to='/app'/>
    }
  return (
    <>{children}</>
  )
}

export default RequireAuth