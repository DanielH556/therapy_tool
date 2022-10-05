// Importação de Bibliotecas
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
   return(
      <div className="container">
         <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
               <a className='navbar-brand' href='/'>Navbar</a>

               {/* Botão de Toggle do menu (aparece quando a tela for menor) */}
               <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>

               {/* Items da Barra de Navegação */}
               <div className="collapse navbar-collapse" id='navbarNav'>
                  <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                     <li className="nav-item">
                        <a href="/" className="nav-link active" aria-current="page">Home</a>
                     </li>
                     <li className="nav-item">
                        <a href="/" className="nav-link">Link 1</a>
                     </li>
                     <li className="nav-item">
                        <a href="/" className="nav-link">Link 2</a>
                     </li>
                     <li className="nav-item">
                        <a href="/" className="nav-link">Link 3</a>
                     </li>
                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Dropdown link 4
                        </a>
                        <ul className="dropdown-menu">
                           <li><a className="dropdown-item" href="/">SubAction 1</a></li>
                           <li><a className="dropdown-item" href="/">SubAction 2</a></li>
                           <li><a className="dropdown-item" href="/">SubAction 3</a></li>
                        </ul>
                     </li>
                  </ul>

                  {/* Botões de "Criar Conta" e "Login" */}
                  <div className='text-center'>
                     <Link to="/create-account" className='fw-semibold text-decoration-none px-5'>Criar Conta</Link>
                     <Link to="/" className='fw-semibold text-decoration-none'>Login</Link>
                  </div>
               </div>
            </div>
         </nav>
      </div>
   )
}