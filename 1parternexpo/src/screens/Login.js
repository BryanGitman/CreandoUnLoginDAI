import { useState } from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text} from 'react-native';
import Button from '../components/Button';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { appUser } from '../../FirebaseConfig.js';

const Login = ({navigation}) => {
  const [mail, setMail] = useState('');
  const [contra, setContra] = useState('');
  const [msj, setMsj] = useState('');

  const handleChangeMail = text => setMail(text);
  const handleChangeContra = text => setContra(text);

  const handleLogin = () =>
  {
    const auth = getAuth(appUser);
    signInWithEmailAndPassword(auth, mail, contra)
    .then((userCredential) => {
      const user = userCredential.user;
      navigation.navigate('Home');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      setMsj(errorMessage);
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeMail}
        placeholder="Mail"
        value={mail}
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
      <Button onPress={handleLogin} text="Iniciar Sesion" color="lightblue"></Button>
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
    width: 200
  }
});

export default Login;