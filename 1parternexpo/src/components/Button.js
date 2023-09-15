import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({onPress, text, color = "grey"}) => {
    return(
        <TouchableOpacity onPress={onPress} style={{...styles.button, backgroundColor: color}}>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button : {
        padding: 10,
        borderRadius: 10,
        margin: 12
    }
});

export default Button;