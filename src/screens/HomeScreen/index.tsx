import React, {useState, useEffect} from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import ProductItem from '../../components/ProductItem'
// import products from '../../data/products'
import {DataStore} from 'aws-amplify';
import {Product} from '../../../models';

const HomeScreen = ({searchValue}: {searchValue: string}) => {
    // console.log(searchValue)

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        DataStore.query(Product).then(setProducts);
    },[])

    return (
        <View style= {styles.page}>

            <FlatList
                data={products}
                renderItem={({item}) => <ProductItem item={item} />}
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


// Type '{ id: string; title: string; image: string; avgRating: number; ratings: number; price: number; oldPrice: number; }' 
// is missing the following properties from type
//      '{ id: string; quantity: number; option?: string | undefined; item: { id: string; title: string; image: string; avgRating: number; ratings: number; price: number; oldPrice?: number | undefined; }; }': quantity, itemts(2322)
