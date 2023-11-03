import { SafeAreaView, Text, StyleSheet } from "react-native";
import Button from '../components/Button';
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore/lite"; 
import { useState, useEffect } from "react";

const Home = ({navigation}) => {
    const [usuario, setUsuario] = useState({});

    const obtenerUsuario = async () => {
        const auth = getAuth();
        const db = getFirestore();
        const docSnap = await getDoc(doc(db, "Usuarios", auth.currentUser.uid));
        const user = docSnap.data();
        setUsuario(user);
    }

    useEffect(() => {
        obtenerUsuario();
    }, []);

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.bienvenida}>Bienvenido{usuario.Nombre != undefined && usuario.Apellido != undefined?", " + usuario.Nombre + " " + usuario.Apellido:""}</Text>
            <Button onPress={() => navigation.navigate("Perfil")} text={usuario.FechaNacimiento != ""? "Editá tu perfil": "Completá tu perfil"} color={usuario.FechaNacimiento === ""? "red": "lightblue"}></Button>
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