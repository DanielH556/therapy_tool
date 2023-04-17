import React from 'react';

import '../styles/TopBar.css'

export default function TopBar() {
   const patients = [
      { id: 1, name: 'Daniel Eiji Hattori Hossaki' },
      { id: 2, name: 'Ryan Vieira de Queiroz' },
      { id: 3, name: 'Thiago Cabral Lemos' },
      { id: 4, name: 'Nayron José dos Santos' },
      { id: 5, name: 'Paulo Silveira' }
   ]

   return(
      <div className="container-fluid bg-primary">
         <nav className='navbar navbar-expand-lg'>
            <div className="container-md">
               <a className='navbar-brand text-white' href='/'>Tool Anxiety</a>

               <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>

               <div className="collapse navbar-collapse" id='navbarNav'>
                  <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                     <li className="nav-item">
                        <a href="/" className="nav-link active text-white" aria-current="page">Página Principal</a>
                     </li>
                  </ul>
               </div>

               <div className="text-center">
                  <select name="patients" id="patients" className='form-select'>
                     <option disabled selected>Escolher paciente</option>
                     {
                        patients.map((key, index) => {
                           return <option value={ key.id }>{ key.name }</option>
                        })
                     }
                  </select>
               </div>
            </div>
         </nav>
      </div>
   );
}