import React from 'react';

export default function TopBarLanding() {
   return(
      <div className="container-fluid px-0 mx-0 mb-5">
         <div className="container-fluid bg-primary">
            <nav className='navbar navbar-expand-lg'>
               <div className="container-md">
                  <a className='navbar-brand text-white mx-5' href='/'>Tool Anxiety</a>

                  <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id='navbarNav'>
                     <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className="nav-item">
                           <a href="/" className="nav-link active text-white mx-2" aria-current="page">Página Principal</a>
                        </li>
                        <li className="nav-item">
                           <a href="/perfil" className="nav-link active text-white mx-2" aria-current="page">Sobre o App</a>
                        </li>
                     </ul>

                     <div className="navbar-nav">
                        <li className="nav-item">
                           <a href="/login" className='nav-link text-white' aria-current='page'>Entrar</a>
                        </li>
                        <li className="nav-item">
                           <a href="/criar_conta" className='nav-link text-white' aria-current='page'>Criar Conta</a>
                        </li>
                     </div>
                  </div>
               </div>
            </nav>
         </div>
      </div>
   )
}