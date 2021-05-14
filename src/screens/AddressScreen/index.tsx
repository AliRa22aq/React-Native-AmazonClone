import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from './styles';
import countryList from 'country-list';
import Button from '../../components/Button/inex';
import {DataStore, Auth} from 'aws-amplify';
import {  CartProduct, OrderProduct, Order } from '../../../models';
import {useNavigation} from '@react-navigation/native'

const AddressScreen = () => {
  const countries = countryList.getData();

  const navigation = useNavigation()

  const [country, setCountry] = useState(countries[1].code);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');

const saveOrder = async() => {
  // create a new order
  const userData = await Auth.currentAuthenticatedUser()

  const newOrder = await DataStore.save(
    new Order({
      userSub: userData.attributes.sub,
      fullName: fullName,
      phoneNumber: phoneNumber,
      country: country,
      city: city,
      address: address
    })
  );

  // fetch all cart items
  const cartItems = await DataStore.query(CartProduct, cp =>
    cp.userSub('eq', userData.attributes.sub),
  )

  // attach all cart items to new order
  await Promise.all(
    cartItems.map(cartItem => DataStore.save(
      new OrderProduct({
        quantity: cartItem.quantity,
        option: cartItem.option,
        productID: cartItem.productID,
        orderID: newOrder.id,
      })
    ))
  )

  // Delete all cart items to new order
  await Promise.all(
    cartItems.map(cartItem => DataStore.delete(cartItem))
  )

  navigation.navigate("home")

}

  const onCheckout = () => {
    if (!fullName) {
      Alert.alert('Please fill in full name');
    }
    if (!phoneNumber) {
      Alert.alert('Please fill in Phone Number');
    }

    saveOrder()
    console.log('Success Checkout');
  };

  return (
    <KeyboardAvoidingView
    //   behavior={Platform.OS == 'android' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS == 'android' ? 10 : 0}
    >
      <ScrollView style={styles.root}>
        <View style={[styles.row, styles.country]}>
          <Picker selectedValue={country} onValueChange={setCountry}>
            {countries.map((country, index) => (
              <Picker.Item
                value={country.code}
                label={country.name}
                key={index}
              />
            ))}
          </Picker>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Full name (First and Last name)</Text>
          <TextInput
            style={styles.input}
            placeholder="Full name"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            keyboardType="phone-pad"
            style={styles.input}
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>city</Text>
          <TextInput
            style={styles.input}
            placeholder="City"
            value={city}
            onChangeText={setCity}
          />
        </View>


        <Button text="Check Out" onPress={onCheckout} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressScreen;
