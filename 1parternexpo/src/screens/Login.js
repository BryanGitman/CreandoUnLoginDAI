import { useState } from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import Button from '../components/Button';

const Login = ({navigation}) => {
  const [user, setUser] = useState('');
  const [contra, setContra] = useState('');

  const handleChangeUsuario = text => setUser(text);
  const handleChangeContra = text => setContra(text);

  const handleLogin = () =>
  {

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
        required
      />
      <Button onPress={handleLogin} text="Iniciar Sesion"></Button>
      <Button onPress={() => navigation.navigate('Register')} text="No tengo cuenta"></Button>
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