import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../QuantitySelector';
import styles from './styles';

interface CartproductItemProps {
  cartItem: {
    id: string;
    quantity: number;
    option?: string;    
    item: {
      id: string;
      title: string;
      image: string;
      avgRating: number;
      ratings: number;
      price: number;
      oldPrice?: number | undefined;
    };
  }
}


const CartproductItem = ({cartItem}: CartproductItemProps) => {

  const {quantity: quantityProp, item} = cartItem

  const [quantity, setquantity] = useState(quantityProp)

  return (
    <View style={styles.root}> 
    <View style={styles.row}>
      <Image style={styles.image} source={{uri: item.image}} />

      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {item.title}{' '}
        </Text>
        <View style={styles.ratingContainer}>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <FontAwesome
              key={i}
              style={styles.star}
              name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
              size={18}
              color="#e47911"
            />
          ))}

          <Text>{item.ratings}</Text>
        </View>
        <Text style={styles.price}>
          $ {item.price}
          {item.oldPrice && (
            <Text style={styles.oldPrice}> ${item.oldPrice} </Text>
          )}
        </Text>
      </View>
    </View>
    <View style={styles.quantityContainer}>
    <QuantitySelector quantity={quantity} setQuantity={setquantity} />

    </View>
    </View>
  );
};

export default CartproductItem;
