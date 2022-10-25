import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Test from './screens/Test';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
   return(
      <Navigator>
         <Screen name="Home" component={Home} />
         <Screen name="Test" component={Test} />
      </Navigator>
   );
};