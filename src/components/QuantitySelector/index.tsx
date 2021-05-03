import React from 'react'
import { View, Text, Pressable, StyleSheet} from 'react-native'

interface QuantitySelectorProps {
    quantity: number;
    setQuantity: (value: number) => void
}

const QuantitySelector = ({quantity , setQuantity}:QuantitySelectorProps) => {

const onMinus = () => {
    setQuantity(Math.max(0, quantity - 1))
}

const onPlus = () => {
    setQuantity( quantity + 1 )
}

    return (
        <View style={styles.root}>

        <Pressable onPress={onMinus} style={styles.button}>
            <Text style={styles.buttonText}>-</Text>        
        </Pressable>      
        
        <Text style={styles.quantity}> {quantity} </Text>

        <Pressable onPress={onPlus} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>        
        </Pressable> 
        </View>

    )
}

export default QuantitySelector


const styles = StyleSheet.create({
    root: {
        flexDirection:'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#d1d1d1',
        justifyContent: 'space-between',
        width: 100
    },
    button: {
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#e8e8e8"
    },
    buttonText: {
        fontSize: 18

    },
    quantity: {
        color: '#007eb9'
    }
})