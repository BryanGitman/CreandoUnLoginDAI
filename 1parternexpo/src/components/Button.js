import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({onPress, text}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button : {
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 10,
        margin: 12
    }
});

export default Button;