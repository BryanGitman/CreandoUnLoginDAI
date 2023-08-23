import { useState } from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text} from 'react-native';
import axios from 'axios';
import Button from '../components/Button';

const Register = ({navigation}) => {
  const [user, setUser] = useState('');
  const [contra, setContra] = useState('');
  const [msj, setMsj] = useState('');

  const handleChangeUsuario = text => setUser(text);
  const handleChangeContra = text => setContra(text);

  const handleRegister = () =>
  {
    axios.post('/register', {
      Usuario: user,
      Contraseña: contra
    }).then(res => setMsj(res.data.message)).catch(error => console.log(error));
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
      <Button onPress={handleRegister} text="Registrarse"></Button>
      <Button onPress={() => navigation.navigate('Login')} text="Ya tengo cuenta"></Button>
      <Text>{msj}</Text>
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

export default Register;