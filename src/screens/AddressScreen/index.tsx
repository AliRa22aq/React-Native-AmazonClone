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

const AddressScreen = () => {
  const countries = countryList.getData();

  const [country, setCountry] = useState(countries[0].code);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const onCheckout = () => {
    if (!fullName) {
      Alert.alert('Please fill in full name');
    }
    if (!phoneNumber) {
      Alert.alert('Please fill in Phone Number');
    }

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

        <Button text="Check Out" onPress={onCheckout} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressScreen;
