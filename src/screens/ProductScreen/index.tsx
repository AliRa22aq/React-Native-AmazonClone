import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import product from '../../data/product';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button/inex';


const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(
    product.options ? product.options[0] : null,
  );

  const [quantity, setQuantity] = useState(0)

  console.log(selectedOption);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{product.title} </Text>

      {/* image carollas */}

      {/* Optoin selector */}
      <Picker
        selectedValue={selectedOption}
        onValueChange={val => setSelectedOption(val)}>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} />
        ))}
      </Picker>

      <Text style={styles.price}>
        $ {product.price}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> $ {product.oldPrice} </Text>
        )}
      </Text>

      <Text style={styles.description}>{product.description}</Text>

      {/* Quantity selector    */}
      <QuantitySelector  quantity={quantity} setQuantity={setQuantity} />

      {/* Buttons */}
      <Button text="Hello" onPress={()=> {console.warn("pressed")}} />
      <Button text="Hello" onPress={()=> {console.warn("pressed")}} />
    </View>
  );
};

export default ProductScreen;
