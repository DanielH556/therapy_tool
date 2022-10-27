// Importação de Bibliotecas
import React from 'react';
import { Box, Heading, ScrollView, VStack, Text, Button } from 'native-base';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Task() {
   const navigation = useNavigation();

   // Tarefas
   const tasks = {
      task1: {
         id: 1,
         name: "Task 1",
      },
      task2: {
         id: 2,
         name: "Task 2",
      },
      task3: {
         id: 3,
         name: "Task 3",
      },
      task4: {
         id: 4,
         name: "Task 4",
      },
      task5: {
         id: 5,
         name: "Task 5",
      },
      task6: {
         id: 6,
         name: "Task 6",
      },
      task7: {
         id: 7,
         name: "Task 7",
      },
   };

   // Função de Adição de Nova Tarefa
   function addTask() {
      navigation.navigate('Criar Tarefa' as never);
   }

   return(
      <Box alignItems={'center'} justifyContent={'center'}>
         <Heading margin={30} borderBottomColor={'red.500'}>Tarefas</Heading>
         <ScrollView>
            <VStack alignItems={'center'}>
               {
                  Object.keys(tasks).map((key, index) => {
                     return <BorderlessButton><Text fontSize={20} marginBottom={10}>{key}</Text></BorderlessButton>
                  })
               }
            </VStack>
         </ScrollView>
         <Button onPress={addTask}>Adicionar Tarefa</Button>
      </Box>
   );
}