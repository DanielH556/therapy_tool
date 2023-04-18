import { useEffect } from "react";
import { useState } from "react";
import api from "../services/api";

interface ImageData {
   data: ArrayBuffer;
   contentType: string;
 }

export default function TestPage() {    
    async function getImageData(url: string): Promise<ImageData> {
      const response = await api.get(url, {
        responseType: 'arraybuffer',
      });
    
      const contentType = response.headers['content-type'];
      const data = response.data;
    
      return { data, contentType };
    }
    
    function arrayBufferToBase64(buffer: ArrayBuffer): string {
      if (typeof TextEncoder === 'function') {
         return 'pascal do meu anal'
      } else {
      let binary = '';
      const bytes = new Uint8Array(buffer);
      const len = bytes.byteLength;
    
      for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      console.log('binary: ', binary)

      return btoa(binary)
    }}

    const [imageSrc, setImageSrc] = useState<string>();

  useEffect(() => {
    async function fetchData() {
      try {
        const imageData = await getImageData('wordcloud/1');
        const base64Image = arrayBufferToBase64(imageData.data);

        setImageSrc(`data:${imageData.contentType};base64,${base64Image}`);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

   // "http://20.226.102.6:443/wordcloud/1"
   // TO-DO Fazer mostrar o wordcloud direitinho
   // console.log(location, " useLocation Hook")
   
   // const data = location.state?.cpf;
   // const datapass = location.state?.password;

   // Renderização de Componente
   return(
      <div>
         <h1>Test Page</h1>
         <div>
         <img src={imageSrc} width={1600} height={800} alt="Example Image" />
         </div>
      </div>
   )
}