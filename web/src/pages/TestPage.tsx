import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import { AppService } from "../services/app.service";

interface Posts {
   userId: number,
   id: number,
   title: string,
   body: string
}
export default function TestPage() {
   // Instância de função de localização de estados
   const location = useLocation();
   const [posts, setPosts] = useState([]);
   
   // console.log(location, " useLocation Hook")
   
   // const data = location.state?.cpf;
   // const datapass = location.state?.password;
   
   useEffect(() => {
      const appService = new AppService();
      const response = appService.getPosts()
      response
         .then(res => setPosts(res))
         .catch(err => console.log(err))
   }, [])

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
         <div>
            {/* <p>{ posts?.userId }</p>
            <p>{ posts?.id }</p>
            <p>{ posts?.title }</p>
            <p>{ posts?.body }</p> */}
            {
               posts?.map((post: Posts, index) => {
                  return <p key={post.id}>{ post.body }</p>
               })
            }
         </div>
      </div>
   )
}