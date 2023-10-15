
import './App.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Agregado from './components/pages/agregado/agregado';
import LoginPage from './components/pages/agregado/login';
import Layout from './components/Contenido/layout';
import RegisterPage from './components/pages/agregado/register'
import Account from './components/Contenido/account'
function App() {
 /*  const [token, setToken] = useState();
  
  if(!token) {
    return <Login setToken={setToken} />
  } */

 
  return(
    <>
  
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Agregado />} />
      <Route path="/login" element={<LoginPage />} />
     <Route path="/register" element={<RegisterPage />} />
     <Route path="/account" element={<Account />} />

      </Route>
      </Routes>
    </BrowserRouter>

    </>
  )


}

export default App;
