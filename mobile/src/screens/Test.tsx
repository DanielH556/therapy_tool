import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

export default function Test() {
   const navigation = useNavigation();
   
   return(
      <View>
         <Text>Test Screen</Text>
      </View>
   );
}