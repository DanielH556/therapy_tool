// Importação de Bibliotecas
import React from 'react';
import { Box, Heading, ScrollView, VStack, Text, Button, HStack, Divider, Flex } from 'native-base';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function TaskList() {
   const navigation = useNavigation();

   // Tarefas
   const tasks = [
      {
         id: 1,
         name: "Comprar Alimentos no Mercado",
         status: 'Completo'
      },
      {
         id: 2,
         name: "Ir ao trabalho",
         status: 'Completo'
      },
      {
         id: 3,
         name: "Reunião com o chefe",
         status: 'Completo'
      },
      {
         id: 4,
         name: "Reunião com clientes",
         status: 'Incompleto'
      },
      {
         id: 5,
         name: "Prova da Faculdade",
         status: 'Completo'
      },
      {
         id: 6,
         name: "Prova de direção",
         status: 'Completo'
      },
      {
         id: 7,
         name: "Tirar dúvidas com o professor",
         status: 'Incompleto'
      },
   ];

   // Função de Adição de Nova Tarefa
   function addTask() {
      navigation.navigate('Criar Tarefa' as never);
   }

   return(
      <Box alignItems={'center'} justifyContent={'center'}>
         <Heading margin={30} borderBottomColor={'red.500'}>Tarefas</Heading>
            <ScrollView>
               <VStack space={3}>
                  {
                     tasks.map((key, index) => {
                        return <Button variant={'ghost'} p={4}>
                           <Flex direction='row'>
                              <Text fontSize={15}>{key.name}</Text>
                              <Text fontSize={15}>{key.status}</Text>
                           </Flex>
                           <Divider />
                        </Button>
                     })
                  }
               </VStack>
            </ScrollView>
         <Button onPress={addTask}>Adicionar Tarefa</Button>
      </Box>
   );
}