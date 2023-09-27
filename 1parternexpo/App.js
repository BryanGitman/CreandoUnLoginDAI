import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import Login  from "./src/screens/Login";
import Register from "./src/screens/Register";
import Home from "./src/screens/Home";
import Perfil from "./src/screens/Perfil";
import UserContext from "./src/context/userContext";

axios.defaults.baseURL = 'http://localhost:3000';

const Stack = createNativeStackNavigator();

const App = () => {
  const [usuario, setUsuario] = useState({});

  const getUsuario = nomUsuario =>
  {
    axios.post('/info', {
    Usuario: nomUsuario
    }).then(res => {
        setUsuario(res.data);
    }).catch(error => console.log(error));
  }

  return (
    <UserContext.Provider value={{usuario, setUsuario, getUsuario}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Perfil" component={Perfil} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
    
  );
};

export default App;