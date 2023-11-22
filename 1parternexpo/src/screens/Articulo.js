import { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { getFirestore, getDoc, doc } from "firebase/firestore/lite";
import { appArt } from '../../FirebaseConfig.js';

const Articulo = ({route}) => {
    const {uid} = route.params;

    const [art, setArt] = useState({});

    const obtenerArticulo = async () => {
        const db = getFirestore(appArt);
        const query = await getDoc(doc(db, "Articulos", uid));
        const a = query.data();
        setArt(a);
    }

    useEffect(() => 
    {
        obtenerArticulo();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>{art.Titulo}</Text>
            <ScrollView style={{ width: '100%' }}>
                <Image style={styles.foto} source={{uri: art.Imagen}}></Image>
                <Text style={styles.contenido}>{art.Contenido}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    titulo: {
        marginVertical: '5%',
        fontSize: 20,
        fontWeight: 'bold'
    },
    foto: {
        flex: 1,
        width: '100%',
        minHeight: 200,
        resizeMode: 'contain'
    },
    contenido: {
        fontSize: 16,
        margin: '5%'
    }
});

export default Articulo;