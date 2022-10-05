//Importação de bibliotecas
import React from 'react';

// Importação de componentes
import Navbar from '../components/Navbar'

export default function CreateAccount() {
   return(
      <div>
         <Navbar />
         <div className="container-lg">
            <h1 className='display-2'>Criar Conta</h1>
         </div><br />

         {/* Formulário de Criação de Conta */}
         <div className='container-sm border'>
            <form action="criar-conta" method="post" className='form-create-account'>
               <div className='mb-3'>
                  <label htmlFor="" className='form-label'>Nome</label>
                  <input type="text" name="name" id="first-name" className='form-control' />
               </div>

               <div>
                  <label htmlFor="" className='form-label'>Sobrenome</label>
                  <input type="text" name="surname" id="surname" className='form-control' />
               </div>

               <div>
                  <label htmlFor="" className='form-label'>CPF</label>
                  <input type="text" name="cpf" id="cpf" className='form-control' />
               </div>

               <div>
                  <label htmlFor="" className='form-label'>E-Mail</label>
                  <input type="text" name="email" id="email" className='form-control' />
               </div>

               <div>
                  <label htmlFor="" className='form-label'>Senha</label>
                  <input type="password" name="password" id="password" className='form-control'/>
               </div>

               <div>
                  <label htmlFor="" className='form-label'>Data de Nascimento</label>
                  <input type="date" name="birthDate" id="birthDate" className='form-control' />
               </div>

               <div>
                  <label htmlFor="" className='form-label'>Celular</label>
                  <input type="text" name="phoneNumber" id="phoneNumber" className='form-control' />
               </div>

               <div>
                  <label htmlFor="" className='form-label'>CEP</label>
                  <input type="text" name="cep" id="cep" className='form-control' />
               </div><br />
                  
               {/* Botão de Envio de Formulário */}   
               <button type="submit" className='btn btn-primary'>Enviar</button><br /><br />
            </form>
         </div>
      </div>
   )
}