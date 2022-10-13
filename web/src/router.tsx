// Importação de Bibliotecas
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importação de Componentes e Páginas
import TestPage from './pages/TestPage';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import Profile from './pages/Profile';
import LoginForm from './pages/LoginForm';
import LoginForm2 from './pages/LoginForm2';
import Landing from './pages/Landing';

export default function Router() {
   return(
      <BrowserRouter>
         <Routes>
            {/* Rotas para cada página */}
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />}></Route>
            <Route path="/testPage" element={<TestPage />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logintest" element={<LoginForm />} />
            <Route path="/logintesttwo" element={<LoginForm2 />} />
         </Routes>
      </BrowserRouter>
   )
}