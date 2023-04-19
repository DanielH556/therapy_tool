import React from 'react';
import { Center, Heading, FormControl, Input, Button, Box, Text, View, Select, TextArea } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default function Feedback() {
   return(
      <View>
         <ScrollView>
            <Heading marginLeft={30}>Evento</Heading>
            <FormControl marginLeft={10} marginBottom={3}>
               <Box width={300}>
                  <FormControl.Label>Data</FormControl.Label>
                  <Input placeholder='Data' size={'lg'} isDisabled/>
               </Box>
            </FormControl>
            <FormControl marginLeft={10} marginBottom={3}>
               <Box width={300}>
                  <FormControl.Label>Humor</FormControl.Label>
                  <Select minWidth={200} accessibilityLabel='Escolha o nível de humor' placeholder='Escolha o nível de humor' size={'lg'}>
                     <Select.Item label='Ótimo' value='5' />
                     <Select.Item label='Bom' value='4' />
                     <Select.Item label='Ok' value='3' />
                     <Select.Item label='Ruim' value='2' />
                     <Select.Item label='Péssimo' value='1' /> 
                  </Select>
               </Box>
            </FormControl>
            <FormControl marginLeft={10} marginBottom={3}>
               <Box width={300}>
                  <FormControl.Label>Descrição</FormControl.Label>
                  <TextArea h={20} placeholder='O que aconteceu?' w={'100%'} maxW={300} autoCompleteType={undefined} />
               </Box>
            </FormControl>
            <Box width={'100%'}>
               <Button margin={10}>Enviar</Button>
            </Box>
         </ScrollView>
      </View>
   )
}