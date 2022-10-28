// Importação de Biblioteca
import React from 'react';
// import { useLocation } from 'react-router-dom';


export default function Profile() {
   // const location = useLocation();

   // console.log(location, " location hook")

   // const data = location.state?.cpf;
   // const datapass = location.state?.password;

   function profilePicHandle() {
      const imageStr = (document.getElementById('profpic') as HTMLInputElement).value;

      console.log(imageStr)

      document.getElementById('profile_pic')?.setAttribute('src', `${imageStr}`)
   }


   const samplePatient = {
      "id": 1,
      "name": "Daniel Eiji",
      "surname": "Hattori Hossaki",
      "cpf": "49307944806",
      "email": "daniel.hossaki@outlook.com",
      "password": "12345",
      "birthDate": "14/01/2000",
      "idProf": 1,
      "phoneNumber": "972254058",
      "cep": "04771050"
   }

   // const sampleProfessional = {
   //    "id": 2,
   //    "name": "Juniper",
   //    "surname": "Actias",
   //    "cpf": "32165498709",
   //    "email": "juniper.actias@gmail.com",
   //    "password": "junact123",
   //    "birthDate": "06/10/1983",
   //    "phone": "978746684",
   //    "cep": "94716040",
   //    "crm": "1123445667"
   // }

   // const sampleTask = {
   //    "id": 12,
   //    "patientId": 1,
   //    "name": "Entrevista de Emprego",
   //    "importance": 10,
   //    "date": "13/06/2023",
   //    "finished": false,
   //    "humor": 5,
   //    "notes": "Nervoso por conta da importância para minha carreira, mas nada que eu não consiga manejar.",
   //    "pulses": [13,14,10,4,6,2,1]
   // }




   return(
      <div className="container-md">
         <div className="container-md text-align-left">
            <img id="profile_pic" alt="Profile" style={{height:200}} className="start-0"/>
            <input type="file" name="profpic" id="profpic" className='col-auto form-control-lg start-0' accept='.jpeg,.jpg,.png' onChange={profilePicHandle} readOnly />
         </div>
         <br />
         <div className='g-3'>
            <form>
               <div className="mb-3">
                  <div className="row">
                     <label className='col-1 form-label'>ID</label>
                     <input type="text" name="id" id="id" className='col-4 form-control-sm' value={samplePatient.id} readOnly />
                  </div>
                  <div className="row">
                     <label className='col-1 form-label'>Nome</label>
                     <input type="text" name="nome" id="nome" className='col-4 form-control-sm' value={samplePatient.name} readOnly />
                     <label className='col-1 form-label'>Sobrenome</label>
                     <input type="text" name="sobrenome" id="sobrenome" className='col-4 form-control-sm' value={samplePatient.surname} readOnly />
                  </div>
                  <div className="row">
                     <label className='col-1 form-label'>CPF</label>
                     <input type="text" name="cpf" id="cpf" className='col-4 form-control-sm' value={samplePatient.cpf} readOnly />
                  </div>
                  <div className="row">
                     <label className='col-1 form-label'>E-Mail</label>
                     <input type="text" name="email" id="email" className='col-4 form-control-sm' value={samplePatient.email} readOnly />
                     <label className='col-1 form-label'>Senha</label>
                     <input type="password" name="password" id="password" className='col-4 form-control-sm' value={samplePatient.password} readOnly />
                  </div>
                  <div className="row">
                     <label className='col-1 form-label'>Data de Nascimento</label>
                     <input type="text" name="birthDate" id="birthDate" className='col-4 form-control-sm' value={samplePatient.birthDate} readOnly />
                  </div>
                  <div className="row">
                     <label className='col-1 form-label'>ID Prof</label>
                     <input type="text" name="idProf" id="idProf" className='col-4 form-control-sm' value={samplePatient.idProf} readOnly />
                  </div>
                  <div className="row">
                     <label className='col-1 form-label'>Número de Telefone</label>
                     <input type="text" name="numtel" id="numtel" className='col-4 form-control-sm' value={samplePatient.phoneNumber} readOnly />
                  </div>
                  <div className="row">
                     <label className='col-1 form-label'>CEP</label>
                     <input type="text" name="cep" id="cep" className='col-4 form-control-sm' value={samplePatient.cep} readOnly />
                  </div>
                  {/* <div className="row">
                     <label className='col-1 form-label'>CRM</label>
                     <input type="text" name="crm" id="crm" className='col-4' value={sampleProfessional.crm} readOnly />
                  </div>
                  <div className="row">
                     <label className='col-1 form-label'>Data</label>
                     <input type="text" name="data" id="data" className='col-4' value={sampleTask.date} readOnly />
                  </div>*/}
               </div> 
            </form>
         </div>
      </div>
   )
}