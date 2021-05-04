import React, {Dispatch, SetStateAction} from 'react';
import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather'

interface HeaderInputProps {
searchValue: string; 
setSearchValue: Dispatch<SetStateAction<string>>
} 

const HeaderInput = ({searchValue, setSearchValue}: HeaderInputProps) => {

  return (
    <SafeAreaView style={styles.root}> 
    <View style={styles.inputContainer}>
            
            <Feather name="search" size={20} />
            
            <TextInput 
                style={styles.input} 
                placeholder='Search Amazon'
                value={searchValue}
                onChangeText={setSearchValue}
                />
    </View>
    </SafeAreaView>
  );
};

export default HeaderInput;


const styles = StyleSheet.create({
  root: {
    backgroundColor: '#22e3dd',
    
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "white",
    margin: 10,
    padding: 5,
    borderRadius: 5
  },
  input:{
    height: 40,
    marginLeft: 5

  }

})