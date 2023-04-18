//Importação de bibliotecas
import React, { ChangeEvent, FormEvent, useState } from 'react';
import '../styles/Form.css'
import TopBarLanding from '../components/TopBarLanding';
import api from '../services/api';

interface Patient {
   idpac: number;
   nomepaciente: string;
   sobrepaciente: string;
   cpf: string;
   email: string;
   senha: string;
   datanascimento: string;
   telefone: string;
   cep: string;
 }

export default function CreateAccount() {
   const [patient, setPatient] = useState<Patient>({
      idpac: 11,
      nomepaciente: '',
      sobrepaciente: '',
      cpf: '',
      email: '',
      senha: '',
      datanascimento: '',
      telefone: '',
      cep: '',
    });

   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setPatient(prevPatient => ({
         ...prevPatient,
         [name]: value
      }))
   }

   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      api.post('novoPaciente', patient)
         .then((response) => {
            console.log(response);
         })
         .catch((err) => {
            console.log(err)
         })
   }
      
   return(
      <div>
         <TopBarLanding />
         <div className="container-lg">
            <h1 className='display-4'>Criar Conta</h1>
         </div><br />

         {/* Formulário de Criação de Conta */}
         <div className='container-sm p-3' style={{ border: '5px solid #1F6EFD', borderRadius: '2% 2%' }}>
            <form action="criar-conta" method="post" className='form-create-account' onSubmit={handleSubmit}>
               <div className='row my-3'>
                  <div className='col'>
                     <label htmlFor="" className='form-label'>Nome</label>
                     <input type="text" name="nomepaciente" id="nomepaciente" className='form-control' value={patient.nomepaciente} onChange={handleInputChange} required/>
                  </div>
                  <div className='col'>
                     <label htmlFor="" className='form-label'>Sobrenome</label>
                     <input type="text" name="sobrepaciente" id="sobrepaciente" className='form-control' value={patient.sobrepaciente} onChange={handleInputChange} required/>
                  </div>
               </div>
               <div className='my-3'>
                  <label htmlFor="" className='form-label'>CPF</label>
                  <input type="text" name="cpf" id="cpf" className='form-control' value={patient.cpf} onChange={handleInputChange} required />
               </div>

               <div className='my-3'>
                  <label htmlFor="" className='form-label'>E-Mail</label>
                  <input type="text" name="email" id="email" className='form-control' value={patient.email} onChange={handleInputChange} required />
               </div>

               <div className='row my-3'>
                  <div className='col'>
                     <label htmlFor="" className='form-label'>Senha</label>
                     <input type="password" name="senha" id="senha" className='form-control' value={patient.senha} onChange={handleInputChange} required/>
                  </div>
                  <div className='col'>
                     <label htmlFor="" className='form-label'>Confirmar Senha</label>
                     <input type="password" name="confirm_password" id="confirm_password" className='form-control' required/>
                  </div>
               </div>

               <div className='my-3'>
                  <label htmlFor="" className='form-label'>Data de Nascimento</label>
                  <input type="date" name="datanascimento" id="datanascimento" className='form-control' value={patient.datanascimento} onChange={handleInputChange} required />
               </div>

               <div className='my-3'>
                  <label htmlFor="" className='form-label'>Celular</label>
                  <input type="text" name="telefone" id="telefone" className='form-control' value={patient.telefone} onChange={handleInputChange} required />
               </div>

               <div className='my-3'>
                  <label htmlFor="" className='form-label'>CEP</label>
                  <input type="text" name="cep" id="cep" className='form-control' value={patient.cep} onChange={handleInputChange} required />
               </div><br />
                  
               {/* Botão de Envio de Formulário */}   
               <button type="submit" className='btn btn-primary'>Enviar</button><br /><br />
            </form>
         </div>
      </div>
   )
}