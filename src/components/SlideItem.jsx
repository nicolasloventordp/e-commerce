import { Image, StyleSheet, Text, View, Dimensions, SafeAreaView, Animated, Easing } from 'react-native'
import React from 'react'

const {width,height} = Dimensions.get('screen');

export default function SlideItem({ item }) {
  const translateYImage = new Animated.Value(-40);

  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.bounce
  }).start();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Animated.Image 
          source={item.img}
          style={[styles.img,{
            transform: [
              {
                translateY: translateYImage
              }
            ]
          }]}
          resizeMode='contain' />
        </View>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      width,
      height,
      alignItems: 'center',
      padding: 20
    },
    imgContainer: {
      flex: 0.6,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    img: {
      width: 300,
      height: 350,
      borderRadius: 10,
      backgroundColor: 'none'
    },
    content: {
      flex: 0.4,
      alignItems: 'center'
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    price: {
      fontSize: 32,
      fontWeight: 'bold'
    }

})