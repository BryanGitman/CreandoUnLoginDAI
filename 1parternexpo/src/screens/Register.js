import { useState } from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text, Image} from 'react-native';
import Button from '../components/Button';
import { getFirestore, doc, setDoc } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { appUser } from '../../FirebaseConfig.js';

const Register = ({navigation}) => {
  const [Mail, setMail] = useState('');
  const [NombreUsuario, setUser] = useState('');
  const [Contraseña, setContra] = useState('');
  const [Nombre, setNombre] = useState('');
  const [Apellido, setApellido] = useState('');
  const [FechaNacimiento, setFecha] = useState('');
  const [msj, setMsj] = useState('');

  const handleChangeMail = text => setMail(text);
  const handleChangeUsuario = text => setUser(text);
  const handleChangeContra = text => setContra(text);
  const handleChangeNombre = text => setNombre(text);
  const handleChangeApellido = text => setApellido(text);

  const handleRegister = async() =>
  {
    if(Mail && NombreUsuario && Contraseña && Nombre && Apellido)
    {
      try {
        const auth = getAuth(appUser);
        const { user } = await createUserWithEmailAndPassword(
          auth,
          Mail,
          Contraseña
        );
        const { uid } = user;
        const db = getFirestore(appUser);
        await setDoc(doc(db, "Usuarios", uid), {
          Apellido,
          Contraseña,
          FechaNacimiento,
          Mail,
          Nombre,
          NombreUsuario,
          uid
        });
        navigation.navigate('Home');
      } catch (error) {
        console.log(error);
        setMsj(error.message);
      }
    }
    else
    {
      setMsj("Completá todos los datos");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/logoNombre.png')}/>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeMail}
        placeholder="Mail"
        value={Mail}
        required
      />

      <TextInput
        style={styles.input}
        onChangeText={handleChangeUsuario}
        placeholder="Usuario"
        value={NombreUsuario}
        required
      />
      <TextInput
        style={styles.input}
        onChangeText={handleChangeContra}
        value={Contraseña}
        placeholder="Contraseña"
        secureTextEntry={true}
        required
      />
      <TextInput
        style={styles.input}
        onChangeText={handleChangeNombre}
        placeholder="Nombre"
        value={Nombre}
        required
      />
      <TextInput
        style={styles.input}
        onChangeText={handleChangeApellido}
        placeholder="Apellido"
        value={Apellido}
        required
      />
      <Button onPress={handleRegister} text="Registrarse" color="lightblue"></Button>
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
    width: 200
  },
  logo: {
    width: '80%',
    resizeMode: 'contain',
    marginVertical: '-20%'
  }
});

export default Register;