// Importação de Bibliotecas
import React from 'react';
import { Box, Text, VStack, HStack, FormControl, Input, Slider, Button } from 'native-base';
import { useState } from 'react';

export default function CreateTask() {
   // Controle de estados
   const [importance, setImportance] = useState(0);

   // Mudança de Label de Nível de Importância
   function handleSLider(level: number) {
      setImportance(Math.floor(level))
   }

   return(
      <Box p={5}>
         <VStack>
            <FormControl isRequired mb={5}>
               <FormControl.Label>Título</FormControl.Label>
               <Input type='text' placeholder='Título da Tarefa' />
               {/* <FormControl isInvalid>
                  <FormControl.ErrorMessage>Preencha com um título para a tarefa.</FormControl.ErrorMessage>
               </FormControl> */}
            </FormControl>

            <FormControl isRequired mb={5}>
               <FormControl.Label>Importância</FormControl.Label>
               <Slider colorScheme={'cyan'} defaultValue={0} step={1} minValue={0} maxValue={10} w={"100%"} maxW={400} onChange={level => handleSLider(level)} >
                  <Slider.Track>
                     <Slider.FilledTrack />
                  </Slider.Track>
                  <Slider.Thumb />
               </Slider>
               <Text textAlign={'center'}>Importância - {importance}</Text>
            </FormControl>

            <FormControl isRequired mb={5}>

            </FormControl>

            <Button>Criar Tarefa</Button>
         </VStack>
      </Box>
   )
}