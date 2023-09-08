import { useEffect, useState } from "react";
import { Text } from "react-native";
import axios from 'axios';

const Home = ({route, navigation}) => {
    const {nomUsuario} = route.params;

    const [usuario, setUsuario] = useState({});

    const getUsuario = () =>
    {
        axios.post('/info', {
        Usuario: nomUsuario
        }).then(res => {
            setUsuario(res.data);
        }).catch(error => console.log(error));
    }

    useEffect(() => {
        getUsuario();
    }, []);

    return(
        <Text>Bienvenido {usuario.Nombre + " " + usuario.Apellido}</Text>
    )
}

export default Home;