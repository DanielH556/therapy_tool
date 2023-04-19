// Importação de Bibliotecas
import React from 'react';
import { NativeBaseProvider, Button, Box, Input, Text, FormControl, Heading, Center, Stack } from 'native-base';

export default function Login() {
   return(
      <Center display={'flex'} alignItems='center' borderColor={'gray.600'} justifyContent='center'>
         <Heading>Fazer Login</Heading>
         <Box alignItems='center' width={'90%'}>
            <FormControl isRequired>
               <FormControl.Label>CPF: </FormControl.Label>
               <Input size={'lg'} placeholder='Insira seu nº de CPF' />
            </FormControl>
            <FormControl isRequired>
               <FormControl.Label>Senha: </FormControl.Label>
               <Input size={'lg'} placeholder='Insira sua senha' />
            </FormControl>
         </Box>

         <Stack direction={'row'}>
            <Button height={'40%'} width={'20%'} margin={10}>Entrar</Button>
            <Button height={'40%'} width={'20%'} margin={10}>Criar Conta</Button>
         </Stack>
      </Center>
   );
}