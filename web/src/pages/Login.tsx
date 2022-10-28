// Importação de bibliotecas
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
   // Instância de estados de CPF e Senha
   const [cpf, setCpf] = useState('');
   const [password, setPassword] = useState('');

   // Função de troca de estado quando o campo "CPF" e o campo "Senha" mudarem de valor
   function handleChange() {
      setCpf((document.getElementById('cpf') as HTMLInputElement).value)
      setPassword((document.getElementById('senha') as HTMLInputElement).value)
   }

   // Renderização de componente
   return(
      <div id="container">
         <div className="container">
            <h1>Logo pog</h1>
         </div>
         <div className="container border">
            <form action="/testPage" id="loginForm">
               <div className="col">
                  <label className="form-label">CPF: </label>
                  <input type="text" id="cpf" className="form-control" name="cpf" onChange={handleChange}/>
               </div>
               <div className="col">
                  <label className="form-label">Senha: </label>
                  <input type="password" id="senha" className="form-control" name="senha" onChange={handleChange}/>
               </div>
            </form>

            {/* Sessão de botões */}
            <div className="col g-3">
               <Link to="/create-account" className="btn btn-primary" type="submit">
                  Criar Conta
               </Link>
               <Link className="btn btn-primary" to="/profile" state={{cpf: cpf, password: password}}>
                  Login
               </Link>
               <br /><br />
            </div>
         </div>
      </div>
   );
}