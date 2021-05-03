import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: "#d1d1d1",
        borderRadius: 5,
        backgroundColor: '#fff',
        marginVertical: 5

    },
    image: {
        height: 150,
        flex: 2,
        resizeMode: 'contain'       
    },
    rightContainer: {
        padding: 10,
        backgroundColor: '#fff',
        flex: 3,

    },
    title: {
        fontSize: 18
    }, 
    ratingContainer: {
        flexDirection: 'row',
        alignItems: "center",
        marginVertical: 5

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
    star: {
        margin:2
    }
});

export default styles