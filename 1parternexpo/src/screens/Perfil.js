import { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Text } from "react-native";
import Button from "../components/Button";
import { getAuth, updateProfile } from "firebase/auth";

const Perfil = ({ navigation }) => {
  const auth = getAuth();
  const usuario = auth.currentUser;

  const [modo, setModo] = useState('edicion');

  const [user, setUser] = useState(usuario.NombreUsuario);
  const [contra, setContra] = useState(usuario.Contraseña);
  const [nombre, setNombre] = useState(usuario.Nombre);
  const [apellido, setApellido] = useState(usuario.Apellido);
  const [mail, setMail] = useState(usuario.Mail);
  const [fechaNac, setFecha] = useState(usuario.FechaNacimiento);
  const [msj, setMsj] = useState("");

  const dejarDeEditar = () =>
  {
    setUser(usuario.NombreUsuario);
    setContra(usuario.Contraseña);
    setNombre(usuario.Nombre);
    setApellido(usuario.Apellido);
    setMail(usuario.Mail);
    setFecha(usuario.FechaNacimiento);
    setModo('lectura');
  }

  const handleChangeUsuario = (text) => setUser(text);
  const handleChangeContra = (text) => setContra(text);
  const handleChangeNombre = (text) => setNombre(text);
  const handleChangeApellido = (text) => setApellido(text);
  const handleChangeMail = (text) => setMail(text);
  const handleChangeFecha = (text) => setFecha(text);

  const handleUpdate = () => {
    if (user && contra && nombre && apellido && mail) {
      updateProfile(auth.currentUser, {
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
      setMsj("Completá todos los datos obligatorios");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Usuario:*</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeUsuario}
        value={user}
        editable={modo==="edicion" ? true : false}
        required
      />
      <Text>Contraseña:*</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeContra}
        value={contra}
        secureTextEntry={true}
        editable={modo==="lectura" ? false : true}
        required
      />
      <Text>Nombre:*</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeNombre}
        value={nombre}
        editable={modo==="lectura" ? false : true}
        required
      />
      <Text>Apellido:*</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeApellido}
        value={apellido}
        editable={modo==="lectura" ? false : true}
        required
      />
      <Text>Mail:*</Text>
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
