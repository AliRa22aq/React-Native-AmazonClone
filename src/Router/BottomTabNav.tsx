import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo'
import ProductScreen from '../screens/ProductScreen';
import AddressScreen from '../screens/AddressScreen';
import HomeStack from './HomeStack';
import ShopingCartStack from './ShopingCartStack';
import MenuScreen from '../screens/MenuScreen';

const Tab = createBottomTabNavigator();


const BottomTabNav = () => {  

  return (
      <Tab.Navigator 
        tabBarOptions={{
            showLabel: false,
            inactiveTintColor: "#ffbd7d",
            activeTintColor: "#e47911",
            }}>

        <Tab.Screen 
            name="home" 
            component={HomeStack}
            options = {{
                tabBarIcon: ({color}) => <Entypo  name='home' color={color} size={25} /> 
            }}/>


        <Tab.Screen 
            name="profile" 
            component={ProductScreen}
            options = {{
                tabBarIcon: ({color}) => <Entypo  name='user' color={color} size={25} />,                
            }}/>

        <Tab.Screen 
            name="ShopingCartStack" 
            component={ShopingCartStack}
            options = {{
                tabBarIcon: ({color}) => <Entypo  name='shopping-cart' color={color} size={25} /> 
            }}/>

        <Tab.Screen 
            name="more" 
            component={MenuScreen}
            options = {{
                tabBarIcon: ({color}) => <Entypo  name='menu' color={color} size={25} /> 
            }}/>

      </Tab.Navigator>
  );
};

export default BottomTabNav;
