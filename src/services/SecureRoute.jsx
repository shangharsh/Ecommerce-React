import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const SecureRoute = () => {
    const auth = localStorage.getItem("loggedIn")
  return auth? <Outlet/> : <Navigate to={"/login"}/>
}

export default SecureRoute