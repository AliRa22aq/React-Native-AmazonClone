import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../QuantitySelector';
import styles from './styles';
import {Product, CartProduct} from '../../models';
import {DataStore, Auth} from 'aws-amplify';


interface CartProductItemProps {
  cartItem: CartProduct
}

const CartproductItem = ({cartItem}: CartProductItemProps) => {

  const {quantity, product} = cartItem

  // const [quantity, setquantity] = useState(quantityProp)
  const updateQuantity = async(newQuantity: number)=> {

  const original = await DataStore.query(CartProduct, cartItem.id );

await DataStore.save(
  CartProduct.copyOf(original, updated => {
    updated.quantity = newQuantity;
  })
);

  }
  if(!product){
    return;
  }
  return (
    <View style={styles.root}> 
    <View style={styles.row}>
      <Image style={styles.image} source={{uri: product.image}} />

      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {product.title}{' '}
        </Text>
        <View style={styles.ratingContainer}>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <FontAwesome
              key={i}
              style={styles.star}
              name={i < Math.floor(product.avgRating) ? 'star' : 'star-o'}
              size={18}
              color="#e47911"
            />
          ))}

          <Text>{product.ratings}</Text>
        </View>
        <Text style={styles.price}>
          $ {product.price}
          {product.oldPrice && (
            <Text style={styles.oldPrice}> ${product.oldPrice} </Text>
          )}
        </Text>
      </View>
    </View>
    <View style={styles.quantityContainer}>
    <QuantitySelector quantity={quantity} setQuantity={updateQuantity} />

    </View>
    </View>
  );
};

export default CartproductItem;
