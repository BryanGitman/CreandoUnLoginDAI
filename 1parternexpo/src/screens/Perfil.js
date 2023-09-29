import { useState, useContext, useEffect } from "react";
import { SafeAreaView, StyleSheet, TextInput, Text } from "react-native";
import axios from "axios";
import Button from "../components/Button";
import UserContext from "../context/userContext";
import DateTimePicker from '../components/DateTimePicker';

const Perfil = ({ navigation }) => {
  const usuario = useContext(UserContext);

  const [modo, setModo] = useState('edicion');

  const [user, setUser] = useState(usuario.usuario.NombreUsuario);
  const [contra, setContra] = useState(usuario.usuario.Contraseña);
  const [nombre, setNombre] = useState(usuario.usuario.Nombre);
  const [apellido, setApellido] = useState(usuario.usuario.Apellido);
  const [mail, setMail] = useState(usuario.usuario.Mail);
  const [fechaNac, setFecha] = useState(usuario.usuario.FechaNacimiento?.toString().slice(0,10));
  const [show, setShow] = useState(false);
  const [msj, setMsj] = useState("");

  const dejarDeEditar = () =>
  {
    setUser(usuario.usuario.NombreUsuario);
    setContra(usuario.usuario.Contraseña);
    setNombre(usuario.usuario.Nombre);
    setApellido(usuario.usuario.Apellido);
    setMail(usuario.usuario.Mail);
    setFecha(usuario.usuario.FechaNacimiento?.toString().slice(0,10));
    setModo('lectura');
  }

  const handleChangeUsuario = (text) => setUser(text);
  const handleChangeContra = (text) => setContra(text);
  const handleChangeNombre = (text) => setNombre(text);
  const handleChangeApellido = (text) => setApellido(text);
  const handleChangeMail = (text) => setMail(text);
  const handleChangeFecha = async(e) => 
  {
    const currentDate = e.target.value;
    setShow(false);
    await setFecha(currentDate);
  }

  const handleUpdate = () => {
    if (user && contra && nombre && apellido && mail) {
      axios
        .put("/perfil", {
          Id: usuario.usuario.Id,
          UsuarioAnterior: usuario.usuario.NombreUsuario,
          Usuario: user,
          Contraseña: contra,
          Nombre: nombre,
          Apellido: apellido,
          Mail: mail,
          FechaNacimiento: fechaNac?.toString().slice(0,10) != '1900-01-01'? fechaNac : null,
        })
        .then(async res => {
          setMsj("");
          if (res.data.message == "Usuario editado") {
            await usuario.getUsuario(user);
            navigation.navigate("Home");
          } else {
            setMsj(res.data.message);
          }
        })
        .catch((error) => console.log(error));
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
      <Text>Fecha de nacimiento: {fechaNac?.toString().slice(0,10)}</Text>
      {modo==="edicion" ? <Button onPress={() => setShow(true)} text="Seleccioná tu fecha de nacimiento" color="lightgrey" /> : <Text></Text>}
      {show?
        <DateTimePicker
          value={fechaNac}
          onChange={(e) => handleChangeFecha(e)}
        /> : <Text></Text>
      }
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
