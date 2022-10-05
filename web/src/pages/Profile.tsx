// Importação de Biblioteca
import React from 'react';

// Importação de componentes
import Navbar from '../components/Navbar'

export default function Profile() {
   return(
      <div className="container">
         <Navbar />
         <table className='table table-striped table-hover'>
            <tr>
               <th>Nome</th>
               <th>Sobrenome</th>
               <th>CPF</th>
               <th>Senha</th>
            </tr>
            <tr>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
            </tr>
         </table>
      </div>
   )
}