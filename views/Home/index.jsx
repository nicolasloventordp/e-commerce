import { StyleSheet, Text, View, ImageBackground, Dimensions} from 'react-native'
import imagenFondo from '../../assets/home-fondo.jpg'
import Button from './components/button.jsx'

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Home = () => {
    return (
        <ImageBackground source={imagenFondo} 
            resizeMode="cover"
            style={styles.imagen}>
                <Button />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imagen: {
        flex: 1,
        height: screenHeight,
        width: screenWidth,
        justifyContent: 'center',
    },
});

export default Home;