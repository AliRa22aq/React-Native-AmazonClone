import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import styles from './styles';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button/inex';
import ImageCarousel from '../../components/ImageCarousel';
import {useRoute} from '@react-navigation/native';
import {DataStore, Auth} from 'aws-amplify';
import {Product, CartProduct} from '../../../models';
import {useNavigation} from '@react-navigation/native'

const ProductScreen = () => {

  const route = useRoute();
  const navigation = useNavigation()
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!route.params?.id) {
      return;
    }
    DataStore.query(Product, route.params.id).then(setProduct);
  }, [route.params?.id]);

  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);
  useEffect(() => {
    if (product?.options) {
      setSelectedOption(product.options[0]);
    }
  }, [product]);


  const onAddToCart = async () => {
    console.warn("Trying to add product")

    const userInfo = await Auth.currentAuthenticatedUser()

    if(!product || !userInfo){
      return;
    }
    console.warn("trying")
    
    const newCartProduct = new CartProduct({
      userSub : userInfo.attributes.sub,
      quantity,
      option: selectedOption,
      productID: product.id
    })

    await DataStore.save(newCartProduct)
    // console.warn("Success")
    navigation.navigate('ShopingCart')
  }


  // console.log(selectedOption);
  if (!product) {
    return <ActivityIndicator />;
  }
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title} </Text>

      {/* image carollas */}
      <ImageCarousel images={product.images} />

      {/* Optoin selector */}
      <Picker
        selectedValue={selectedOption}
        onValueChange={val => setSelectedOption(val)}>
        {product.options?.map(option => (
          <Picker.Item label={option} value={option} />
        ))}
      </Picker>

      {/* Price */}
      <Text style={styles.price}>
        $ {product.price.toFixed(2)}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> $ {product.oldPrice.toFixed(2)} </Text>
        )}
      </Text>

      {/* Product Description */}
      <Text style={styles.description}>{product.description}</Text>

      {/* Quantity selector    */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      {/* Buttons */}
      <Button
        text="Add to cart"
        onPress={onAddToCart}
      />
      <Button
        text="Go to cart"
        onPress={() => {
          console.warn('pressed');
        }}
      />
    </ScrollView>
  );
};

export default ProductScreen;
