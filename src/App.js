import React from "react";
import './App.css'

import AppRoutes from './routes'

import { AuthProvider } from "./context/AuthContext";

import InfoProvider from "./context/InfoContext";

function App() {
  return (
    <AuthProvider>
      <InfoProvider> 
        <AppRoutes />
      </InfoProvider> 
    </AuthProvider>
  );
}

export default App;
