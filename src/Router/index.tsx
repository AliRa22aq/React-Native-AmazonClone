import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNav from './BottomTabNav';


const Router = () => {
  const Root = createStackNavigator();

  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{headerShown: false}}>
        <Root.Screen name="HomeTabs" component={BottomTabNav} />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Router;
