import React, {useState} from 'react';
import HomeScreen from '../screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import ProductScreen from '../screens/ProductScreen';
import HeaderInput from '../components/HeaderInput';

const Stack = createStackNavigator();

const HomeStack = () => {
    const [searchValue, setSearchValue] = useState<string>('')
  return (
      <Stack.Navigator 
        screenOptions={{
            header: () => <HeaderInput searchValue={searchValue} setSearchValue={setSearchValue}/> 
      }}>
        <Stack.Screen name="HomeScreen" options={{title: "Home"}}>
           {()=>  <HomeScreen searchValue={searchValue}/>}
        </Stack.Screen>
        <Stack.Screen name="ProductDetails" component={ProductScreen} />
      </Stack.Navigator>

  );
};

export default HomeStack;
