import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import Routes from './src/Routes';
import { NativeBaseProvider } from 'native-base';

export default function App() {
   return(
      <NavigationContainer>
         <NativeBaseProvider>
            <Routes />
         </NativeBaseProvider>
      </NavigationContainer>
   );
}

const styles = StyleSheet.create({

});
