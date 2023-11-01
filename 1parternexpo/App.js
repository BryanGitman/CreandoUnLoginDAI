import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login  from "./src/screens/Login";
import Register from "./src/screens/Register";
import Home from "./src/screens/Home";
import Perfil from "./src/screens/Perfil";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_REV_DzFGtNOn3bws7VrEqaOqWyQzvVw",
  authDomain: "perfildemiapp.firebaseapp.com",
  projectId: "perfildemiapp",
  storageBucket: "perfildemiapp.appspot.com",
  messagingSenderId: "239217514029",
  appId: "1:239217514029:web:f70325aee8605427998aa4",
  measurementId: "G-SDMM3P0T8C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;