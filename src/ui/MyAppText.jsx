import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const MyAppText = (props) => {

    let [fontsLoaded] = useFonts({
        'Roboto-Thin': require('../../assets/fonts/Roboto-Thin.ttf'),
        'Roboto-Italic': require('../../assets/fonts/Roboto-Italic.ttf'),
        'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
    })
    if (!fontsLoaded) {
        return null;
    }
    return (
        <Text style={styles(props).text}>
            {props.texto}
        </Text>
    );
};

const styles = (props) => StyleSheet.create({
    text: {
        fontFamily: props.font ? props.font : 'Roboto-Regular',
        fontSize: props.size ? props.size : '16px',
        fontWeight: props.weight ? props.weight : '300',
        color: props.color ? props.color : 'black',
    }
});

export default MyAppText;