import React from 'react';

interface PanelProps {
   activePanel: string
}

export default function TherapistInfoPanel(props: PanelProps) {
   function handlePanel(currentPanel: string) {
      switch(currentPanel) {
         case 'dashboard':
            return 'Dashboard';
         case 'questionarios':
            return 'Questionários';
         case 'settings':
            return 'Configurações';
         case 'logout':
            return 'Logout';
         case 'home':
            return 'Página Principal';
      }
   }

   return(
      <div className='container-fluid'>
         {
            (() => {
               return <h1>{handlePanel(props.activePanel)}</h1>
            })()
         }
      </div>
   );
}