import { StyleSheet, Text, View, FlatList, Animated,SafeAreaView, Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import SlideItem from './SlideItem'
import data from '../data/index'
import Pagination from './Pagination'

const {width, height} = Dimensions.get('screen');

export default function Slider() {
    
    const scrollX = useRef(new Animated.Value(0)).current;
    const [index, setIndex] = useState(0);
    const handleOnScroll = event => {
        Animated.event([
            {
                nativeEvent: {
                    contentOffset: {
                        x: scrollX
                    }
                }
            }
        ], {
            useNativeDriver: false
        })(event);
    }

    const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
        //console.log('viewableItems', viewableItems);
        setIndex(viewableItems[0].index);
      }).current;
   
      const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 100,
      }).current;

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={data}
                renderItem={({ item }) => <SlideItem item={item} />}
                horizontal
                pagingEnabled
                snapToAlignment='center'
                showsHorizontalScrollIndicator={false}
                onScroll={handleOnScroll}
                onViewableItemsChanged={handleOnViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}/>
            <Pagination style={styles.pagination} data={data} scrollX={scrollX} index={index} />
        </View>
    )
}

const styles = StyleSheet.create({  
    container:{ 
        width,
        height, 
        flex:1  
    },
    flatList: {
        flex: 0.8
    }
})  