import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import '../styles/SideBar.css'

export default function SideMenu() {
   const [panel, setPanel] = useState(0);

   const menuItens = [
      { compId: 1, name: 'Início', navigate: '/' },
      { compId: 2, name: 'Dashboard', navigate: '/dashboard' },
      { compId: 3, name: 'Questionários', navigate: '/questionary' },
      { compId: 4, name: 'Configurações', navigate: '/settings' },
      { compId: 5, name: 'Encerrar Sessão', navigate: '/logout' }
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