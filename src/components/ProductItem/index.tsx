import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../QuantitySelector';
import styles from './styles';
import {useNavigation} from '@react-navigation/native'
import {Product} from '../../models';

interface ProductItemProps {
  item: Product
}

const ProductItem = ({item}: ProductItemProps) => {

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('ProductDetails', {id: item.id})
  }

  return (
    <Pressable 
      style={styles.root}
      onPress={onPress}
      > 
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

          <Text>{item.ratings.toFixed(2)}</Text>
        </View>
        <Text style={styles.price}>
          $ {item.price}
          {item.oldPrice && (
            <Text style={styles.oldPrice}> ${item.oldPrice.toFixed(2)} </Text>
          )}
        </Text>
      </View>
    </View>

    </Pressable>
  );
};

export default ProductItem;



{/* <View style={styles.quantityContainer}>
<QuantitySelector quantity={quantity} setQuantity={setquantity} />

</View> */}