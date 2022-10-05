import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TestPage from './pages/TestPage';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';

export default function Router() {
   return(
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/testPage" element={<TestPage />} />
            <Route path="/create-account" element={<CreateAccount />} />
         </Routes>
      </BrowserRouter>
   )
}