import { SafeAreaView, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Button from '../components/Button';
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore/lite"; 
import { useState, useEffect } from "react";
import { appUser } from '../../FirebaseConfig.js';

const Home = ({navigation}) => {
    const [usuario, setUsuario] = useState({});

    const obtenerUsuario = async () => {
        const auth = getAuth(appUser);
        const db = getFirestore(appUser);
        const docSnap = await getDoc(doc(db, "Usuarios", auth.currentUser.uid));
        const user = docSnap.data();
        setUsuario(user);
    }

    useEffect(() => {
        obtenerUsuario();
    }, []);

    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}><Image style={styles.logo} source={require('../../assets/logo.png')}></Image></TouchableOpacity>
            <Text style={styles.bienvenida}>Bienvenido a empnéo{usuario.Nombre != undefined && usuario.Apellido != undefined?", " + usuario.Nombre + " " + usuario.Apellido:""}</Text>
            <Text style={styles.bienvenida}>¿Listo para inspirarte?</Text>
            <Button onPress={() => navigation.navigate("Perfil")} text={usuario.FechaNacimiento != ""? "Editá tu perfil": "Completá tu perfil"} color={usuario.FechaNacimiento === ""? "red": "lightblue"}></Button>
            <Button onPress={() => navigation.navigate("Articulos")} text="Ver artículos" color="lightyellow"></Button>
            <Button onPress={() => navigation.navigate("Escribir")} text="Escribir" color="yellow"></Button>
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
        fontSize: 25,
        fontWeight: 'bold',
        marginHorizontal: '5%'
    },
    logo:{
        height: '80%',
        resizeMode: 'contain',
        marginBottom: '-60%'
    }
});

export default Home;