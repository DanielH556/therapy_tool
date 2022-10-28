import React from 'react';
import { Box, Text, Heading, Input, Slider, TextArea } from 'native-base';

export default function DisplayTask() {
   return(
      <Box>
         <Text>Display Task here</Text>
         <Heading>Título</Heading>
         <Input isReadOnly placeholder='Título da Tarefa' w={"100%"} mb={5}></Input>
         <Heading>Nível de Importância</Heading>
         <Slider colorScheme={'cyan'} defaultValue={0} step={1} minValue={0} maxValue={10} w={"100%"} maxW={400} >
            <Slider.Track>
               <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
         </Slider>
         <Text textAlign={'center'} mb={5}>Importância - Whatever</Text>
         <Heading>Data</Heading>
         <Heading>Status da Tarefa</Heading>
         <Text>Inserir bolinha de status aqui</Text>
         <Heading>Humor</Heading>
         <Text>Select de humor aqui</Text>
         <Heading>Notas</Heading>
         <TextArea autoCompleteType={undefined} placeholder={'Notas Gerais'}></TextArea>
      </Box>
   );
}