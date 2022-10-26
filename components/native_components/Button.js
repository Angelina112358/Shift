import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Dimensions, View } from "react-native";
const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

export default ({ onPress, text }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "white",
        fontSize: 25
    },
    button: {
        backgroundColor: "#696969",
        flex: 1,
        height: Math.floor(buttonWidth - 20),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        margin: 5,
    }
})