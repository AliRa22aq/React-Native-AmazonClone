import React from 'react';
import {View, StyleSheet, FlatList, Text, Pressable} from 'react-native';
import Button from '../../components/Button/inex';
import CartproductItem from '../../components/CartproductItem';
// import ProductItem from '../../components/CartproductItem'
import products from '../../data/cart';
// import products from '../../data/products'
import {useNavigation} from '@react-navigation/native'

const ShopingCartScreen = () => {

  const navigation = useNavigation();

  const checkOut= () => {
    navigation.navigate('Address')
  }


  const totalPrice = products.reduce(
    (summedPrices, product) =>
      summedPrices + product.item.price * product.quantity,
    0,
  );

  
  return (
    <View 
      style={styles.page}
           
      >
      <FlatList
        data={products}
        renderItem={({item}) => <CartproductItem cartItem ={item} />}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => {
          return (
            <View>
              <Text style={{fontSize: 18}}>
                Subtotal ({products.length} items):
                <Text style={{color: '#e47911', fontWeight: 'bold'}}>
                  {' '}
                  $ {totalPrice.toFixed(2)}
                </Text>
              </Text>
              <Button
                text="Proceed to chekout"
                onPress={checkOut}
                containerStyles={{backgroundColor: '#f7e380'}}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default ShopingCartScreen;

const styles = StyleSheet.create({
  page: {
    margin: 10,
  },
});
