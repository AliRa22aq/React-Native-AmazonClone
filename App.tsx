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
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


 import {
   Colors,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';

 const Section: React.FC<{
   title: string;
 }> = ({children, title}) => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={styles.sectionContainer}>
       <Text
         style={[
           styles.sectionTitle,
           {
             color: isDarkMode ? Colors.white : Colors.black,
           },
         ]}>
         {title}
       </Text>
       <Text
         style={[
           styles.sectionDescription,
           {
             color: isDarkMode ? Colors.light : Colors.dark,
           },
         ]}>
         {children}
       </Text>
     </View>
   );
 };

 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';

   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };

   return (
     <SafeAreaView >
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <ScrollView contentInsetAdjustmentBehavior="automatic">
         <View>
                  <Text> My name is Ali and I am going to be a bisunessman</Text>
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };


 export default App;
