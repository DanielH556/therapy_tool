// Importação de Biblioteca
import React, { useState, useEffect } from 'react';
import TopBarLanding from '../components/TopBarLanding';
import '../styles/Form.css';
import { useParams } from 'react-router-dom';
import api from '../services/api';

interface Patient {
   idpac: number,
   nomepac: string,
   sobrepac: string,
   cpf: string,
   idprof: number,
   email: string,
   senha: string,
   nasc: string,
   tel: string,
   cep: string
}

type PatientParams = {
   id: string,
}

export default function Profile() {
   const params = useParams<PatientParams>();
   const [patient, setPatient] = useState<Patient>({} as Patient); 
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      console.log('entering useEffect hook')
      const fetchPatient = async () => {
         try {
            console.log('starting fetch...')
            const response = await api.get(`paciente/${params.id}`)
            console.log(response)
            setPatient(response.data)
            setLoading(false)
         } catch (err) { console.error('Error fetching patient data: ', err) }
      }
      fetchPatient()
      console.log('exiting useEffect hook')
   }, [params.id]);

   console.log(patient, " patient state")
   if (loading) {
      return <p>Carregando...</p>
   }


   return(
      <div className="container-fluid p-0 m-0">
         <TopBarLanding />
         <h1 className='display-5 my-5'>Meu Perfil</h1>
         <div className='mx-2 d-flex justify-content-center p-4' style={{ border: '5px solid #1F6EFD', borderRadius: '2% 2%' }}>
            <form>
               <div className="mb-3">
                  <div className="row my-3 p-1">
                     <label className='col-1 form-label'>ID</label>
                     <input type="text" name="id" id="id" className='col-1 form-control-md text-center' value={patient.idpac} readOnly />
                     <label className='col-2 form-label'>Nome</label>
                     <input type="text" name="nome" id="nome" className='col-3 form-control-md text-center' value={patient.nomepac} readOnly />
                     <label className='col-2 form-label'>Sobrenome</label>
                     <input type="text" name="sobrenome" id="sobrenome" className='col-3 form-control-md text-center' value={patient.sobrepac} readOnly />
                  </div>
                  <div className="row my-3 p-1">
                     <label className='col-1 form-label'>CPF</label>
                     <input type="text" name="cpf" id="cpf" className='col-3 form-control-md text-center' value={patient.cpf} readOnly />
                     <label className='col-2 form-label'>E-Mail</label>
                     <input type="text" name="email" id="email" className='col-6 form-control-md text-center' value={patient.email} readOnly />
                  </div>
                  <div className="row p-1">
                     <label className='col-2 form-label'>Senha</label>
                     <input type="password" name="password" id="password" className='col-10 form-control-md text-center' value={patient.senha} readOnly />
                  </div>
                  <div className="row p-1">
                     <label className='col-3 form-label'>Data de Nascimento</label>
                     <input type="text" name="birthDate" id="birthDate" className='col-9 form-control-md' value={patient.nasc.split('T')[0]} readOnly />
                  </div>
                  <div className="row p-1" hidden>
                     <label className='col-2 form-label'>ID Prof</label>
                     <input type="text" name="idProf" id="idProf" className='col-1 form-control-md' value={patient.idprof} readOnly />
                  </div>
                  <div className="row p-1">
                     <label className='col-4 form-label'>Psicólogo / Terapeuta</label>
                     <input type="text" name="idProf" id="idProf" className='col-8 form-control-md text-center' placeholder='Nome do terapeuta' readOnly />
                  </div>
                  <div className="row p-1">
                     <label className='col-4 form-label'>Número de Telefone</label>
                     <input type="text" name="numtel" id="numtel" className='col-8 form-control-md text-center' value={patient.tel} readOnly />
                  </div>
                  <div className="row p-1">
                     <label className='col-2 form-label'>CEP</label>
                     <input type="text" name="cep" id="cep" className='col-10 form-control-md text-center' value={patient.cep} readOnly />
                  </div>
                  {/* <div className="row p-1">
                     <label className='col-2 form-label'>CRM</label>
                     <input type="text" name="crm" id="crm" className='col-4' value={sampleProfessional.crm} readOnly />
                  </div>
                  <div className="row p-1">
                     <label className='col-2 form-label'>Data</label>
                     <input type="text" name="data" id="data" className='col-4' value={sampleTask.date} readOnly />
                  </div>*/}
               </div> 
            </form>
         </div>
      </div>
   )
}