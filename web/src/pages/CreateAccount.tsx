//Importação de bibliotecas
import React from 'react';
import '../styles/Form.css'
import TopBarLanding from '../components/TopBarLanding';

export default function CreateAccount() {
   return(
      <div>
         <TopBarLanding />
         <div className="container-lg">
            <h1 className='display-4'>Criar Conta</h1>
         </div><br />

         {/* Formulário de Criação de Conta */}
         <div className='container-sm p-3' style={{ border: '5px solid #1F6EFD', borderRadius: '2% 2%' }}>
            <form action="criar-conta" method="post" className='form-create-account'>
               <div className='row my-3'>
                  <div className='col'>
                     <label htmlFor="" className='form-label'>Nome</label>
                     <input type="text" name="name" id="first-name" className='form-control' required/>
                  </div>
                  <div className='col'>
                     <label htmlFor="" className='form-label'>Sobrenome</label>
                     <input type="text" name="surname" id="surname" className='form-control' required/>
                  </div>
               </div>
               <div className='my-3'>
                  <label htmlFor="" className='form-label'>CPF</label>
                  <input type="text" name="cpf" id="cpf" className='form-control' required />
               </div>

               <div className='my-3'>
                  <label htmlFor="" className='form-label'>E-Mail</label>
                  <input type="text" name="email" id="email" className='form-control' required />
               </div>

               <div className='row my-3'>
                  <div className='col'>
                     <label htmlFor="" className='form-label'>Senha</label>
                     <input type="password" name="password" id="password" className='form-control' required/>
                  </div>
                  <div className='col'>
                     <label htmlFor="" className='form-label'>Confirmar Senha</label>
                     <input type="password" name="confirm_password" id="confirm_password" className='form-control' required/>
                  </div>
               </div>

               <div className='my-3'>
                  <label htmlFor="" className='form-label'>Data de Nascimento</label>
                  <input type="date" name="birthDate" id="birthDate" className='form-control' required />
               </div>

               <div className='my-3'>
                  <label htmlFor="" className='form-label'>Celular</label>
                  <input type="text" name="phoneNumber" id="phoneNumber" className='form-control' required />
               </div>

               <div className='my-3'>
                  <label htmlFor="" className='form-label'>CEP</label>
                  <input type="text" name="cep" id="cep" className='form-control' required />
               </div><br />
                  
               {/* Botão de Envio de Formulário */}   
               <button type="submit" className='btn btn-primary'>Enviar</button><br /><br />
            </form>
         </div>
      </div>
   )
}