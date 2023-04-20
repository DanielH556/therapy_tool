import React, { useState } from 'react';
import { Center, Heading, FormControl, Input, Stack, Button, Box, Select, Pressable, Icon } from 'native-base';
import { TextInput } from 'react-native'
import api from '../services/api';

export default function CreateAccount() {
   const [url, setUrl] = useState('')
   const [nome, setNome] = useState('')
   const [sobrenome, setSobrenome] = useState('')
   const [cpf, setCpf] = useState('')
   const [cargo, setCargo] = useState('')
   const [email, setEmail] = useState('')
   const [senha, setSenha] = useState('')
   const [nasc, setNasc] = useState('')
   const [cep, setCep] = useState('')
   const [telefone, setTelefone] = useState('')

   const handleSubmit = async () => {
      let newData = {}

      try {
         if (cargo === 'paciente') {
            newData = {
               nome: nome,
               sobrenome: sobrenome,
               cpf: cpf,
               email: email,
               senha: senha,
               idprofissional: 1,
               datanascimento: nasc,
               cep: cep
            }
            setUrl('novoPaciente')
         } else if (cargo === 'terapeuta') {
            newData = {
               nome: nome,
               sobrenome: sobrenome,
               cpf: cpf,
               email: email,
               senha: senha,
               datanascimento: nasc
            }
            setUrl('novoProfissional')
         };

         await fetch(`http://20.226.102.6:443/${url}`, {
            method: "POST",
            headers: {
               Accept: "application/json",
               "Content-Type": "application/json",
            },
            body: JSON.stringify(newData),
         })
         .then((response) => response.json())
         .then(responseData => {
            console.log(`responseData: ${JSON.stringify(responseData)}`)
         })
      } catch (err) {
         console.log(err)
      }

   }

   return(
      <Center display={'flex'} alignItems='center' borderColor={'gray.600'} justifyContent='center'>
         <Heading>Criar Conta</Heading>
         <Box alignItems='center' width={'90%'}>
            <FormControl isRequired>
               <FormControl.Label>Nome</FormControl.Label>
               <TextInput placeholder='Insira seu Nome' onChangeText={setNome}></TextInput>
            </FormControl>
            <FormControl isRequired>
               <FormControl.Label>Sobrenome</FormControl.Label>
               <TextInput placeholder='Insira seu Sobrenome' onChangeText={setSobrenome}></TextInput>
            </FormControl>
            <FormControl isRequired>
               <FormControl.Label>CPF</FormControl.Label>
               <TextInput placeholder='Insira seu CPF' onChangeText={setCpf}></TextInput>
            </FormControl>
            <FormControl isRequired>
               <FormControl.Label>Cargo</FormControl.Label>
               <Select minWidth={200} accessibilityLabel='Escolha o tipo de usuário' placeholder='Escolha o tipo de usuário' onValueChange={setCargo}>
                  <Select.Item label='Paciente' value='paciente' />
                  <Select.Item label='Terapeuta' value='terapeuta' />
               </Select>
            </FormControl>
            <FormControl isRequired>
               <FormControl.Label>E-Mail</FormControl.Label>
               <TextInput placeholder='Insira seu E-mail' onChangeText={setEmail}></TextInput>
            </FormControl>
            <FormControl isRequired>
               <FormControl.Label>Senha</FormControl.Label>
               <TextInput placeholder='Insira uma senha' onChangeText={setSenha} secureTextEntry></TextInput>
            </FormControl>
            <FormControl isRequired>
               <FormControl.Label>Confirmar Senha</FormControl.Label>
               <TextInput placeholder='Confirme a sua senha' secureTextEntry ></TextInput>
            </FormControl>
            <FormControl isRequired>
               <FormControl.Label>Data de Nascimento</FormControl.Label>
               <TextInput placeholder='Insira sua data de nascimento (mm/dd/yyyy)' onChangeText={setNasc}></TextInput>
            </FormControl>
            <FormControl isRequired>
               <FormControl.Label>CEP</FormControl.Label>
               <TextInput placeholder='Insira o seu CEP' onChangeText={setCep}></TextInput>
            </FormControl>
            <FormControl isRequired>
               <FormControl.Label>Telefone</FormControl.Label>
               <TextInput placeholder='Insira seu nº de telefone' onChangeText={setTelefone}></TextInput>
            </FormControl>
         </Box>

         <Box alignContent={'center'}>
            <Button height={'20%'} width={'20%'} margin={10} onPress={handleSubmit}>Enviar</Button>
         </Box>
      </Center>
   )
}