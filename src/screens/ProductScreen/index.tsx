import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import product from '../../data/product';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button/inex';
import ImageCarousel from '../../components/ImageCarousel';
import {useRoute} from '@react-navigation/native'


const ProductScreen = () => {

  const route = useRoute()
  console.log(route.params)

  const [selectedOption, setSelectedOption] = useState(
    product.options ? product.options[0] : null,
  );

  const [quantity, setQuantity] = useState(0)

  // console.log(selectedOption);

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title} </Text>

      {/* image carollas */}
      <ImageCarousel images={product.images}/>


      {/* Optoin selector */}
      <Picker
        selectedValue={selectedOption}
        onValueChange={val => setSelectedOption(val)}>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} />
        ))}
      </Picker>

      {/* Price */}
      <Text style={styles.price}>
        $ {product.price}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> $ {product.oldPrice} </Text>
        )}
      </Text>

      {/* Product Description */}
      <Text style={styles.description}>{product.description}</Text>

      {/* Quantity selector    */}
      <QuantitySelector  quantity={quantity} setQuantity={setQuantity} />

      {/* Buttons */}
      <Button text="Add to cart" onPress={()=> {console.warn("pressed")}} />
      <Button text="Go to cart" onPress={()=> {console.warn("pressed")}} />
    </ScrollView>
  );
};

export default ProductScreen;
