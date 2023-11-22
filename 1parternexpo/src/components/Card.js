import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";

const Card = ({navigation, uid, foto, titulo}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Articulo', {uid: uid})}>
        <Image style={styles.foto} source={{uri: foto}}/>
        <Text style={styles.titulo}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    backgroundColor: "#ffe18f",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    width: "80%",
    minHeight: 200,
    borderRadius: 50,
  },
  foto: {
    flex: 1,
    width: '100%',
    minHeight: 100,
    resizeMode: 'contain',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginBottom: '5%'
  },
  titulo: {
    fontWeight: 'bold',
    margin: '5%'
  }
});

export default Card;