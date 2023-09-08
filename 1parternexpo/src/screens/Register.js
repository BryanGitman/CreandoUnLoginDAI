import { useState } from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text} from 'react-native';
import axios from 'axios';
import Button from '../components/Button';

const Register = ({navigation}) => {
  const [user, setUser] = useState('');
  const [contra, setContra] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [msj, setMsj] = useState('');

  const handleChangeUsuario = text => setUser(text);
  const handleChangeContra = text => setContra(text);
  const handleChangeNombre = text => setNombre(text);
  const handleChangeApellido = text => setApellido(text);

  const handleRegister = () =>
  {
    if(user && contra && nombre && apellido)
    {
      axios.post('/register', {
        Usuario: user,
        Contraseña: contra,
        Nombre: nombre,
        Apellido: apellido
      }).then(res => {
          setMsj("");
          if(res.data.message == "Usuario creado")
          {
            navigation.navigate('Home', { nomUsuario: user });
          }
          else
          {
            setMsj(res.data.message);
          }
        }).catch(error => console.log(error));
    }
    else
    {
      setMsj("Completá todos los datos");
    }
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
      <TextInput
        style={styles.input}
        onChangeText={handleChangeNombre}
        placeholder="Nombre"
        value={nombre}
        required
      />
      <TextInput
        style={styles.input}
        onChangeText={handleChangeApellido}
        placeholder="Apellido"
        value={apellido}
        required
      />
      <Button onPress={handleRegister} text="Registrarse"></Button>
      <Button onPress={() => navigation.navigate('Login')} text="Ya tengo cuenta"></Button>
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

export default Register;