import { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, Image } from 'react-native';
import Button from '../components/Button';
import { getFirestore, collection, addDoc, setDoc, doc } from 'firebase/firestore/lite';
import { appArt } from '../../FirebaseConfig.js';

const Escribir = ({ navigation }) => {
    const [Titulo, setTitulo] = useState('');
    const [Imagen, setImagen] = useState('');
    const [Contenido, setContenido] = useState('');
    const [msj, setMsj] = useState('');

    const handleChangeTitulo = text => setTitulo(text);
    const handleChangeImagen = text => setImagen(text);
    const handleChangeContenido = text => setContenido(text);

    const handlePublish = async () => {
        if (Titulo && Imagen && Contenido) {
            const db = getFirestore(appArt);
            const docRef = await addDoc(collection(db, "Articulos"), {
                Titulo,
                Contenido,
                Imagen
            });
            await setDoc(doc(db, "Articulos", docRef.id), {
                Titulo,
                Contenido,
                Imagen,
                uid: docRef.id
            }).then(() => {
                navigation.navigate("Home");
            });
        }
        else {
            setMsj("Completá todos los datos");
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/logoNombre.png')}/>
            <Text>¡Dejá volar tu imaginación e inspirá a otros!</Text>
            <TextInput
                style={styles.input}
                onChangeText={handleChangeTitulo}
                placeholder="Titulo"
                value={Titulo}
                required
            />
            <TextInput
                style={styles.input}
                onChangeText={handleChangeImagen}
                placeholder="URL de la imagen"
                value={Imagen}
                required
            />
            <TextInput
                style={styles.inputArea}
                onChangeText={handleChangeContenido}
                placeholder="¿Qué querés transmitir hoy?..."
                value={Contenido}
                multiline = {true}
                numberOfLines = {10}
                required
            />
            <Button onPress={handlePublish} text="Publicar" color="yellow"></Button>
            <Text style={{color:'red'}}>{msj}</Text>
        </SafeAreaView>
    );
}

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
        width: 300
    },
    inputArea: {
        height: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 300
    },
    logo: {
        width: '80%',
        resizeMode: 'contain',
        marginVertical: '-20%'
    }
});

export default Escribir;