import { View, Text, Dimensions, StyleSheet, ImageBackground } from 'react-native'
import imagenFondo from '../../../../assets/home-fondo.jpg'
import MyAppText from '../../../ui/MyAppText'

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Item = ({ title }) => (
    <View style={styles.item}>
        <ImageBackground
            source={imagenFondo}
            resizeMode="cover"
            style={styles.imagen}
            imageStyle={{ opacity: 0.6 }}>

            <MyAppText
                style={styles.title}
                text={'CALZADO'} 
                size={32}
                color={'white'}/>

        </ImageBackground>
    </View>
);

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'black',
        marginVertical: 20,
        width: 300,
        height: 200,
        flex: 1
    },
    imagen: {
        width: 300,
        height: 200,
        resizeMode: "cover"
    },
    title: {
        fontSize: 32,
        color: 'white'
    },


});

export default Item;