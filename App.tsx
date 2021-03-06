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
 } from 'react-native';

import 'react-native-gesture-handler';
import Router from './src/Router';


 const App = () => {

  return (
     <SafeAreaView style={{flex: 1}}>

         <StatusBar />
         <Router />
     
     </SafeAreaView>
   );
 };


 export default App;
