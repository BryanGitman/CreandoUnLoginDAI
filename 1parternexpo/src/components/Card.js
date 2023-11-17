import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";

const Card = ({navigation, uid, foto, titulo}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Articulo', {uid: uid})}>
        <Image style={styles.foto} source={foto}/>
        <Text style={styles.titulo}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "5%",
    backgroundColor: "##ffe18f",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: "43%",
    borderRadius: 50,
  },
  foto: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginBottom: '5%'
  },
  titulo: {
    fontWeight: 'bold',
    marginBottom: '3%'
  }
});

export default Card;