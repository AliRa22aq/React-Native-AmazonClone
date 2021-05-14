import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Pressable,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import Button from '../../components/Button/inex';
import CartproductItem from '../../components/CartproductItem';
// import ProductItem from '../../components/CartproductItem'
// import products from '../../data/cart';
// import products from '../../data/products'
import {useNavigation} from '@react-navigation/native';
import {DataStore, Auth} from 'aws-amplify';
import {Product, CartProduct} from '../../models';

const ShopingCartScreen = () => {
  const navigation = useNavigation();
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  console.log('cartProducts');
  console.log(cartProducts);

  useEffect(() => {
    const fetchCartProduct = async () => {
      const userData = await Auth.currentAuthenticatedUser();

      DataStore.query(CartProduct, cp =>
        cp.userSub('eq', userData.attributes.sub),
      ).then(setCartProducts);
    };
    fetchCartProduct();
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


  //updating cart products
  useEffect(()=> {
    console.log('msg.element')
    const subscriptions = cartProducts.map(cp => {
      DataStore.observe(CartProduct, cp.id).subscribe(msg => {
          console.log('msg.element')
          console.log(msg.element)
          setCartProducts(existingCartProducts => 
            existingCartProducts.map(e=>{
              if(e.id !== msg.element.id){
                return e;
              }
              return{
                ...e,
                ...msg.element
              };
      
          }))
      })
    })

    return ()=> {
      subscriptions.forEach(sub => sub.unsubscribe());
    };

  },[])


  // useEffect(() => {
  //   const subscriptions = cartProducts.map(cp => {
  //     DataStore.observe(CartProduct, cp.id).subscribe(msg => {
  //       if(msg.opType === "UPDATE"){
  //         setCartProducts(curCarProducts => 
  //           curCarProducts.map(cp => {
  //             if(cp.id !== msg.element.id){
  //               return cp;
  //             }
  //             return{
  //               ...cp,
  //               ...msg.element
  //             }
  //           }
  //             )
  //         )
  //       }})

  //   })
  //   return ()=> subscriptions.forEach(sub => sub.unsubscribe());

  // },[])

  const checkOut = () => {
    navigation.navigate('Address');
  };

  const totalPrice = cartProducts.reduce(
    (summedPrices, cartProduct) =>
      summedPrices + (cartProduct?.product?.price || 0) * cartProduct.quantity,
    0,
  );

  // console.log(cartProducts)
  const [refreshing, setRefreshing] = useState(false);
  const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  if (cartProducts.filter(cp => !cp.product).length !== 0) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.page}>
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh}>
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
      </RefreshControl>
    </View>
  );
};

export default ShopingCartScreen;

const styles = StyleSheet.create({
  page: {
    margin: 10,
  },
});
