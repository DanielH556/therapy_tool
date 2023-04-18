//Importação de bibliotecas
import React, { ChangeEvent, FormEvent, useState } from 'react';
import '../styles/Form.css'
import TopBarLanding from '../components/TopBarLanding';
import api from '../services/api';

interface Patient {
   idpac: number;
   nome: string;
   sobrenome: string;
   cpf: string;
   cargo: number;
   email: string;
   senha: string;
   datanascimento: string;
   telefone: string;
   cep: string;
 }

export default function CreateAccount() {
   const [patient, setPatient] = useState<Patient>({
      idpac: 11,
      nome: '',
      sobrenome: '',
      cpf: '',
      cargo: 1,
      email: '',
      senha: '',
      datanascimento: '',
      telefone: '',
      cep: '',
    });
    const [cargo, setCargo] = useState('');

   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setPatient(prevPatient => ({
         ...prevPatient,
         [name]: value
      }))
   }

   const handleRole = (event: ChangeEvent<HTMLSelectElement>) => {
      const role = event.target;
      setCargo(role.value);
   }

   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (cargo === 'paciente') {  
         api.post('novoPaciente', patient)
         .then((response) => {
            console.log(response);
         })
         .catch((err) => {
            console.log(err)
         })
      } else if (cargo === 'terapeuta') {
         api.post('novoProfissional', patient)
         .then((response) => {
            console.log(response);
         })
         .catch((err) => {
            console.log(err)
         })
      }
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
                     <input type="text" name="nome" id="nome" className='form-control' value={patient.nome} onChange={handleInputChange} required/>
                  </div>
                  <div className='col'>
                     <label htmlFor="" className='form-label'>Sobrenome</label>
                     <input type="text" name="sobrenome" id="sobrenome" className='form-control' value={patient.sobrenome} onChange={handleInputChange} required/>
                  </div>
               </div>
               <div className='row my-3'>
                  <div className='col'>
                     <label htmlFor="" className='form-label'>CPF</label>
                     <input type="text" name="cpf" id="cpf" className='form-control' value={patient.cpf} onChange={handleInputChange} required />
                  </div>
                  <div className='col'>
                        <label htmlFor="" className='form-label'>Cargo</label>
                        <select name="cargo" id="cargo" className='form-select' onChange={handleRole} required>
                           <option value="paciente">Paciente</option>
                           <option value="terapeuta">Profissional</option>
                        </select>
                  </div>
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