import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
} from 'react-native';
import Button from '../../components/Button/inex';
import CartproductItem from '../../components/CartproductItem';
import {useNavigation} from '@react-navigation/native';
import {DataStore, Auth} from 'aws-amplify';
import {Product, CartProduct} from '../../../models';
import EmptyCart from '../../components/EmptyCart';

const ShopingCartScreen = () => {

  const navigation = useNavigation();
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  const fetchCartProducts = async () => {
    const userData = await Auth.currentAuthenticatedUser();

    DataStore.query(CartProduct, cp =>
      cp.userSub('eq', userData.attributes.sub),
    ).then(setCartProducts);
  };


  useEffect(() => {
    fetchCartProducts();
  }, []);


  useEffect(() => {
    if (cartProducts.filter(cp => !cp.product).length === 0) {
      return;
    }
    const fetchtProduct = async () => {
      const products = await Promise.all(
        cartProducts.map(cartProduct =>
          DataStore.query(Product, cartProduct.productID),
        ),
      );

      setCartProducts(existingCartProducts =>
        existingCartProducts.map(cartProduct => ({
          ...cartProduct,
          product: products.find(p => p?.id === cartProduct.productID),
        })),
      );
    };
    fetchtProduct();
  }, [cartProducts]);


  useEffect(()=> {
    const subscription = DataStore.observe(CartProduct).subscribe(msg => fetchCartProducts())
    return subscription.unsubscribe;
  }, [])

  useEffect(() => {
    const subscriptions = cartProducts.map(cp =>
      DataStore.observe(CartProduct, cp.id).subscribe(msg => {
        if (msg.opType === 'UPDATE') {
          setCartProducts(curCartProducts =>
            curCartProducts.map(cp => {
              if (cp.id !== msg.element.id) {
                console.log('differnt id');
                return cp;
              }
              return {
                ...cp,
                ...msg.element,
              };
            }),
          );
        }
      }),
    );

    return () => {
      subscriptions.forEach(sub => sub.unsubscribe);
    };
  }, [cartProducts]);

  
  const totalPrice = cartProducts.reduce(
    (summedPrices, cartProduct) =>
    summedPrices + (cartProduct?.product?.price || 0) * cartProduct.quantity,
    0,
    );
    
    const checkOut = () => {
      navigation.navigate('Address', {totalPrice});
    };

  if (cartProducts.filter(cp => !cp.product).length !== 0) {
    return <ActivityIndicator />;
  }

  if(cartProducts.length === 0){
    return <EmptyCart />
  }
  return (
    <View style={styles.page}>
      <FlatList
        data={cartProducts}
        renderItem={({item}) => <CartproductItem cartItem={item} />}
        // renderItem={({item}) => <Text>Hello</Text>}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => {
          return (
            <View>
              <Text style={{fontSize: 18}}>
                Subtotal ({cartProducts.length} items):
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
