import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export default function Home() {
   const navigation = useNavigation();

   function handleGoToTest() {
      navigation.navigate('Test');
   }

   return(
      <View>
         <Text>HOME SCREEN POOOOOOOOOOOOOOOOOOOOOOOOG</Text>
         <BorderlessButton onPress={handleGoToTest} style={{ padding: 10, backgroundColor: 'blue', width: 100 }}>
            <Text style={{ color: 'white', fontSize: 30 }}>To Test</Text>
         </BorderlessButton>
      </View>
   )
}

const styles = StyleSheet.create({

})