import React, { useState, ChangeEvent } from 'react';
import { Center, Heading, FormControl, Input, Button, Box, Text, View, Select, TextArea, NativeBaseProviderProps } from 'native-base';
import { TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import api from '../services/api';

interface Feedback {
   data_feed: string,
   idpac: number,
   humor: number,
   feedback: string
}

export default function Feedback() {
   const [dataFeed, setDataFeed] = useState<Feedback>({
      data_feed: '',
      idpac: 1,
      humor: 1,
      feedback: ''
   })
   const [data, setData] = useState('')
   const [humor, setHumor] = useState(0)
   const [humorString, setHumorString] = useState('')
   const [feedback, setFeedback] = useState('')

   function handleChange() {
      let convertedHumor

      switch (humorString) {
         case '5':
            convertedHumor = parseInt(humorString, 5)
            setHumor(5)
            break
         case '4':
            convertedHumor = parseInt(humorString, 4)
            setHumor(4) 
            break
         case '3':
            convertedHumor = parseInt(humorString, 3)
            setHumor(3) 
            break
         case '2':
            convertedHumor = parseInt(humorString, 2)
            setHumor(2) 
            break
         case '1':
            convertedHumor = parseInt(humorString, 1)
            setHumor(1) 
            break
      }
   }

   const handleSubmit = async () => {
      const newData = {
         data_feed: data,
         idpac: 1,
         humor: humor,
         feedback: 'sadjflasjfklsadjfladsjflsdajfsadjkf',
      }
      console.log(`newData: ${JSON.stringify(newData)}`)
      await fetch(`http://20.226.102.6:443/novoFeedback`, {
         method: "POST",
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
         },
         body: JSON.stringify(newData)
      })
      .then((responseData) => responseData.json())
      .then(response => {
         console.log(JSON.stringify(response))
      })
   }

   return(
      <View>
         <ScrollView>
            <Heading marginLeft={30}>Evento</Heading>
            <FormControl marginLeft={10} marginBottom={3}>
               <Box width={300}>
                  <FormControl.Label>Data</FormControl.Label>
                  <Input placeholder='Data' size={'lg'} onChangeText={setData}/>
               </Box>
            </FormControl>
            <FormControl marginLeft={10} marginBottom={3}>
               <Box width={300}>
                  <FormControl.Label>Humor</FormControl.Label>
                  <Select minWidth={200} accessibilityLabel='Escolha o nível de humor' placeholder='Escolha o nível de humor' size={'lg'} onValueChange={setHumorString}>
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
                  <TextInput h={20} placeholder='O que aconteceu?' w={'100%'} maxW={300} autoCompleteType={undefined}/>
               </Box>
            </FormControl>
            <Box width={'100%'}>
               <Button margin={10} onPress={handleSubmit}>Enviar</Button>
            </Box>
         </ScrollView>
      </View>
   )
}