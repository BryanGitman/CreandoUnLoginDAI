import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login  from "./src/screens/Login";
import Register from "./src/screens/Register";
import Home from "./src/screens/Home";
import Perfil from "./src/screens/Perfil";
import Articulos from "./src/screens/Articulos";
import Articulo from "./src/screens/Articulo";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Articulos" component={Articulos} />
        <Stack.Screen name="Articulo" component={Articulo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;