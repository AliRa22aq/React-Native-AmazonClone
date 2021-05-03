import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import ProductItem from '../../components/CartproductItem'
import Products from '../../data/products'


const HomeScreen = () => {
    return (

        <View style= {styles.page}>

            <FlatList
                data={Products}
                renderItem={({item})=> <ProductItem item={item} />}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                 />
        </View>

    )
}

export default HomeScreen

const styles = StyleSheet.create({
    page: {
        margin: 10,
    },
})
