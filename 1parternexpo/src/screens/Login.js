import { useState } from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text} from 'react-native';
import axios from 'axios';
import Button from '../components/Button';

const Login = ({navigation}) => {
  const [user, setUser] = useState('');
  const [contra, setContra] = useState('');
  const [msj, setMsj] = useState('');

  const handleChangeUsuario = text => setUser(text);
  const handleChangeContra = text => setContra(text);

  const handleLogin = () =>
  {
    axios.post('/login', {
      Usuario: user,
      Contraseña: contra
    }).then(res => {
        setMsj(res.data.message);
        if(msj == "Sesion iniciada correctamente")
        {
          navigation.navigate('Home');
        }
      }).catch(error => console.log(error));
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeUsuario}
        placeholder="Usuario"
        value={user}
        required
      />
      <TextInput
        style={styles.input}
        onChangeText={handleChangeContra}
        value={contra}
        placeholder="Contraseña"
        secureTextEntry={true}
        required
      />
      <Button onPress={handleLogin} text="Iniciar Sesion"></Button>
      <Button onPress={() => navigation.navigate('Register')} text="No tengo cuenta"></Button>
      <Text style={{color:'red'}}>{msj}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});

export default Login;