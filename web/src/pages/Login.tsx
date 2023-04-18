// Importação de bibliotecas
import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopBarLanding from "../components/TopBarLanding";
import api from "../services/api";

export default function Login() {
   // Instância de estados de CPF e Senha
   const [cpf, setCpf] = useState('');
   const [password, setPassword] = useState('');
   const [isValid, setIsValid] = useState(false)
   const navigate = useNavigate();

   // Função de troca de estado quando o campo "CPF" e o campo "Senha" mudarem de valor
   function handleChange() {
      setCpf((document.getElementById('cpf') as HTMLInputElement).value)
      setPassword((document.getElementById('senha') as HTMLInputElement).value)
   }

   function handleSubmit(event: FormEvent) {
      event.preventDefault();

      const loginData = async () => {
         console.log(`CPF e Senha: ${cpf} | ${password}`)
         const checkData = await api.get(`paciente/${cpf}/${password}`)
            .then(response => {
               console.log(`response: ${JSON.stringify(response)}`)
               return response.data
            })
            
            if (!checkData) {
               alert('Dados inválidos')
            } else {
               setIsValid(true);
               navigate(`/perfil/${checkData.idpac}`)
            }
         }
         loginData()
   }
   // Renderização de componente
   return(
      <div id="container">
         <TopBarLanding />
         <div className="container">
            <h1>Tool Anxiety</h1>
         </div>
         <div className="container p-3"  style={{ border: '5px solid #1F6EFD', borderRadius: '1% 1%' }}>
            <form action="" id="loginForm" onSubmit={handleSubmit}>
               <div className="col my-3">
                  <label className="form-label">CPF: </label>
                  <input type="text" id="cpf" className="form-control text-center" name="cpf" onChange={handleChange}/>
               </div>
               <div className="col my-3">
                  <label className="form-label">Senha: </label>
                  <input type="password" id="senha" className="form-control text-center" name="senha" onChange={handleChange}/>
               </div>
            {/* Sessão de botões */}
            <div className="col g-3 center">
               <Link className="btn btn-primary mx-3" to='/criar_conta'>
                  Criar Conta
               </Link>
               <button className="btn btn-primary mx-3" type="submit">
                  Login
               </button>
               <br /><br />
            </div>
            </form>

         </div>
      </div>
   );
}