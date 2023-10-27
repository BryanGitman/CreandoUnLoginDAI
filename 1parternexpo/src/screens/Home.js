import { SafeAreaView, Text, StyleSheet } from "react-native";
import Button from '../components/Button';
import { getAuth } from "firebase/auth";

const Home = ({navigation}) => {
    const auth = getAuth();
    const usuario = auth.currentUser;
    console.log(usuario);

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.bienvenida}>Bienvenido, {usuario.Nombre + " " + usuario.Apellido}</Text>
            <Button onPress={() => navigation.navigate("Perfil")} text={usuario.Mail === null? "Completá tu perfil": "Editá tu perfil"} color={usuario.Mail === null? "red": "lightblue"}></Button>
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