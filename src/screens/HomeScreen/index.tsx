import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ProductItem from '../../components/ProductItem'

const HomeScreen = () => {
    return (
        <View style= {styles.page}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    page: {
        margin: 10,
    },
})
