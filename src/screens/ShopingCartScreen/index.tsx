import React from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import CartproductItem from '../../components/CartproductItem'
// import ProductItem from '../../components/CartproductItem'
import products from '../../data/cart'
// import products from '../../data/products'



const ShopingCartScreen = () => {
    const totalPrice = products.reduce((summedPrices, product)=> (
        summedPrices + product.item.price * product.quantity
    ), 0)


    return (
        <View style= {styles.page}>

            <View> 
                <Text style={{fontSize: 18}}>
                    Subtotal ({products.length} items): 
                <Text style={{color: '#e47911', fontWeight: 'bold'}}> $ {totalPrice.toFixed(2)}</Text> 
                </Text>
            </View>

            <FlatList
                data={products}
                renderItem={({item})=> <CartproductItem cartItem={item} />}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                 />
        </View>

    )
}

export default ShopingCartScreen

const styles = StyleSheet.create({
    page: {
        margin: 10,
    },
})
