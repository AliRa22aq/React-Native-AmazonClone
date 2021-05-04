import React from 'react'
import { Text, Pressable, StyleSheet } from 'react-native'

interface ButtonProps {
    text: string,
    onPress: ()=> void
    containerStyles? : {backgroundColor: string};
}


const Button = ({text, onPress, containerStyles}: ButtonProps) => {
    return (
        <Pressable onPress={onPress} style={[styles.root, containerStyles]}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

export default Button


const styles = StyleSheet.create({
    root: {
        backgroundColor: "#ffce47",
        marginVertical: 10,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ffbb00'

    },
    text: {
        fontSize: 16
    },
    buttonText: {
        fontSize: 18

    },
    quantity: {
        color: '#007eb9'
    }
})