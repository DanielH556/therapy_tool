// Importação de Bibliotecas
import React, { useEffect, useState } from 'react';
import { NativeBaseProvider, Button, Box, Input, Text, FormControl, Heading, Center, Stack, HStack, Checkbox } from 'native-base';
import { Alert, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
   const [cpf, setCpf] = useState('')
   const [password, setPassword] = useState('')
   const [role, setRole] = useState(false)
   const screenNavigator = useNavigation()
   const [val, setVal] = useState(false)

   useEffect(() => {
      if (val === true) {
         screenNavigator.navigate('Feedback', {})
      }
   })

   const handleRole = () => {
      if (role === false) {
         setRole(true)
      } else if (role === true) {
         setRole(false)
      }
   }

   const handleSubmit = () => {
      console.log(role)
      const loginData = async () => {
         await fetch(`http://20.226.102.6:443/login`, {
            method: "POST",
            headers: {
               Accept: "application/json",
               "Content-Type": "application/json"
            },
            body: JSON.stringify({
               cpf: cpf,
               password: password,
               role: role
            })
         })
            .then(response => response.json())
            .then(responseData => {
               console.log(JSON.stringify(`responseData: ${responseData}`))
               setVal(responseData)
               return responseData
            })
      }
      loginData()
   }

   return(
      <Center display={'flex'} alignItems='center' borderColor={'gray.600'} justifyContent='center'>
         <Heading>Fazer Login</Heading>
         <Box alignItems='center' width={'90%'}>
            <FormControl isRequired>
               <FormControl.Label>CPF: </FormControl.Label>
               <TextInput placeholder='Insira seu nº de CPF' onChangeText={setCpf}/>
            </FormControl>
            <FormControl isRequired>
               <FormControl.Label>Senha: </FormControl.Label>
               <TextInput placeholder='Insira sua senha' onChangeText={setPassword}  secureTextEntry/>
            </FormControl>
            <FormControl isRequired>
               <HStack space={6}>
                  <Checkbox value="Paciente" onChange={handleRole}>Sou paciente</Checkbox>
               </HStack>
            </FormControl>
         </Box>

         <Stack direction={'row'}>
            <Button height={'40%'} width={'20%'} margin={10} onPress={handleSubmit}>Entrar</Button>
            <Button height={'40%'} width={'20%'} margin={10}>Criar Conta</Button>
         </Stack>
      </Center>
   );
}