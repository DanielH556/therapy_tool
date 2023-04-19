// Importação de Bibliotecas
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { List, ScrollView, HStack, Box, Divider, Text, VStack, Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialCommunityIcons, Ionicons, Foundation, AntDesign, FontAwesome5, MaterialIcons } from '@expo/vector-icons'

export default function Home({ navigation }: { navigation: StackNavigationProp<any> }) {
   // Páginas / Telas
   const pages = [
      { name: 'Test', icon: <Foundation name="clipboard-notes" size={40} color="black" /> },
      { name: 'Login', icon: <AntDesign name="poweroff" size={40} color="black" /> },
      { name: 'Criar Conta', icon: <AntDesign name="addusergroup" size={40} color="black" /> },
      { name: 'Landing', icon: <MaterialIcons name="add-task" size={40} color="black" /> },
      { name: 'Feedback', icon: <MaterialIcons name="add-task" size={40} color="black" /> },
   ]

   return(
      <View>
         <ScrollView>
            <List divider={<Divider ml={16} />} px={3} py={0} borderWidth={0} borderRightWidth={0} w="100%" maxW={"100%"}>
               {
                  pages.map((page, i) => {
                     return <List.Item key={i} onPress={() => navigation.navigate(`${page.name}`, { name: page.name })} bg={'gray.200'} borderColor={'gray.300'} borderWidth={3} padding={5}
                     >
                     <VStack space={3} py={1} alignItems="center" justifyContent={"center"} w="100%">
                        <Box>
                           {page.icon}
                        </Box>
                        <Text fontSize={20}>{ page.name }</Text>
                     </VStack>
                  </List.Item>
               })
            }
            </List>
         </ScrollView>
      </View>
   )
}