// Importação de bibliotecas
import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import TopBarLanding from "../components/TopBarLanding";

export default function Login() {
   // Instância de estados de CPF e Senha
   const [cpf, setCpf] = useState('');
   const [password, setPassword] = useState('');

   // Função de troca de estado quando o campo "CPF" e o campo "Senha" mudarem de valor
   function handleChange() {
      setCpf((document.getElementById('cpf') as HTMLInputElement).value)
      setPassword((document.getElementById('senha') as HTMLInputElement).value)
   }

   function handleSubmit(event: FormEvent) {
      event.preventDefault();

      const loginData = new FormData();

      loginData.append('cpf', cpf);
      loginData.append('password', password);
   }
   // Renderização de componente
   return(
      <div id="container">
         <TopBarLanding />
         <div className="container">
            <h1>Tool Anxiety</h1>
         </div>
         <div className="container p-3"  style={{ border: '5px solid #1F6EFD', borderRadius: '1% 1%' }}>
            <form action="/testPage" id="loginForm">
               <div className="col my-3">
                  <label className="form-label">CPF: </label>
                  <input type="text" id="cpf" className="form-control text-center" name="cpf" onChange={handleChange}/>
               </div>
               <div className="col my-3">
                  <label className="form-label">Senha: </label>
                  <input type="password" id="senha" className="form-control text-center" name="senha" onChange={handleChange}/>
               </div>
            </form>

            {/* Sessão de botões */}
            <div className="col g-3 center">
               <Link to="/criar_conta" className="btn btn-primary mx-3" type="submit">
                  Criar Conta
               </Link>
               <Link className="btn btn-primary mx-3" to="/perfil" state={{cpf: cpf, password: password}}>
                  Login
               </Link>
               <br /><br />
            </div>
         </div>
      </div>
   );
}