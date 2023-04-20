import React, { useEffect, useState } from 'react';
import api from '../services/api';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface PatientLastWeek {
   data_feed: Array<number>;
   humor: Array<number>;
   feedback: Array<string>;
}

export default function Dashboard() {
   const [patientData, setPatientData] = useState<PatientLastWeek>({
      data_feed: [],
      humor: [],
      feedback: []
   })
   const [imageUrl, setImageUrl] = useState('')
   const { idpacParams } = useParams();

   function handleWordcloud() {
      const fetchWordcloud = async () => {
         try {
            const idpac = 1;
            const wCloud = await fetch(`http://20.226.102.6:8080/wordcloud?idpac=${idpac}`)
               .then(response => {
                  console.log(`response: ${JSON.stringify(response)}`)
                  setImageUrl(response.url)
               })
               console.log(`wCloud: ${wCloud}`)
               return wCloud
         } catch (err) {
            console.log(err)
         }
      }
      fetchWordcloud()
   }

   // Função de execução onLoad da janela e os dados que ela utiliza
   useEffect(() => {
      const fetchPatient = async () => {
         try {
            const idpac = 1;
            console.log(`idpacParams: ${idpacParams}`)
            const res = await axios.get(`http://20.226.102.6:8080/ultimosDias?idpac=${idpac}`) // execução de request GET
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
   }, [idpacParams])

   // async function fetchPatient() {
   //    try {
   //       const idpac = 1;
   //       console.log(`idpacParams: ${idpacParams}`)
   //       const res = await axios.get(`http://20.226.102.6:8080/ultimos_dias?idpac=${idpac}`) // execução de request GET
   //          .then(response => {
   //             console.log(`response: ${JSON.stringify(response)}`)
   //             const newData: PatientLastWeek = {
   //                data_feed: Object.values(response.data.data_feed),
   //                humor: Object.values(response.data.humor),
   //                feedback: Object.values(response.data.feedback)
   //             }
   //             setPatientData(newData)
   //             return response
   //          })
   //       console.log(`res: ${JSON.stringify(res)}`)
   //       return res
   //    } catch (err) {
   //       console.log(err)
   //    }
   // }

   return (
      <div className='container-fluid mt-3'>
         <div className='row'>
            <div className="col">
               <div className="panel" style={{ border: '5px solid #1F6EFD', borderRadius: '10% 10%', height: '400px' }}>
                  <h3>Wordcloud</h3>
                  <button className='btn btn-primary mx-3' onClick={handleWordcloud}>Mostrar Wordcloud</button>
                  <img id="wordcloudPlaceholder" src={imageUrl} alt='Wordcloud' className='w-100 my-2 h-75'></img>
               </div>
            </div>
            <div className="col">
               <div className="panel" style={{ border: '5px solid #1F6EFD', borderRadius: '10% 10%', height: '400px' }}>
                  <h4 className='mb-3'>Últimos 7 Dias</h4>
                  <button className='btn btn-primary mx-3'>Mostrar Semana</button>
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
      </div>
   )
}