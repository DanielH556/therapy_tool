import React from 'react';
import { Center, Heading, FormControl, Input, Stack, Button, Box } from 'native-base';

export default function CreateAccount() {
   return(
      <Center display={'flex'} alignItems='center' borderColor={'gray.600'} justifyContent='center'>
         <Heading>Criar Conta</Heading>
         <Box alignItems='center' width={'90%'}>
            <FormControl isRequired>
               <FormControl.Label>Nome</FormControl.Label>
               <Input size={'lg'} placeholder='Insira seu Nome'></Input>
            </FormControl>
            <FormControl isRequired>
               <FormControl.Label>Sobrenome</FormControl.Label>
               <Input size={'lg'} placeholder='Insira seu Sobrenome'></Input>
            </FormControl>
            <FormControl isRequired>
               <FormControl.Label>CPF</FormControl.Label>
               <Input size={'lg'} placeholder='Insira seu CPF'></Input>
            </FormControl>
            <FormControl isRequired>
               <FormControl.Label>Cargo</FormControl.Label>
               <Input size={'lg'} placeholder='Insira seu Nome'></Input>
            </FormControl>
            <FormControl isRequired>
               <FormControl.Label>E-Mail</FormControl.Label>
               <Input size={'lg'} placeholder='Insira seu E-mail'></Input>
            </FormControl>
            <FormControl isRequired>
               <FormControl.Label>Senha</FormControl.Label>
               <Input size={'lg'} placeholder='Insira uma senha'></Input>
            </FormControl>
            <FormControl isRequired>
               <FormControl.Label>Confirmar Senha</FormControl.Label>
               <Input size={'lg'} placeholder='Confirme a sua senha'></Input>
            </FormControl>
            <FormControl isRequired>
               <FormControl.Label>Telefone</FormControl.Label>
               <Input size={'lg'} placeholder='Insira seu nº de telefone'></Input>
            </FormControl>
         </Box>

         <Box alignContent={'center'}>
            <Button height={'20%'} width={'20%'} margin={10}>Enviar</Button>
         </Box>
      </Center>
   )
}