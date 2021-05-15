import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const EmptyCart = () => {
    return (
        <View style={styles.root}>
            <Text style={styles.text}>Cart is Empty</Text>
        </View>
    )
}

export default EmptyCart

const styles = StyleSheet.create({
    root: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'

    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'

    }
})
