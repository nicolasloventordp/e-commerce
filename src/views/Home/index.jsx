import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native'
import imagenFondo from '../../../assets/home-fondo.jpg'
import MyAppText from '../../ui/MyAppText';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Home = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={imagenFondo}
                resizeMode="cover"
                style={styles.imagen}>
                <View style={styles.buttonContainer}>
                    <MyAppText style={styles.button} texto={"MUJERES"} size={'32px'} color={'white'}/>
                </View>
                <View style={styles.buttonContainer} >
                    <MyAppText style={styles.button} texto={"HOMBRES"} size={'32px'} color={'white'}/>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: screenHeight,
        width: screenWidth,
        justifyContent: 'center',
    },
    imagen: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    buttonContainer: {
        width: '180px',
        height: '60px',
        backgroundColor: 'red',
        borderRadius: '20px',
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default Home;