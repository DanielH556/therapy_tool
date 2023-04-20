import React, { useEffect, useState } from 'react';

import '../styles/TopBar.css'
import api from '../services/api';

interface Pacientes {
   idpac: string,
   nomepac: string,
   sobrepac: string
}

export default function TopBar() {
   const [pacientes, setPacientes] = useState<Pacientes>({
      idpac: '',
      nomepac: '',
      sobrepac: ''
   })
   const [patientInd, setPatientInd] = useState('')
   
   const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setPatientInd(event.target.value)
   }

   useEffect(() => {
      const fetchPatients = async () => {
         const patients = await api.get(`paciente`)
            .then(response => {
               console.log(`response.data.idpac: ${JSON.stringify(response.data[1].idpac)}`)
               setPacientes(response.data)
               Object.keys(response.data).forEach((key, index) => {
                  console.log(`${key}: ${JSON.stringify(response.data[key])}`)
               })
               return response.data
            })
            console.log(`patients: ${JSON.stringify(patients)}`)
            return patients
      }
      fetchPatients()
   }, [patientInd])


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
                  <select name="patients" id="patients" className='form-select' value={patientInd} onChange={handleChange}>
                     <option key={'f'} disabled>Escolher paciente</option>
                     {
                        Object.values(pacientes).map((key, index) => {
                           return <option key={ Number(key.idpac) } value={ Number(key.idpac) }>
                                 { key.nomepac } { key.sobrepac }
                              </option>
                        })
                     }
                  </select>
               </div>
            </div>
         </nav>
      </div>
   );
}