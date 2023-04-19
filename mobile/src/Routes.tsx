// Importação de Bibliotecas
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Importação de Telas
import Home from './screens/Home';
import Test from './screens/Test';
import Login from './screens/Login';
import CreateAccount from './screens/CreateAccount';
import Landing from './screens/Landing';
import Feedback from './screens/Feedback';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
   return(
      // Rotas da aplicação
      <Navigator initialRouteName='Home'>
         <Screen name="Página Principal" component={Home} />
         <Screen name="Landing" component={Landing} />
         <Screen name="Test" component={Test} />
         <Screen name="Login" component={Login} />
         <Screen name="Criar Conta" component={CreateAccount} />
         <Screen name="Feedback" component={Feedback} />
      </Navigator>
   );
};