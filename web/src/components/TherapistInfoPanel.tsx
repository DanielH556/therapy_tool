// Importação de bibliotecas e componentes
import React from 'react';
import '../styles/Panel.css';
import Dashboard from './Dashboard';
import Profile from '../pages/Profile';
import { useParams } from 'react-router-dom';

// Configuração de tipagem de dados e variáveis
interface PanelProps {
   activePanel: string,
}

export default function TherapistInfoPanel(props: PanelProps) {
   const { idPac } = useParams()

   function handlePanel(currentPanel: string) {
      switch(currentPanel) {
         case 'dashboard':
            return <Dashboard />;
         case 'patient':
            return <Profile />;
      }
   }

   return(
      <div className='container-fluid'>         
         {
            (() => {
               return <div>{handlePanel(props.activePanel)}</div>
            })()
         }
      </div>
   );
}