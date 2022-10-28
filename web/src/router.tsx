// Importação de Bibliotecas
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importação de Componentes e Páginas
import TestPage from './pages/TestPage';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import Profile from './pages/Profile';
import Landing from './pages/Landing';
import TherapistPanel from './pages/TherapistPanel'

export default function Router() {
   return(
      <BrowserRouter>
         <Routes>
            {/* Rotas para cada página */}
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />}></Route>
            <Route path="/testPage" element={<TestPage />} />
            <Route path="/criar_conta" element={<CreateAccount />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path='/painel_de_controle' element={<TherapistPanel />} />
            <Route path='/painel_de_controle/:compId' element={<TherapistPanel />} />
         </Routes>
      </BrowserRouter>
   )
}