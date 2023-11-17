import { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, TextInput, Text } from "react-native";
import Button from "../components/Button";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore/lite"; 
import { appUser } from '../../FirebaseConfig.js';

const Perfil = ({ navigation }) => {
  const [usuario, setUsuario] = useState({});

  const [modo, setModo] = useState('edicion');

  const [user, setUser] = useState("");
  const [contra, setContra] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [mail, setMail] = useState("");
  const [fechaNac, setFecha] = useState("");
  const [msj, setMsj] = useState("");

  const obtenerUsuario = async () => {
      const auth = getAuth(appUser);
      const db = getFirestore(appUser);
      const docSnap = await getDoc(doc(db, "Usuarios", auth.currentUser.uid));
      const user = docSnap.data();
      setUsuario(user);
      mostrarDatos(user);
  }

  useEffect(() => {
      obtenerUsuario();
  }, []);

  const mostrarDatos = user =>
  {
    setUser(user.Usuario);
    setContra(user.Contraseña);
    setNombre(user.Nombre);
    setApellido(user.Apellido);
    setMail(user.Mail);
    setFecha(user.FechaNacimiento);
  }

  const dejarDeEditar = () =>
  {
    mostrarDatos(usuario);
    setModo('lectura');
  }

  const handleChangeUsuario = (text) => setUser(text);
  const handleChangeContra = (text) => setContra(text);
  const handleChangeNombre = (text) => setNombre(text);
  const handleChangeApellido = (text) => setApellido(text);
  const handleChangeMail = (text) => setMail(text);
  const handleChangeFecha = (text) => setFecha(text);

  const handleUpdate = async() => {
    if (user && contra && nombre && apellido && mail && fechaNac) {
      const auth = getAuth();
      const db = getFirestore();
      const docSnap = await setDoc(doc(db, "Usuarios", auth.currentUser.uid), {
        Usuario: user,
        Contraseña: contra,
        Nombre: nombre,
        Apellido: apellido,
        Mail: mail,
        FechaNacimiento: fechaNac
      }).then(() => {
        navigation.navigate("Home");
      }).catch((error) => {
        console.log(error);
        setMsj(error.message);
      });
    } else {
      setMsj("Todos los datos son obligatorios");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Usuario:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeUsuario}
        value={user}
        editable={modo==="edicion" ? true : false}
        required
      />
      <Text>Contraseña:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeContra}
        value={contra}
        secureTextEntry={true}
        editable={modo==="lectura" ? false : true}
        required
      />
      <Text>Nombre:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeNombre}
        value={nombre}
        editable={modo==="lectura" ? false : true}
        required
      />
      <Text>Apellido:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeApellido}
        value={apellido}
        editable={modo==="lectura" ? false : true}
        required
      />
      <Text>Mail:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeMail}
        value={mail}
        editable={modo==="lectura" ? false : true}
        required
      />
      <Text>Fecha de nacimiento:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeFecha}
        value={fechaNac}
        placeholder="DD/MM/AAAA"
        editable={modo==="lectura" ? false : true}
        required
      />
      {modo==="edicion" ? <Button onPress={handleUpdate} text="Guardar" color="lightblue"></Button> : <Text></Text>}
      <Button onPress={modo === 'lectura'? () => setModo('edicion') : () => dejarDeEditar()} text={modo === 'lectura'? "Editar" : "Dejar de editar"}></Button>
      <Text style={{ color: "red" }}>{msj}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200
  },
});

export default Perfil;
