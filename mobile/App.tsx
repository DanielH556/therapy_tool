import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/screens/Home';
import Test from './src/screens/Test';
import Routes from './src/Routes';

export default function App() {
   return(
      <NavigationContainer>
         <Routes />
      </NavigationContainer>
   );
}

const styles = StyleSheet.create({

});
