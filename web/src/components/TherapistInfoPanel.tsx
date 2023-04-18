import React, { useEffect, useState } from 'react';
import '../styles/Panel.css';
import api from '../services/api';

interface PanelProps {
   activePanel: string
}

interface PatientLastWeek {
   data_feed: Array<number>;
   humor: Array<number>;
   feedback: Array<string>;
}

export default function TherapistInfoPanel(props: PanelProps) {
   const [patientData, setPatientData] = useState<PatientLastWeek>({
      data_feed: [],
      humor: [],
      feedback: []
   })

   function handlePanel(currentPanel: string) {
      switch(currentPanel) {
         case 'dashboard':
            return 'Dashboard';
         case 'settings':
            return 'Configurações';
         case 'logout':
            return 'Logout';
         case 'home':
            return 'Página Principal';
      }
   }

   useEffect(() => {
      const fetchPatient = async () => {
         try {
            const idpac = 1;
            const res = await api.get(`ultimosDias/${idpac}`)
               .then(response => {
                  console.log(`response: ${JSON.stringify(response)}`)
                  const newData: PatientLastWeek = {
                     data_feed: Object.values(response.data.data_feed),
                     humor: Object.values(response.data.humor),
                     feedback: Object.values(response.data.feedback)
                  }
                  setPatientData(newData)
                  return response
               })
            console.log(`res: ${JSON.stringify(res)}`)
            return res
         } catch (err) {
            console.log(err)
         }
      }

      fetchPatient()
   }, [])

   return(
      <div className='container-fluid'>
         <div className='row'>
            <div className="col">
               <div className="panel" style={{ border: '5px solid #1F6EFD', borderRadius: '10% 10%' }}>
                  <h3>Wordcloud</h3>
               </div>
            </div>
            <div className="col">
               <div className="panel" style={{ border: '5px solid #1F6EFD', borderRadius: '10% 10%' }}>
                  <h4 className='mb-3'>Últimos 7 Dias</h4>
                     <table>
                        <thead>
                           <tr>
                              <th className='row-1'>Data</th>
                              <th className='row-2'>Humor</th>
                              <th className='row-3'>Feedback</th>
                           </tr>
                        </thead>
                        <tbody id='tablebody'>
                           {
                              patientData.data_feed.map((patient, index) => (
                                 <tr>
                                    <td>{new Date(patient).toLocaleDateString()}</td>
                                    <td>{patientData.humor[index]}</td>
                                    <td>{patientData.feedback[index]}</td>
                                 </tr>
                              ))
                           }
                        </tbody>
                     </table>
               </div>
            </div>
         </div>
         <div className='row'>
            <div className="col">
               <div className="panel" style={{ border: '5px solid #1F6EFD', borderRadius: '10% 10%' }}>
                  <h3>Botão</h3>
               </div>
            </div>
            <div className="col">
               <div className="panel" style={{ border: '5px solid #1F6EFD', borderRadius: '10% 10%' }}>
                  <h3>Algo</h3>
               </div>
            </div>
         </div>

         {
            (() => {
               return <h1>{handlePanel(props.activePanel)}</h1>
            })()
         }
      </div>
   );
}