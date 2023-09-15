import { useState, useContext } from "react";
import { SafeAreaView, StyleSheet, TextInput, Text } from "react-native";
import axios from "axios";
import Button from "../components/Button";
import UserContext from "../context/userContext";

const Perfil = ({ navigation }) => {
  const usuario = useContext(UserContext);

  const [user, setUser] = useState(usuario.usuario.NombreUsuario);
  const [contra, setContra] = useState(usuario.usuario.Contraseña);
  const [nombre, setNombre] = useState(usuario.usuario.Nombre);
  const [apellido, setApellido] = useState(usuario.usuario.Apellido);
  const [mail, setMail] = useState(usuario.usuario.Mail);
  const [fechaNac, setFecha] = useState(usuario.usuario.FechaNacimiento);
  const [msj, setMsj] = useState("");

  const handleChangeUsuario = (text) => setUser(text);
  const handleChangeContra = (text) => setContra(text);
  const handleChangeNombre = (text) => setNombre(text);
  const handleChangeApellido = (text) => setApellido(text);
  const handleChangeMail = (text) => setMail(text);
  const handleChangeFecha = (text) => setFecha(text);

  const handleUpdate = () => {
    if (user && contra && nombre && apellido && mail) {
      axios
        .put("/perfil", {
          Id: usuario.usuario.Id,
          Usuario: user,
          Contraseña: contra,
          Nombre: nombre,
          Apellido: apellido,
          Mail: mail,
          FechaNacimiento: fechaNac,
        })
        .then((res) => {
          setMsj("");
          if (res.data.message == "Usuario editado") {
            getUsuario(user);
            navigation.navigate("Home");
          } else {
            setMsj(res.data.message);
          }
        })
        .catch((error) => console.log(error));
    } else {
      setMsj("Completá todos los datos obligatorios");
    }
  };

  useEffect(() => {
    getUsuario();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Usuario:*</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeUsuario}
        value={user}
        required
      />
      <Text>Contraseña:*</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeContra}
        value={contra}
        secureTextEntry={true}
        required
      />
      <Text>Nombre:*</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeNombre}
        value={nombre}
        required
      />
      <Text>Apellido:*</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeApellido}
        value={apellido}
        required
      />
      <Text>Mail:*</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeMail}
        value={mail}
        required
      />
      <Text>Fecha de nacimiento:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeFecha}
        value={fechaNac}
      />
      <Button onPress={handleUpdate} text="Guardar" color="lightblue"></Button>
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
  },
});

export default Perfil;
