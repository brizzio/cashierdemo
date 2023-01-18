import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { Context } from './context/AuthContext'
import useAuth from './context/hooks/useAuth';

import Login from './pageComponents/Login'
import Logindemo from './pageComponents/Logindemo';
import Users from './pageComponents/Users'
import Home from './pageComponents/Home';
import Pin from './pageComponents/Pin';



const ProtectedRoute = ({ 
  user,
  redirectPath = '/login',
  children }) => {

  const {loading, authenticated } = useAuth()

  console.log('protected auth', authenticated)

  if(loading){
    return(
        <h1>Loading...</h1>
    )
}

  if (!authenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

function AppRoutes() {
  return (
  <Router>
    <Routes>
      <Route path="/login" element={<Logindemo/>} />
      <Route element={<ProtectedRoute/>}>
        <Route index element={<Home/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/suspend" element={<Pin/>} />
      </Route>
    </Routes> 
  </Router>
    
  )
}

export default AppRoutes