import { useEffect } from "react";
import { useState } from "react";
import api from "../services/api";

export default function TestPage() {    
   const [imageSrc, setImageSrc] = useState<string>();

    useEffect(() => {
      async function fetchData() {
        try {
          const imageData = await fetch("http://20.226.102.6:8080/wordcloud?idpac=1")
            .then(response => setImageSrc(response.url))
          console.log(imageData)
          return imageData
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchData();
    }, []);

   // Renderização de Componente
   return(
      <div>
         <h1>Test Page</h1>
         <div>
            {imageSrc && (
               <img
                  src={imageSrc}
                  alt="Example"
               />
            )}
         </div>
      </div>
   )
}