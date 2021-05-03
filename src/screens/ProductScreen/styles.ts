import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    root: {
        padding: 10,
        backgroundColor: 'white'
    },
    title:{
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through'
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    description: {
        marginVertical: 10,
        lineHeight: 20
    }
})

export default styles