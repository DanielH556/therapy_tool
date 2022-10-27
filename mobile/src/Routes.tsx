// Importação de Bibliotecas
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Importação de Telas
import Home from './screens/Home';
import Test from './screens/Test';
import Login from './screens/Login';
import Task from './screens/Task';
import CreateTask from './screens/CreateTask';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
   return(
      // Rotas da aplicação
      <Navigator initialRouteName='Home'>
         <Screen name="Página Principal" component={Home} />
         <Screen name="Test" component={Test} />
         <Screen name="Login" component={Login} />
         <Screen name="Tarefas" component={Task} />
         <Screen name="Criar Tarefa" component={CreateTask} />
      </Navigator>
   );
};