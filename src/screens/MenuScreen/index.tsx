import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import Button from '../../components/Button/inex';
import {Auth} from 'aws-amplify';

const MenuScreen = () => {
    
    const onLogOut = () => {        
        Auth.signOut()
    }
    return (
        <SafeAreaView style={styles.root}>
            
            <Button  text="Logout" onPress={onLogOut}  />
        
        </SafeAreaView>
    )
}

export default MenuScreen;

const styles = StyleSheet.create({
    root: {

        }
})
