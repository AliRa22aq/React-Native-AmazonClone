/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {
   SafeAreaView,
   StatusBar,
   Text,
   useColorScheme,
   View,
 } from 'react-native';


 import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import ShopingCartScreen from './src/screens/ShopingCartScreen';


 const App = () => {

   return (
     <SafeAreaView>

         <StatusBar />

         {/* <HomeScreen /> */}
         {/* <ProductScreen /> */}
         <ShopingCartScreen />

     </SafeAreaView>
   );
 };


 export default App;
