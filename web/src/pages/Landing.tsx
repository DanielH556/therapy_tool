import React from 'react';
import TopBarLanding from '../components/TopBarLanding';
import { SlUser, SlGraph, SlEye } from 'react-icons/sl'

export default function Landing() {
   return(
      <div id="container-fluid">
         <div className="container-fluid p-0 m-0">
            <TopBarLanding />
            <div className='row text-wrap justify-content-center' style={{ height: '23em' }}>
               <div style={{ border: '5px solid #1F6EFD', borderRadius: '10% 10%' }} className='container-fluid w-25 h-100 p-4 pb-3 text-wrap'>
                  <div className='mb-4'>
                     <SlGraph size={70} color='#1F6EFD'/>
                  </div>
                  <div>
                     <p>Como terapeuta, cheque como estão os seus pacientes por meio de um dashboard que permite a visualização rápida e prática de dados que podem auxiliar tanto o terapeuta quanto o paciente na busca de um tratamento eficaz e prático.</p>
                  </div>
               </div>

               <div style={{ border: '5px solid #1F6EFD', borderRadius: '10% 10%' }} className='container-fluid w-25 h-100 p-4 pb-3 text-wrap'>
                  <div className='mb-4'>
                     <SlUser size={70} color='#1F6EFD'/>
                  </div>
                  <div>
                     <p>Com o objetivo de auxiliar o terapeuta e o paciente em tratamentos de ansiedade, o <i>Tool Anxiety</i> foi desenvolvido como uma ferramenta de suporte. Por meio de coleta de dados e inteligência artificial, os dados registrados através de um botão serão analisados e tratados para que seja possível um tratamento mais próximo e preciso para cada paciente.</p>
                  </div>
               </div>

               <div style={{ border: '5px solid #1F6EFD', borderRadius: '10% 10%' }} className='container-fluid w-25 h-100 p-4 pb-3 text-wrap'>
                  <div className='mb-4'>
                     <SlEye size={70} color='#1F6EFD'/>
                  </div>
                  <div>
                     <p>Este app <b>não é, de forma alguma, uma forma ou método de autodiagnóstico e auto-tratamento para ansiedade.</b> As funcionalidades do app e do site são direcionadas apenas para pacientes que já estão sob tratamento com um profissional da saúde especializado.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}