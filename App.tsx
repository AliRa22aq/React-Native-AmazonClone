/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, { Component, useEffect } from 'react';
 import {
   SafeAreaView,
   StatusBar,
 } from 'react-native';

import 'react-native-gesture-handler';
import Router from './src/Router';
import SplashScreen from 'react-native-splash-screen';
import { withAuthenticator } from 'aws-amplify-react-native'

import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)


 const App = () => {

  return (
     <SafeAreaView style={{flex: 1}}>

         <StatusBar />
         <Router />
     
     </SafeAreaView>
   );
 };


 export default withAuthenticator(App)

 SplashScreen.hide()

