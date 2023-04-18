import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import api from "../services/api";

interface Posts {
   userId: number,
   id: number,
   title: string,
   body: string
}
export default function TestPage() {
   // Instância de função de localização de estados
   const location = useLocation();
   const [posts, setPosts] = useState('');
   
   // TO-DO Fazer mostrar o wordcloud direitinho
   useEffect(() => {
      const fetchImage = async () => {
         const response = await api.get('/wordcloud/1', { responseType: 'arraybuffer' })
         const data = new Uint8Array(response.data);
         const blob = new Blob([data], { type: response.headers['content-type'] });
         const buffer = await blob.arrayBuffer();
         const bytes = new Uint8Array(buffer);
      }

      fetchImage()
   }, [])
   // console.log(location, " useLocation Hook")
   
   // const data = location.state?.cpf;
   // const datapass = location.state?.password;

   // Renderização de Componente
   return(
      <div>
         <h1>Test Page</h1>
         <div>
         {JSON.stringify(posts, null, 2)}
         <img src={posts} alt="aaaaaaaaaaaaaa" className="s" />
         </div>
      </div>
   )
}