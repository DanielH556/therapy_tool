import React from "react";
import { useLocation } from "react-router-dom";

export default function TestPage() {
   // Instância de função de localização de estados
   const location = useLocation();

   console.log(location, " useLocation Hook")

   const data = location.state?.cpf;
   const datapass = location.state?.password;

   console.log(data, " cpf")
   console.log(datapass, " password")

   // Renderização de Componente
   return(
      <div>
         <h1>Test Page</h1>
         <table>
            <tr>
               <th>cpf</th>
               <th>password</th>
            </tr>
            <tr>
               <td>{location.state?.cpf}</td>
               <td>{location.state?.password}</td>
            </tr>
         </table>
      </div>
   )
}