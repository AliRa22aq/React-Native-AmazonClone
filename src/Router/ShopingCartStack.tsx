import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNav from './BottomTabNav';
import ProductScreen from '../screens/ProductScreen';
import ShopingCartScreen from '../screens/ShopingCartScreen';
import AddressScreen from '../screens/AddressScreen';

const Stack = createStackNavigator();

const ShopingCartStack = () => {

  return (
      <Stack.Navigator>
        <Stack.Screen name="Cart" component={ShopingCartScreen} options={{title: "Shoping Cart"}} />
        <Stack.Screen name="Address" component={AddressScreen} options={{title: "Address"}}/>
      </Stack.Navigator>

  );
};

export default ShopingCartStack;
