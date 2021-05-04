import React, { useState, useRef } from 'react'
import { View, FlatList, Image, StyleSheet, useWindowDimensions, Text} from 'react-native'

const ImageCarousel = ({images}: {images: string[]}) => {

    const [activeIndex, setActiveIndex] = useState(3)

    const windowEidth = useWindowDimensions().width;


    const onViewChanged = useRef(({ viewableItems}: any ) => {
        // console.log(viewableItems[0].index)
        if (viewableItems.length > 0) {
            setActiveIndex(parseInt(viewableItems[0].index))
        }
    }
    )

    return (
        <View>
            <FlatList 
                data={images}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={windowEidth-20}
                snapToAlignment='center'
                viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}
                onViewableItemsChanged={onViewChanged.current}
                renderItem={({item})=> (
                    <Image 
                        style={[styles.image, {width: windowEidth-40}]} 
                        source={{uri: item}}
                        />
                )}
                keyExtractor={(index) => {return index.toString()}}

            />

            <View style={styles.dots}> 
            {
                images.map((image, index)=> (
                    <View style={[styles.dot, {backgroundColor: index == activeIndex? '#c9c9c9': '#ededed'  }]} />
                ))
            }
            </View>
        </View>
    )
}

export default ImageCarousel

const styles = StyleSheet.create({
    root:{

    },
    image: {
        height: 250,
        margin: 10,
        resizeMode: 'contain',
    },
    dots: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
    dot: {
        width: 10,
        height: 10,
        backgroundColor: '#ededed',
        borderColor: '#c9c9c9',
        borderRadius: 10,
        margin: 5,
    }

})
