import { SafeAreaView, Text, StyleSheet } from "react-native";
import Button from '../components/Button';
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore/lite"; 

const Home = ({navigation}) => {
    const obtenerUsuario = async () => {
        const auth = getAuth();
        const db = getFirestore();
        const docSnap = await getDoc(doc(db, "Usuarios", auth.currentUser.uid));
        const usuario = docSnap.data();
        console.log(usuario);
        return usuario;
    }

    const usuario = obtenerUsuario();

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.bienvenida}>Bienvenido, {usuario.Nombre + " " + usuario.Apellido}</Text>
            <Button onPress={() => navigation.navigate("Perfil")} text={usuario.FechaNacimiento === ""? "Completá tu perfil": "Editá tu perfil"} color={usuario.FechaNacimiento === ""? "red": "lightblue"}></Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    bienvenida: {
        fontSize: 32,
        fontWeight: 'bold'
    }
});

export default Home;