import React, {useContext} from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../context/UserProvider'

const RequireAuth = ({children}) => {
    const {user} = useContext(UserContext);

    if(!user) {
        return <Navigate to='/'/>
    }
  return (
    <>{children}</>
  )
}

export default RequireAuth