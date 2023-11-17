import { useState, useEffect } from "react";
import { TouchableOpacity, SafeAreaView, Image, StyleSheet } from 'react-native';
import Card from '../components/Card';
import { getFirestore, getDocs, collection } from "firebase/firestore/lite";
import { appArt } from '../../FirebaseConfig.js';

const Articulos = ({navigation}) => {
    const [articulos, setArticulos] = useState([]);

    const obtenerArticulos = async () => {
        const db = getFirestore(appArt);
        const query = await getDocs(collection(db, "Articulos"));
        const art = query.docs.map(doc => ({
            uid: doc.data().uid,
            Titulo: doc.data().Titulo,
            Imagen: doc.data().Imagen
        }));
        setArticulos(art);
    }

    useEffect(() => {
        obtenerArticulos();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}><Image style={styles.logo} source={require('../../assets/logoNombre.png')}></Image></TouchableOpacity>
            {articulos.map(art => <Card key={art.uid} navigation={navigation} uid={art.uid} foto={art.Imagen} titulo={art.Titulo}></Card>)}
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
    logo:{
        height: '5%',
        resizeMode: 'contain'
    }
});

export default Articulos;