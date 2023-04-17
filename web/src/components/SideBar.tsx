import React from 'react';
// import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/SideBar.css'

export default function SideMenu() {
   // const [panel, setPanel] = useState(0);

   const menuItens = [
      { compId: 'home', name: 'Início', navigate: '/' },
      { compId: 'dashboard', name: 'Dashboard', navigate: '/dashboard' },
      { compId: 'questionarios', name: 'Questionários', navigate: '/questionary' },
      { compId: 'settings', name: 'Configurações', navigate: '/settings' },
      { compId: 'logout', name: 'Encerrar Sessão', navigate: '/logout' }
   ];

   return(
      <div className="container-fluid bg-dark" style={{height: '100vh'}}>
         <ul className='list-group list-group-flush bg-transparent'>
            {
               menuItens.map((key, index) => {
                  return <div className='itemLink'>
                     <Link className="list-group-item bg-transparent text-white p-3" to={`/painel_de_controle/${key.compId}`} >{ key.name }</Link>
                  </div> 
               })
            }
         </ul>
      </div>
   );
}