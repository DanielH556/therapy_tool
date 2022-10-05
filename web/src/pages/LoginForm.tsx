import React, { useState } from 'react';

export default function LoginForm() {
   // ---------------------------------------- Login Form | Attempt 1 --------------------------
   // Declaração de Estados
   const [errorMessages, setErrorMessages] = useState({ name: '', message: '' });
   const [isSubmitted, setIsSubmitted] = useState(false);

   // User login info
   const database = [
      {
         cpf: '49307944806',
         password: 'pass1'
      },
      {
         cpf: '03989789805',
         password: 'pass2'
      }
   ];

   const errors = {
      cpf: 'Invalid CPF',
      pass: 'Invalid Password'
   };
   
   const handleSubmit = (event: { preventDefault: () => void; }) => {
      // Prevent page reload
      event.preventDefault();

      var { cpf, pass } = document.forms[0];

      // Find user login info
      const userData = database.find((user) => user.cpf === cpf.value);

      // Compare user info
      if (userData) {
         if (userData.password !== pass.value) {
            // Invalid password
            setErrorMessages({ name: 'pass', message: errors.pass });
         } else {
            setIsSubmitted(true);
         }
      } else {
         // Username not found
         setErrorMessages({ name: 'cpf', message: errors.cpf })
      }
   };

   // JSX Code for error message
   const renderErrorMessage = (name: any) => 
   name === errorMessages.name && (
      <div className="error">
         {errorMessages.message}
      </div>
   )

   // JSX code for login form
   const renderForm = (
      <div className="form">
         <form onSubmit={handleSubmit}>
            <div className="input-container">
               <label>CPF </label>
               <input type="text" name="cpf" id="cpf" required />
               {renderErrorMessage("cpf")}
            </div>
            <div className="input-container">
               <label>Password </label>
               <input type="password" name="pass" id="password" required />
               {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
               <input type="submit" />
            </div>
         </form>
      </div>
   )

// https://contactmentor.com/login-form-react-js-code/

   // ------------------------------------------------------------------------------------------
   return(
      <div className="app">
         <div className="login-f">
            <div className="title">Sign In</div>
            {isSubmitted ? <div>CPF {} is logged in</div>: renderForm}
         </div>
      </div>
   )
}