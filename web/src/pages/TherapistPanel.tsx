import React from 'react';
import { useParams } from 'react-router-dom';

import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
import TherapistInfoPanel from '../components/TherapistInfoPanel';

export default function TherapistPanel() {
   const { compId } = useParams();

   return(
      <div>
         <TopBar />
         <div className='container-fluid'>
            <div className="row">
               <div className='col p-0'>
                  <SideBar />
               </div>
               <div className='col-10'>
                  {/* PARAMETRO - {compId} */}
                  <TherapistInfoPanel activePanel={compId!} />
               </div>
            </div>
         </div>
      </div>
   );
}