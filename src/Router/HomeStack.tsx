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

const HomeStack = () => {

  return (
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title: "Home"}} />
        <Stack.Screen name="ProductDetails" component={ProductScreen} />
      </Stack.Navigator>

  );
};

export default HomeStack;
