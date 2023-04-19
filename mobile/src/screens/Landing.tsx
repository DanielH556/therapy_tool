import React from 'react';
import { Center, Heading, Box, List, Divider, VStack, Text, View } from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';

export default function Landing({ navigation }: { navigation: StackNavigationProp<any> }) {
   return(
      <View>
         <Box>
            <List divider={<Divider ml={16} />} px={3} py={0} borderWidth={0} borderRightWidth={0} w="100%" maxW={"100%"}>
               <List.Item onPress={() => navigation.navigate(`Criar Conta`, { name: 'Criar Conta' })} bg={'gray.200'} borderColor={'gray.300'} borderWidth={3} padding={5}>
                  <VStack space={3} py={1} alignItems="center" justifyContent={"center"} w="100%">
                     <Box>
                        <AntDesign name="addusergroup" size={40} color="black" />
                     </Box>
                     <Text fontSize={20}>Criar Conta</Text>
                  </VStack>
               </List.Item>
               <List.Item onPress={() => navigation.navigate(`Login`, { name: 'Login' })} bg={'gray.200'} borderColor={'gray.300'} borderWidth={3} padding={5}>
                  <VStack space={3} py={1} alignItems="center" justifyContent={"center"} w="100%">
                     <Box>
                        <AntDesign name="poweroff" size={40} color="black" />
                     </Box>
                     <Text fontSize={20}>Login</Text>
                  </VStack>
               </List.Item>
            </List>
         </Box>
      </View>
   )
}